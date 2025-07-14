const testimonials = [
  "Amazing experience! Highly recommend.",
  "Best sunset cruise in Cabo.",
  "Staff was fantastic, great value.",
  "Unforgettable evening on the water.",
];

const SocialProof = () => {
  return (
    <section id="proof" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl text-gold">★★★★★</div>
          <p className="text-xl font-sans">4.9/5 based on 824 reviews</p>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4">
          {testimonials.map((text, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md snap-center">
              <p className="font-sans text-center">&quot;{text}&quot;</p>
            </div>
          ))}
        </div>
        {/* TODO: Add auto-advancing functionality */}
      </div>
    </section>
  );
};

export default SocialProof; 