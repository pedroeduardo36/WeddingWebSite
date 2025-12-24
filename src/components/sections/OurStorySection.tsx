import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
                  Nossa história começou de forma inesperada, em um café charmoso no centro da cidade. Entre conversas, risadas e xícaras de café, descobrimos uma conexão que ia além da amizade. Cada momento juntos fortalecia nosso laço, e o que era um encontro casual se transformou em um amor para a vida toda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Compartilhamos sonhos, superamos desafios e construímos uma parceria baseada na confiança e no carinho. Agora, estamos prontos para dar o próximo passo e celebrar nossa união com as pessoas que mais amamos. Mal podemos esperar para compartilhar este dia especial com vocês!
                </p>
              </div>
              <div className="relative h-64 md:h-full w-full">
                {storyImage && (
                  <Image
                    src={storyImage.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    data-ai-hint={storyImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
