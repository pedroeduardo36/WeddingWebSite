"use client";

import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingGiftButton() {
  const scrollToGifts = () => {
    const element = document.getElementById("presentes"); // ID da secção de presentes
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={scrollToGifts}
        className="h-14 w-14 rounded-full shadow-2xl bg-primary text-white hover:scale-110 transition-transform"
        size="icon"
      >
        <Gift className="h-6 w-6" />
        <span className="sr-only">Ir para Lista de Presentes</span>
      </Button>
    </div>
  );
}