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
    <section id="hero" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src="/hero-sunset.jpg" // Placeholder, replace with actual image
        alt="Sunset Cruise in Cabo San Lucas"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy opacity-70"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Sunset Cruise Cabo San Lucas</h1>
        <p className="text-xl md:text-2xl font-sans mb-8">2-hour luxury catamaran for up to 12 guests</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button variant="default" className="bg-gold text-navy hover:bg-gold/90" asChild>
            <a href="#pricing">Reserve Your Spot</a>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">Get 10% Off</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get 10% Off Your Cruise</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <Button type="submit" className="w-full">Claim Discount</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero; 