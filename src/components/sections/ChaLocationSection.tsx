import { MapPin, Calendar, Clock, GlassWater } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export default function ChaLocationSection() {
  return (
    <section id="local" className="w-full py-12 md:py-8 lg:py-14">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Local do Chá
            </h2>
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
                <p className="font-semibold">Ed. Via Boulevard - Salão de festas</p>
                <p className="text-muted-foreground">
                  Área especial 2 Módulo F II - Guará 2
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Sábado, 7 de Março de 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Às 14:00</span>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="w-full h-64 md:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4489372446724!2d-47.99018822498811!3d-15.832984884812694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31e58a4bed71%3A0xc7ae2e60bc7d157e!2sGuar%C3%A1%20II%20Ed%20Via%20Boulevard%20-%20Guar%C3%A1%2C%20Bras%C3%ADlia%20-%20DF%2C%2071070-693!5e0!3m2!1spt-BR!2sbr!4v1769647184573!5m2!1spt-BR!2sbr" 
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
