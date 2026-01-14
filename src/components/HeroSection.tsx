import { useTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="Institute Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-institute relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="accent-bar mb-6 animate-fade-in" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            {t("title")}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up max-w-2xl leading-relaxed" style={{ animationDelay: "0.1s" }}>
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              {t("cta")}
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
