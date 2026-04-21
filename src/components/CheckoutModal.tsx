import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export interface PromotionOffer {
  id: string;
  title: string;
  price: number;
  cashPrice?: number;
  cashPriceText?: string;
  installmentsText?: string;
  image: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  offer: PromotionOffer | null;
}

export function CheckoutModal({ isOpen, onOpenChange, offer }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simula uma chamada à API e a futura integração do Mercado Pago
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.info("Integração do Mercado Pago", {
        description: "A API do MercadoPago será adicionada aqui em breve.",
      });
    }, 1500);
  };

  if (!offer) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-graphite border border-sand/10 text-sand shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gold font-heading">
            Finalizar Compra
          </DialogTitle>
          <DialogDescription className="text-sand/70">
            Preencha seus dados para prosseguir com o pagamento seguro.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-4 py-4 mb-2 border-b border-sand/5">
          <img 
            src={offer.image} 
            alt={offer.title} 
            className="w-16 h-16 object-cover rounded-md border border-gold/30 bg-black/50" 
          />
          <div>
            <h4 className="font-semibold text-sand line-clamp-1">{offer.title}</h4>
            <div className="flex flex-col gap-0.5 mt-1">
              {offer.installmentsText && (
                <span className="text-xs text-sand/60">{offer.installmentsText}</span>
              )}
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-lg">
                  R$ {offer.price.toFixed(2).replace('.', ',')}
                </span>
                {offer.cashPriceText ? (
                  <span className="text-xs text-sand/80 bg-sand/10 px-2 py-0.5 rounded-sm">
                    {offer.cashPriceText}
                  </span>
                ) : offer.cashPrice ? (
                  <span className="text-xs text-sand/80 bg-sand/10 px-2 py-0.5 rounded-sm">
                    ou R$ {offer.cashPrice.toFixed(2).replace('.', ',')} à vista
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleCheckout} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sand/90">Nome Completo</Label>
            <Input 
              id="name" 
              required 
              placeholder="Seu nome" 
              className="bg-black/40 border-sand/20 text-sand placeholder:text-sand/30 focus-visible:ring-gold" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sand/90">E-mail</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="seu@email.com" 
              className="bg-black/40 border-sand/20 text-sand placeholder:text-sand/30 focus-visible:ring-gold" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-sand/90">CPF</Label>
            <Input 
              id="cpf" 
              required 
              placeholder="000.000.000-00" 
              className="bg-black/40 border-sand/20 text-sand placeholder:text-sand/30 focus-visible:ring-gold" 
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#009EE3] hover:bg-[#008ACA] text-white font-semibold flex items-center justify-center gap-2 h-12 transition-colors rounded-md"
            >
              {loading ? (
                <span>Processando...</span>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Pagar com Mercado Pago
                </>
              )}
            </Button>
            
            <div className="flex items-center justify-center gap-1.5 mt-4 opacity-70">
              <ShieldCheck className="w-4 h-4 text-[#009EE3]" />
              <span className="text-xs text-sand/80 font-medium">Ambiente 100% seguro pelo Mercado Pago</span>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
