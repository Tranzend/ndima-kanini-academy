import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import schoolCrest from "@/assets/school-crest.png";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={schoolCrest} alt="Crest" className="h-12 w-12 object-contain brightness-110" />
              <h3 className="text-lg font-bold font-serif">Green Valley Academy</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Providing quality CBC education in Kenya since 1985. We nurture every child's potential through
              holistic learning, character development, and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Admissions", path: "/apply" },
                { label: "Blog", path: "/blog" },
                { label: "Events", path: "/events" },
                { label: "Fees Structure", path: "/fees" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="opacity-80 transition hover:opacity-100 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">Academics</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Pre-Primary (PP1 & PP2)", path: "/pre-primary" },
                { label: "Lower Primary (Grade 1-3)", path: "/lower-primary" },
                { label: "Upper Primary (Grade 4-6)", path: "/upper-primary" },
                { label: "Our Staff", path: "/staff" },
                { label: "Our History", path: "/history" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="opacity-80 transition hover:opacity-100 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">P.O. Box 12345, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 opacity-70" />
                <span className="opacity-80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 opacity-70" />
                <span className="opacity-80">info@greenvalleyacademy.ac.ke</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">Mon - Fri: 7:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Green Valley Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
