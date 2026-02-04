"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import fotoJP1 from "@/assets/fotosJP-1.jpg";
import fotoJP2 from "@/assets/fotosJP-2.jpg";
import fotoJP3 from "@/assets/fotosJP-3.jpg";
import fotoJP4 from "@/assets/fotosJP-4.jpg";
import fotoJP5 from "@/assets/fotosJP-5.jpg";
import fotoJP6 from "@/assets/fotosJP-6.jpeg";
import fotoJP7 from "@/assets/fotosJP-7.jpg";
import fotoJP8 from "@/assets/fotosJP-8.jpg";
import fotoJP9 from "@/assets/fotosJP-9.jpg";
import fotoJP10 from "@/assets/fotosJP-10.jpg";
import fotoJP11 from "@/assets/fotosJP-11.jpg";
import fotoJP12 from "@/assets/fotosJP-12.jpg";
import fotoJP13 from "@/assets/fotosJP-13.jpg";
import fotoJP14 from "@/assets/fotosJP-14.jpg";
import fotoJP15 from "@/assets/fotosJP-15.jpg";
import fotoJP16 from "@/assets/fotosJP-16.jpg";
import fotoJP17 from "@/assets/fotosJP-17.jpg";
import fotoJP18 from "@/assets/fotosJP-18.jpg";

const carouselPhotos = [
  fotoJP1,
  fotoJP2,
  fotoJP3,
  fotoJP4,
  fotoJP5,
  fotoJP6,
  fotoJP7,
  fotoJP8,
  fotoJP9,
  fotoJP10,
  fotoJP11,
  fotoJP12,
  fotoJP13,
  fotoJP14,
  fotoJP15,
  fotoJP16,
  fotoJP17,
  fotoJP18,
];

export default function OurStorySection() {
  return (
    <section id="historia" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Nossa História</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Uma jornada de amor, amizade e muita que nos trouxe até aqui.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6 md:p-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                Nossa história começou como as melhores costumam começar: sem pressa, dentro do nosso PG. Ali, enquanto buscávamos a Deus, acabamos encontrando também um ao outro. O namoro em 2023 foi só a confirmação de que nossos propósitos estavam alinhados e de que amar é, acima de tudo, uma escolha diária de cuidar e crescer junto.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                Em janeiro de 2025, no Rio de Janeiro, decidimos que queriamos essa parceriapara a vida toda. O "sim" do noivado foi o primeiro passo para o grande dia que vem por aí. Estamos ansiosos para celebrar com vocês o inicio da nossa família, com a ceteza que Jesus estará guiando cada passo e sendo o dono da trilha sonora da nossa vida!
              </p>  
              </div>
          
              <div className="relative h-full min-h-[500px] w-full bg-muted flex items-center justify-center overflow-hidden">
                <Carousel
                  className="w-full h-full"
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent className="h-full">
                    {carouselPhotos.map((photo, index) => (
                      <CarouselItem key={index} className="relative h-[400px] md:h-[500px] w-full">
                          <Image
                            src={photo}
                            alt={`Foto Nossa História ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Botões de navegação */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
             </div>
            </div> {/* <-- Esta tag de fechamento estava faltando */}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
