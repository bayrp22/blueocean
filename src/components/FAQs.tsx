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
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Answering your questions
          </h2>
          <p className="text-xl text-gray-600">
            Got more questions? Send us your enquiry below
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-gray-700 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 