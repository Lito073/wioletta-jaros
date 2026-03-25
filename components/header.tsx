"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* BLOK 1 - Donker met logo en contact info */}
      <div className="bg-[#1a1a1a] relative h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo - steekt uit over blok 2 */}
          <Link
            href="/"
            className="absolute bottom-[-20px] z-10 flex items-center gap-3 group"
          >
            <Image
              src="/assets/logo.svg"
              alt="Wioletta Jaros Logo"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Contact info - alleen op desktop */}
          <div className="hidden md:flex items-center gap-6 ml-auto text-white/80 text-sm">
            <a
              href="tel:0627082383"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>06-27 08 23 83</span>
            </a>
            <a
              href="mailto:info@wiolettajaros.nl"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@wiolettajaros.nl</span>
            </a>
          </div>

          {/* Mobile hamburger - rechts uitgelijnd */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu openen</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1a1a1a] border-l border-white/10"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors duration-300 py-2 ${
                        isActive
                          ? "text-white font-bold underline underline-offset-4"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* BLOK 2 - Wit met navigatie */}
      <nav className="hidden md:block bg-white border-b border-[#e5e5e5]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center pl-[70px] h-12">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 px-4 py-1 ${
                    isActive
                      ? "text-[#1a1a1a] font-bold underline underline-offset-4 decoration-[#1a1a1a]"
                      : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
