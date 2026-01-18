"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GiftCard from "@/components/GiftCard";
import type { Gift } from "@/lib/gifts";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { allGifts } from "@/lib/gifts";
import { supabase } from "@/lib/supabase";

const GIFTS_PER_PAGE = 8;

export default function GiftListSection() {
  const [gifts, setGifts] = useState<Gift[]>(allGifts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContributions();

    // Escuta novas doações em tempo real
    const channel = supabase
      .channel("realtime_contributions")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contributions" },
        (payload) => {
          console.log("Nova doação recebida em tempo real:", payload);
          fetchContributions();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchContributions = async () => {
    try {
      console.log("Iniciando busca de doações no Supabase...");

      const { data, error } = await supabase
        .from("contributions")
        .select("gift_id, amount");

      if (error) {
        console.error("ERRO ao buscar doações:", error.message);
        throw error;
      }

      console.log("Dados recebidos do banco:", data);

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

        setGifts((prevGifts) =>
          prevGifts.map((gift) => ({
            ...gift,
            current: totalPorPresente[gift.id] || 0,
          })),
        );
      }
    } catch (error) {
      console.error("Erro geral no fetch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContribute = async (
    giftId: number,
    amount: number,
    name: string,
    message: string,
  ) => {
    console.log(
      `Tentando salvar doação: Gift ${giftId}, Valor ${amount}, De: ${name}`,
    );

    // 1. Atualização visual imediata
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift,
      ),
    );

    // 2. Salvar no Supabase
    const { data, error } = await supabase
      .from("contributions")
      .insert([
        {
          gift_id: giftId,
          amount: amount,
          guest_name: name, // Novo campo
          message: message, // Novo campo
        },
      ])
      .select();

    if (error) {
      console.error("ERRO AO SALVAR no banco:", error.message);
      alert("Erro ao salvar sua contribuição. Verifique o console.");
    } else {
      console.log("Sucesso ao salvar no banco:", data);
    }
  };
  return (
    <section
      id="presentes"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Lista de Presentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Seu carinho é nosso maior presente, mas se desejar nos presentear,
              aqui estão algumas sugestões.
            </p>
          </div>
        </div>
        <Separator className="my-8" />

        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">
            Sincronizando com o banco de dados...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gifts.slice(0, GIFTS_PER_PAGE).map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onContribute={handleContribute}
              />
            ))}
          </div>
        )}

        {gifts.length > GIFTS_PER_PAGE && (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/presentes">Ver mais presentes</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
