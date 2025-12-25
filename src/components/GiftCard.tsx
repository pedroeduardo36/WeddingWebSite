"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, QrCode, ShoppingCart } from "lucide-react";

export interface Gift {
  id: number;
  name: string;
  goal: number;
  current: number;
  description: string;
  image: string;
  imageHint: string;
  storeUrl?: string;
}

interface GiftCardProps {
  gift: Gift;
  onContribute: (giftId: number, amount: number) => void;
}

export default function GiftCard({ gift, onContribute }: GiftCardProps) {
  const [contribution, setContribution] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const qrCodeImage = PlaceHolderImages.find((img) => img.id === "qr-code");

  const progress = Math.min((gift.current / gift.goal) * 100, 100);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleContributeClick = () => {
    const amount = parseFloat(contribution);
    if (!isNaN(amount) && amount > 0) {
      onContribute(gift.id, amount);
      setIsOpen(false);
      setContribution("");
      toast({
        title: "Obrigado!",
        description: `Sua contribuição de ${formatCurrency(amount)} foi registrada.`,
      });
    } else {
        toast({
            variant: "destructive",
            title: "Valor inválido",
            description: "Por favor, insira um valor válido.",
        });
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-muted">
        <Image src={gift.image} alt={gift.name} fill className="object-contain" data-ai-hint={gift.imageHint} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{gift.name}</CardTitle>
        <CardDescription>{gift.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatCurrency(gift.current)}</span>
                <span>{formatCurrency(gift.goal)}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">Presentear</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-headline">{gift.name}</DialogTitle>
              <DialogDescription>
                Escolha a forma de pagamento e o valor da sua contribuição.
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="pix" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pix"><QrCode className="mr-2" /> PIX</TabsTrigger>
                <TabsTrigger value="credit-card"><CreditCard className="mr-2"/> Cartão</TabsTrigger>
              </TabsList>
              <TabsContent value="pix" className="mt-4">
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-sm text-center text-muted-foreground">
                    Escaneie o QR Code com o app do seu banco. Este é um QR Code de exemplo.
                  </p>
                  {qrCodeImage && <Image src={qrCodeImage.imageUrl} alt={qrCodeImage.description} width={200} height={200} data-ai-hint={qrCodeImage.imageHint} />}
                  <Label htmlFor="pix-amount" className="sr-only">Valor</Label>
                  <Input id="pix-amount" placeholder="Digite o valor (ex: 50.00)" value={contribution} onChange={(e) => setContribution(e.target.value)} />
                </div>
              </TabsContent>
              <TabsContent value="credit-card" className="mt-4">
                <div className="space-y-4">
                    <p className="text-sm text-center text-muted-foreground">
                        Esta é uma simulação. Nenhum dado de cartão será processado.
                    </p>
                    <div className="space-y-2">
                        <Label htmlFor="card-amount">Valor</Label>
                        <Input id="card-amount" placeholder="Digite o valor (ex: 50.00)" value={contribution} onChange={(e) => setContribution(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card-name">Nome no Cartão</Label>
                        <Input id="card-name" placeholder="Júlia S. Pedro" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Número do Cartão</Label>
                        <Input id="card-number" placeholder="**** **** **** 1234" />
                    </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button type="submit" onClick={handleContributeClick} className="w-full">Contribuir {contribution && formatCurrency(parseFloat(contribution) || 0)}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {gift.storeUrl && (
            <Button variant="outline" asChild className="w-full">
                <Link href={gift.storeUrl} target="_blank">
                    <ShoppingCart className="mr-2" /> Ver na Loja
                </Link>
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
