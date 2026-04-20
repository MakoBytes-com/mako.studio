export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  ip?: string;
  userAgent?: string;
};

export type RenderedEmail = {
  subject: string;
  html: string;
  text: string;
};

const BRAND = {
  name: "Mako Studio",
  parent: "Mako Logics LLC",
  site: "https://makoai.studio",
  address: "550 Club Dr #264, Montgomery, TX 77316",
  phone: "(281) 206-4848",
  supportEmail: "admin@makoai.studio"
};

export function renderInquiryEmail(p: InquiryPayload): RenderedEmail {
  const subject = `New inquiry — ${p.name}${p.company ? ` · ${p.company}` : ""}`;
  const html = inquiryHtml(p);
  const text = inquiryText(p);
  return { subject, html, text };
}

function inquiryHtml(p: InquiryPayload): string {
  const rows: Array<[string, string | undefined]> = [
    ["Name", p.name],
    ["Email", p.email],
    ["Company", p.company],
    ["Budget", p.budget]
  ];
  const rowHtml = rows
    .filter(([, v]) => v && v.trim() !== "")
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eef2f7;width:120px;vertical-align:top">
          <span style="font:600 11px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#64748b;letter-spacing:0.08em;text-transform:uppercase">${esc(k)}</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #eef2f7;vertical-align:top">
          <span style="font:500 15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a">${esc(v!)}</span>
        </td>
      </tr>`
    )
    .join("");

  const metaBits: string[] = [];
  if (p.ip) metaBits.push(`IP ${esc(p.ip)}`);
  if (p.userAgent) metaBits.push(esc(truncate(p.userAgent, 80)));
  const metaFooter = metaBits.length
    ? `<p style="margin:18px 0 0 0;font:400 11px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#94a3b8">${metaBits.join(" · ")}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${esc(`New inquiry — ${p.name}`)}</title>
</head>
<body style="margin:0;padding:0;background:#f5f7fa;-webkit-font-smoothing:antialiased">
  <div style="display:none;max-height:0;overflow:hidden;color:transparent">New ${BRAND.name} inquiry from ${esc(p.name)}${p.company ? ` at ${esc(p.company)}` : ""}. Reply directly to respond.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f7fa;padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="580" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;width:100%;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(15,23,42,0.04)">
          <tr>
            <td style="background:#0d1424;padding:28px 32px 24px 32px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle">
                    <span style="display:inline-block;font:600 13px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#8fc5d5;letter-spacing:0.12em;text-transform:uppercase">${esc(BRAND.name)}</span>
                    <h1 style="margin:10px 0 0 0;font:600 22px/1.25 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ffffff">New project inquiry</h1>
                  </td>
                  <td align="right" style="vertical-align:middle;width:60px">
                    <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#2fa0be 0%,#8fc5d5 100%);display:inline-block"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#2fa0be 0%,#8fc5d5 100%);font-size:0;line-height:0">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px 32px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${rowHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px">
              <span style="display:inline-block;font:600 11px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#64748b;letter-spacing:0.08em;text-transform:uppercase">Message</span>
              <div style="margin-top:10px;padding:16px 18px;background:#f8fafc;border:1px solid #eef2f7;border-radius:10px;font:400 15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;white-space:pre-wrap;word-break:break-word">${esc(p.message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px 32px">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#2fa0be;border-radius:10px">
                    <a href="mailto:${esc(p.email)}?subject=${encodeURIComponent(`Re: your ${BRAND.name} inquiry`)}" style="display:inline-block;padding:12px 20px;font:600 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ffffff;text-decoration:none">Reply to ${esc(firstName(p.name))} →</a>
                  </td>
                </tr>
              </table>
              ${metaFooter}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 24px 32px;background:#f8fafc;border-top:1px solid #eef2f7">
              <p style="margin:0;font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#64748b">
                <a href="${BRAND.site}" style="color:#2fa0be;text-decoration:none">${BRAND.site.replace(/^https?:\/\//, "")}</a> · ${esc(BRAND.address)} · ${esc(BRAND.phone)}<br/>
                <span style="color:#94a3b8">${esc(BRAND.parent)}. Sent automatically from the ${esc(BRAND.name)} contact form.</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function inquiryText(p: InquiryPayload): string {
  const lines = [
    `New ${BRAND.name} inquiry`,
    "",
    `Name:    ${p.name}`,
    `Email:   ${p.email}`
  ];
  if (p.company) lines.push(`Company: ${p.company}`);
  if (p.budget) lines.push(`Budget:  ${p.budget}`);
  lines.push("", "Message:", p.message, "");
  if (p.ip || p.userAgent) {
    const meta: string[] = [];
    if (p.ip) meta.push(`IP ${p.ip}`);
    if (p.userAgent) meta.push(truncate(p.userAgent, 120));
    lines.push(`— ${meta.join(" · ")}`);
  }
  lines.push("", `Reply: ${p.email}`, `${BRAND.site} · ${BRAND.address}`);
  return lines.join("\n");
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstName(full: string): string {
  const n = full.trim().split(/\s+/)[0];
  return n || full;
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}
