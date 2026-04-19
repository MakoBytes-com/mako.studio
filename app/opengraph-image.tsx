import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mako Studio — AI-native design and engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          background:
            "radial-gradient(ellipse at top left, #1E4DD8 0%, transparent 55%), radial-gradient(ellipse at bottom right, #3B82F6 0%, transparent 60%), linear-gradient(180deg, #050912 0%, #0A1020 100%)",
          color: "#E8EDF3",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8A95AD"
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #3B82F6 0%, #10182C 100%)",
              boxShadow: "0 0 60px -10px rgba(59,130,246,0.6)"
            }}
          />
          <span style={{ color: "#E8EDF3", fontWeight: 600, fontSize: 28 }}>
            Mako Studio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 90,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#E8EDF3",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span>AI-native design</span>
            <span style={{ color: "#8A95AD" }}>and engineering.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#B8BFD0",
              maxWidth: 900,
              lineHeight: 1.4
            }}
          >
            The web practice inside Mako Logics. Every site built with Claude
            as the core development partner.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8A95AD",
            borderTop: "1px solid rgba(184,191,208,0.15)",
            paddingTop: 24
          }}
        >
          <span>makoai.studio</span>
          <span style={{ letterSpacing: "0.18em" }}>MONTGOMERY · TEXAS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
