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
    }
  ];

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="w-full py-20">
          <div className="text-center mb-16 px-6">
            <Badge className="mb-6 bg-gray-900 text-white px-6 py-2 text-sm">Testimonials</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hear from our clients
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.
            </p>
          </div>

          {/* Top Row - Scrolling Left */}
          <div className="relative mb-8 overflow-hidden whitespace-nowrap">
            <div 
              className="inline-block"
              style={{
                animation: 'marquee-left 120s linear infinite',
                willChange: 'transform'
              }}
            >
            {[...Array(8)].map((_, setIndex) => 
              testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={`top-${setIndex}-${index}`}
                  className="inline-block bg-white rounded-xl p-8 shadow-sm w-80 mr-6 whitespace-normal align-top"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </span>
                    <div className="w-24 h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

                  {/* Bottom Row - Scrolling Right */}
          <div className="relative overflow-hidden whitespace-nowrap">
            <div 
              className="inline-block"
              style={{
                animation: 'marquee-right 120s linear infinite',
                willChange: 'transform'
              }}
            >
            {[...Array(8)].map((_, setIndex) => 
              testimonials.slice(3, 6).map((testimonial, index) => (
                <div
                  key={`bottom-${setIndex}-${index}`}
                  className="inline-block bg-white rounded-xl p-8 shadow-sm w-80 mr-6 whitespace-normal align-top"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </span>
                    <div className="w-24 h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SocialProof; 