const WhyChooseUs = () => {
  const benefits = [
    { icon: "🍾", title: "Champagne at Sunset", description: "Toast to the stunning views" },
    { icon: "🎧", title: "Live DJ", description: "Music to set the mood" },
    { icon: "🍤", title: "Delicious Snacks", description: "Gourmet treats included" },
  ];

  return (
    <section id="why" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-navy mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-serif text-navy mb-2">{benefit.title}</h3>
              <p className="font-sans text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 