const pillars = [
  {
    title: "Built with Claude — every site, every line",
    body: "We use Claude Code as our primary build partner. Not a plugin, not a helper — the core of the development pipeline. No WordPress, no visual page builders, no templates-as-products."
  },
  {
    title: "Design and build run in parallel",
    body: "Traditional agencies hand off a design to a developer and lose two weeks in translation. AI-native workflows compress design + code into one motion — you see working pages sooner."
  },
  {
    title: "One person, full pipeline",
    body: "Discovery, design, engineering, deployment, maintenance — one operator with AI leverage covers what used to take a five-person team. Nothing gets lost between specialists."
  },
  {
    title: "Premium quality at startup speed",
    body: "What used to take 6 weeks ships in 2. Not because we cut corners — because the overhead that a traditional agency bills for (meetings, hand-offs, review cycles) doesn't exist here."
  }
];

export default function Process() {
  return (
    <section className="relative py-28 md:py-36 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />
      <div className="container-narrow relative">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <span className="section-label">How we build</span>
            <h2 className="mt-5 font-display font-semibold text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
              AI-native.
              <br />
              <span className="text-steel-400">Not AI-assisted.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-[16px] text-steel-300 leading-relaxed">
              "AI-assisted" means someone's hand-coding with autocomplete.
              "AI-native" means the AI IS the engineer — and the studio is
              built around that. It's a fundamentally different shape,
              and it's how every Mako Studio project ships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="glass rounded-2xl p-8 hover:border-tide-500/30 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="font-mono text-[13px] text-tide-300 mt-0.5">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-[18px] font-semibold text-steel-100">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-steel-300 leading-relaxed">
                    {p.body}
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
