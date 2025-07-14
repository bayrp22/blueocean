import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy p-4 text-center md:hidden">
        <Button className="bg-gold text-navy" asChild>
          <a href="#pricing">Reserve Your Spot</a>
        </Button>
      </div>
      <a
        href="https://wa.me/1234567890" // Replace with actual number
        className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </>
  );
};

export default StickyCTA; 