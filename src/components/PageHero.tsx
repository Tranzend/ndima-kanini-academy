interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="hero-gradient py-16 text-primary-foreground md:py-20">
      <div className="container mx-auto px-4 text-center">
        {breadcrumb && (
          <p className="mb-2 text-sm uppercase tracking-widest opacity-60">{breadcrumb}</p>
        )}
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-serif animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80 animate-slide-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
