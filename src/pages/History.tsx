import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const timelineEvents = [
  { year: "1985", title: "Foundation", description: "Green Valley Academy was founded by Mrs. Grace Wanjiku with just 45 students and 3 teachers in a small plot in Nairobi's outskirts." },
  { year: "1990", title: "First KCPE Class", description: "Our first class of Standard 8 learners sat for KCPE, achieving outstanding results and establishing our reputation for academic excellence." },
  { year: "1998", title: "Campus Expansion", description: "Construction of the new wing including a modern library, science lab, and computer room. Enrollment grew to over 300 students." },
  { year: "2005", title: "Sports & Arts Centre", description: "Opening of the multi-purpose sports hall and performing arts centre, enabling holistic student development beyond academics." },
  { year: "2010", title: "25th Anniversary", description: "Celebrated 25 years of excellence with the launch of the Green Valley Scholarship Fund for outstanding but underprivileged learners." },
  { year: "2017", title: "CBC Transition", description: "Successfully transitioned to the Competency-Based Curriculum (CBC), becoming one of the first schools in the region to fully adopt the new system." },
  { year: "2020", title: "Digital Learning", description: "Launched our digital learning platform during the COVID-19 pandemic, ensuring continuity of education for all our learners." },
  { year: "2023", title: "STEM Lab Launch", description: "Opened the state-of-the-art STEM Innovation Lab, equipped with robotics kits, 3D printers, and advanced computing resources." },
  { year: "2025", title: "40th Anniversary", description: "Celebrating four decades of educational excellence with over 850 students and 65 dedicated teachers." },
];

const History = () => {
  return (
    <Layout>
      <PageHero
        title="Our History"
        subtitle="Four decades of nurturing young minds and shaping future leaders."
        breadcrumb="About"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative mb-10 flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <span className="gold-gradient inline-block rounded-full px-3 py-1 text-xs font-bold text-secondary-foreground">
                      {event.year}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground font-serif">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
