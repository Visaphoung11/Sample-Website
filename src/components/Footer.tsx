import { useTranslations } from "@/lib/i18n";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-institute py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">IDT</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">Institute of Digital</p>
                <p className="text-primary-foreground/70 text-sm">Technology</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Leading public research and education institution dedicated to accelerating Cambodia's digital transformation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">{t("address.title")}</h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p>{t("address.line1")}</p>
                  <p>{t("address.line2")}</p>
                  <p>{t("address.line3")}</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+855 23 999 999</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@idt.edu.kh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">{tNav("about")}</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">{tNav("academics")}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{tNav("admissions")}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{tNav("research")}</a></li>
              <li><a href="#news" className="hover:text-accent transition-colors">{tNav("news")}</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("links.title")}</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">{t("links.privacy")}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t("links.terms")}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t("links.careers")}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t("links.faq")}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-institute py-6 text-center text-primary-foreground/60 text-sm">
          {t("copyright", { year: new Date().getFullYear().toString() })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
