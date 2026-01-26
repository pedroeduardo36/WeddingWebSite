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
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import { QrCode, ShoppingCart, CheckCircle, Link2, Gift as GiftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { Gift } from "@/lib/gifts";

interface GiftCardProps {
  gift: Gift;
  onContribute: (giftId: number, giftName: string, amount: number, name: string, message: string) => void;
}

export default function GiftCard({ gift, onContribute }: GiftCardProps) {
  const [contribution, setContribution] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [message, setMessage] = useState("");
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

    if (isNaN(amount) || amount <= 0) {
        toast({
            variant: "destructive",
            title: "Valor inválido",
            description: "Por favor, insira um valor de contribuição válido.",
        });
        return;
    }
    if (!contributorName.trim()) {
        toast({
            variant: "destructive",
            title: "Nome não preenchido",
            description: "Por favor, preencha seu nome para sabermos quem agradeçer!",
        });
        return;
    }

    onContribute(gift.id, gift.name, amount, contributorName, message);
    
    setIsOpen(false);
    setContribution("");
    setContributorName("");
    setMessage("");

    toast({
      title: "Obrigado!",
      description: `Sua contribuição de ${formatCurrency(amount)} foi registrada.`,
    });
  };

  return (
    <Card className="flex  flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-white">
        <Image 
          src={gift.image} 
          alt={gift.name} 
          fill 
          className="object-contain transition-transform hover:scale-105" 
          data-ai-hint={gift.imageHint} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        
        {isGoalReached && (
          <div className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center text-primary-foreground backdrop-blur-[2px]">
            <CheckCircle className="h-10 w-10 mb-2 drop-shadow-md" />
            <span className="text-xl font-bold drop-shadow-md">Presenteado!</span>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="font-headline line-clamp-1" title={gift.name}>{gift.name}</CardTitle>
        <CardDescription className="line-clamp-2 min-h-[40px]">{gift.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold">
                <span className="text-primary">{formatCurrency(gift.current)}</span>
                <span className="text-muted-foreground">{formatCurrency(gift.goal)}</span>
            </div>
            
            <Progress value={progress} className="h-2" />
            
            <div className="text-xs text-right text-muted-foreground">
                {progress.toFixed(0)}% atingido
            </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-4">
        <div className="flex w-full gap-2">
            
            {/* Botão de Presentear */}
            {!isGoalReached ? (
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 gap-2 font-semibold">
                     <GiftIcon className="w-4 h-4" /> Presentear
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-xl text-primary">{gift.name}</DialogTitle>
                    <DialogDescription>
                      Faça sua contribuição via PIX e registre abaixo para sabermos que foi você!
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 pt-4">
                    <div className="bg-muted/50 p-4 rounded-lg border border-border flex flex-col items-center gap-3">
                        <p className="text-sm font-medium text-center text-muted-foreground flex items-center gap-2">
                          <QrCode className="w-4 h-4" />
                          QR Code PIX
                        </p>
                        {qrCodeImage ? (
                          <div className="bg-white p-2 rounded shadow-sm">
                            <Image src={qrCodeImage.imageUrl} alt="QR Code Pix" width={180} height={180} />
                          </div>
                        ) : (
                          <div className="w-[180px] h-[180px] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                            QR Code não carregado
                          </div>
                        )}
                        
                        <div className="relative w-full flex items-center gap-2">
                          <Separator className="flex-1" />
                          <span className="text-xs text-muted-foreground uppercase">Ou Copia e Cola</span>
                          <Separator className="flex-1" />
                        </div>
                        
                        <Button variant="outline" size="sm" asChild className="w-full">
                            <Link href="https://nubank.com.br/cobrar/pquj/6956ef41-a9d8-4e68-92dc-882088310601" target="_blank">
                                <Link2 className="mr-2 w-3 h-3" /> Abrir Link
                            </Link>
                        </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <CheckCircle className="w-4 h-4" />
                            <h4 className="font-semibold text-sm">Registre sua contribuição</h4>
                        </div>
                        
                        <div className="grid gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="contributor-name">Seu Nome <span className="text-red-500">*</span></Label>
                              <Input 
                                id="contributor-name" 
                                placeholder="Ex: João e Maria" 
                                value={contributorName} 
                                onChange={(e) => setContributorName(e.target.value)} 
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="pix-amount">Valor Pago (R$) <span className="text-red-500">*</span></Label>
                              <Input 
                                id="pix-amount" 
                                type="number" 
                                placeholder="Ex: 150.00" 
                                value={contribution} 
                                onChange={(e) => setContribution(e.target.value)} 
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="message">Mensagem (Opcional)</Label>
                              <Textarea 
                                id="message" 
                                placeholder="Escreva algo especial..." 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                                className="resize-none"
                                rows={2}
                              />
                            </div>
                        </div>
                    </div>
                  </div>

                  <DialogFooter className="mt-4 gap-2 sm:gap-0">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button onClick={handleContributeClick} className="w-full sm:w-auto">Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
               <Button className="flex-1 bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed" disabled>
                 <CheckCircle className="mr-2 h-4 w-4" /> Completo!
               </Button>
            )}

            {/* Botão da Loja Atualizado: Com texto "Ver na loja" */}
            {gift.storeUrl && (
                <Button variant="outline" asChild className="shrink-0 gap-2 px-3" title="Ver na Loja">
                    <Link href={gift.storeUrl} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-4 w-4" />
                        Ver na loja
                    </Link>
                </Button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}