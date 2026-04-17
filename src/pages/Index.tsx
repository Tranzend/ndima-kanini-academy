import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  BookOpen,
  Trophy,
  ArrowRight,
  Calendar,
  Star,
  Bed,
  Sun,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-school.jpg";
import studentsImage from "@/assets/students-classroom.jpg";
import prePrimaryImg from "@/assets/pre-primary.jpg";
import lowerPrimaryImg from "@/assets/lower-primary.jpg";
import upperPrimaryImg from "@/assets/upper-primary.jpg";
import { SCHOOL } from "@/lib/school";

const stats = [
  { icon: Users, label: "Learners", value: "500+" },
  { icon: GraduationCap, label: "Qualified Teachers", value: "30+" },
  { icon: Bed, label: "Day & Boarding", value: "Mixed" },
  { icon: Star, label: "CBC Aligned", value: "PP1 - Grade 6" },
];

const sections = [
  {
    title: "Pre-Primary",
    description:
      "PP1 & PP2 — A nurturing foundation through play-based learning and discovery.",
    image: prePrimaryImg,
    path: "/pre-primary",
  },
  {
    title: "Lower Primary",
    description:
      "Grade 1-3 — Building core competencies in literacy, numeracy and creativity.",
    image: lowerPrimaryImg,
    path: "/lower-primary",
  },
  {
    title: "Upper Primary",
    description:
      "Grade 4-6 — Preparing learners for academic excellence and Junior Secondary.",
    image: upperPrimaryImg,
    path: "/upper-primary",
  },
];

const upcomingEvents = [
  {
    date: "Mar 15",
    title: "Term 1 Parents Day",
    description: "Meet teachers and review your child's progress.",
  },
  {
    date: "Apr 5",
    title: "Inter-School Sports Gala",
    description: "Annual athletics and games competition.",
  },
  {
    date: "Apr 22",
    title: "Science & Innovation Fair",
    description: "Showcasing learner projects and inventions.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${SCHOOL.name} campus in Karatina`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80 animate-fade-in">
              Welcome to {SCHOOL.name}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-serif animate-slide-up">
              Love and Justice{" "}
              <span className="text-secondary">to the Child</span>
            </h1>
            <p
              className="mb-8 text-lg leading-relaxed opacity-90 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              A mixed day and boarding primary school in Karatina, offering
              quality CBC education from Pre-Primary through Upper Primary. We
              nurture confident, compassionate learners ready for tomorrow.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                to="/apply"
                className="gold-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-accent-foreground shadow-elevated transition hover:opacity-90"
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
              <div
                key={stat.label}
                className="rounded-lg bg-card p-6 text-center shadow-elevated"
              >
                <stat.icon className="mx-auto mb-2 text-secondary" size={28} />
                <div className="text-2xl font-bold text-foreground font-serif">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
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
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                About Our School
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif md:text-4xl">
                Quality Education Rooted in Love & Justice
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {SCHOOL.name} is a mixed day and boarding primary school in
                Karatina, Nyeri County. We follow Kenya's Competency-Based
                Curriculum (CBC) and are committed to developing holistic
                learners who excel academically, socially and morally.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Our motto, <em>"{SCHOOL.motto}"</em>, guides everything we do —
                every learner is welcomed, valued and supported to reach their
                full potential.
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
              <img
                src={studentsImage}
                alt="Learners in classroom"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Sections */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Sections
            </p>
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
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground font-serif">
                    {section.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {section.description}
                  </p>
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

      {/* Day & Boarding teaser */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/boarding"
              className="group overflow-hidden rounded-xl border border-border bg-card p-8 shadow-card transition hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bed className="text-primary" size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground font-serif">
                Boarding Section
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Comfortable dormitories, balanced meals, supervised prep and
                pastoral care — a true home away from home.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              to="/boarding"
              className="group overflow-hidden rounded-xl border border-border bg-card p-8 shadow-card transition hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <Sun className="text-secondary" size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground font-serif">
                Day Section
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Reliable school transport, hot lunch, extended care and the same
                quality CBC programme as our boarders.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Stay Updated
              </p>
              <h2 className="text-3xl font-bold text-foreground font-serif">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="hidden items-center gap-1 text-sm font-semibold text-primary md:flex"
            >
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Calendar size={16} />
                  <span className="mt-0.5 text-xs font-bold">{event.date}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/events" className="text-sm font-semibold text-primary">
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold font-serif md:text-4xl">
            Begin Your Child's Journey Today
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg opacity-80">
            Admissions are open. Join a community in Karatina that believes in
            every child's potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="gold-gradient inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-accent-foreground shadow-elevated transition hover:opacity-90"
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
