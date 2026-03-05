"use client";

import { useState, useEffect } from "react";
import { Filter, ArrowUpDown, Plus, Trash2 } from "lucide-react";
import GiftCard from "@/components/GiftCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allGifts } from "@/lib/gifts";
import { supabase } from "@/lib/supabase";
import type { Gift } from "@/lib/gifts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ChaLocationSection from "@/components/sections/ChaLocationSection";
import logoSite from "../../assets/logoSite.svg";
import florUm from "../../assets/florUm.svg";
import florDois from "../../assets/florDois.svg";
import Image from "next/image";
import preto from "../../assets/preto.avif";
import branco from "../../assets/branco.avif";
import inox from "../../assets/inox.avif";
import transparente from "../../assets/transparente.avif";

export default function GiftsPage() {
  const [gifts, setGifts] = useState<Gift[]>(
    allGifts.filter((g) => g.category === "cha"),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("price-asc");

  // Estados para o Modal de RSVP Dinâmico
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [guests, setGuests] = useState([{ name: "", rg: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  useEffect(() => {
    fetchContributions();

    const channel = supabase
      .channel("realtime_gifts_page")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contributions" },
        () => fetchContributions(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchContributions = async () => {
    try {
      const { data, error } = await supabase
        .from("contributions")
        .select("gift_id, amount");

      if (error) throw error;

      if (data) {
        const totalPorPresente: Record<number, number> = {};
        data.forEach((item) => {
          totalPorPresente[item.gift_id] =
            (totalPorPresente[item.gift_id] || 0) + Number(item.amount);
        });

        setGifts(
          allGifts
            .filter((g) => g.category === "cha")
            .map((gift) => ({
              ...gift,
              current: totalPorPresente[gift.id] || 0,
            })),
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addGuestField = () => {
    setGuests([...guests, { name: "", rg: "" }]);
  };

  const removeGuestField = (index: number) => {
    const newGuests = guests.filter((_, i) => i !== index);
    setGuests(newGuests);
  };

  const updateGuestData = (
    index: number,
    field: "name" | "rg",
    value: string,
  ) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const handleContribute = async (
    giftId: number,
    giftName: string,
    amount: number,
    name: string,
    message: string,
  ) => {
    // Atualização otimista na interface
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift,
      ),
    );

    // Inserção no Supabase na tabela 'contributions'
    const { error } = await supabase.from("contributions").insert([
      {
        gift_id: giftId,
        gift_name: giftName,
        amount: amount,
        guest_name: name,
        message: message,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar doação:", error);
      alert("Erro ao processar a doação no servidor. Tente novamente.");
      fetchContributions(); // Reverte a UI buscando os dados reais
    } else {
      console.log("Doação registrada com sucesso!");
    }
  };

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Filtra apenas campos preenchidos e envia para a tabela rsvp_cha
    const dataToInsert = guests
      .filter((g) => g.name.trim() !== "" && g.rg.trim() !== "")
      .map((g) => ({ name: g.name, rg: g.rg }));

    const { error } = await supabase.from("rsvp_cha").insert(dataToInsert);

    if (error) {
      alert("Erro ao confirmar presença. Tente novamente.");
    } else {
      alert("Presença(s) confirmada(s) com sucesso!");
      setIsRsvpOpen(false);
      setGuests([{ name: "", rg: "" }]);
      setHasConfirmed(true);
    }
    setIsSubmitting(false);
  };

  const processedGifts = gifts
    .filter((gift) => {
      if (filter === "available") return gift.current < gift.goal;
      if (filter === "gifted") return gift.current >= gift.goal;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.goal - b.goal;
      if (sortOrder === "price-desc") return b.goal - a.goal;
      return a.id - b.id;
    });

  return (
    <main className="min-h-screen bg-background py-12 overflow-x-hidden">
      {/* Container ajustado: w-full para mobile e container para desktop */}
      <div className="w-full px-4 md:container md:mx-auto relative overflow-hidden">
        <Image
          src={florUm}
          alt="flor"
          className="absolute z-0 opacity-15 -right-48"
        />
        <Image
          src={florDois}
          alt="flor"
          className="absolute z-0 opacity-15 -left-48"
        />

        <div className="flex z-10 flex-row justify-center items-center space-y-4">
          <Image src={logoSite} alt="Logo" width={32} height={32} />
        </div>

        <div className="relative z-10">
          <div className="mt-8 flex flex-col items-center justify-center text-center font-headline text-primary p-4">
            <h1 className="text-5xl md:text-7xl font-bold">Júlia & Pedro</h1>
            <p className="mt-16 max-w-lg">
              Convidamos você para o nosso Chá de Panela! Ficaremos muito
              felizes com a sua presença.
            </p>
            <Separator className="my-8 bg-border/50" />
            <h2 className="md:text-3xl font-bold">
              07 • março • 2026 • às 17h
            </h2>

            {/* Modal de RSVP com Múltiplas Pessoas */}
            <div className="flex flex-row items-center justify-center gap-2 mt-8">
              <Dialog open={isRsvpOpen} onOpenChange={setIsRsvpOpen}>
                <DialogTrigger asChild>
                  {hasConfirmed ? (
                    <Button
                      disabled
                      className="bg-gray-400 text-white h-auto py-4 px-8 text-lg rounded-full cursor-not-allowed"
                    >
                      Presença confirmada!
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-primary text-white h-auto py-4 px-8 text-lg hover:bg-primary/90 rounded-full shadow-lg"
                    >
                      Confirmar presença
                    </Button>
                  )}
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[450px] rounded-lg max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-headline text-primary text-center">
                      Confirmar Presença
                    </DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={handleRsvpSubmit}
                    className="grid gap-4 py-4 px-1"
                  >
                    {guests.map((guest, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg bg-muted/20 space-y-3 relative"
                      >
                        <div className="flex justify-between items-center">
                          <Label className="font-bold">
                            Convidado {index + 1}
                          </Label>
                          {index > 0 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeGuestField(index)}
                              className="text-destructive h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <Input
                          required
                          value={guest.name}
                          onChange={(e) =>
                            updateGuestData(index, "name", e.target.value)
                          }
                          placeholder="Nome"
                        />
                        <Input
                          required
                          value={guest.rg}
                          onChange={(e) =>
                            updateGuestData(index, "rg", e.target.value)
                          }
                          placeholder="RG"
                        />
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addGuestField}
                      className="flex gap-2"
                    >
                      <Plus className="h-4 w-4" /> Adicionar pessoa
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg"
                    >
                      {isSubmitting ? "Enviando..." : "Confirmar Agora"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {hasConfirmed && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setHasConfirmed(false); // Permite abrir o modal novamente
                    setIsRsvpOpen(true);
                  }}
                  className="h-14 w-14 rounded-full border-primary text-primary hover:bg-primary/10 shadow-md"
                  title="Adicionar outra confirmação"
                >
                  <Plus className="h-6 w-6" />
                </Button>
              )}
            </div>
            <p className="my-2 text-sm opacity-70">
              Confirmar presença até 2 de março
            </p>
            <p className="my-2 text-sm opacity-70">
              Para confirmar a sua presença, basta clicar no botão acima e
              inserir os seus dados,
              <br /> que serão necessários para a liberação de acesso no dia.
            </p>
            <Separator className="my-8 bg-border/50" />
          </div>
          <ChaLocationSection />
        </div>

        <div className="flex flex-col text-center mt-8 mx-4">
          <h1 className="font-headline text-primary md:text-3xl font-bold">
            Sugestão de cores
          </h1>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 mb-12 relative z-10">
          {[
            { img: branco, label: "Branco" },
            { img: preto, label: "Preto" },
            { img: inox, label: "Inox" },
            { img: transparente, label: "Vidro" },
          ].map((cor, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={cor.img}
                alt={cor.label}
                className="rounded-full border shadow-sm"
                width={60}
                height={60}
              />
              <p className="mt-2 text-sm font-medium">{cor.label}</p>
            </div>
          ))}
        </div>

        <Separator />

        <div id="presentes" className="font-headline mt-8">
          <h2 className="font-headline text-center text-primary md:text-3xl font-bold">
            Nossa Lista de Chá de Panela 🤍
          </h2>
          <div className="flex flex-col text-center md:text-start md:flex-row p-8 gap-4">
            <p className="md:my-2 text-sm text-primary">
              Preparamos esta lista com muito carinho com algumas sugestões para
              o nosso novo lar. São apenas ideias do que estamos precisando, mas
              sintam-se totalmente livres para nos presentear da forma que
              acharem melhor! Para facilitar, deixamos três opções em cada item:
              <strong>Pix</strong>: Para contribuir com o valor do presente de
              forma rápida e prática, clicando em presentear.{" "}
              <strong>Comprar Online</strong>: Clicando no link da loja para
              comprar e mandar entregar direto na nossa casa.
            </p>
            <p className="md:my-2 text-sm text-primary">
              <strong>Comprar fisicamente e levar no dia</strong>: Prefere
              escolher o presente pessoalmente e levar no dia do chá? Nós
              amamos! Só pedimos que você selecione o presente aqui na lista e
              coloque seu nome para reservá-lo. Assim, nos ajudam a não termos
              presentes repetidos. A nossa maior alegria é ter vocês celebrando
              essa fase tão especial com a gente. Muito obrigada pela presença e
              por todo o carinho!
            </p>
          </div>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-xl border mx-4">
          <div className="flex items-center gap-2 flex-1">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="available">Disponíveis</SelectItem>
                <SelectItem value="gifted">Presenteados</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-desc">Preço: Maior</SelectItem>
                <SelectItem value="price-asc">Preço: Menor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grade de Presentes - Agora com 2 colunas no Mobile */}
        {isLoading ? (
          <div className="text-center py-20 animate-pulse">
            Carregando presentes...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-20 px-4">
            {processedGifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onContribute={handleContribute}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
