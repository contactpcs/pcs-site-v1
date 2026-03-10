import responsiveDesignImg from "@/assets/Responsive Design.jpg";
import reactWebImg from "@/assets/React Web Development.jpg";
import androidAppsImg from "@/assets/Android Apps Development.jpg";
import uxuiImg from "@/assets/UXUI Design.png";
import aimlImg from "@/assets/AIML.jpg";
import iosAppsImg from "@/assets/iOS Apps Development.webp";

const designServices = [
  {
    title: "Responsive Design",
    desc: "We create websites that adapt to any device or screen size, providing an enjoyable experience for our customers",
    image: responsiveDesignImg,
  },
  {
    title: "React Web Development",
    desc: "Experience our first-class React.js improvement administrations to construct user-friendly dynamic, reliable, and natural websites fulfilling all your business goals and needs.",
    image: reactWebImg,
  },
  {
    title: "Android Apps Development",
    desc: "We create websites that adapt to any device or screen size, providing an enjoyable experience for our customers",
    image: androidAppsImg,
  },
  {
    title: "UX/UI Design",
    desc: "We create websites that adapt to any device or screen size, providing an enjoyable experience for our customers",
    image: uxuiImg,
  },
  {
    title: "AI/ML",
    desc: "We create websites that adapt to any device or screen size, providing an enjoyable experience for our customers",
    image: aimlImg,
  },
  {
    title: "iOS Apps Development",
    desc: "We create websites that adapt to any device or screen size, providing an enjoyable experience for our customers",
    image: iosAppsImg,
  },
];

const DesignDevelopmentSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <style>{`
        .design-card {
          transition: all 0.4s ease-out;
        }
        .design-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }
        .design-card-img {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .design-card:hover .design-card-img img {
          transform: scale(1.05);
        }
        .design-card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(248,250,252,0.5) 70%, rgba(248,250,252,0.95) 100%);
          pointer-events: none;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight mb-4">
            Design & Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designServices.map((service, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-elevated design-card flex flex-col"
            >
              {service.image && (
                <div className="design-card-img relative w-full h-40 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopmentSection;
