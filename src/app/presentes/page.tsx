
"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCard, { type Gift } from "@/components/GiftCard";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { allGifts } from "@/lib/gifts";

type SortOption = "default" | "price-desc" | "price-asc";
type GiftedFilterOption = "all" | "available" | "gifted";

export default function GiftsPage() {
  const [gifts, setGifts] = useState<Gift[]>(allGifts);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [giftedFilter, setGiftedFilter] = useState<GiftedFilterOption>("all");

  const handleContribute = (giftId: number, amount: number) => {
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift
      )
    );
  };

  const sortedAndFilteredGifts = useMemo(() => {
    let filtered = [...gifts];

    if (giftedFilter === "available") {
      filtered = filtered.filter(gift => gift.current < gift.goal);
    } else if (giftedFilter === "gifted") {
      filtered = filtered.filter(gift => gift.current >= gift.goal);
    }

    switch (sortOption) {
      case "price-desc":
        filtered.sort((a, b) => b.goal - a.goal);
        break;
      case "price-asc":
        filtered.sort((a, b) => a.goal - b.goal);
        break;
      case "default":
        filtered.sort((a, b) => a.id - b.id);
        break;
    }
    return filtered;
  }, [gifts, sortOption, giftedFilter]);

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
            <div className="flex flex-col md:flex-row justify-between items-center my-8 gap-4">
               <RadioGroup defaultValue="all" onValueChange={(value: GiftedFilterOption) => setGiftedFilter(value)} className="flex items-center gap-4">
                  <Label className="font-medium">Filtrar:</Label>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">Todos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="available" id="available" />
                    <Label htmlFor="available">Disponíveis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gifted" id="gifted" />
                    <Label htmlFor="gifted">Presenteados</Label>
                  </div>
                </RadioGroup>
              <Select onValueChange={(value: SortOption) => setSortOption(value)} defaultValue="default">
                <SelectTrigger className="w-full md:w-[240px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Padrão</SelectItem>
                  <SelectItem value="price-desc">Mais caro para mais barato</SelectItem>
                  <SelectItem value="price-asc">Mais barato para mais caro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
              {sortedAndFilteredGifts.map((gift) => (
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
