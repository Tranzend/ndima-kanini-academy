import {
  Target,
  Eye,
  Heart,
  Star,
  Shield,
  Lightbulb,
  Scale,
  Smile,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

const values = [
  {
    icon: Heart,
    title: "Love",
    description:
      "We treat every child with warmth, kindness and unconditional respect.",
  },
  {
    icon: Scale,
    title: "Justice",
    description:
      "We are fair, equitable and uphold the rights and dignity of every learner.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We pursue the highest standards in academics, character and service.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold honesty, transparency and ethical conduct in all we do.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We embrace innovation, curiosity and forward-thinking learning.",
  },
  {
    icon: Smile,
    title: "Inclusivity",
    description:
      "We celebrate diversity and ensure equal opportunity for all children.",
  },
];

const MissionValues = () => {
  return (
    <Layout>
      <PageHero
        title="Mission, Motto & Values"
        subtitle="The guiding principles that shape our school culture and educational philosophy."
        breadcrumb="About"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Motto */}
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Our Motto
              </p>
              <h2 className="text-4xl font-bold italic text-primary font-serif md:text-5xl">
                "{SCHOOL.motto}"
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                These six words shape every decision we make at {SCHOOL.name}.
                Every learner deserves to be loved and treated with justice —
                that is our promise.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-elevated">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Target className="text-primary-foreground" size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold font-serif">
                  Our Mission
                </h3>
                <p className="leading-relaxed opacity-90">
                  To provide quality, competency-based education in a loving and
                  just environment, developing confident learners who are
                  equipped with the knowledge, skills and values to thrive and
                  make a positive difference in their communities.
                </p>
              </div>
              <div className="rounded-xl border-2 border-primary bg-card p-8 shadow-elevated">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground font-serif">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To be a leading centre of holistic child development in
                  Karatina and beyond — known for academic excellence, strong
                  character formation and the joyful nurturing of every child
                  entrusted to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Guiding Principles
            </p>
            <h2 className="text-3xl font-bold text-foreground font-serif md:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-card p-6 shadow-card transition hover:shadow-elevated"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                  <value.icon className="text-secondary" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground font-serif">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionValues;
