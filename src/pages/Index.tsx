import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight, Calendar, Star } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-school.jpg";
import studentsImage from "@/assets/students-classroom.jpg";
import prePrimaryImg from "@/assets/pre-primary.jpg";
import lowerPrimaryImg from "@/assets/lower-primary.jpg";
import upperPrimaryImg from "@/assets/upper-primary.jpg";

const stats = [
  { icon: Users, label: "Students", value: "850+" },
  { icon: GraduationCap, label: "Qualified Teachers", value: "65" },
  { icon: Trophy, label: "Years of Excellence", value: "40" },
  { icon: Star, label: "KCPE Mean Score", value: "380+" },
];

const sections = [
  {
    title: "Pre-Primary",
    description: "PP1 & PP2 — A nurturing foundation through play-based learning and discovery.",
    image: prePrimaryImg,
    path: "/pre-primary",
  },
  {
    title: "Lower Primary",
    description: "Grade 1-3 — Building core competencies in literacy, numeracy, and creativity.",
    image: lowerPrimaryImg,
    path: "/lower-primary",
  },
  {
    title: "Upper Primary",
    description: "Grade 4-6 — Preparing learners for academic excellence and national examinations.",
    image: upperPrimaryImg,
    path: "/upper-primary",
  },
];

const upcomingEvents = [
  { date: "Mar 15", title: "Term 1 Parents Day", description: "Join us for academic progress discussions." },
  { date: "Apr 5", title: "Inter-School Sports Gala", description: "Annual athletics and sports competition." },
  { date: "Apr 22", title: "Science & Innovation Fair", description: "Showcasing student projects and inventions." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Green Valley Academy Campus" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80 animate-fade-in">
              Welcome to Green Valley Academy
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-serif animate-slide-up">
              Nurturing Excellence,{" "}
              <span className="text-secondary">Shaping Futures</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed opacity-90 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              A premier Kenyan grade school offering quality CBC education from Pre-Primary through
              Upper Primary. We develop well-rounded learners ready to excel in the 21st century.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/apply"
                className="gold-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-secondary-foreground shadow-elevated transition hover:opacity-90"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-card p-6 text-center shadow-elevated">
                <stat.icon className="mx-auto mb-2 text-secondary" size={28} />
                <div className="text-2xl font-bold text-foreground font-serif">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">About Our School</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif md:text-4xl">
                A Legacy of Academic Excellence in Kenya
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Founded in 1985, Green Valley Academy has been at the forefront of quality education
                in Kenya. Our school follows the Competency-Based Curriculum (CBC) and is committed
                to developing holistic learners who excel academically, socially, and morally.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                With state-of-the-art facilities, dedicated teachers, and a nurturing environment,
                we provide every child with the tools they need to succeed.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                Discover Our Story
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl shadow-elevated">
              <img src={studentsImage} alt="Students in classroom" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* School Sections */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Our Sections</p>
            <h2 className="text-3xl font-bold text-foreground font-serif md:text-4xl">
              Three Pillars of Learning
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.title}
                to={section.path}
                className="group overflow-hidden rounded-xl bg-card shadow-card transition hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground font-serif">{section.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{section.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Stay Updated</p>
              <h2 className="text-3xl font-bold text-foreground font-serif">Upcoming Events</h2>
            </div>
            <Link to="/events" className="hidden items-center gap-1 text-sm font-semibold text-primary md:flex">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Calendar size={16} />
                  <span className="mt-0.5 text-xs font-bold">{event.date}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{event.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/events" className="text-sm font-semibold text-primary">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold font-serif md:text-4xl">Begin Your Child's Journey Today</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg opacity-80">
            Admissions are now open for the 2026 academic year. Join a community that believes in every child's potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="gold-gradient inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-secondary-foreground shadow-elevated transition hover:opacity-90"
            >
              Start Application
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-3 font-semibold transition hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
