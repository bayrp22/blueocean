import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What locations do you operate from?",
      answer: "We depart daily from the Cabo San Lucas Marina, with ample parking and nearby hotel shuttles. If you need pickup service from your resort or office, just let us know."
    },
    {
      question: "How long are your cruises?",
      answer: "Our standard cruise is 2 hours, but we offer flexible options from 2-8 hours depending on your needs and preferences."
    },
    {
      question: "What is the capacity of each vessel?",
      answer: "Our 50-ft power catamaran comfortably accommodates up to 22 guests with plenty of space for everyone to relax and enjoy."
    },
    {
      question: "Do you offer private charters and custom itineraries?",
      answer: "Yes! We specialize in private charters and can customize the experience to your preferences, including routes, activities, and catering options."
    },
    {
      question: "What's included in the price?",
      answer: "All charters include professional crew, fuel, sound system, freshwater rinse, and basic amenities. Food and beverages can be added based on your preferences."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 48 hours before your departure time. Within 48 hours, cancellations are subject to a 50% fee."
    },
    {
      question: "How do I book or get a quote?",
      answer: "You can book directly through our website, call us at +52 800 953 1463, or send us an inquiry through our contact form for a custom quote."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faqs" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header and Text */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-6 py-3 bg-gray-900 text-white text-base rounded-full mb-6">
              FAQs
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Answering your questions
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Got more questions? Send us your enquiry below
            </p>
            
            <div className="relative group cursor-pointer inline-flex" onClick={scrollToContact}>
              <div className="bg-gray-800 text-white rounded-full px-6 py-3 text-lg font-medium flex items-center gap-3 relative overflow-hidden transition-all duration-500 group-hover:text-gray-800">
                <span className="relative z-20">Get in touch</span>
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

          {/* Right Side - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-8 bg-gray-50">
                  <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-gray-700 py-8">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600 pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 