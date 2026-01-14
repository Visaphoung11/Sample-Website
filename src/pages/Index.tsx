import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import InstitutesSection from "@/components/InstitutesSection";
import HighlightedEventsSection from "@/components/HighlightedEventsSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import MilestoneSection from "@/components/MilestoneSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        <HeroSection />
        <HighlightsSection />
        <InstitutesSection />
        <HighlightedEventsSection />
        <ProgramsSection />
        <FacultySection />
        <MilestoneSection />
        <EventsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
