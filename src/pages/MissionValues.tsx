import { Target, Eye, Heart, Star, Shield, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const values = [
  { icon: Star, title: "Excellence", description: "We pursue the highest standards in everything we do." },
  { icon: Shield, title: "Integrity", description: "We uphold honesty, transparency, and ethical conduct." },
  { icon: Heart, title: "Compassion", description: "We care for one another and serve with empathy." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace creativity and forward-thinking approaches." },
  { icon: Target, title: "Responsibility", description: "We take ownership of our actions and their impact." },
  { icon: Eye, title: "Inclusivity", description: "We celebrate diversity and ensure equal opportunity for all." },
];

const MissionValues = () => {
  return (
    <Layout>
      <PageHero
        title="Mission, Motto & Values"
        subtitle="The guiding principles that shape our educational philosophy and school culture."
        breadcrumb="About"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Motto */}
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Our Motto</p>
              <h2 className="text-4xl font-bold italic text-primary font-serif md:text-5xl">
                "Knowledge, Character, Service"
              </h2>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-elevated">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Target className="text-primary-foreground" size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold font-serif">Our Mission</h3>
                <p className="leading-relaxed opacity-90">
                  To provide quality, competency-based education that develops learners into well-rounded,
                  responsible citizens equipped with the knowledge, skills, and values to thrive in a
                  dynamic global society.
                </p>
              </div>
              <div className="rounded-xl border-2 border-primary bg-card p-8 shadow-elevated">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground font-serif">Our Vision</h3>
                <p className="leading-relaxed text-muted-foreground">
                  To be the leading centre of academic excellence and holistic child development in Kenya,
                  producing transformative leaders who positively impact their communities and the world.
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
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Guiding Principles</p>
            <h2 className="text-3xl font-bold text-foreground font-serif md:text-4xl">Our Core Values</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-card p-6 shadow-card transition hover:shadow-elevated">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                  <value.icon className="text-secondary" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground font-serif">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionValues;
