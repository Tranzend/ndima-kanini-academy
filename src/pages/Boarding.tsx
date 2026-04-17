import {
  Bed,
  Sun,
  ShieldCheck,
  Utensils,
  BookOpen,
  HeartHandshake,
  Bus,
  Clock,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import boardingImg from "@/assets/boarding.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import { SCHOOL } from "@/lib/school";

const features = [
  {
    icon: Bed,
    title: "Comfortable Dormitories",
    description:
      "Spacious, well-ventilated dormitories with daily housekeeping and 24-hour matron supervision.",
  },
  {
    icon: Utensils,
    title: "Balanced Meals",
    description:
      "Three nutritious meals plus snacks daily, prepared by our trained school cooks.",
  },
  {
    icon: ShieldCheck,
    title: "Round-the-Clock Security",
    description:
      "Secure, fenced compound with security personnel on duty day and night.",
  },
  {
    icon: BookOpen,
    title: "Guided Prep & Tuition",
    description:
      "Daily evening preparation sessions supervised by our teachers for boarders.",
  },
  {
    icon: HeartHandshake,
    title: "Pastoral Care",
    description:
      "Dedicated boarding mistresses and counsellors who nurture every child's wellbeing.",
  },
  {
    icon: Sun,
    title: "Wholesome Recreation",
    description:
      "Sports, games, music, drama and weekend activities to keep boarders engaged.",
  },
];

const dayFeatures = [
  {
    icon: Bus,
    title: "School Transport",
    description:
      "Reliable, safe school van service covering Karatina town and surrounding areas.",
  },
  {
    icon: Clock,
    title: "Extended Care",
    description:
      "Early drop-off and after-school study options for working parents.",
  },
  {
    icon: Utensils,
    title: "Lunch Programme",
    description: "Hot, balanced lunch served daily for all day scholars.",
  },
];

const Boarding = () => {
  return (
    <Layout>
      <PageHero
        title="Day & Boarding"
        subtitle={`${SCHOOL.name} is a mixed day and boarding school. We welcome learners from Karatina and beyond.`}
        breadcrumb="Academics"
      />

      {/* Boarding overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Boarding Section
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif md:text-4xl">
                A Home Away From Home
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Our boarding programme provides a structured, caring environment
                where pupils develop independence, discipline and lifelong
                friendships — all while focusing on academic excellence.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Boarders enjoy supervised study, balanced meals, recreation and
                pastoral care from a team that treats every child as their own —
                guided by our motto: <em>"{SCHOOL.motto}."</em>
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-elevated">
              <img
                src={boardingImg}
                alt="Boarding dormitory"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl bg-card p-6 shadow-card">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-foreground font-serif">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day section */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-elevated lg:order-2">
              <img
                src={assemblyImg}
                alt="Day scholars at assembly"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                Day Section
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-serif md:text-4xl">
                For Our Day Scholars
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Day pupils enjoy the same quality CBC programme, modern
                facilities and pastoral care as boarders, with convenient
                transport and lunch arrangements.
              </p>
              <div className="space-y-4">
                {dayFeatures.map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                      <f.icon className="text-secondary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {f.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boarding;
