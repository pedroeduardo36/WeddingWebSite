
"use client";

import { useState } from "react";
import Link from "next/link";
import GiftCard, { type Gift } from "@/components/GiftCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { allGifts } from "@/lib/gifts";

const GIFTS_PER_PAGE = 8;

export default function GiftListSection() {
  const [gifts, setGifts] = useState<Gift[]>(allGifts);

  const handleContribute = (giftId: number, amount: number) => {
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift
      )
    );
  };
  
  return (
    <section id="presentes" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Lista de Presentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Seu carinho é nosso maior presente, mas se desejar nos presentear, aqui estão algumas sugestões.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gifts.slice(0, GIFTS_PER_PAGE).map((gift) => (
            <GiftCard key={gift.id} gift={gift} onContribute={handleContribute} />
          ))}
        </div>
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
