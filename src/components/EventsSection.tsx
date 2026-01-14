import { useTranslations } from "@/lib/i18n";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const EventsSection = () => {
  const t = useTranslations("home.events");

  // Mock events data
  const events = [
    {
      title: "ACET 2025",
      subtitle: "Connecting ASEAN Researchers for Digital Research",
      date: "Dec 15-16, 2025",
      location: "Main Campus",
      color: "bg-primary",
    },
    {
      title: "Open House Week",
      subtitle: "Experience our campus and meet faculty members",
      date: "Jan 20-25, 2026",
      location: "All Campuses",
      color: "bg-accent",
    },
    {
      title: "Cambodia CTF 2025",
      subtitle: "Cybersecurity capture the flag competition",
      date: "Feb 1, 2026",
      location: "Tech Center",
      color: "bg-navy-light",
    },
  ];

  return (
    <section id="events" className="section-padding bg-secondary/30">
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

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Color Banner */}
              <div className={`h-2 ${event.color}`} />
              
              <div className="p-6">
                <span className={`inline-block px-3 py-1 ${event.color}/10 text-foreground text-xs font-medium rounded-full mb-4`}>
                  Upcoming
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.subtitle}
                </p>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
