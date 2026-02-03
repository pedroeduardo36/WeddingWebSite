"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Filter, ArrowUpDown } from "lucide-react";
import GiftCard from "@/components/GiftCard"; // Importa apenas o Componente
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allGifts } from "@/lib/gifts";
import { supabase } from "@/lib/supabase";
import type { Gift } from "@/lib/gifts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChaLocationSection from "@/components/sections/ChaLocationSection";
import logoSite from "../../assets/logoSite.svg";
import florUm from "../../assets/florUm.svg";
import florDois from "../../assets/florDois.svg";
import Image from "next/image";
import preto from "../../assets/preto.avif";
import branco from "../../assets/branco.avif";
import inox from "../../assets/inox.avif";
import transparente from "../../assets/transparente.avif";

export default function GiftsPage() {
  // Inicializa com todos os presentes
  const [gifts, setGifts] = useState<Gift[]>(
    allGifts.filter((g) => g.category === "cha"),
  );
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("price-desc");

  // 1. Busca dados ao carregar a página
  useEffect(() => {
    fetchContributions();

    // 2. Ativa o Realtime para atualizar se alguém doar enquanto você navega
    const channel = supabase
      .channel("realtime_gifts_page")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contributions" },
        (payload) => {
          console.log("Nova doação detectada na página de presentes!", payload);
          fetchContributions();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Função para buscar o saldo atualizado de cada presente
  const fetchContributions = async () => {
    try {
      const { data, error } = await supabase
        .from("contributions")
        .select("gift_id, amount");

      if (error) throw error;

      if (data) {
        const totalPorPresente: Record<number, number> = {};
        data.forEach((item) => {
          totalPorPresente[item.gift_id] =
            (totalPorPresente[item.gift_id] || 0) + Number(item.amount);
        });

        setGifts(
          allGifts
            .filter((g) => g.category === "cha") // Garante que só mostra Chá
            .map((gift) => ({
              ...gift,
              current: totalPorPresente[gift.id] || 0,
            })),
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para salvar a doação
  const handleContribute = async (
    giftId: number,
    giftName: string,
    amount: number,
    name: string,
    message: string,
  ) => {
    // Atualização otimista (UI)
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift,
      ),
    );

    // Salvar no Banco
    const { error } = await supabase.from("contributions").insert([
      {
        gift_id: giftId,
        gift_name: giftName,
        amount: amount,
        guest_name: name,
        message: message,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar doação:", error);
      alert("Erro ao processar a doação. Tente novamente.");
      fetchContributions();
    }
  };

  const processedGifts = gifts
    // Primeiro Filtra
    .filter((gift) => {
      if (filter === "available") return gift.current < gift.goal; // Não completados
      if (filter === "gifted") return gift.current >= gift.goal; // Já completados
      return true; // Todos
    })
    // Depois Ordena
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.goal - b.goal; // Menor para Maior
      if (sortOrder === "price-desc") return b.goal - a.goal; // Maior para Menor
      return a.id - b.id; // Padrão (ordem original)
    });

  return (
    <main className="min-h-screen bg-background py-12 ">
      <div className="container mx-auto">
        <Image
          src={florUm}
          alt="flor direita"
          className="absolute z-0 opacity-15 -right-48"
        />
        <Image
          src={florDois}
          alt="flor esquerda"
          className="absolute z-0 opacity-15 -left-48"
        />

        {/* Cabeçalho da Página */}
        <div className="flex z-10 flex-row justify-center items-center space-y-4">
          <Image src={logoSite} alt="Logo do site" width={32} height={32} />
        </div>

        <div className="relative z-10">
          <div className="relative z-10 mt-8 flex h-full flex-col items-center justify-center text-center font-headline text-primary p-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold">
              Júlia & Pedro
            </h1>

            <p className="mt-16">
              Estamos muito felizes em compartilhar esse momento especial com
              você!
              <br />
              Com muita alegria, convidamos você para o nosso Chá de Panela!
            </p>
            <Separator className="my-8 bg-border/50" />
            <h2 className="font-headline md:text-3xl font-bold">
              07 • março • 2026
            </h2>
            <Separator className="my-8 bg-border/50" />
          </div>
          <ChaLocationSection />
        </div>


        <div className="flex flex-col text-center mt-8 mx-4 justify-center">
            <h1 className="w-full font-headline text-primary md:text-3xl font-bold">
              Sugestão de cores
            </h1>
        </div>


        <div className="mt-8 w-full flex justify-center mb-8 relative z-10">
         
          <div className="flex flex-col text-center mx-4 justify-center ">
            <Image src={branco} alt="" className="rounded-full" width={76} height={76} />
            <p>Branco</p>
          </div>

          <div className="flex flex-col text-center mx-4 justify-center">
            <Image src={preto} alt="" className="rounded-full" width={76} height={76} />
            <p>Preto</p>
          </div>

          <div className="flex flex-col text-center mx-4 justify-center">
            <Image src={inox} alt="" className="rounded-full" width={76} height={76}/>
            <p>Inox</p>
          </div>

          <div className="flex flex-col text-center mx-4 justify-center">
            <Image src={transparente} alt="" className="rounded-full" width={76} height={76} />
            <p>Transparente</p>
          </div>
        </div>

        {/* BARRA DE FERRAMENTAS: Filtro e Ordenação */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 p-4 bg-muted/30 rounded-lg border shadow-sm">
          {/* 1. Dropdown de Filtro */}
          <div className="flex items-center gap-2 flex-1">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium whitespace-nowrap">
              Exibir:
            </span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[200px] bg-background">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os presentes</SelectItem>
                <SelectItem value="available">Disponíveis</SelectItem>
                <SelectItem value="gifted">Presenteados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className="hidden sm:block h-8" />

          {/* Ordenação de Preço */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Ordenar:</span>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder="Ordem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Padrão</SelectItem>
                <SelectItem value="price-desc">Decrescente</SelectItem>
                <SelectItem value="price-asc">Crescente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grade de Presentes */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-muted-foreground animate-pulse">
              Carregando lista de presentes...
            </p>
          </div>
        ) : processedGifts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            {processedGifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onContribute={handleContribute}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground mb-4">
              Nenhum presente encontrado com os filtros selecionados.
            </p>
            <Button variant="outline" onClick={() => setFilter("all")}>
              Ver todos os presentes
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
