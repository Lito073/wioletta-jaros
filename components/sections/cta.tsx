import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  heading = "Klaar voor een schone werkomgeving?",
  subheading = "Vraag een vrijblijvende offerte aan. Binnen 24 uur ontvangt u een voorstel op maat.",
  buttonText = "Offerte aanvragen",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden bg-muted/50 border border-border shadow-xl">
          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {heading}
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6"
              >
                <Link href={buttonHref}>
                  {buttonText}
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Vrijblijvend
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Binnen 24 uur reactie
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Op maat gemaakt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
