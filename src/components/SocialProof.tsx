import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SocialProof = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Wild Cabo's corporate catamaran trip was a success: smooth booking, attentive crew, and immersive networking under the stars on deck.",
      author: "Wild Loreto",
      company: "Wild Loreto"
    },
    {
      rating: 5,
      text: "Juan More Taco's VIP sunset sail with Wild Cabo was first-class—authentic tacos, live mariachi, and seamless service for a memorable client event.",
      author: "Juan More Taco",
      company: "Juan More Taco"
    },
    {
      rating: 5,
      text: "Our whale-shark expedition with Wild Cabo combined safety, sustainability, and awe-inspiring encounters—an impactful team-building experience.",
      author: "WhaleShark",
      company: "WhaleShark"
    },
    {
      rating: 5,
      text: "Booking via KAYAK and Wild Cabo was effortless. The cruise offered reliable Wi-Fi, panoramic coastal views, and engaging networking spots.",
      author: "KAYAK",
      company: "KAYAK"
    },
    {
      rating: 5,
      text: "From planning to arrival, Wild Cabo's Pirate Ship adventure delivered on every promise. Our team bonded over swashbuckling fun, expert crew support, and seamless coordination!",
      author: "Cookin' Mexico",
      company: "Cookin' Mexico"
    },
    {
      rating: 5,
      text: "Booking via KAYAK and Wild Cabo was effortless. The cruise offered reliable Wi-Fi, panoramic coastal views, and engaging networking spots.",
      author: "KAYAK",
      company: "KAYAK"
    },
    {
      rating: 5,
      text: "Our whale-shark expedition with Wild Cabo combined safety, sustainability, and awe-inspiring encounters—an impactful team-building experience.",
      author: "WhaleShark",
      company: "WhaleShark"
    },
    {
      rating: 5,
      text: "Juan More Taco's VIP sunset sail with Wild Cabo was first-class—authentic tacos, live mariachi, and seamless service for a memorable client event.",
      author: "Juan More Taco",
      company: "Juan More Taco"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-900 text-white">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear from our clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </span>
                {/* Company logo placeholder */}
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 