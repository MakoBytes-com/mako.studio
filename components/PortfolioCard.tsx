import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";

const statusColor: Record<PortfolioItem["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  Client: "bg-tide-500/15 text-tide-300 border-tide-500/20",
  "In Progress": "bg-amber-500/15 text-amber-300 border-amber-500/20",
  Available: "bg-steel-400/15 text-steel-300 border-steel-400/20"
};

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative glass rounded-2xl overflow-hidden block hover:border-tide-500/30 transition-all hover:-translate-y-1 hover:shadow-card"
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-ink-700">
        {item.screenshot ? (
          <Image
            src={item.screenshot}
            alt={`${item.name} homepage screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${previewGradient(
                item.accent
              )}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[28px] md:text-[36px] font-semibold text-white/90 tracking-tight">
                {item.name}
              </span>
            </div>
          </>
        )}
        {/* Top fade so the status badge + year always read clean over screenshots */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink-900/70 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border ${statusColor[item.status]} backdrop-blur`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {item.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 text-[11px] text-white/80 font-mono">
          {item.year}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[20px] font-semibold text-steel-100 group-hover:text-white transition-colors">
              {item.name}
            </h3>
            <p className="mt-1 text-[13px] text-tide-300 font-medium">
              {item.tagline}
            </p>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-steel-400 group-hover:text-tide-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7v9"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-3 text-[14px] text-steel-300 leading-relaxed line-clamp-3">
          {item.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-steel-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function previewGradient(accent: PortfolioItem["accent"]): string {
  switch (accent) {
    case "silver":
      return "bg-gradient-to-br from-steel-300/20 via-ink-600 to-ink-800";
    case "steel":
      return "bg-gradient-to-br from-tide-600/30 via-ink-700 to-ink-900";
    case "blue":
    default:
      return "bg-gradient-to-br from-tide-500/30 via-tide-600/20 to-ink-800";
  }
}
