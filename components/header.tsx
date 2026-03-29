"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/site-content";
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
      <div className="relative overflow-visible bg-[var(--navbar-bg)]">
        <div className="container mx-auto grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 md:h-[88px] md:grid-cols-[minmax(0,280px)_1fr_180px] md:gap-6 lg:grid-cols-[minmax(0,300px)_1fr_300px]">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 self-center md:gap-4"
          >
            <Image
              src="/assets/logo.svg"
              alt="Wioletta Jaros Logo"
              width={90}
              height={90}
              className="h-14 w-auto shrink-0 translate-y-6 transition-transform duration-300 group-hover:scale-105 md:h-[72px] md:translate-y-5 lg:h-[76px] lg:translate-y-5"
            />
            <div className="flex min-w-0 translate-y-1 flex-col justify-center md:translate-y-0">
              <span className="truncate text-[1.08rem] leading-none font-bold tracking-[-0.035em] text-[var(--navbar-text)] md:text-[1.78rem]">
                {companyInfo.shortName}
              </span>
              <span className="truncate pt-1 text-[0.76rem] leading-[1.1] font-semibold tracking-[0.01em] text-[color:rgba(255,255,255,0.9)] md:pt-1.5 md:text-[0.95rem] md:leading-tight">
                Schoonmaakbedrijf V.O.F.
              </span>
            </div>
          </Link>

          <div className="hidden md:block" aria-hidden="true" />

          <div className="ml-auto hidden items-center justify-end gap-4 text-[0.95rem] font-medium text-[color:rgba(255,255,255,0.92)] md:flex">
            <a
              href={companyInfo.phoneHref}
              className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[var(--navbar-text)]"
            >
              <Phone className="h-[0.95rem] w-[0.95rem]" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={companyInfo.emailHref}
              className="hidden items-center gap-2 whitespace-nowrap transition-colors hover:text-[var(--navbar-text)] lg:flex"
            >
              <Mail className="h-[0.95rem] w-[0.95rem]" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="ml-auto md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 text-white"
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

      <nav className="hidden border-b border-border bg-background md:block">
        <div className="container mx-auto grid h-14 grid-cols-[minmax(0,280px)_1fr_180px] items-center gap-6 px-4 lg:grid-cols-[minmax(0,300px)_1fr_300px]">
          <div aria-hidden="true" />
          <div className="flex items-center justify-center whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-3 text-sm font-medium transition-colors duration-300 lg:px-4 ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div aria-hidden="true" />
        </div>
      </nav>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-hidden="true"
            className="fixed top-20 right-0 bottom-0 left-0 z-40 bg-black/45 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="fixed top-20 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col border-l border-[var(--navbar-border)] bg-[var(--navbar-bg)] p-4 md:hidden"
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
                className="h-11 w-11 text-white"
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
                    aria-current={isActive ? "page" : undefined}
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
