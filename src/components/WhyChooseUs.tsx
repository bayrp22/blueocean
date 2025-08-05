const About = () => {
  const images = [
    "/Blue Ocean 5.jpg",
    "/Blue Ocean 6.jpg", 
    "/Blue Ocean 7.jpg",
    "/Blue Ocean 8.jpg",
    "/Blue Ocean alt.jpg",
    "/Blue Ocean.jpg"
  ];

  // Create multiple copies for seamless infinite scroll
  const infiniteImages = [...images, ...images, ...images, ...images];

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    <section id="about" className="min-h-screen flex items-center bg-white">
              <div className="w-full pt-12 pb-20">
        {/* Text Content */}
        <div className="container mx-auto px-6 max-w-7xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div>
            <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-8">
              The Blue Ocean Experience
            </h2>
            <div className="relative group cursor-pointer inline-flex">
              <div className="bg-gray-800 text-white rounded-full px-6 py-3 text-lg font-medium flex items-center gap-3 relative overflow-hidden transition-all duration-500 group-hover:text-gray-800">
                <span className="relative z-20">Book Now</span>
                <div className="relative flex items-center justify-center">
                  {/* Expanding white circle - scales from arrow position */}
                  <div className="absolute w-6 h-6 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:scale-[24] transform-origin-center z-10"></div>
                  {/* Arrow circle - becomes dark on hover */}
                  <div className="relative z-20 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800">
                    <svg className="w-3 h-3 text-gray-800 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
                      <div className="flex flex-col justify-center">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Enjoy a private experience aboard our 50-ft power catamaran <strong><i>"Made for Waves"</i></strong>, stability, and comfort. Perfect for groups of up to <strong>22 guests</strong>. Relax between the shaded lounge and spacious sun deck, with premium sound onboard and a freshwater rinse to cool off after a swim. Our professional crew takes care of everything, from navigation and gear to full service on board, including <strong>food service and premium open bar</strong>. Just show up & enjoy the ride!
            </p>
          </div>
          </div>
        </div>

        {/* Image Carousel - Full Width Edge to Edge */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex"
            style={{
              width: `${infiniteImages.length * 25}%`,
              animation: 'infinite-scroll 120s linear infinite',
              willChange: 'transform'
            }}
          >
            {infiniteImages.map((image, index) => (
              <div key={index} className="w-full md:w-1/4" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <img
                  src={image}
                  alt={`Experience ${(index % images.length) + 1}`}
                  className="w-full h-64 lg:h-80 object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About; 