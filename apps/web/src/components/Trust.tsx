const stats = [
  { value: "100%", label: "Actions pinned by commit SHA" },
  { value: "0", label: "Long-lived cloud secrets" },
  { value: "24/7", label: "Automated integrity checks" },
];

export default function Trust() {
  return (
    <section id="security" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Every deploy is signed.
              <br />
              Every signature is checked.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              We treat our own supply chain the same way we help you treat
              yours: pinned dependencies, reproducible builds, and signatures
              that get verified — not just generated.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-2xl border border-border bg-surface/60 p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
