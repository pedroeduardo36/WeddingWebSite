"use client";

import { useState } from "react";
import GiftCard, { type Gift } from "@/components/GiftCard";
import { Separator } from "@/components/ui/separator";

const initialGifts: Gift[] = [
  {
    id: 1,
    name: "Cotas para Lua de Mel",
    goal: 15000,
    current: 4500,
    description: "Ajude-nos a ter uma lua de mel inesquecível na Grécia!",
    image: "https://picsum.photos/seed/honeymoon/600/400",
    imageHint: "honeymoon travel"
  },
  {
    id: 2,
    name: "Reforma do Apartamento",
    goal: 20000,
    current: 3200,
    description: "Para deixar nosso cantinho com a nossa cara e mais aconchegante.",
    image: "https://picsum.photos/seed/apartment/600/400",
    imageHint: "modern apartment"
  },
  {
    id: 3,
    name: "Jantar Romântico",
    goal: 1000,
    current: 750,
    description: "Um momento especial e uma experiência gastronômica para nós dois.",
    image: "https://picsum.photos/seed/dinner/600/400",
    imageHint: "romantic dinner"
  },
  {
    id: 4,
    name: "Passeio de Balão",
    goal: 2500,
    current: 500,
    description: "Uma aventura inesquecível para começar nossa vida de casados.",
    image: "https://picsum.photos/seed/balloon/600/400",
    imageHint: "hot air balloon"
  },
];

export default function GiftListSection() {
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);

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
          {gifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} onContribute={handleContribute} />
          ))}
        </div>
      </div>
    </section>
  );
}
