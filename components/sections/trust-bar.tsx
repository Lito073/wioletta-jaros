const stats = [
  {
    value: "Sinds 2009",
    label: "Persoonlijk opgericht en opgebouwd",
  },
  {
    value: "Vaste",
    label: "Schoonmaakteams",
  },
  {
    value: "Regio Altena",
    label: "& omgeving",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-30 -mt-10 px-4 md:-mt-16">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-5 md:p-8">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-2 text-2xl font-bold text-foreground md:text-4xl">
                  {stat.value}
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
