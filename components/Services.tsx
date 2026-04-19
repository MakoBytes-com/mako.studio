const services = [
  {
    title: "Web Design",
    body: "Custom visual direction, typography, motion, and layout. No templates. No AI-looking boilerplate. Each site is built to match the brand behind it.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 11h24M8 17h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Web Development",
    body: "Next.js, React, and modern stacks. Fast page loads, accessible components, solid forms, real analytics. Built to be maintained — not abandoned.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path
          d="M11 10l-5 6 5 6M21 10l5 6-5 6M18 7l-4 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "SEO & Growth",
    body: "Technical SEO, structured data, sitemaps, Core Web Vitals, and content structure that ranks. Plus AI-search optimization (LLMs.txt, FAQ schema).",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 20l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Hosting & Ops",
    body: "Vercel, Cloudflare, domain routing, email deliverability, monitoring, and update work. One partner, one invoice, one Slack thread.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path
          d="M6 20c-2 0-3-1-3-3 0-2 2-3 4-3 0-3 3-5 6-5 3 0 5 2 5 4 3 0 5 2 5 4 0 3-2 5-5 5H6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 border-b border-white/5"
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <span className="section-label">What we do</span>
            <h2 className="mt-5 font-display font-semibold text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
              Built end-to-end.
              <br />
              <span className="text-steel-400">Shipped fast.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-[16px] text-steel-300 leading-relaxed">
              Most freelancers hand you a design and disappear. Most agencies
              pass you between strangers. Mako Studio does all of it — design,
              build, deploy, host, maintain — without losing the thread.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group glass rounded-2xl p-8 hover:border-tide-500/30 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-tide-500/10 text-tide-300 flex items-center justify-center group-hover:bg-tide-500/20 transition-colors">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-[20px] font-semibold text-steel-100">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-steel-300 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
