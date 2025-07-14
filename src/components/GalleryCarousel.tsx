const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const GalleryCarousel = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-navy mb-8 text-center">Gallery</h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="flex-shrink-0 w-80 h-48 object-cover rounded-lg snap-center"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel; 