import { useTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react";
import techLab from "@/assets/tech-lab.jpg";

const ProgramsSection = () => {
  const t = useTranslations("home.programs");
  const tc = useTranslations("common");

  const programs = [
    {
      key: "undergraduate",
      icon: GraduationCap,
      color: "bg-primary",
    },
    {
      key: "graduate",
      icon: BookOpen,
      color: "bg-accent",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-secondary/30">
      <div className="container-institute">
        <div className="text-center mb-12">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">{t("title")}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.key}
                  className="bg-card rounded-2xl p-6 shadow-card card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`${program.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {t(`${program.key}.description`)}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-accent font-medium hover:gap-3 gap-2 transition-all duration-200"
                  >
                    {tc("learnMore")}
                    <ArrowRight size={18} />
                  </a>
                </div>
              );
            })}

            {/* Scholarship Card */}
            <div className="sm:col-span-2 bg-primary rounded-2xl p-6 md:p-8 shadow-elevated text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5">
                    <Award className="text-accent-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("scholarship.title")}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {t("scholarship.description")}
                  </p>
                </div>
                <Button variant="hero" className="md:self-end">
                  Apply for Scholarship
                </Button>
              </div>
            </div>
          </div>

          {/* Side Image */}
          <div className="hidden lg:block">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={techLab}
                alt="Technology Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/90 text-sm mb-2">Explore our</p>
                <h4 className="text-primary-foreground font-semibold text-lg">
                  State-of-the-art Facilities
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
