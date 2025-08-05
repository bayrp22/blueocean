import { useState, useEffect } from "react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Blue Ocean 5.jpg",
    "/Blue Ocean 6.jpg", 
    "/Blue Ocean 7.jpg",
    "/Blue Ocean 8.jpg",
    "/Blue Ocean alt.jpg",
    "/Blue Ocean.jpg"
  ];

  // Continuous animation for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 0.015);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Create multiple copies for seamless infinite scroll
  const infiniteImages = [...images, ...images, ...images, ...images];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="w-full py-20">
        {/* Text Content */}
        <div className="container mx-auto px-6 max-w-7xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                50-ft Power<br />
                Catamaran:<br />
                Made for Waves
              </h2>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <p className="text-lg lg:text-xl text-gray-700">
                • Up to <strong>22 guests</strong> on a <strong>50-ft power catamaran</strong> (fast, stable, comfortable)
              </p>
              <p className="text-lg lg:text-xl text-gray-700">
                • <strong>Shaded lounge + sun deck</strong>, premium sound, freshwater rinse
              </p>
              <p className="text-lg lg:text-xl text-gray-700">
                • <strong>Pro crew</strong> handles routes, gear, and service—<strong>just show up</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Image Carousel - Full Width Edge to Edge */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex"
            style={{
              transform: `translateX(-${(currentImageIndex * 2.5) % (images.length * 25)}%)`,
              transition: 'transform 0.1s linear',
              width: `${infiniteImages.length * 25}%`
            }}
          >
            {infiniteImages.map((image, index) => (
              <div key={index} className="w-full md:w-1/4 px-3">
                <img
                  src={image}
                  alt={`Experience ${(index % images.length) + 1}`}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 