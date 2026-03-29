import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/site-content";

const footerLinks = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/vacatures", label: "Vacatures" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--navbar-border)] bg-[var(--navbar-bg)]">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Kolom 1: Logo + Omschrijving */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.svg"
                alt="Wioletta Jaros Logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-[var(--navbar-text)]">
                  {companyInfo.shortName}
                </span>
                <span className="text-xs text-[var(--navbar-text-muted)]">
                  Schoonmaakbedrijf V.O.F.
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--navbar-text-muted)] leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--navbar-text)] mb-4">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--navbar-text-muted)] hover:text-[var(--navbar-text)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--navbar-text)] mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[var(--navbar-text-muted)]">
              <address className="not-italic">
                {companyInfo.address.street}
                <br />
                {companyInfo.address.postalCode} {companyInfo.address.city}
              </address>
              <a
                href={companyInfo.phoneHref}
                className="hover:text-[var(--navbar-text)] transition-colors duration-300"
              >
                Tel: {companyInfo.phone}
              </a>
              <a
                href={companyInfo.emailHref}
                className="hover:text-[var(--navbar-text)] transition-colors duration-300"
              >
                E-mail: {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Kolom 4: Werkgebied */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--navbar-text)] mb-4">
              Werkgebied
            </h3>
            <div className="flex flex-wrap gap-2">
              {companyInfo.serviceArea.map((plaats) => (
                <span
                  key={plaats}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--navbar-text-muted)] border border-[var(--navbar-border)]"
                >
                  {plaats}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Onderkant balk */}
        <div className="mt-12 pt-8 border-t border-[var(--navbar-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--navbar-text-muted)]">
            <p>
              © {new Date().getFullYear()} {companyInfo.name}
            </p>
            <p>
              KvK: {companyInfo.kvk}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
