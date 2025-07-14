import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is included in the cruise?", a: "Champagne, DJ, snacks, commentary." },
  { q: "How many guests can join?", a: "Up to 12 guests." },
  { q: "What is the duration?", a: "2 hours." },
  { q: "Is there a cancellation policy?", a: "Yes, 24 hours notice required." },
  { q: "Are children allowed?", a: "Yes, family-friendly." },
];

const FAQs = () => {
  return (
    <section id="faqs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-navy mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs; 