import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/vacatures", label: "Vacatures" },
  { href: "/contact", label: "Contact" },
];

const werkgebied = [
  "Wijk en Aalburg",
  "Hedel",
  "Kerkdriel",
  "Den Bosch",
  "Waalwijk",
  "Werkendam",
];

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Kolom 1: Logo + Omschrijving */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Wioletta Jaros Logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">
                  Wioletta Jaros
                </span>
                <span className="text-xs text-muted-foreground">
                  Schoonmaakbedrijf
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wioletta Jaros Schoonmaakbedrijf V.O.F.
              <br />
              Professionele schoonmaak voor kantoren, praktijken en bedrijfspanden
              in regio Altena.
            </p>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <address className="not-italic">
                Donksewaard 11
                <br />
                4261 ME Wijk en Aalburg
              </address>
              <a
                href="tel:0627082383"
                className="hover:text-foreground transition-colors duration-300"
              >
                Tel: 06-27 08 23 83
              </a>
              <a
                href="mailto:info@wiolettajaros.nl"
                className="hover:text-foreground transition-colors duration-300"
              >
                E-mail: info@wiolettajaros.nl
              </a>
            </div>
          </div>

          {/* Kolom 4: Werkgebied */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Werkgebied
            </h3>
            <div className="flex flex-wrap gap-2">
              {werkgebied.map((plaats) => (
                <span
                  key={plaats}
                  className="text-xs px-3 py-1 rounded-full bg-white text-muted-foreground border border-[#e5e5e5]"
                >
                  {plaats}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Onderkant balk */}
        <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Wioletta Jaros Schoonmaakbedrijf V.O.F.
            </p>
            <p>
              KvK: 65539508
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
