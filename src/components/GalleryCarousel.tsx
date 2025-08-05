import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GalleryCarousel = () => {
  const images = [
    {
      src: "/placeholder.svg",
      alt: "Yacht interior galley",
      caption: "Modern galley with full amenities"
    },
    {
      src: "/placeholder.svg", 
      alt: "Fishing catch",
      caption: "Trophy catches with our expert crew"
    },
    {
      src: "/placeholder.svg",
      alt: "Aerial view of catamaran",
      caption: "50-ft power catamaran from above"
    },
    {
      src: "/placeholder.svg",
      alt: "Group fishing",
      caption: "Fun for the whole group"
    },
    {
      src: "/placeholder.svg",
      alt: "Sunset dining",
      caption: "Dining with ocean views"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="absolute bottom-4 left-4 text-white text-sm">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default GalleryCarousel; 