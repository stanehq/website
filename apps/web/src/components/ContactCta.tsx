export default function ContactCta() {
  return (
    <section id="trust" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center" id="contact">
        <h2 className="text-balance mx-auto max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to see it running on your stack?
        </h2>
        <p className="mt-4 text-muted">
          Tell us what you are protecting today. We will show you exactly
          where the gaps are.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          action="/api/contact"
          method="POST"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-white placeholder:text-muted focus:border-primary/50 focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Request access
          </button>
        </form>
      </div>
    </section>
  );
}
