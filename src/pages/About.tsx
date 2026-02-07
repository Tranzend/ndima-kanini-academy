import { BookOpen, Heart, Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import studentsImage from "@/assets/students-classroom.jpg";

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Green Valley Academy"
        subtitle="A premier Kenyan grade school dedicated to nurturing academic excellence, moral integrity, and holistic development."
        breadcrumb="About Us"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif">Who We Are</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Green Valley Academy is a registered grade school located in Nairobi, Kenya. Established in 1985,
                we have grown from a small community school into one of the most respected learning institutions
                in the region.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Our school serves learners from Pre-Primary (PP1 & PP2) through Upper Primary (Grade 4-6),
                following the Competency-Based Curriculum (CBC) as prescribed by the Kenya Institute of
                Curriculum Development (KICD).
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We pride ourselves on providing a safe, inclusive, and stimulating learning environment where
                every child is encouraged to explore their potential and develop into a responsible, productive
                member of society.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-elevated">
              <img src={studentsImage} alt="Our students" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core values highlights */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif">What Sets Us Apart</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "CBC Excellence",
                description: "Fully aligned with Kenya's Competency-Based Curriculum for 21st-century skills.",
              },
              {
                icon: Heart,
                title: "Holistic Growth",
                description: "Nurturing academic, social, spiritual, and physical development.",
              },
              {
                icon: BookOpen,
                title: "Qualified Teachers",
                description: "TSC-registered educators committed to continuous professional development.",
              },
              {
                icon: Eye,
                title: "Modern Facilities",
                description: "Well-equipped classrooms, labs, library, sports fields, and digital learning tools.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-card p-6 shadow-card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground font-serif">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
