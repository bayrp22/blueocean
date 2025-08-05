const About = () => {
  const features = [
    "Up to 22 guests on a 50-ft power catamaran (fast, stable, comfortable)",
    "Shaded lounge + sun deck, premium sound, freshwater rinse",
    "Pro crew handles routes, gear, and service—just show up"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            50-ft Power<br />
            Catamaran:<br />
            Made for Waves
          </h2>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-4 text-gray-600">•</span>
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; 