import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricingBooking = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/bookeo
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-serif text-navy mb-4">Pricing &amp; Inclusions</h2>
          <p className="text-2xl font-bold text-gold mb-4">$1,590 / 2 hours</p>
          <ul className="list-disc pl-6 mb-4 font-sans">
            <li>Champagne at sunset</li>
            <li>Live DJ</li>
            <li>Snacks</li>
            <li>Guided commentary</li>
          </ul>
          <p className="text-red-500 font-bold">Only 5 spots left!</p>
        </div>
        <div>
          <h2 className="text-3xl font-serif text-navy mb-4">Book Your Cruise</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <Button type="submit" className="w-full bg-gold text-navy">Reserve Now</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PricingBooking; 