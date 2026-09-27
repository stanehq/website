export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
            <span className="h-2 w-2 rounded-sm bg-primary" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Stane
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#security" className="transition hover:text-white">
            Security
          </a>
          <a href="#trust" className="transition hover:text-white">
            Trust
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/stanehq"
            className="hidden text-sm text-muted transition hover:text-white sm:inline"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-background transition hover:bg-white/90"
          >
            Talk to us
          </a>
        </div>
      </div>
    </header>
  );
}
