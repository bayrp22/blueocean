import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero-sunset.jpg" // Placeholder, replace with actual image
        alt="Sunset Cruise in Cabo San Lucas"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-transparent"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Sunset Cruise Cabo San Lucas
        </h1>
        <p className="text-xl md:text-2xl font-sans mb-12 leading-relaxed max-w-2xl mx-auto">
          2-hour luxury catamaran experience for up to 12 guests with champagne, live DJ, and guided commentary
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <Button 
            size="lg"
            className="bg-gold text-navy hover:bg-navy hover:text-gold border-2 border-gold rounded-full px-8 py-4 text-lg font-semibold transition-all duration-150 hover:scale-105 hover:shadow-glow"
            asChild
          >
            <a href="#pricing">Book Your Sunset Cruise</a>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="text-gold text-lg font-medium hover:underline underline-offset-4 transition-all duration-150">
                Get 10% Off
              </button>
            </DialogTrigger>
            <DialogContent className="backdrop-blur-glass bg-white/90 border-gold/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-navy">Get 10% Off Your Cruise</DialogTitle>
              </DialogHeader>
              <form className="space-y-6 mt-6">
                <div>
                  <Label htmlFor="email" className="text-navy font-medium">Email</Label>
                  <Input id="email" type="email" className="mt-2 border-gold/30 focus:border-gold" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-navy font-medium">Phone</Label>
                  <Input id="phone" type="tel" className="mt-2 border-gold/30 focus:border-gold" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gold text-navy hover:bg-navy hover:text-gold border-2 border-gold rounded-full py-3 text-lg font-semibold transition-all duration-150"
                >
                  Claim Your Discount
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero; 