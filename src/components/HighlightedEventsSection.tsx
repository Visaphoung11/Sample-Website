import { useLocale } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import eventAIConference from "@/assets/event-ai-conference.jpg";
import graduation from "@/assets/graduation.jpg";
import techLab from "@/assets/tech-lab.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const HighlightedEventsSection = () => {
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const events = [
    {
      id: 1,
      titleKm: "សន្និសីទជាតិ បញ្ញាសិប្បនិម្មិតសម្រាប់ការអប់រំ",
      titleEn: "AI FOR EDUCATION NATIONAL CONFERENCE",
      subtitleKm: '"បញ្ញាសិប្បនិម្មិតសម្រាប់ អនាគតនៃការអប់រំនៅកម្ពុជា"',
      subtitleEn: '"Shaping the Future of Education in Cambodia"',
      dateKm: "២៤-២៥ វិច្ឆិកា ២០២៥",
      dateEn: "November 24-25, 2025",
      locationKm: "មជ្ឈមណ្ឌលនវានុវត្តន៍",
      locationEn: "Innovation Center, CITA",
      image: eventAIConference,
      bgGradient: "from-[#4CB5E0] to-[#6BC5EB]",
    },
    {
      id: 2,
      titleKm: "ពិធីបុណ្យទទួលសញ្ញាបត្រ ២០២៥",
      titleEn: "GRADUATION CEREMONY 2025",
      subtitleKm: '"បង្កើតអនាគតឌីជីថល"',
      subtitleEn: '"Creating a Digital Future"',
      dateKm: "១៥ ធ្នូ ២០២៥",
      dateEn: "December 15, 2025",
      locationKm: "សាលប្រជុំធំ",
      locationEn: "Main Auditorium",
      image: graduation,
      bgGradient: "from-[#1E3A5F] to-[#3D5A80]",
    },
    {
      id: 3,
      titleKm: "សិក្ខាសាលាបច្ចេកវិទ្យាកសិកម្ម",
      titleEn: "AGRICULTURAL TECHNOLOGY WORKSHOP",
      subtitleKm: '"នវានុវត្តន៍សម្រាប់អនាគតកសិកម្មកម្ពុជា"',
      subtitleEn: '"Innovation for Cambodia\'s Agricultural Future"',
      dateKm: "១០ មករា ២០២៦",
      dateEn: "January 10, 2026",
      locationKm: "មជ្ឈមណ្ឌលស្រាវជ្រាវ",
      locationEn: "Research Center",
      image: techLab,
      bgGradient: "from-[#2E7D32] to-[#4CAF50]",
    },
    {
      id: 4,
      titleKm: "ទិវាបើកទ្វារសាកលវិទ្យាល័យ",
      titleEn: "UNIVERSITY OPEN DAY 2026",
      subtitleKm: '"ស្វែងយល់ពីអនាគតរបស់អ្នក"',
      subtitleEn: '"Discover Your Future"',
      dateKm: "២០ មករា ២០២៦",
      dateEn: "January 20, 2026",
      locationKm: "បរិវេណសាកលវិទ្យាល័យ",
      locationEn: "University Campus",
      image: heroCampus,
      bgGradient: "from-[#F57C00] to-[#FFB74D]",
    },
  ];

  const goToSlide = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating || index === currentSlide) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [isAnimating, currentSlide]
  );

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % events.length;
    goToSlide(next, "right");
  }, [currentSlide, events.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + events.length) % events.length;
    goToSlide(prev, "left");
  }, [currentSlide, events.length, goToSlide]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const event = events[currentSlide];

  return (
    <section id="highlighted-events" className="section-padding bg-background">
      <div className="container-institute">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8">
          {locale === "km" ? "ព្រឹត្តិការណ៍សំខាន់ៗ" : "Highlighted Events"}
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Event Card with Animation */}
          <div
            className={`relative rounded-xl overflow-hidden shadow-elevated bg-gradient-to-br ${
              event.bgGradient
            } transition-all duration-500 ease-out transform ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[500px]">
              {/* Left Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                {/* Khmer Title */}
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {event.titleKm}
                </h3>

                {/* English Title */}
                <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                  {event.titleEn}
                </h4>

                {/* Subtitle */}
                <div className="mb-6">
                  <p className="text-white/90 text-lg md:text-xl font-medium">
                    {event.subtitleKm}
                  </p>
                  <p className="text-white/80 text-base md:text-lg mt-1">
                    {event.subtitleEn}
                  </p>
                </div>

                {/* Date and Location */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{event.dateKm}</p>
                      <p className="text-sm opacity-80">{event.dateEn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        {event.locationKm}
                      </p>
                      <p className="text-sm opacity-80">{event.locationEn}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="flex-1 relative min-h-[200px] lg:min-h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 z-10" />
                <img
                  src={event.image}
                  alt={event.titleEn}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center
                       bg-white/90 text-primary shadow-xl border border-white/60 ring-1 ring-black/5 backdrop-blur-md
                       hover:bg-primary hover:text-white hover:shadow-2xl hover:scale-105
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Previous event"
          >
            <ChevronLeft size={28} aria-hidden="true" focusable="false" />
            <span className="sr-only">Previous event</span>
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center
                       bg-white/90 text-primary shadow-xl border border-white/60 ring-1 ring-black/5 backdrop-blur-md
                       hover:bg-primary hover:text-white hover:shadow-2xl hover:scale-105
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Next event"
          >
            <ChevronRight size={28} aria-hidden="true" focusable="false" />
            <span className="sr-only">Next event</span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToSlide(index, index > currentSlide ? "right" : "left")
              }
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        {/* <div className="hidden md:flex justify-center gap-4 mt-6">
          {events.map((evt, index) => (
            <button
              key={evt.id}
              onClick={() => goToSlide(index, index > currentSlide ? 'right' : 'left')}
              className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-primary ring-offset-2 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img 
                src={evt.image} 
                alt={evt.titleEn}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HighlightedEventsSection;
