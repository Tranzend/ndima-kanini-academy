import { useState } from "react";
import { BookOpen, Trophy, GraduationCap, Image } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

interface SectionPageProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  heroImage: string;
  overview: {
    description: string[];
    highlights: { label: string; value: string }[];
  };
  curriculum: {
    description: string;
    subjects: { name: string; description: string }[];
  };
  excellence: {
    description: string;
    achievements: string[];
  };
  gallery: { src: string; alt: string }[];
}

const tabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "curriculum", label: "Curriculum", icon: GraduationCap },
  { id: "excellence", label: "Academic Excellence", icon: Trophy },
  { id: "gallery", label: "Gallery", icon: Image },
];

const SectionPage = ({
  title,
  subtitle,
  breadcrumb,
  heroImage,
  overview,
  curriculum,
  excellence,
  gallery,
}: SectionPageProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <PageHero title={title} subtitle={subtitle} breadcrumb={breadcrumb} />

      {/* Image banner */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <img
          src={heroImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Tabs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="animate-fade-in">
            {activeTab === "overview" && (
              <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {overview.description.map((para, i) => (
                    <p
                      key={i}
                      className="mb-4 leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="rounded-xl bg-card p-6 shadow-card">
                  <h3 className="mb-4 text-lg font-bold text-foreground font-serif">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    {overview.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {h.label}
                        </span>
                        <span className="font-semibold text-foreground">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div>
                <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
                  {curriculum.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {curriculum.subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="rounded-lg border border-border bg-card p-5 shadow-card"
                    >
                      <h4 className="mb-2 font-semibold text-foreground font-serif">
                        {subject.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {subject.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "excellence" && (
              <div>
                <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
                  {excellence.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {excellence.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-card"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden rounded-lg shadow-card"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SectionPage;
