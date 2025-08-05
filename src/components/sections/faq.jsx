import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ items }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            We've compiled a list of the most frequently asked questions to
            provide you with quick answers.
          </p>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-lg text-slate-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
