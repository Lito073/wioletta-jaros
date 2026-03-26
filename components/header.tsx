"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/vacatures", label: "Vacatures" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* BLOK 1 - Donker met logo en contact info */}
      <div className="relative h-16 bg-[#1a1a1a]">
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          {/* Logo en bedrijfsnaam - steekt uit over blok 2 */}
          <Link
            href="/"
            className="group absolute bottom-[-28px] z-10 flex items-center gap-3"
          >
            <Image
              src="/assets/logo.svg"
              alt="Wioletta Jaros Logo"
              width={90}
              height={90}
              className="h-[60px] w-auto transition-transform duration-300 group-hover:scale-105 md:h-[90px]"
            />
            <div className="mb-2 flex flex-col justify-center">
              <span className="text-lg font-semibold text-white">
                Wioletta Jaros
              </span>
              <span className="text-sm text-white/75">
                Schoonmaakbedrijf V.O.F.
              </span>
            </div>
          </Link>

          {/* Contact info - alleen op desktop */}
          <div className="ml-auto hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a
              href="tel:0627082383"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>06-27 08 23 83</span>
            </a>
            <a
              href="mailto:info@wiolettajaros.nl"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>info@wiolettajaros.nl</span>
            </a>
          </div>

          {/* Mobile hamburger - rechts uitgelijnd */}
          <div className="ml-auto md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">
                {isOpen ? "Menu sluiten" : "Menu openen"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* BLOK 2 - Wit met navigatie */}
      <nav className="hidden border-b border-border bg-background md:block">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center justify-center pl-[70px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-hidden="true"
            className="fixed top-16 right-0 bottom-0 left-0 z-40 bg-black/45 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="fixed top-16 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col border-l border-white/10 bg-primary p-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <h2
                id="mobile-menu-title"
                className="text-base font-semibold text-white"
              >
                Menu
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Menu sluiten</span>
              </Button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 text-lg transition-colors duration-300 ${
                      isActive
                        ? "font-bold text-white underline underline-offset-4"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
