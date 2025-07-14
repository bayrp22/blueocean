import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Shield } from "lucide-react";

const testimonials = [
  { 
    text: "Absolutely magical experience! The sunset views were breathtaking and the service was impeccable. Our group of 8 had the time of our lives.", 
    author: "Sarah Mitchell", 
    location: "Los Angeles, CA",
    date: "November 2023",
    rating: 5,
    avatar: "/avatar1.jpg",
    verified: true
  },
  { 
    text: "Best sunset cruise in Cabo! The champagne was top-notch and the DJ knew exactly what music to play. Perfect for our 10th anniversary celebration.", 
    author: "Mike & Lisa Chen", 
    location: "San Francisco, CA",
    date: "October 2023",
    rating: 5,
    avatar: "/avatar2.jpg",
    verified: true
  },
  { 
    text: "Professional crew, amazing food, and unforgettable memories. The guided commentary taught us so much about Cabo's history. Highly recommend!", 
    author: "David Rodriguez", 
    location: "Phoenix, AZ",
    date: "December 2023",
    rating: 5,
    avatar: "/avatar3.jpg",
    verified: true
  },
  { 
    text: "The highlight of our Cabo trip. Everything was perfectly organized and luxurious. The catamaran was beautiful and the staff went above and beyond.", 
    author: "Jennifer Kim", 
    location: "Seattle, WA",
    date: "September 2023",
    rating: 5,
    avatar: "/avatar4.jpg",
    verified: true
  },
  { 
    text: "Worth every penny! The 2-hour cruise felt like a dream. Great for photos, the champagne was flowing, and the sunset was absolutely stunning.", 
    author: "Robert & Maria Santos", 
    location: "Denver, CO",
    date: "January 2024",
    rating: 5,
    avatar: "/avatar5.jpg",
    verified: true
  },
];

const SocialProof = () => {
  const [rating, setRating] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('social-proof');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setRating(prev => {
            if (prev >= 4.9) {
              clearInterval(interval);
              return 4.9;
            }
            return prev + 0.1;
          });
        }, 100);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Auto-advance carousel
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (count: number = 5, size: string = "w-6 h-6") => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= count;
      stars.push(
        <Star 
          key={i} 
          className={`${size} transition-all duration-300 ${filled ? 'text-gold fill-gold' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const renderOverallStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = rating >= i;
      stars.push(
        <Star 
          key={i} 
          className={`w-6 h-6 transition-all duration-300 ${filled ? 'text-gold fill-gold' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section id="proof" className="py-section-mobile md:py-section-desktop bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4" id="social-proof">
        
        {/* Header with Animated Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-gold to-gold/80 rounded-full mb-8 shadow-lg">
            <span className="text-4xl font-bold text-navy">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex justify-center mb-4 space-x-1">
            {renderOverallStars()}
          </div>
          <p className="text-xl font-sans text-gray-600 mb-2">Based on 824 verified reviews</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>All reviews verified by TripAdvisor</span>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 md:p-10 mx-auto max-w-4xl">
                  
                  {/* Testimonial Content */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4 space-x-1">
                      {renderStars(testimonial.rating, "w-5 h-5")}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-gray-800 mb-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold/20"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=C9A26C&color=0A1F2D&size=64`;
                        }}
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="text-left">
                      <div className="font-semibold text-navy text-lg">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                      <div className="text-gray-500 text-sm">{testimonial.date}</div>
                      {testimonial.verified && (
                        <div className="flex items-center space-x-1 text-green-600 text-xs mt-1">
                          <Shield className="w-3 h-3" />
                          <span>Verified Purchase</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'} • Hover to pause</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 