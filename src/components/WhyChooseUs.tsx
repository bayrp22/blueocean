const WhyChooseUs = () => {
  const benefits = [
    { 
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      title: "Champagne at Sunset", 
      description: "Toast to the stunning Cabo views with premium champagne as the sun sets over the Pacific" 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      title: "Live DJ", 
      description: "Professional DJ sets the perfect mood with curated music for your sunset experience" 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97L6.5 13h3l-.25-.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5l1.5 1.5V5.5L18.5 7H16z"/>
        </svg>
      ),
      title: "Gourmet Snacks", 
      description: "Delicious appetizers and refreshments to complement your luxury cruise experience" 
    },
  ];

  return (
    <section id="why" className="py-section-mobile md:py-section-desktop bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-navy mb-12 md:mb-16 text-center">
          Why Choose Our Sunset Cruise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="font-sans text-lg leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 