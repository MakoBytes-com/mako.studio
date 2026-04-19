import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  website?: string;
};

// In-memory rate limiter — 3 submissions per IP per 10 minutes.
// Resets on cold start, which is fine for a portfolio contact form.
const rateMap = new Map<string, number[]>();
const RATE_MAX = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) return false;
  hits.push(now);
  rateMap.set(ip, hits);
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "admin@makoai.studio";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set — dropping submission to console only."
    );
    console.log("[contact] Submission:", { name, email, body });
    return NextResponse.json({ ok: true, devFallback: true });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New Mako Studio inquiry</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Company:</strong> ${escape(body.company ?? "—")}</p>
    <p><strong>Budget:</strong> ${escape(body.budget ?? "—")}</p>
    <hr />
    <p style="white-space:pre-wrap">${escape(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from: `Mako Studio <${from}>`,
    to: [to],
    replyTo: email,
    subject: `New inquiry — ${name}`,
    html
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Email provider rejected the send." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
