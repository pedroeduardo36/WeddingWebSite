import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import fotoHistoria from '../../assets/fotosJP-6.jpeg';


export default function OurStorySection() {
  const storyImage = PlaceHolderImages.find((img) => img.id === "our-story");

  return (
    <section id="historia" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Nossa História</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Uma jornada de amor, amizade e cumplicidade que nos trouxe até aqui.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6 md:p-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                Nossa história não começou com um solo, mas sim em uma harmonia perfeita conduzida por Deus dentro do nosso Pequeno Grupo (PG). O que era uma amizade firmada na fé logo ganhou o ritmo de um encontro inesquecível em 2023. Ali, percebemos que o Senhor já estava entrelaçando nossos propósitos.  
                Desde então, entendemos que Amar é um verbo, um exercício diário de amar como Cristo nos amou, no cuidado e no caminhar juntos. Entre  uma boa conversa e aprendizados juntos, fomos compondo nossa rotina sob a benção Daquele que nos uniu.  
                </p>
                <p className="text-muted-foreground leading-relaxed">
                O pedido de casamento no Rio de Janeiro, em 2 de janeiro de 2025, foi o prelúdio de uma nova estação que Deus preparou para nós. Hoje, entendemos que "o que Deus uniu, não o separe o homem", e é com essa certeza que estamos ansiosos para celebrar o nosso "sim" com vocês. Queremos uma festa que reflita nossa essência e a alegria de ter Jesus como o centro da nossa futura família e da trilha sonora das nossas vidas!
                </p>
              </div>
              <div className="relative h-64 md:h-full w-full">
                {storyImage && (
                  <Image
                    src={fotoHistoria}
                    alt=""
                    fill
                    className="object-cover"
                    data-ai-hint={storyImage.imageHint}
                    sizes="(max-width: 768px) 200vw, 50vw"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
