export function CareersStats() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {[
            { label: "Growth-Mindset", value: "100%" },
            { label: "Retention Rate", value: "92%" },
            { label: "Years Experience", value: "15+" },
            { label: "Team Strength", value: "30+" }
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
