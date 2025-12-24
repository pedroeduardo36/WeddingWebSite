"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Countdown = () => {
  // This approach is not ideal and can cause hydration issues.
  // It's kept this way for demonstration purposes. A better approach would be to use useEffect.
  const weddingDate = new Date("2026-05-02T16:00:00");
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center font-headline">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="rounded-lg bg-white/20 p-2 md:p-4 backdrop-blur-sm">
          <div className="text-4xl md:text-6xl font-bold">{String(value).padStart(2, '0')}</div>
          <div className="text-sm md:text-base uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
};


export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section id="home" className="relative h-[100dvh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold">
          Júlia & Pedro
        </h1>
        <p className="mt-4 font-body text-xl md:text-2xl">
          02 de Maio de 2026
        </p>
        <div className="mt-8 md:mt-12">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
