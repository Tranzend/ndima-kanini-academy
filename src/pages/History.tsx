import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

const timelineEvents = [
  { year: "Foundation", title: "A Vision Born in Karatina", description: `${SCHOOL.name} was founded in Karatina with a clear mission inspired by our motto: "${SCHOOL.motto}." A small team of dedicated educators welcomed the first cohort of learners.` },
  { year: "Early Years", title: "Building Strong Foundations", description: "Established a warm, child-centred learning environment with small class sizes, qualified teachers and a strong emphasis on character formation alongside academics." },
  { year: "Growth", title: "Expanding Facilities", description: "Added new classrooms, a library, play areas and a school field as enrolment grew. Day scholars were joined by our first boarding pupils, making us a true mixed day and boarding school." },
  { year: "CBC Transition", title: "Embracing the New Curriculum", description: "Successfully transitioned to Kenya's Competency-Based Curriculum (CBC), training all teachers and re-equipping classrooms to deliver the new learning experience effectively." },
  { year: "Boarding Section", title: "Home Away From Home", description: "Strengthened our boarding programme with comfortable dormitories, balanced meals, supervised prep and dedicated pastoral care — welcoming families from across central Kenya." },
  { year: "Today", title: "A Trusted Karatina Institution", description: "We continue to nurture confident, compassionate and competent learners — proudly serving families in Karatina and beyond, guided every day by love and justice for the child." },
];

const History = () => {
  return (
    <Layout>
      <PageHero
        title="Our History"
        subtitle={`The story of ${SCHOOL.name} — built on love, justice and a passion for nurturing every child.`}
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
                    <span className="gold-gradient inline-block rounded-full px-3 py-1 text-xs font-bold text-accent-foreground">
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
