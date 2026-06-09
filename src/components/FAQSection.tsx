import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is PCS IT Solutions Pvt. Ltd.?", a: "PCS IT Solutions Pvt. Ltd. is a Pune-registered healthcare technology startup founded in 2017. We are building NeuroWellness — a neuromodulation therapy management platform for clinics and patients managing neurological and mental health conditions across India." },
  { q: "What is NeuroWellness?", a: "NeuroWellness is our flagship product — a B2B clinic-facing platform for managing neuromodulation therapies, electronic medical records (EMRs), appointments, and care workflows. It is paired with a B2C patient mobile app for monitoring therapy progress and staying connected with treating clinicians. We are targeting neurological and mental health clinics across India, with a planned launch in 2026." },
  { q: "Who can use NeuroWellness?", a: "NeuroWellness serves two audiences: clinics and healthcare providers (B2B) who need a purpose-built platform to manage neuromodulation therapy protocols, patient records, and scheduling; and patients (B2C) who want to track their treatment journey, manage appointments, and stay informed about their care plan." },
  { q: "How can a clinic partner with us?", a: "We are currently onboarding early clinic partners for the NeuroWellness platform. If you are a clinic offering neuromodulation therapies — such as TMS, tDCS, or neurofeedback — reach out to us at deepak@pcsitspl.com to schedule a product demo and discuss an early partnership." },
  { q: "Is PCS IT Solutions an Indian company?", a: "Yes. PCS IT Solutions Pvt. Ltd. is incorporated and registered in India, headquartered in Pune, Maharashtra. Our founding team is Pune-based, and our product is built specifically for India's healthcare market." },
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
