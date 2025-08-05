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
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="mb-16 text-center">
          <span className="inline-block px-6 py-3 bg-gray-900 text-white text-base rounded-full mb-6">
            FAQs
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Answering your questions
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600">
            Got more questions? Send us your enquiry below
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-8">
              <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-gray-700 py-8">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 pb-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-10 py-8 text-xl font-medium flex items-center gap-3 mx-auto"
          >
            Get in touch
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 