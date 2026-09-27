export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid-fade">
      <div className="grain absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-center md:pt-40">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now protecting production workloads
        </div>

        <h1 className="text-balance mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Security infrastructure
          <br />
          <span className="text-muted">you can actually verify.</span>
        </h1>

        <p className="text-balance mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
          Stane builds detection, response, and integrity tooling designed to
          be audited — not just trusted. Every signal, every build, every
          deploy: traceable back to its source.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
          >
            Get in touch
          </a>
          <a
            href="#product"
            className="w-full rounded-full border border-border px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 sm:w-auto"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
