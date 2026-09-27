export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
            <span className="h-1.5 w-1.5 rounded-sm bg-primary" />
          </div>
          <span>© {new Date().getFullYear()} Stane. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/stanehq" className="transition hover:text-white">
            GitHub
          </a>
          <a href="/security.txt" className="transition hover:text-white">
            security.txt
          </a>
          <a href="mailto:hello@stane.sh" className="transition hover:text-white">
            hello@stane.sh
          </a>
        </div>
      </div>
    </footer>
  );
}
