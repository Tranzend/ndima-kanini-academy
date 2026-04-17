import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-school.jpg";
import classroomImg from "@/assets/students-classroom.jpg";
import preImg from "@/assets/pre-primary.jpg";
import lowerImg from "@/assets/lower-primary.jpg";
import upperImg from "@/assets/upper-primary.jpg";
import boardingImg from "@/assets/boarding.jpg";
import sportsImg from "@/assets/sports.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import graduationImg from "@/assets/graduation.jpg";
import culturalImg from "@/assets/cultural.jpg";
import { SCHOOL } from "@/lib/school";

const categories = [
  "All",
  "Campus",
  "Classrooms",
  "Boarding",
  "Sports",
  "Events",
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  caption: string;
}

const items: GalleryItem[] = [
  {
    src: heroImg,
    alt: "Ndima Kanini Academy campus",
    category: "Campus",
    caption: "Our serene Karatina campus",
  },
  {
    src: assemblyImg,
    alt: "Morning assembly",
    category: "Campus",
    caption: "Morning assembly parade",
  },
  {
    src: classroomImg,
    alt: "Engaged learners in class",
    category: "Classrooms",
    caption: "Engaged learners in class",
  },
  {
    src: preImg,
    alt: "Pre-primary play-based learning",
    category: "Classrooms",
    caption: "Pre-primary play-based learning",
  },
  {
    src: lowerImg,
    alt: "Lower primary reading session",
    category: "Classrooms",
    caption: "Lower primary reading session",
  },
  {
    src: upperImg,
    alt: "Upper primary science experiment",
    category: "Classrooms",
    caption: "Upper primary science experiment",
  },
  {
    src: boardingImg,
    alt: "Boarding dormitory",
    category: "Boarding",
    caption: "Clean, safe boarding dormitories",
  },
  {
    src: sportsImg,
    alt: "Football on the school field",
    category: "Sports",
    caption: "Football on the school field",
  },
  {
    src: graduationImg,
    alt: "Graduation ceremony",
    category: "Events",
    caption: "Pre-primary graduation day",
  },
  {
    src: culturalImg,
    alt: "Cultural day performance",
    category: "Events",
    caption: "Cultural day celebration",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <Layout>
      <PageHero
        title="School Gallery"
        subtitle={`Glimpses of life at ${SCHOOL.name}. More photos and updates on our Facebook page.`}
        breadcrumb="Gallery"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <button
                key={item.src + item.caption}
                onClick={() => setLightbox(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-card transition hover:shadow-elevated"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-sm font-semibold text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  {item.category}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Want to see more? Follow us on{" "}
            <a
              href={SCHOOL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Facebook
            </a>{" "}
            for the latest school photos and updates.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-background p-2 text-foreground shadow-elevated"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-elevated"
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground">
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
