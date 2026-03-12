import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterSection = () => {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-gradient-to-br from-[#081627] via-[#0a1f2e] to-[#081627] py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground mb-4 leading-tight">
            Scalable IT Solutions <br />Delivered.
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-8 max-w-md mx-auto">
            Join 100+ businesses already transforming their operations with PCS IT Solutions.
          </p>

        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[#081627] py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-white/80 text-2xl font-bold mx-16">
              Web Development &nbsp;&nbsp;•&nbsp;&nbsp; Mobile Apps &nbsp;&nbsp;•&nbsp;&nbsp; AI & Machine Learning &nbsp;&nbsp;•&nbsp;&nbsp; Cloud Infrastructure &nbsp;&nbsp;•&nbsp;&nbsp; Data Migration &nbsp;&nbsp;•&nbsp;&nbsp; Custom Software Development &nbsp;&nbsp;•&nbsp;&nbsp; Enterprise Solutions &nbsp;&nbsp;•&nbsp;&nbsp; UI/UX Design
            </span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-[#081627] text-white/60 py-12 px-4">
        <style>{`
          .footer-link {
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            display: inline-block;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #0f72ba, #084ba8);
            transition: width 0.3s ease;
          }
          .footer-link:hover::after {
            width: 100%;
          }
          .footer-link:hover {
            color: #fff;
            transform: translateX(2px);
          }
          .footer-section {
            animation: fade-in-up 0.8s ease-out;
          }
          .footer-section:nth-child(2) {
            animation-delay: 0.1s;
          }
          .footer-section:nth-child(3) {
            animation-delay: 0.2s;
          }
          .footer-section:nth-child(4) {
            animation-delay: 0.3s;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="footer-section lg:col-span-2">
            <h3 className="font-bold text-white text-sm mb-2">PCS IT Solutions Pvt. Ltd.</h3>
            <p className="text-xs text-white/50 mb-4 italic">Aspire. Create. Understand</p>
            <p className="text-xs leading-relaxed mb-4">Delivering world-class IT consulting, tech services, and digital transformation solutions since 2015.</p>
            <div className="flex items-center gap-2">
              <Input placeholder="Your email" className="h-8 text-xs bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-3 transition-all hover:bg-white/15" />
              <Button size="sm" variant="secondary" className="rounded-full text-xs h-8 px-3 transition-all hover:scale-105 hover:shadow-lg">Subscribe</Button>
            </div>
          </div>

          {/* US Office */}
          <div className="footer-section">
            <h4 className="font-semibold text-white text-xs mb-4">Address USA</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <p className="font-semibold text-white mb-1">Perfect and Complete Solutions Inc.</p>
                <p>9715 Venice Blvd. Apt #4<br />Los Angeles, CA. 90034</p>
              </li>
              <li className="pt-2">
                <a href="mailto:vaasudev@perfect108.com" className="footer-link">vaasudev@perfect108.com</a>
              </li>
              <li>
                <a href="tel:+19499814976" className="footer-link">+1 (949) 981 4976</a>
              </li>
            </ul>
          </div>

          {/* India Office */}
          <div className="footer-section">
            <h4 className="font-semibold text-white text-xs mb-4">Address India</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <p className="font-semibold text-white mb-1">PCS IT Solutions Pvt Ltd</p>
                <p>6th Floor, Pentagon P2,<br />Magarpatta City, Pune - 411013</p>
              </li>
              <li className="pt-2">
                <a href="mailto:vaasudev@perfect108.com" className="footer-link">vaasudev@perfect108.com</a>
              </li>
              <li>
                <a href="tel:+917249310743" className="footer-link">+91 724-9310743</a>
              </li>
            </ul>
          </div>

          {/* Cyprus Office */}
          <div className="footer-section">
            <h4 className="font-semibold text-white text-xs mb-4">Address Cyprus</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <p className="font-semibold text-white mb-1">PCS DATA AI CY</p>
                <p>Panepistimiou, 12-14<br />Ground Floor, Pyla, 7080<br />Larnaca, Cyprus</p>
              </li>
              <li className="pt-2">
                <a href="mailto:vaasudev@perfect108.com" className="footer-link">vaasudev@perfect108.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-6 border-t border-white/10 text-xs text-center transition-colors hover:text-white/80">
          © 2025 Perfect & Complete Solutions. All Rights Reserved. | Powered by PCS IT Solutions Pvt Ltd
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
