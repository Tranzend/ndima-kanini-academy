import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import studentsImg from "@/assets/students-classroom.jpg";
import prePrimaryImg from "@/assets/pre-primary.jpg";
import upperPrimaryImg from "@/assets/upper-primary.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Embracing CBC: How Green Valley Academy is Leading the Way",
    excerpt: "Discover how our school has successfully transitioned to the Competency-Based Curriculum and the positive impact it's having on our learners' academic journey.",
    date: "February 1, 2026",
    author: "Mr. James Odhiambo",
    category: "Academics",
    image: studentsImg,
  },
  {
    id: 2,
    title: "The Importance of Play-Based Learning in Early Years Education",
    excerpt: "Research shows that play is the most effective way young children learn. Here's how our Pre-Primary section incorporates play into everyday learning.",
    date: "January 20, 2026",
    author: "Mrs. Esther Muthoni",
    category: "Pre-Primary",
    image: prePrimaryImg,
  },
  {
    id: 3,
    title: "STEM Education: Preparing Kenyan Learners for the Future",
    excerpt: "Our new STEM Innovation Lab is revolutionizing how students engage with science and technology. Learn about the exciting projects our learners are working on.",
    date: "January 10, 2026",
    author: "Mr. John Kipchoge",
    category: "Innovation",
    image: upperPrimaryImg,
  },
  {
    id: 4,
    title: "Building Character Through Community Service",
    excerpt: "How our community service programme helps Upper Primary learners develop empathy, leadership, and a sense of social responsibility.",
    date: "December 15, 2025",
    author: "Mrs. Patricia Adhiambo",
    category: "Character",
    image: studentsImg,
  },
  {
    id: 5,
    title: "Tips for Parents: Supporting Your Child's Learning at Home",
    excerpt: "Practical strategies for parents to create a supportive learning environment and stay engaged with their child's education journey.",
    date: "December 5, 2025",
    author: "Mrs. Sarah Kimani",
    category: "Parents",
    image: prePrimaryImg,
  },
  {
    id: 6,
    title: "Sports Day 2025: Celebrating Athletic Excellence",
    excerpt: "A roundup of the highlights from our annual Sports Day, including record-breaking performances and memorable moments from all sections.",
    date: "November 20, 2025",
    author: "Mr. Michael Barasa",
    category: "Sports",
    image: upperPrimaryImg,
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero
        title="Our Blog"
        subtitle="News, insights, and stories from the Green Valley Academy community."
        breadcrumb="Blog"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <div className="mb-12 overflow-hidden rounded-xl bg-card shadow-elevated lg:flex">
            <div className="aspect-[16/9] lg:aspect-auto lg:w-1/2">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 lg:w-1/2 lg:p-10">
              <span className="mb-2 inline-block w-fit rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                {blogPosts[0].category}
              </span>
              <h2 className="mb-3 text-2xl font-bold text-foreground font-serif lg:text-3xl">{blogPosts[0].title}</h2>
              <p className="mb-4 text-muted-foreground">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User size={14} />{blogPosts[0].author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} />{blogPosts[0].date}</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-xl bg-card shadow-card transition hover:shadow-elevated">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                    {post.category}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-foreground font-serif leading-snug">{post.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 font-semibold text-primary">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
