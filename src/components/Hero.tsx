import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen">
      {/* Mobile: Full-width background image */}
      <div className="lg:hidden relative w-full h-full">
        <img
          src="/Blue Ocean 7.jpg"
          alt="Blue Ocean Catamaran at Cabo Arch"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>

        {/* Mobile Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 py-20 h-full relative z-10">
            <div className="flex items-center justify-center h-full">
              <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Charter Cabo's Most Iconic Yacht
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Private experiences aboard our signature catamaran—tailored for adventure, romance, or celebration
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 mx-auto"
                >
                  Check Availability
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Mobile Testimonial */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-white text-sm mb-2 leading-relaxed">
                "Blue Ocean gave us the best part of our trip to Cabo — We enjoyed a full day of fishing, swimming, eating, drinking, and lounging. A beautiful sunset to top it off."
              </p>
              <p className="text-white text-sm font-medium">— Jane Soto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Black background with grid layout */}
      <div className="hidden lg:block bg-black h-full">
        <div className="h-full flex">
          {/* Left side - Content */}
          <div className="flex-1 flex items-center pl-16">
            <div className="max-w-xl">
              <h1 className="text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Charter Cabo's Most Iconic Yacht
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
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
          </div>

          {/* Right side - Image Container pegged to right with margin */}
          <div className="w-1/2 h-full p-8 pr-8">
            <div className="relative w-full h-full rounded-3xl overflow-hidden ml-auto">
              <img
                src="/Blue Ocean 7.jpg"
                alt="Blue Ocean Catamaran at Cabo Arch"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Testimonial overlay on image */}
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white text-sm mb-2 leading-relaxed">
                  "Blue Ocean gave us the best part of our trip to Cabo — We enjoyed a full day of fishing, swimming, eating, drinking, and lounging. A beautiful sunset to top it off."
                </p>
                <p className="text-white text-sm font-medium">— Jane Soto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 