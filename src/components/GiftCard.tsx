
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import { QrCode, ShoppingCart, CheckCircle, Link2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  const isGoalReached = gift.current >= gift.goal;

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
        {isGoalReached && (
          <div className="absolute inset-0 bg-primary/50 flex flex-col items-center justify-center text-primary-foreground">
            <CheckCircle className="h-8 w-8" />
            <span className="mt-2 text-lg font-semibold">Presenteado!</span>
          </div>
        )}
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
        {!isGoalReached && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="w-full">
                Presentear
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-headline">{gift.name}</DialogTitle>
                <DialogDescription>
                  Faça sua contribuição via PIX.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-sm text-center text-muted-foreground">
                      <QrCode className="inline-block mr-2" />
                      Escaneie o QR Code com o app do seu banco.
                    </p>
                    {qrCodeImage && <Image src={qrCodeImage.imageUrl} alt={qrCodeImage.description} width={200} height={200} data-ai-hint={qrCodeImage.imageHint} />}
                </div>

                <div className="relative">
                  <Separator />
                  <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-background px-2 text-sm text-muted-foreground">OU</span>
                </div>
                
                <Button variant="outline" asChild>
                    <Link href="https://nubank.com.br/cobrar/pquj/6956ef41-a9d8-4e68-92dc-882088310601" target="_blank" className="w-full">
                        <Link2 className="mr-2" /> Pagar com Link (Copia e Cola)
                    </Link>
                </Button>

                <Separator />

                <div className="space-y-2">
                    <Label htmlFor="pix-amount">Após pagar, registre sua contribuição:</Label>
                    <Input id="pix-amount" placeholder="Digite o valor (ex: 50.00)" value={contribution} onChange={(e) => setContribution(e.target.value)} />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleContributeClick} className="w-full">Confirmar Contribuição {contribution && formatCurrency(parseFloat(contribution) || 0)}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        {isGoalReached && !gift.storeUrl && (
           <Button className="w-full" disabled>Presenteado!</Button>
        )}
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
