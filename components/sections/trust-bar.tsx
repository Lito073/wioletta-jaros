const stats = [
  {
    value: "2009",
    label: "Opgericht in",
  },
  {
    value: "15+",
    label: "Jaar ervaring",
  },
  {
    value: "Vaste",
    label: "Schoonmaakteams",
  },
  {
    value: "6",
    label: "Plaatsen in ons werkgebied",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-30 -mt-6 px-4 md:-mt-10">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-5 md:p-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
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
