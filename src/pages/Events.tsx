import { Calendar, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

const events = [
  {
    title: "Term 1 Parents Day",
    date: "March 15, 2026",
    time: "8:00 AM - 1:00 PM",
    location: "School Hall",
    description: "Join us for a comprehensive review of your child's academic progress, meet the teachers and discuss goals for the remainder of the term.",
    category: "Academic",
  },
  {
    title: "Inter-School Sports Gala",
    date: "April 5, 2026",
    time: "7:00 AM - 5:00 PM",
    location: "School Sports Field",
    description: "Annual athletics and games competition featuring schools from across Nyeri County. Events include track and field and team sports.",
    category: "Sports",
  },
  {
    title: "Science & Innovation Fair",
    date: "April 22, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Upper Primary Block",
    description: "Upper Primary learners showcase their science projects and innovative solutions to real-world problems. Open to parents and the community.",
    category: "Academic",
  },
  {
    title: "Boarders' Visiting Day",
    date: "May 3, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "School Compound",
    description: "Parents and guardians of boarders are warmly invited to spend the day with their children. Light refreshments will be served.",
    category: "Boarding",
  },
  {
    title: "Cultural Day Celebration",
    date: "May 10, 2026",
    time: "8:00 AM - 2:00 PM",
    location: "School Grounds",
    description: "A celebration of Kenya's diverse cultural heritage through music, dance, food and traditional attire. All sections participate.",
    category: "Cultural",
  },
  {
    title: "Term 2 Open Day",
    date: "June 7, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "All Classrooms",
    description: "Prospective parents and families are invited to tour our facilities, meet teachers and learn about our CBC programme and boarding life.",
    category: "Admissions",
  },
  {
    title: "Annual Music & Drama Festival",
    date: "July 18, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "School Hall",
    description: "Pupils perform music, drama and dance pieces in this celebration of creative expression and talent.",
    category: "Arts",
  },
  {
    title: "End of Year Prize Giving",
    date: "November 28, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "School Hall",
    description: "Annual awards ceremony recognising academic excellence, character, leadership and outstanding achievement across all sections.",
    category: "Academic",
  },
];

const categoryColors: Record<string, string> = {
  Academic: "bg-primary/10 text-primary",
  Sports: "bg-accent/10 text-accent",
  Cultural: "bg-secondary/20 text-secondary",
  Admissions: "bg-primary/10 text-primary",
  Arts: "bg-secondary/20 text-secondary",
  Boarding: "bg-primary/10 text-primary",
};

const Events = () => {
  return (
    <Layout>
      <PageHero
        title="School Events"
        subtitle={`Stay updated with important dates, activities and celebrations at ${SCHOOL.name}.`}
        breadcrumb="Events"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6">
            {events.map((event) => (
              <div key={event.title} className="rounded-xl bg-card p-6 shadow-card transition hover:shadow-elevated md:flex md:gap-6">
                <div className="mb-4 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground md:mb-0">
                  <Calendar size={20} />
                  <span className="mt-1 text-xs font-bold">{event.date.split(",")[0].split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground font-serif">{event.title}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[event.category] || "bg-muted text-muted-foreground"}`}>
                      {event.category}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} />{event.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{event.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
