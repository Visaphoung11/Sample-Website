import { useTranslations } from "@/lib/i18n";
import instituteIDT from "@/assets/institute-idt.jpg";
import instituteIDG from "@/assets/institute-idg.jpg";
import instituteIDRI from "@/assets/institute-idri.jpg";

const InstitutesSection = () => {
  const t = useTranslations("home.institutes");

  const institutes = [
    {
      id: "idt",
      name: "Institute of Digital Technology (IDT)",
      description: "",
      image: instituteIDT,
      overlay: false,
    },
    {
      id: "idg",
      name: "Institute of Digital Governance (IDG)",
      description:
        "An institution for building digital human capital through training, assessing, and certifying digital skills for civil servants",
      image: instituteIDG,
      overlay: true,
      overlayColor: "bg-[#5CBDE8]/80",
    },
    {
      id: "idri",
      name: "Institute of Digital Research and Innovation (IDRI)",
      description: "",
      image: instituteIDRI,
      overlay: false,
    },
  ];

  return (
    <section id="institutes" className="section-padding bg-background">
      <div className="container-institute">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 max-w-4xl">
          We have three institutes and each has mission focus on digital technologies development for Cambodia future
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Institutes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {institutes.map((institute) => (
            <a
              key={institute.id}
              href={`#${institute.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-card card-hover cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={institute.image}
                alt={institute.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay for IDG */}
              {institute.overlay && (
                <div className={`absolute inset-0 ${institute.overlayColor}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                      {institute.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      {institute.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Default overlay for non-IDG */}
              {!institute.overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      {institute.name}
                    </h3>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutesSection;
