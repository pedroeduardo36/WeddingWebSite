import { MapPin, Calendar, Clock, GlassWater } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export default function LocationSection() {
  return (
    <section id="local" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Cerimônia e Festa</h2>
            <p className="max-w-[900px] text-accent-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Celebre conosco neste lugar especial.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="font-semibold">Maison Daniela</p>
                  <p className="text-muted-foreground">Chácara 02 001 Lago Oeste - Sobradinho II, Brasília - DF, 73100-030</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span>Sábado, 02 de Maio de 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>A partir das 16:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GlassWater className="h-5 w-5 text-muted-foreground" />
                        <span>Traje: Esporte Fino</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="w-full h-64 md:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.827777174358!2d-48.01257452583857!3d-15.601050519391083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a51a80c680001%3A0x46423878b2a3a25!2sMaison%20Daniela!5e0!3m2!1spt-BR!2sbr!4v1718049969440!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa para Maison Daniela"
                ></iframe>
              </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
