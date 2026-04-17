import { Quote } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

const leadership = [
  {
    name: "The Director",
    role: "Director & Founder",
    message: `When we founded ${SCHOOL.name}, our prayer was for a school where every child would be loved and treated with justice. Today, watching our learners grow into confident, kind and capable young people, we are reminded daily that this calling is worth every ounce of our effort. Karibu sana — welcome to our family.`,
  },
  {
    name: "The Head Teacher",
    role: "Head Teacher",
    message: `Education at Ndima Kanini is far more than passing exams. We cultivate critical thinkers, compassionate leaders and creative problem-solvers. Our CBC approach ensures every learner discovers and develops their unique gifts in a safe, supportive environment.`,
  },
  {
    name: "The Deputy Head Teacher",
    role: "Deputy Head Teacher",
    message: `Our team of dedicated teachers works tirelessly to create a nurturing environment where learning is joyful and meaningful. Whether your child joins us as a day scholar or boarder, we promise to walk closely with your family every step of the way.`,
  },
];

const staff = [
  { name: "Pre-Primary Coordinator", role: "Coordinator", department: "Pre-Primary" },
  { name: "Lower Primary HOD", role: "Head of Department", department: "Lower Primary" },
  { name: "Upper Primary HOD", role: "Head of Department", department: "Upper Primary" },
  { name: "Mathematics Teacher", role: "Subject Teacher", department: "Upper Primary" },
  { name: "Science & Technology", role: "Subject Teacher", department: "Upper Primary" },
  { name: "English & Literature", role: "Subject Teacher", department: "Lower Primary" },
  { name: "Kiswahili Teacher", role: "Subject Teacher", department: "Lower Primary" },
  { name: "Creative Arts", role: "Subject Teacher", department: "Pre-Primary" },
  { name: "Physical Education", role: "Games Master", department: "All Sections" },
  { name: "ICT & Digital Literacy", role: "Subject Teacher", department: "All Sections" },
  { name: "Boarding Mistress", role: "Pastoral Care", department: "Boarding" },
  { name: "Guidance & Counselling", role: "Counsellor", department: "All Sections" },
];

const Staff = () => {
  return (
    <Layout>
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated educators and leaders shaping the future of our learners."
        breadcrumb="About"
      />

      {/* Leadership Messages */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Leadership</p>
            <h2 className="text-3xl font-bold text-foreground font-serif">Messages from Our Leaders</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((leader) => (
              <div key={leader.name} className="rounded-xl bg-card p-6 shadow-card">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-serif text-xl font-bold">
                  {leader.role.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-foreground font-serif">{leader.name}</h3>
                <p className="mb-4 text-sm font-semibold text-secondary">{leader.role}</p>
                <div className="relative">
                  <Quote className="absolute -left-1 -top-1 text-primary/10" size={32} />
                  <p className="pl-6 text-sm italic leading-relaxed text-muted-foreground">
                    "{leader.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Names of our individual leaders and teachers will be added soon. To meet a member of staff, please reach out
            via our{" "}
            <a href="/contact" className="font-semibold text-primary hover:underline">
              contact page
            </a>{" "}
            or visit our school in Karatina.
          </p>
        </div>
      </section>

      {/* Staff Listing */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Our Team</p>
            <h2 className="text-3xl font-bold text-foreground font-serif">Teaching & Support Staff</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  {member.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-secondary font-medium">{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
