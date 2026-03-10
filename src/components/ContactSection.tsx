import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-3">
            Let's Talk About<br />Your IT Needs
          </h2>
          <p className="text-sm text-muted-foreground">
            Schedule a demo or consultation with our experts. We're here to help you build technology solutions that drive growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4">
            <Input placeholder="Full Name" className="rounded-xl" />
            <Input placeholder="Email Address" type="email" className="rounded-xl" />
            <Input placeholder="+91 Phone Number" type="tel" className="rounded-xl" />
            <Textarea placeholder="Your Message" className="rounded-xl min-h-[120px]" />
            <div className="flex gap-3">
              <Button className="rounded-full px-6 text-sm">Send Message</Button>
              <Button variant="outline" className="rounded-full px-6 text-sm">Schedule a Demo</Button>
            </div>
          </form>
          <div className="space-y-6">
            {[
              { icon: MapPin, text: "New Delhi, India" },
              { icon: Phone, text: "+1-188-533-5525" },
              { icon: Mail, text: "contact@pcsitspl.com" },
              { icon: Clock, text: "Mon–Sat: 9AM – 6PM IST" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
