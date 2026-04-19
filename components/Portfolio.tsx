"use client";

import { useState } from "react";
import { portfolio } from "@/lib/portfolio";
import PortfolioCard from "./PortfolioCard";

const filters = ["All", "Live", "Client"] as const;
type Filter = (typeof filters)[number];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");

  const visible = portfolio.filter((p) =>
    active === "All" ? true : p.status === active
  );

  return (
    <section
      id="work"
      className="relative py-28 md:py-36 border-b border-white/5"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <span className="section-label">Selected work</span>
            <h2 className="mt-5 font-display font-semibold text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
              The current
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tide-300 to-steel-200">
                pack.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all border ${
                  active === f
                    ? "bg-tide-500 text-white border-tide-500 shadow-glow"
                    : "bg-transparent text-steel-300 border-white/10 hover:border-tide-500/40 hover:text-steel-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[14px] text-steel-400 mb-4">
            Your project could be next.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 text-steel-100 text-[14px] font-medium transition-all"
          >
            Let's talk
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
              <path
                d="M3 8h10m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
