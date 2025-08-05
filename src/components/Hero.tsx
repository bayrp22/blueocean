import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Blue Ocean Catamaran"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Charter Cabo's Most Iconic Yacht
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Private experiences aboard our signature catamaran—tailored for adventure, romance, or celebration
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2"
          >
            Check Availability
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        {/* Testimonial */}
        <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-sm hidden lg:block">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <p className="text-white text-sm italic mb-2">
            "Blue Ocean gave us the best part of our trip to Cabo — We enjoyed a full day of fishing, swimming, eating, drinking, and lounging. A beautiful sunset to top it off."
          </p>
          <p className="text-white text-sm">— Jane Soto</p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 