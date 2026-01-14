import { useTranslations } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import studentsStudying from "@/assets/students-studying.jpg";

const HighlightsSection = () => {
  const t = useTranslations("home.highlights");

  return (
    <section className="section-padding bg-background">
      <div className="container-institute">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{t("title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={studentsStudying}
              alt="Students collaborating"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Featured Content */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Featured
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 leading-tight">
              {t("featured.title")}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("featured.description")}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-accent font-medium hover:gap-3 gap-2 transition-all duration-200"
            >
              Read More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
