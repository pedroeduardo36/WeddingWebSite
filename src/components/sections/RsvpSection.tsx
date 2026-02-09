"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, PartyPopper } from "lucide-react";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Confirme sua Presença
            </h2>
            <p className="max-w-[900px] text-accent-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sua presença é muito importante para nós. Por favor, confirme
              abaixo até
              <br />
              02/04/2026.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <div className="mx-auto max-w-lg">
          <Card className="shadow-lg">
            <CardHeader className="max-w-lg mx-auto justify-center">
              <CardTitle className="text-center font-bold text-2xl">
                Clique no botão para confirmar sua presença
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                href="https://assessoriavip.com.br/rsvpUnico/468b9a00-ef9e-11ef-8ec5-7dc413e092ac"
              >
                <Button className="w-full">Confirme sua presença</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
