import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Upload, ArrowLeft, Users, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Careers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Resume Submission — ${name}`;
    const body = `Hi PCS IT Solutions,\n\nI would like to share my resume and express my interest in working with PCS.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}\n\nPlease find my resume attached to this email.\n\nBest regards,\n${name}`;
    window.open(
      `mailto:contact@pcsdatai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#081627]/5 via-white to-[#081627]/5">
        <div className="container mx-auto max-w-3xl text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Join the <span className="text-primary">PCS</span> Team
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We're a tight-knit team building world-class technology solutions. If you're driven, curious, and want to make an impact — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Why PCS + Resume Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Why cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                desc: "Work alongside experienced engineers and consultants across AI, Data, and Cloud disciplines.",
              },
              {
                icon: Lightbulb,
                title: "Cutting-Edge Tech",
                desc: "Get hands-on with the latest in AI, LLMs, data engineering, and cloud infrastructure.",
              },
              {
                icon: Heart,
                title: "Meaningful Work",
                desc: "Deliver solutions that create real business impact for clients across the globe.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-white p-6 text-center space-y-3 hover:shadow-elevated hover:border-primary/30 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Resume submission card */}
          <div className="rounded-2xl border border-border bg-white p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-xs text-primary mb-4">
                <Mail className="h-3 w-3" /> Share Your Resume
              </div>
              <h2 className="text-2xl font-semibold mb-2">Interested in Working at PCS?</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We're always looking for talented people. Fill in your details and share your resume — we'll reach out when there's a great fit.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Or email us directly at{" "}
                <a href="mailto:contact@pcsdatai.com" className="text-primary hover:underline font-medium">
                  contact@pcsdatai.com
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-xl"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl"
                />
              </div>
              <Input
                placeholder="Your Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl"
              />
              <Textarea
                placeholder="Tell us about yourself and what kind of role you're interested in..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl min-h-[120px]"
              />

              {/* Resume file picker */}
              <div>
                <input
                  type="file"
                  ref={fileRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 py-4 text-sm text-muted-foreground hover:text-primary transition-all"
                >
                  <Upload className="h-4 w-4" />
                  {fileName ? fileName : "Add Your Resume (PDF, DOC, DOCX)"}
                </button>
              </div>

              <Button type="submit" className="w-full rounded-full text-sm" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Send to contact@pcsdatai.com
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Clicking Send will open your email client with your details pre-filled. Please attach your resume file before sending.
              </p>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Careers;
