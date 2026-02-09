import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t py-6">
      <div className="container flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Feito com</span>
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span>por</span>
        </div>
        <p className="font-headline text-lg font-semibold text-foreground">
          Vilamargo Wedding
          <br />
          (Júlia & Pedro)
        </p>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
