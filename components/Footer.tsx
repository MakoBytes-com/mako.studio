export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-16 bg-ink-900">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          <div className="md:col-span-5">
            <div className="font-display font-semibold text-[22px] tracking-tight">
              Mako <span className="text-tide-400">Studio</span>
            </div>
            <p className="mt-3 text-[13px] text-steel-400 max-w-sm leading-relaxed">
              A web practice inside Mako Logics. We design, build, and ship
              modern websites for people who care about the result.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-steel-400 mb-4">
              Studio
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a href="#work" className="text-steel-300 hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-steel-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-steel-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-steel-400 mb-4">
              Elsewhere
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href="https://makologics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-300 hover:text-white"
                >
                  Mako Logics →
                </a>
              </li>
              <li>
                <a
                  href="https://makobytes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-300 hover:text-white"
                >
                  MakoBytes →
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@makoai.studio"
                  className="text-steel-300 hover:text-white"
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-steel-400">
          <div>© {year} Mako Studio. A Mako Logics practice.</div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-steel-200">Privacy</a>
            <a href="/terms" className="hover:text-steel-200">Terms</a>
            <span className="font-mono tracking-wider">Montgomery, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
