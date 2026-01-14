import { useTranslations } from "@/lib/i18n";
import { ArrowRight, Clock } from "lucide-react";
import studentsStudying from "@/assets/students-studying.jpg";
import techLab from "@/assets/tech-lab.jpg";

const NewsSection = () => {
  const t = useTranslations("home.news");

  // Mock news data
  const news = [
    {
      title: "Cambodia to Host the National Research Competition 2026",
      excerpt: "Our institution has been selected to host Cambodia's premier research competition next year.",
      date: "Jan 5, 2026",
      image: studentsStudying,
      category: "Announcement",
    },
    {
      title: "CADT Students Win Medal at MRD River Monitoring Competition",
      excerpt: "Our talented students showcase innovation in environmental technology solutions.",
      date: "Jan 3, 2026",
      image: techLab,
      category: "Achievement",
    },
    {
      title: "New Partnership with International Universities",
      excerpt: "Expanding our global network for student exchange and research collaboration.",
      date: "Dec 28, 2025",
      image: null,
      category: "Partnership",
    },
  ];

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container-institute">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="accent-bar mb-4" />
            <h2 className="section-title">{t("title")}</h2>
          </div>
          <a
            href="#"
            className="text-accent font-medium hover:underline whitespace-nowrap inline-flex items-center gap-2"
          >
            {t("viewAll")}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover h-full animate-fade-in-up">
              <div className="aspect-video lg:aspect-[16/9]">
                <img
                  src={news[0].image || studentsStudying}
                  alt={news[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {news[0].category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock size={14} />
                    <span>{news[0].date}</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight">
                  {news[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {news[0].excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Side News */}
          <div className="flex flex-col gap-6">
            {news.slice(1).map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl overflow-hidden shadow-card card-hover flex-1 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item.image && (
                  <div className="aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{item.date}</span>
                  </div>
                  <h4 className="font-semibold text-foreground leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
