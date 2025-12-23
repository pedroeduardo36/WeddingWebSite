"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, PartyPopper } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  guests: z.coerce.number().min(1, {
    message: "Por favor, confirme o número de convidados.",
  }).max(10, {
    message: "Para mais de 10 convidados, por favor entre em contato."
  }),
  dietaryRestrictions: z.string().optional(),
});

export default function RsvpSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: 1,
      dietaryRestrictions: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("RSVP Submitted:", values);
    setIsSubmitted(true);
    toast({
      title: "Confirmação Recebida!",
      description: "Obrigado por confirmar sua presença. Nos vemos lá!",
    });
  }

  return (
    <section id="rsvp" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Confirme sua Presença</h2>
            <p className="max-w-[900px] text-accent-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sua presença é muito importante para nós. Por favor, confirme até 02/04/2026.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <div className="mx-auto max-w-lg">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">RSVP</CardTitle>
              <CardDescription>Responda, por favor.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center space-y-4 py-8">
                  <PartyPopper className="mx-auto h-16 w-16 text-primary"/>
                  <h3 className="text-2xl font-bold font-headline">Presença confirmada!</h3>
                  <p className="text-muted-foreground">Mal podemos esperar para celebrar com você!</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de Convidados (incluindo você)</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Restrições Alimentares (opcional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Ex: vegetariano, alergia a glúten..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Confirmar Presença
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
