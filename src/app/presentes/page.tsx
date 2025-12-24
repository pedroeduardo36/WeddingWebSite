
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCard, { type Gift } from "@/components/GiftCard";
import { Separator } from "@/components/ui/separator";
import { allGifts } from "@/lib/gifts";


export default function GiftsPage() {
  const [gifts, setGifts] = useState<Gift[]>(allGifts);

  const handleContribute = (giftId: number, amount: number) => {
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift
      )
    );
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section id="presentes" className="w-full py-12 md:py-24 lg:py-32">
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
              {gifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} onContribute={handleContribute} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
