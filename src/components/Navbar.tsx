import logo from "@/assets/logo-pcs.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const scrollLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Clients", id: "clients" },
  { label: "BOT", id: "bot" },
  { label: "Brilliant Minds", id: "minds" },
  { label: "Contact Us", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isScrolledStyle = !isHomePage || scrolled;

  const handleScrollTo = (id: string) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const linkClass = `text-[13px] font-medium relative transition-all duration-300 cursor-pointer group ${
    isScrolledStyle ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledStyle
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/10 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #1d4ed8);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.15);
          transition: left 0.4s ease;
        }
        .nav-button:hover::before {
          left: 100%;
        }
      `}</style>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" aria-label="Home" className="inline-block">
          <img src={logo} alt="PCS IT Solutions" className="h-14 transition-transform hover:scale-105 duration-300" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <a href="/" className={`${linkClass} nav-link`}>Home</a>
          {scrollLinks.map((link) => (
            <button key={link.label} onClick={() => handleScrollTo(link.id)} className={`${linkClass} nav-link`}>
              {link.label}
            </button>
          ))}
          <Link to="/careers" className={`${linkClass} nav-link`}>Careers</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => handleScrollTo("contact")}
            className={`text-[13px] rounded-full px-5 font-semibold nav-button relative z-10 ${
              isScrolledStyle
                ? "bg-[#081627] text-white hover:bg-[#0a1f35]"
                : "bg-white text-blue-900 hover:bg-white/90"
            }`}
          >
            Book a Consultation
          </Button>
        </div>

        <button className="md:hidden transition-transform hover:scale-110 duration-300" onClick={() => setOpen(!open)}>
          {open
            ? <X className={`h-5 w-5 ${isScrolledStyle ? "text-foreground" : "text-white"}`} />
            : <Menu className={`h-5 w-5 ${isScrolledStyle ? "text-foreground" : "text-white"}`} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border px-4 pb-4 pt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <a href="/" className="block text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">Home</a>
          {scrollLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScrollTo(link.id)}
              className="block w-full text-left text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Link to="/careers" className="block text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">Careers</Link>
          <Button size="sm" className="w-full rounded-full mt-2" onClick={() => handleScrollTo("contact")}>Book a Consultation</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
