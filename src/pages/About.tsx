import { BookOpen, Heart, Target, Eye, Bed, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import studentsImage from "@/assets/students-classroom.jpg";
import { SCHOOL } from "@/lib/school";

const About = () => {
  return (
    <Layout>
      <PageHero
        title={`About ${SCHOOL.name}`}
        subtitle="A mixed day and boarding primary school in Karatina, dedicated to nurturing academic excellence, moral integrity and holistic development."
        breadcrumb="About Us"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif">
                Who We Are
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {SCHOOL.name} is a registered mixed day and boarding primary
                school located in Karatina, Nyeri County. We serve learners from
                Pre-Primary (PP1 & PP2) through Upper Primary (Grade 4-6),
                following Kenya's Competency-Based Curriculum (CBC).
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Guided by our motto, <em>"{SCHOOL.motto},"</em> we strive to
                give every child a safe, nurturing and stimulating environment
                in which to discover their unique gifts and grow into
                responsible, productive members of society.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our boarding programme offers a true home away from home, while
                our day section is supported with reliable transport, hot lunch
                and extended care — making quality education accessible to
                families across Karatina and beyond.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-elevated">
              <img
                src={studentsImage}
                alt="Our learners"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="container mx-auto grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Location", value: "Karatina, Nyeri" },
            { icon: Bed, label: "Type", value: "Day & Boarding" },
            { icon: BookOpen, label: "Curriculum", value: "CBC (KICD)" },
            { icon: Heart, label: "Motto", value: SCHOOL.motto },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </p>
                <p className="font-semibold text-foreground">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core values highlights */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "CBC Excellence",
                description:
                  "Fully aligned with Kenya's Competency-Based Curriculum for 21st-century skills.",
              },
              {
                icon: Heart,
                title: "Holistic Growth",
                description:
                  "Nurturing academic, social, spiritual and physical development of every child.",
              },
              {
                icon: BookOpen,
                title: "Qualified Teachers",
                description:
                  "TSC-registered educators committed to continuous professional development.",
              },
              {
                icon: Eye,
                title: "Day & Boarding",
                description:
                  "Flexible options with safe boarding facilities and reliable day-scholar transport.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-card p-6 shadow-card text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground font-serif">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
