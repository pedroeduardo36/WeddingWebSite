"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  QrCode,
  ShoppingCart,
  CheckCircle,
  Link2,
  Gift as GiftIcon,
  PackageCheck,
} from "lucide-react";
import type { Gift } from "@/lib/gifts";
import qrCode from "@/assets/qrcodePix.jpg";

interface GiftCardProps {
  gift: Gift;
  onContribute: (
    giftId: number,
    giftName: string,
    amount: number,
    name: string,
    message: string,
  ) => void;
}

export default function GiftCard({ gift, onContribute }: GiftCardProps) {
  const [contribution, setContribution] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isPhysicalOpen, setIsPhysicalOpen] = useState(false);
  const { toast } = useToast();

  const pricePerQuota = 100; // Valor fixo da cota
  const totalQuotas = gift.goal / pricePerQuota;
  const donatedQuotas = Math.floor(gift.current / pricePerQuota);
  const progress = Math.min((gift.current / gift.goal) * 100, 100);
  const isGoalReached = gift.current >= gift.goal;
  const remainingAmount = Math.max(gift.goal - gift.current, 0);

  // Gerencia o valor automático para o físico e limpa campos ao alternar
  useEffect(() => {
    if (isPhysicalOpen) {
      setContribution(remainingAmount.toString());
    } else if (!isOpen) {
      setContribution("");
    }
  }, [isPhysicalOpen, isOpen, remainingAmount]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleContributeClick = (isPhysical: boolean = false) => {
    const amount = parseFloat(contribution);

    if (isNaN(amount) || amount <= 0) {
      toast({
        variant: "destructive",
        title: "Erro no valor",
        description: "Por favor, insira um valor válido.",
      });
      return;
    }
    if (!contributorName.trim()) {
      toast({
        variant: "destructive",
        title: "Nome obrigatório",
        description: "Por favor, preencha seu nome.",
      });
      return;
    }

    onContribute(gift.id, gift.name, amount, contributorName, message);

    setIsOpen(false);
    setIsPhysicalOpen(false);
    setContributorName("");
    setContribution("");
    setMessage("");

    toast({
      title: "Obrigado!",
      description: isPhysical
        ? "Registro de compra física realizado com sucesso!"
        : `Sua contribuição de ${formatCurrency(amount)} foi registrada.`,
    });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-white">
        <Image
          src={gift.image}
          alt={gift.name}
          fill
          className="object-contain transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isGoalReached && (
          <div className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center text-primary-foreground backdrop-blur-[2px]">
            <CheckCircle className="h-10 w-10 mb-2 drop-shadow-md" />
            <span className="text-xl font-bold drop-shadow-md">
              Presenteado!
            </span>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="font-headline">{gift.name}</CardTitle>
        <CardDescription className="line-clamp-2 min-h-[40px]">
          {gift.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-primary">{formatCurrency(gift.current)}</span>
            <span className="text-muted-foreground">
              {formatCurrency(gift.goal)}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-right text-muted-foreground">
            {progress.toFixed(0)}% atingido
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-4 flex flex-col gap-2">
        <div className="flex w-full gap-2">
          {!isGoalReached ? (
            <>
              {/* Modal PIX (COM MENSAGEM) */}
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 gap-1 px-1 text-xs font-semibold sm:text-sm">
                    <GiftIcon className="w-3 h-3 sm:w-4 sm:h-4" /> Presentear
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-primary">
                      Presentear via PIX
                    </DialogTitle>
                    <DialogDescription>
                      Contribua com um valor para este presente.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-3">
                      <Image src={qrCode} alt="PIX" width={160} height={160} />
                      <p className="text-[10px] text-muted-foreground text-center">
                        Aponte a câmera do celular ou use o link de pagamento.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Seu Nome *</Label>
                      <Input
                        value={contributorName}
                        onChange={(e) => setContributorName(e.target.value)}
                        placeholder="Como quer ser identificado?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Valor (R$) *</Label>
                      <Input
                        type="number"
                        value={contribution}
                        onChange={(e) => setContribution(e.target.value)}
                        placeholder="0,00"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Mensagem (Opcional)</Label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Deixe um recado para o casal..."
                        rows={2}
                      />
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button
                      onClick={() => handleContributeClick(false)}
                      className="w-full"
                    >
                      Confirmar Presente
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Modal Físico (Apenas Nome e Mensagem) */}
              <Dialog open={isPhysicalOpen} onOpenChange={setIsPhysicalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-1 gap-1 px-1 text-xs font-semibold sm:text-sm border-primary text-primary"
                  >
                    <PackageCheck className="w-3 h-3 sm:w-4 sm:h-4" /> Comprei
                    Fisicamente
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-primary">
                      Já comprei este presente!
                    </DialogTitle>
                    <DialogDescription>
                      Identifique-se para retirarmos este item da lista.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 pt-4">
                    <div className="space-y-2">
                      <Label>Seu Nome *</Label>
                      <Input
                        placeholder="Ex: João e Maria"
                        value={contributorName}
                        onChange={(e) => setContributorName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Mensagem (Opcional)</Label>
                      <Textarea
                        placeholder="Escreva algo carinhoso..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="text-[11px] text-muted-foreground bg-muted/30 p-2 rounded border border-dashed">
                      <p>
                        Valor que será computado:{" "}
                        <strong>{formatCurrency(remainingAmount)}</strong>
                      </p>
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button
                      onClick={() => handleContributeClick(true)}
                      className="w-full"
                    >
                      Confirmar e Finalizar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <Button
              className="flex-1 bg-muted text-muted-foreground cursor-not-allowed"
              disabled
            >
              <CheckCircle className="mr-2 h-4 w-4" /> Completo!
            </Button>
          )}
        </div>

        {gift.storeUrl && (
          <Button
            variant="ghost"
            asChild
            className="w-full gap-2 text-muted-foreground hover:text-primary"
          >
            <Link
              href={gift.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="h-4 w-4" /> Ver na loja
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
