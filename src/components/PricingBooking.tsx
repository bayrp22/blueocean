import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricingBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });

  const isFormValid = formData.name && formData.email && formData.phone && formData.date;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/bookeo
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="pricing" className="py-section-mobile md:py-section-desktop bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Pricing Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 md:p-10 rounded-3xl shadow-card border border-gold/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse-slow">
                  Only 5 spots left!
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 text-center">
                Sunset Cruise Experience
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-gold mb-2">$1,590</div>
                <div className="text-xl text-gray-600">for 2 hours / up to 12 guests</div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-serif text-navy mb-4">What's Included:</h3>
                <div className="space-y-3">
                  {[
                    "Premium champagne service at sunset",
                    "Professional live DJ and sound system",
                    "Gourmet appetizers and refreshments",
                    "Expert guided commentary of Cabo",
                    "Luxury catamaran for up to 12 guests",
                    "Professional crew and safety equipment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-sans text-lg text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="relative">
            <div className="backdrop-blur-sm bg-white/80 p-8 md:p-10 rounded-3xl shadow-card border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8 text-center">
                Reserve Your Cruise
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium text-lg">Full Name</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 h-12 text-lg border-gray-300 focus:border-gold focus:ring-gold rounded-xl"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-navy font-medium text-lg">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 h-12 text-lg border-gray-300 focus:border-gold focus:ring-gold rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-navy font-medium text-lg">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 h-12 text-lg border-gray-300 focus:border-gold focus:ring-gold rounded-xl"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="date" className="text-navy font-medium text-lg">Preferred Date</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="mt-2 h-12 text-lg border-gray-300 focus:border-gold focus:ring-gold rounded-xl"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full h-14 text-lg font-semibold rounded-full transition-all duration-300 ${
                    isFormValid 
                      ? 'bg-gold text-navy hover:bg-navy hover:text-gold border-2 border-gold hover:scale-105 hover:shadow-glow' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid}
                >
                  {isFormValid ? 'Reserve Now - $1,590' : 'Please Complete All Fields'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBooking; 