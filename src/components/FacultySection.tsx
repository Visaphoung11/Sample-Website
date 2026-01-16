import { useTranslations } from "@/lib/i18n";
import { User } from "lucide-react";
import prof1 from "@/assets/professor1.jpg";
import prof2 from "@/assets/professor2.jpg";
import prof3 from "@/assets/professor3.jpg";
import prof4 from "@/assets/professor4.jpg";

const FacultySection = () => {
  const t = useTranslations("home.faculty");

  // Mock faculty data - replace with actual data later
  const faculty = [
    {
      name: "Dr. Sopheak Chann",
      title: "Professor of Computer Science",
      specialty: "AI & Machine Learning",
      image: prof1,
    },
    {
      name: "Dr. Borey Kim",
      title: "Associate Professor",
      specialty: "Cybersecurity",
      image: prof2,
    },
    {
      name: "Dr. Dara Sok",
      title: "Professor of Digital Innovation",
      specialty: "IoT & Smart Systems",
      image: prof3,
    },
    {
      name: "Dr. Vanna Phorn",
      title: "Assistant Professor",
      specialty: "Data Science",
      image: prof4,
    },
  ];

  return (
    <section id="faculty" className="section-padding bg-background">
      <div className="container-institute">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="accent-bar mb-4" />
            <h2 className="section-title">{t("title")}</h2>
            <p className="section-subtitle mt-2">{t("description")}</p>
          </div>
          <a
            href="#"
            className="text-accent font-medium hover:underline whitespace-nowrap"
          >
            View All Faculty →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="aspect-[4/3] bg-secondary">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="text-primary" size={40} />
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.title}
                </p>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {member.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
