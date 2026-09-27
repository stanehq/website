const features = [
  {
    title: "Real-time detection",
    description:
      "Behavioral monitoring that flags anomalies as they happen, not after the incident report.",
  },
  {
    title: "Verifiable builds",
    description:
      "Every artifact is signed and traceable to the exact commit, workflow, and runner that produced it.",
  },
  {
    title: "Zero standing secrets",
    description:
      "Short-lived, scoped credentials by default. Nothing long-lived sits in a pipeline waiting to leak.",
  },
  {
    title: "Audit-first design",
    description:
      "Logs, approvals, and signatures live where the work happens — not in a separate ticketing tool.",
  },
];

export default function Features() {
  return (
    <section id="product" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Built for teams that get audited, not just breached.
          </h2>
          <p className="mt-3 text-muted">
            No dashboards for the sake of dashboards. Just the primitives
            security teams actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background p-8 transition hover:bg-surface"
            >
              <div className="mb-4 h-8 w-8 rounded-lg bg-primary/10 ring-1 ring-primary/20" />
              <h3 className="text-base font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
