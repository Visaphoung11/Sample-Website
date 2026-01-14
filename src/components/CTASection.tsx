import { useTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 md:py-20 bg-gradient-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-institute relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-accent-foreground/80 mb-8 text-lg">
            {t("description")}
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("placeholder")}
              className="flex-1 px-5 py-3 rounded-lg bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-foreground/30 backdrop-blur-sm"
            />
            <Button
              type="submit"
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 h-auto"
            >
              {t("button")}
              <ArrowRight className="ml-1" size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
