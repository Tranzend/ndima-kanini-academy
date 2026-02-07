import { Quote } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const leadership = [
  {
    name: "Mrs. Grace Wanjiku",
    role: "Founder & Director",
    message: "When I founded Green Valley Academy 40 years ago, my vision was simple: to create a school where every child feels valued, challenged, and inspired. Today, seeing thousands of our alumni thriving across the world, I know that vision is being realized daily.",
  },
  {
    name: "Mr. James Odhiambo",
    role: "Head Teacher",
    message: "Education is not just about passing exams. At Green Valley, we cultivate critical thinkers, compassionate leaders, and creative problem-solvers. Our CBC approach ensures each learner discovers and develops their unique competencies.",
  },
  {
    name: "Mrs. Sarah Kimani",
    role: "Deputy Head Teacher",
    message: "Our dedicated team of educators works tirelessly to create a nurturing environment where learning is joyful and meaningful. We believe every child has the potential to excel when given the right support.",
  },
];

const staff = [
  { name: "Mr. Peter Mwangi", role: "Pre-Primary Coordinator", department: "Pre-Primary" },
  { name: "Mrs. Faith Njeri", role: "Lower Primary HOD", department: "Lower Primary" },
  { name: "Mr. David Otieno", role: "Upper Primary HOD", department: "Upper Primary" },
  { name: "Mrs. Agnes Wambui", role: "Mathematics Teacher", department: "Upper Primary" },
  { name: "Mr. John Kipchoge", role: "Science & Technology", department: "Upper Primary" },
  { name: "Mrs. Mercy Akinyi", role: "English & Literature", department: "Lower Primary" },
  { name: "Mr. Samuel Njoroge", role: "Kiswahili Teacher", department: "Lower Primary" },
  { name: "Mrs. Esther Muthoni", role: "Creative Arts", department: "Pre-Primary" },
  { name: "Mr. Michael Barasa", role: "Physical Education", department: "All Sections" },
  { name: "Mrs. Lucy Wangari", role: "ICT & Digital Literacy", department: "All Sections" },
  { name: "Mr. Joseph Kamau", role: "Social Studies", department: "Upper Primary" },
  { name: "Mrs. Patricia Adhiambo", role: "Guidance & Counselling", department: "All Sections" },
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
                  {leader.name.split(" ").map((n) => n[0]).join("")}
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
        </div>
      </section>

      {/* Staff Listing */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">Our Team</p>
            <h2 className="text-3xl font-bold text-foreground font-serif">Teaching Staff</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
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
