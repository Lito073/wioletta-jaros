import { AnimatedNumber } from "@/components/animated-number";

type TrustStat =
  | {
      value: number;
      label: string;
      animated: true;
    }
  | {
      value: string;
      label: string;
      animated?: false;
    };

const stats: TrustStat[] = [
  {
    value: 2009,
    label: "Sinds",
    animated: true,
  },
  {
    value: "Vaste teams",
    label: "Geen wisselende gezichten",
  },
  {
    value: "Op locatie",
    label: "Wijk en Aalburg en omstreken",
  },
] as const;

export function TrustBar() {
  return (
    <section className="relative z-30 -mt-7 px-4 md:-mt-11">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-5 md:p-6">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  {stat.animated ? (
                    <AnimatedNumber value={stat.value} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
