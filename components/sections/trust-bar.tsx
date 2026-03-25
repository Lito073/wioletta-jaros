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
    value: "Regio",
    label: "Altena & omgeving",
  },
];

export function TrustBar() {
  return (
    <section className="relative -mt-20 z-30 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
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
