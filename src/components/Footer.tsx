import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { SCHOOL } from "@/lib/school";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logo}
                alt="Crest"
                className="h-12 w-12 object-contain brightness-110"
              />
              <h3 className="text-lg font-bold font-serif">{SCHOOL.name}</h3>
            </div>
            <p className="mb-3 text-sm italic opacity-90">"{SCHOOL.motto}"</p>
            <p className="text-sm leading-relaxed opacity-80">
              A mixed day and boarding primary school in Karatina, offering
              quality CBC education that nurtures every child's potential
              through holistic learning and character development.
            </p>
            <a
              href={SCHOOL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm font-semibold transition hover:bg-primary-foreground/20"
            >
              <Facebook size={16} />
              Follow on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Mission & Motto", path: "/mission-values" },
                { label: "Admissions", path: "/apply" },
                { label: "Gallery", path: "/gallery" },
                { label: "Blog", path: "/blog" },
                { label: "Events", path: "/events" },
                { label: "Fees Structure", path: "/fees" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="opacity-80 transition hover:opacity-100 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">
              Academics
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Pre-Primary (PP1 & PP2)", path: "/pre-primary" },
                { label: "Lower Primary (Grade 1-3)", path: "/lower-primary" },
                { label: "Upper Primary (Grade 4-6)", path: "/upper-primary" },
                { label: "Day & Boarding", path: "/boarding" },
                { label: "Our Staff", path: "/staff" },
                { label: "Our History", path: "/history" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="opacity-80 transition hover:opacity-100 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">{SCHOOL.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 opacity-70" />
                <div className="flex flex-col opacity-80">
                  {SCHOOL.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+254${p.replace(/\s|^0/g, "")}`}
                      className="hover:underline"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 opacity-70" />
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="opacity-80 hover:underline"
                >
                  {SCHOOL.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">{SCHOOL.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          <p>
            &copy; {new Date().getFullYear()} {SCHOOL.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
