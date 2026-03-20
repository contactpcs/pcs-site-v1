import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is PCS IT Solutions?", a: "PCS IT Solutions Pvt Ltd is a technology partner that specializes in engineering and software solutions. We deliver custom software development, product engineering, cloud infrastructure, enterprise automation, and 24/7 IT support for businesses of all sizes." },
  { q: "What services does PCS offer?", a: "We offer end-to-end IT services including custom software development, product engineering, cloud & infrastructure management (AWS, Azure, GCP), enterprise solutions (ERP, CRM), IT consulting, and round-the-clock IT support & AMC services." },
  { q: "Which technologies does PCS work with?", a: "Our tech stack includes Java, Spring Boot, React, Node.js, PostgreSQL, MongoDB, AWS, Azure, Docker, Kubernetes, and many more industry-proven technologies." },
  { q: "How can I get started with PCS?", a: "You can book a free consultation through our website. We'll assess your requirements, propose a technology roadmap, and get started with a tailored solution for your business." },
  { q: "Does PCS provide 24/7 support?", a: "Yes! We provide round-the-clock technical support, proactive monitoring, and Annual Maintenance Contract (AMC) services to ensure maximum uptime and operational continuity." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold mb-10 leading-tight">
          Frequently Asked<br />Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="text-sm font-semibold text-left py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
