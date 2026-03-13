import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website Enquiry from ${name}`;
    const body = `Hi PCS IT Solutions,\n\nYou have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;
    window.open(
      `mailto:contact@pcsdatai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  const handleScheduleDemo = () => {
    const subject = "Demo Request — PCS IT Solutions";
    const body = `Hi PCS IT Solutions,\n\nI would like to schedule a demo.\n\nName: ${name || "(your name)"}\nEmail: ${email || "(your email)"}\nPhone: ${phone || "(your phone)"}\n\n${message ? `Additional info:\n${message}\n\n` : ""}Please let me know your availability.\n\nBest regards,\n${name || "(your name)"}`;
    window.open(
      `mailto:contact@pcsdatai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

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
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <form className="space-y-4" onSubmit={handleSend}>
            <Input
              placeholder="Full Name"
              className="rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Email Address"
              type="email"
              className="rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              className="rounded-xl"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Textarea
              placeholder="Your Message"
              className="rounded-xl min-h-[120px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Clicking Send or Schedule will open your email client pre-filled with your details.
            </p>
            <div className="flex gap-3">
              <Button type="submit" className="rounded-full px-6 text-sm">Send Message</Button>
              <Button type="button" variant="outline" className="rounded-full px-6 text-sm" onClick={handleScheduleDemo}>Schedule a Demo</Button>
            </div>
          </form>

          {/* Right: contact info + map */}
          <div className="space-y-5">
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Magarpatta City, Pune, India" },
                { icon: Phone, text: "+91 724-9310743" },
                { icon: Mail, text: "contact@pcsdatai.com" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden border border-border" style={{ height: "220px" }}>
              <a
                href="https://www.google.com/maps/search/PCS+IT+Solutions+Private+Limited+Magarpatta+City+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs bg-white rounded-full px-3 py-1.5 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <ExternalLink className="h-3 w-3" /> Open in Maps
              </a>
              <iframe
                src="https://maps.google.com/maps?q=PCS+IT+Solutions+Private+Limited+Magarpatta+City+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PCS IT Solutions Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
