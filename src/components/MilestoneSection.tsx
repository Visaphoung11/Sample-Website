import { useTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import graduation from "@/assets/graduation.jpg";

const MilestoneSection = () => {
  const t = useTranslations("home.milestone");

  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "5000+", label: "Alumni Worldwide" },
    { value: "50+", label: "Research Papers" },
    { value: "95%", label: "Employment Rate" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={graduation}
          alt="Graduation Celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="container-institute relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            {t("description")}
          </p>
          <Button variant="hero">
            {t("cta")}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-primary-foreground/20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;
