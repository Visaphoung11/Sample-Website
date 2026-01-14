import { useTranslations, setLocale, useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { useState, startTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import citaLogo from "@/assets/cita-logo.png";

const Header = () => {
  const t = useTranslations("nav");
  const currentLocale = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const handleLocaleChange = (locale: string) => {
    setLangOpen(false); // close dropdown first
    // Defer and transition the locale update to avoid UI flicker
    setTimeout(() => {
      startTransition(() => {
        setLocale(locale);
      });
    }, 50);
  };

  const topNavItems = [
    { key: "careers", label: "CAREERS", href: "#careers" },
    { key: "govtech", label: "GOVTECH", href: "#govtech" },
    { key: "events", label: "EVENTS", href: "#events" },
    { key: "resources", label: "RESOURCES", href: "#resources" },
    { key: "careerCenter", label: "CAREER CENTER", href: "#career-center" },
  ];

  const mainNavItems = [
    {
      key: "about",
      label: "About",
      dropdown: [
        { label: "Mission | Vision", href: "#mission" },
        { label: "Board of Trustees", href: "#board" },
        { label: "President Message", href: "#president" },
        { label: "Scientific Board", href: "#scientific" },
        { label: "Partners", href: "#partners" },
        { label: "Our Milestone", href: "#milestone" },
      ],
    },
    {
      key: "institutes",
      label: "Institutes",
      dropdown: [
        { label: "Institute of Digital Technology (IDT)", href: "#idt" },
        { label: "Institute of Digital Governance (IDG)", href: "#idg" },
        {
          label: "Institute of Digital Research and Innovation (IDRI)",
          href: "#idri",
        },
      ],
    },
    {
      key: "academic",
      label: "Academic",
      dropdown: [
        { label: "Bachelor Programs", href: "#bachelor" },
        { label: "Master Programs", href: "#master" },
        { label: "PhD Programs", href: "#phd" },
        { label: "Scholarships", href: "#scholarships" },
      ],
    },
    {
      key: "research",
      label: "Research",
      dropdown: [
        { label: "Research Centers", href: "#centers" },
        { label: "Publications", href: "#publications" },
        { label: "Innovation Hub", href: "#innovation" },
      ],
    },
    {
      key: "innovation",
      label: "Innovation",
      dropdown: [
        { label: "Tech Transfer Office", href: "#tech-transfer" },
        { label: "Startups", href: "#startups" },
        { label: "Partnerships", href: "#partnerships" },
      ],
    },
    { key: "digicheck", label: "DigiCheck" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      {/* ===== TOP BAR ===== */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-institute">
          <div className="flex items-center justify-between h-12">
            <a href="#" className="flex items-center gap-4">
              <img src={citaLogo} alt="CITA Logo" className="h-10 w-auto" />
              <div className="hidden md:block">
                <p className="text-primary-foreground font-bold text-sm">
                  វិទ្យាស្ថានបច្ចេកវិទ្យា និង កសិកម្មកម្ពុជា
                </p>
                <p className="text-primary-foreground/70 text-xs">
                  Cambodia Institute of Technology and Agriculture
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {topNavItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-3 py-2 text-primary-foreground/80 hover:text-primary-foreground text-xs"
                >
                  {item.label}
                </a>
              ))}
              <button
                className="p-2 text-primary-foreground/80 hover:text-primary-foreground"
                type="button"
                aria-label="Open search"
                title="Open search"
              >
                <Search size={18} aria-hidden="true" focusable="false" />
                <span className="sr-only">Open search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="container-institute">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu modal={false} key={item.key}>
                  <DropdownMenuTrigger
                    className="inline-flex items-center gap-2 h-14 px-5
                                         text-primary-foreground rounded-xl text-base font-semibold
                                         hover:bg-primary-foreground/10 transition-none
                                         focus:outline-none focus-visible:outline-none ring-0 select-none whitespace-nowrap"
                  >
                    {item.label}
                    <ChevronDown size={18} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[240px] text-base animate-none will-change-auto">
                    {item.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.label}>
                        <a href={sub.href} className="w-full">
                          {sub.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.key}
                  href="#"
                  className="inline-flex items-center h-14 px-5 rounded-xl text-base font-semibold
                             text-primary-foreground hover:bg-primary-foreground/10
                             transition-none focus:outline-none focus-visible:outline-none ring-0 whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* ===== RIGHT SIDE ===== */}
          <div className="hidden lg:flex items-center gap-4">
            {/* LANGUAGE SWITCHER (FIXED) */}
            <DropdownMenu
              modal={false}
              open={langOpen}
              onOpenChange={setLangOpen}
            >
              <DropdownMenuTrigger
                className="inline-flex items-center gap-3 h-14 px-7
                           bg-primary-foreground/15 hover:bg-primary-foreground/25
                           text-primary-foreground rounded-2xl
                           text-xl font-semibold leading-none transition-none
                           focus:outline-none focus-visible:outline-none ring-0 select-none"
              >
                <Globe size={24} />
                <span className="w-[64px] text-center whitespace-nowrap font-sans">
                  {currentLocale === "en" ? "EN" : "ខ្មែរ"}
                </span>
                <ChevronDown size={22} />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="min-w-[220px] text-lg animate-none will-change-auto"
              >
                <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange("km")}>
                  ភាសាខ្មែរ
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <a
                  key={item.key}
                  href="#"
                  className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
