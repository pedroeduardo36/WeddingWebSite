"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Ícone de voltar
import GiftCard from "@/components/GiftCard";
import type { Gift } from "@/lib/gifts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allGifts } from "@/lib/gifts";
import { supabase } from "@/lib/supabase";

export default function GiftsPage() {
  // Inicializa com todos os presentes
  const [gifts, setGifts] = useState<Gift[]>(allGifts);
  const [isLoading, setIsLoading] = useState(true);

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
          const id = item.gift_id;
          const valor = Number(item.amount);
          if (totalPorPresente[id]) {
            totalPorPresente[id] += valor;
          } else {
            totalPorPresente[id] = valor;
          }
        });

        // Atualiza a lista local com os valores do banco
        setGifts((prevGifts) =>
          prevGifts.map((gift) => ({
            ...gift,
            current: totalPorPresente[gift.id] || 0,
          })),
        );
      }
    } catch (error) {
      console.error("Erro ao carregar presentes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para salvar a doação
  const handleContribute = async (
    giftId: number,
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

  return (
    <main className="min-h-screen bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col space-y-4 mb-8">
          <Button
            asChild
            variant="ghost"
            className="w-fit pl-0 hover:bg-transparent"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
          </Button>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Lista Completa de Presentes
            </h1>
            <p className="text-muted-foreground max-w-[800px]">
              Fique à vontade para escolher o item que mais lhe agradar. Sua
              presença já é o nosso maior presente!
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Grid de Presentes */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-muted-foreground animate-pulse">
              Carregando lista de presentes...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            {gifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onContribute={handleContribute}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
