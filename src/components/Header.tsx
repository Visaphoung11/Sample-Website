import { useTranslations, setLocale, useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useState, startTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import citaLogo from "@/assets/cita-logo.png";
import khFlag from "@/assets/flags/kh.svg";
import usFlag from "@/assets/flags/us.svg";
import CambodiaFlag from "@/assets/flags/Cambodia.svg";

const Header = () => {
  const t = useTranslations("nav");
  const currentLocale = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});

  const handleLocaleChange = (locale: string) => {
    // close both dropdowns if any is open
    setLangOpenDesktop(false);
    setLangOpenMobile(false);
    // Defer and transition the locale update to avoid UI flicker
    setTimeout(() => {
      startTransition(() => {
        setLocale(locale);
      });
    }, 50);
    // Close mobile menu after switching, to mirror desktop behavior
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const topNavItems = [
    { key: "careers", label: t("top.careers"), href: "#careers" },
    { key: "govtech", label: t("top.govtech"), href: "#govtech" },
    { key: "events", label: t("top.events"), href: "#events" },
    { key: "resources", label: t("top.resources"), href: "#resources" },
    {
      key: "careerCenter",
      label: t("top.careerCenter"),
      href: "#career-center",
    },
  ];

  const mainNavItems = [
    {
      key: "about",
      label: t("main.about.label"),
      dropdown: [
        { label: t("main.about.mission"), href: "#mission" },
        { label: t("main.about.board"), href: "#board" },
        { label: t("main.about.president"), href: "#president" },
        { label: t("main.about.scientific"), href: "#scientific" },
        { label: t("main.about.partners"), href: "#partners" },
        { label: t("main.about.milestone"), href: "#milestone" },
      ],
    },
    {
      key: "institutes",
      label: t("main.institutes.label"),
      dropdown: [
        { label: t("main.institutes.idt"), href: "#idt" },
        { label: t("main.institutes.idg"), href: "#idg" },
        { label: t("main.institutes.idri"), href: "#idri" },
      ],
    },
    {
      key: "academic",
      label: t("main.academic.label"),
      dropdown: [
        { label: t("main.academic.bachelor"), href: "#bachelor" },
        { label: t("main.academic.master"), href: "#master" },
        { label: t("main.academic.phd"), href: "#phd" },
        { label: t("main.academic.scholarships"), href: "#scholarships" },
      ],
    },
    {
      key: "research",
      label: t("main.research.label"),
      dropdown: [
        { label: t("main.research.centers"), href: "#centers" },
        { label: t("main.research.publications"), href: "#publications" },
        { label: t("main.research.innovation"), href: "#innovation" },
      ],
    },
    {
      key: "innovation",
      label: t("main.innovation.label"),
      dropdown: [
        { label: t("main.innovation.tto"), href: "#tech-transfer" },
        { label: t("main.innovation.startups"), href: "#startups" },
        { label: t("main.innovation.partnerships"), href: "#partnerships" },
      ],
    },
    { key: "digicheck", label: t("main.digicheck") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      {/* ===== TOP BAR ===== */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-institute">
          <div className="flex items-center justify-between h-12">
            <a href="#" className="flex items-center gap-3 sm:gap-4">
              <img
                src={citaLogo}
                alt="CITA Logo"
                className="h-8 md:h-10 w-auto"
              />
              <div className="block max-w-[180px] sm:max-w-[220px] leading-tight">
                <p className="text-primary-foreground font-bold text-[10px] sm:text-xs md:text-sm leading-tight">
                  វិទ្យាស្ថានបច្ចេកវិទ្យា និង កសិកម្មកម្ពុជា
                </p>
                <p className="text-primary-foreground/80 text-[9px] sm:text-[11px] md:text-xs leading-tight">
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
            {/* Social icons */}
            <div className="flex items-center gap-2 mr-1">
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1877F2] text-white hover:brightness-110 transition"
                title="Facebook"
              >
                {/* Facebook logo */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 4.99 3.657 9.128 8.437 9.94v-7.03H7.898v-2.91h2.539V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.776-1.63 1.572v1.888h2.773l-.443 2.91h-2.33v7.03C18.343 21.188 22 17.05 22 12.06z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF0000] text-white hover:brightness-110 transition"
                title="YouTube"
              >
                {/* YouTube play */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M23.498 6.186a3.005 3.005 0 0 0-2.116-2.127C19.29 3.5 12 3.5 12 3.5s-7.29 0-9.382.559A3.005 3.005 0 0 0 .502 6.186C0 8.29 0 12 0 12s0 3.71.502 5.814a3.005 3.005 0 0 0 2.116 2.127C4.71 20.5 12 20.5 12 20.5s7.29 0 9.382-.559a3.005 3.005 0 0 0 2.116-2.127C24 15.71 24 12 24 12s0-3.71-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Telegram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#229ED9] text-white hover:brightness-110 transition"
                title="Telegram"
              >
                {/* Telegram paper plane */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9.036 14.568 8.9 18.602c.287 0 .412-.123.561-.27l2.694-2.577 5.59 4.105c1.024.564 1.756.268 2.032-.95l3.682-17.25.001-.001c.327-1.523-.55-2.12-1.55-1.75L1.41 9.194c-1.48.576-1.458 1.404-.253 1.777l6.03 1.88L19.46 6.4c.574-.376 1.096-.168.666.208l-11.09 7.96Z" />
                </svg>
              </a>
            </div>
            {/* LANGUAGE SWITCHER (FIXED) */}
            <DropdownMenu
              modal={false}
              open={langOpenDesktop}
              onOpenChange={setLangOpenDesktop}
            >
              <DropdownMenuTrigger
                className="inline-flex items-center gap-3 h-14 px-7
                           bg-primary-foreground/30 hover:bg-primary-foreground/25
                           text-primary-foreground rounded-2xl
                           text-xl font-semibold leading-none transition-none
                           focus:outline-none focus-visible:outline-none ring-0 select-none"
              >
                <img
                  src={currentLocale === "en" ? usFlag : CambodiaFlag}
                  alt={currentLocale === "en" ? "English" : "Khmer"}
                  className="h-6 w-8 rounded-sm object-cover"
                />
                <span className="w-[64px] text-center whitespace-nowrap font-sans">
                  {currentLocale === "en" ? "English" : "ខ្មែរ"}
                </span>
                <ChevronDown size={22} />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="min-w-[220px] text-lg animate-none will-change-auto"
              >
                <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                  <img
                    src={usFlag}
                    alt="English"
                    className="h-5 w-7 mr-2 rounded-sm object-cover"
                  />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange("km")}>
                  <img
                    src={CambodiaFlag}
                    alt="Khmer"
                    className="h-5 w-7 mr-2 rounded-sm object-cover"
                  />
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
        <div
          className={`lg:hidden overflow-hidden transform transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-[80vh] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="pb-4">
            {/* Mobile language switcher */}
            <div className="px-4 pt-2 pb-3">
              {/* Social icons (mobile) */}
              <div className="flex items-center gap-2 mb-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1877F2] text-white hover:brightness-110 transition"
                  title="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 4.99 3.657 9.128 8.437 9.94v-7.03H7.898v-2.91h2.539V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.776-1.63 1.572v1.888h2.773l-.443 2.91h-2.33v7.03C18.343 21.188 22 17.05 22 12.06z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open YouTube"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000] text-white hover:brightness-110 transition"
                  title="YouTube"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M23.498 6.186a3.005 3.005 0 0 0-2.116-2.127C19.29 3.5 12 3.5 12 3.5s-7.29 0-9.382.559A3.005 3.005 0 0 0 .502 6.186C0 8.29 0 12 0 12s0 3.71.502 5.814a3.005 3.005 0 0 0 2.116 2.127C4.71 20.5 12 20.5 12 20.5s7.29 0 9.382-.559a3.005 3.005 0 0 0 2.116-2.127C24 15.71 24 12 24 12s0-3.71-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open Telegram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#229ED9] text-white hover:brightness-110 transition"
                  title="Telegram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M9.036 14.568 8.9 18.602c.287 0 .412-.123.561-.27l2.694-2.577 5.59 4.105c1.024.564 1.756.268 2.032-.95l3.682-17.25.001-.001c.327-1.523-.55-2.12-1.55-1.75L1.41 9.194c-1.48.576-1.458 1.404-.253 1.777l6.03 1.88L19.46 6.4c.574-.376 1.096-.168.666.208l-11.09 7.96Z" />
                  </svg>
                </a>
              </div>
              <DropdownMenu
                modal={false}
                open={langOpenMobile}
                onOpenChange={setLangOpenMobile}
              >
                <DropdownMenuTrigger
                  className="w-full inline-flex items-center justify-between gap-3 h-12 px-4
                             bg-yellow-600 hover:bg-primary-foreground/25 text-primary-foreground
                             rounded-xl text-base font-semibold leading-none transition-none
                             focus:outline-none focus-visible:outline-none ring-0 select-none"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={currentLocale === "en" ? usFlag : CambodiaFlag}
                      alt={currentLocale === "en" ? "English" : "Khmer"}
                      className="h-5 w-7 rounded-sm object-cover"
                    />
                    <span className="whitespace-nowrap font-sans">
                      {currentLocale === "en" ? "English" : "ខ្មែរ"}
                    </span>
                  </div>
                  <ChevronDown size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-[200px] text-base animate-none will-change-auto"
                >
                  <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                    <img
                      src={usFlag}
                      alt="English"
                      className="h-5 w-7 mr-2 rounded-sm object-cover"
                    />
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLocaleChange("km")}>
                    <img
                      src={khFlag}
                      alt="Khmer"
                      className="h-5 w-7 mr-2 rounded-sm object-cover"
                    />
                    ភាសាខ្មែរ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile nav with collapsible sections */}
            <nav className="flex flex-col">
              {mainNavItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.key}
                    className="border-t border-primary-foreground/10"
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                      onClick={() =>
                        setMobileOpen((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }))
                      }
                    >
                      <span className="font-semibold">{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileOpen[item.key] ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {mobileOpen[item.key] && (
                      <div className="pb-2">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block pl-8 pr-4 py-2 text-primary-foreground/90 hover:bg-primary-foreground/10"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.key}
                    href="#"
                    className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
