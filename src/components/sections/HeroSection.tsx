"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import fotoHero from '../../assets/fotosJP-2.jpg';
import { motion, useScroll, useTransform } from "framer-motion";
import logoViolao from "@/assets/logoSite.svg"; 

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-05-02T16:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Set initial time left
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

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

  const { scrollY } = useScroll();

  // Configuração da animação baseada no scroll
  // [0, 150] = pixels scrollados. [0, 1] = valor da opacidade.
  // Significa: No topo (0px) está invisível (0). Ao rolar 150px, fica visível (1).
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const yMovement = useTransform(scrollY, [0, 200], [20, 0]); // Sobe levemente enquanto aparece

  return (
    <section id="home" className="relative h-[900px] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={fotoHero}
          alt={heroImage.description}
          fill
          className="object-cover object-[center_bottom]"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}

{/* Overlay Escuro para leitura */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 space-y-10">
        
        {/* PARTE 1: Sempre Visível (Logo e Nomes) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Logo do Violão */}
          <div className="w-20 h-20 md:w-28 md:h-28 relative mb-2">
             <Image 
                src={logoViolao} 
                alt="Logo Violão" 
                fill 
                className="object-contain invert brightness-0 filter" 
             /> 
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight drop-shadow-lg">
            Júlia & Pedro
          </h1>
        </motion.div>

        {/* PARTE 2: Aparece com o Scroll (Data e Countdown) */}
        <motion.div
          style={{ opacity: opacity, y: yMovement }} // Conectado ao Scroll aqui
          className="flex flex-col items-center space-y-8"
        >
          <p className="font-body text-xl md:text-2xl tracking-[0.2em] py-2 px-8">
            02 de MAIO de 2026
          </p>

          <div>
            <Countdown />
          </div>
        </motion.div>

      </div>
      
      {/* Dica visual para rolar (Desaparece quando rola) */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Role para ver</span>
        <div className="w-1 h-8 rounded-full bg-white/50 animate-pulse" />
      </motion.div>
    </section>
  );
}
