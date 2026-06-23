# TalentSpotify Website

Next.js 15 (App Router) + React 19 + Tailwind. Marketing site with the TARA AI
positioning, pricing, an interactive ROI calculator, and a demo-request form.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Build / checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

---

## Demo form SMTP setup

The homepage "Request your demo" form (`components/DemoCta.tsx`) posts to the
server route `POST /api/request-demo`, which emails the lead to your team via
**Microsoft 365 SMTP** using Nodemailer. SMTP runs **server-side only** — no
credentials ever reach the browser.

### 1. Required environment variables

Copy `.env.local.example` to `.env.local` and fill in `SMTP_PASS`:

| Variable | Example | Notes |
|---|---|---|
| `SMTP_HOST` | `smtp.office365.com` | Microsoft 365 SMTP host |
| `SMTP_PORT` | `587` | STARTTLS submission port |
| `SMTP_SECURE` | `false` | `false` for 587 (STARTTLS); `true` only for 465 |
| `SMTP_USER` | `contact@talentspotify.com` | Authenticated mailbox |
| `SMTP_PASS` | _(secret)_ | Mailbox password / app password — never commit |
| `SMTP_FROM` | `TalentSpotify Website <contact@talentspotify.com>` | Must match the authenticated mailbox |
| `DEMO_LEAD_TO` | `contact@talentspotify.com` | Fixed recipient — the client cannot change it |
| `SEND_AUTO_REPLY` | `false` | `true` also emails the visitor a confirmation |

### 2. Microsoft 365 SMTP settings

- Host `smtp.office365.com`, port **587**, **STARTTLS** (set `SMTP_SECURE=false`).
- Sender mailbox: `contact@talentspotify.com`. The `From` address must be the
  authenticated mailbox — the visitor's email goes in **Reply-To**, never `From`.

### 3. Authenticated SMTP must be enabled for the mailbox

In the Microsoft 365 admin center → **Users → contact@talentspotify.com → Mail →
Manage email apps**, ensure **Authenticated SMTP** is checked. It is off by
default on many tenants.

### 4. Tenant-level settings can still block SMTP AUTH

Even with the mailbox enabled, an org-wide policy can disable SMTP AUTH. A Global
Admin may need to run (PowerShell, Exchange Online):

```
Set-TransportConfig -SmtpClientAuthenticationDisabled $false
```

Security Defaults / Conditional Access can also block basic SMTP AUTH — if so,
use an **app password** (with MFA) or move to OAuth (see note 9).

### 5. Port 587 + STARTTLS required

Use 587 with STARTTLS (`SMTP_SECURE=false`, the route sets `requireTLS`). Do not
use port 25. Use 465 only with `SMTP_SECURE=true`.

### 6. Test locally

1. Fill `.env.local` (including a real `SMTP_PASS`).
2. `npm run dev`.
3. Open the homepage, scroll to **"See a bias-free review cycle in 30 minutes"**,
   submit with valid values.
4. Confirm the success message appears and the email arrives at
   `contact@talentspotify.com`.

### 7. Deploy env vars

Add all variables above in your host's environment settings (e.g. Vercel →
Project → Settings → Environment Variables) for the Production (and Preview)
environments, then redeploy. Never hardcode credentials or commit `.env.local`.

### 8. Common errors

| Symptom | Likely cause / fix |
|---|---|
| `535 5.7.x Authentication unsuccessful` | Wrong password, or SMTP AUTH disabled for the mailbox / tenant; MFA without an app password. Enable Authenticated SMTP; use an app password. |
| `530 5.7.x Client was not authenticated` | Auth not attempted/accepted — check `SMTP_USER`/`SMTP_PASS` are set and STARTTLS is used (port 587, `SMTP_SECURE=false`). |
| Connection timeout | Port 587 blocked by network/host firewall, or wrong host. Confirm outbound 587 is allowed. |
| `SMTP is not configured` in server logs | One of `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` missing — usually env vars not set in production. |

The browser only ever sees a generic "couldn't send" message — real SMTP errors
and credentials are logged server-side only.

### 9. OAuth note (long-term)

Microsoft is phasing down basic SMTP AUTH. For durable production use, prefer
**OAuth2** (client credentials via Microsoft Graph / Azure AD app registration)
instead of a mailbox password. The current setup uses password auth for
simplicity; migrate to OAuth if Microsoft tightens requirements on the tenant.

---

## Demo form — bot / spam protection

Layers on `POST /api/request-demo` (invisible to real users):

- **Cloudflare Turnstile** (managed/invisible). Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  (browser) and `TURNSTILE_SECRET_KEY` (server). The token is verified
  **server-side** against `https://challenges.cloudflare.com/turnstile/v0/siteverify`
  before a lead is accepted. If `TURNSTILE_SECRET_KEY` is unset (local/dev),
  Turnstile is skipped so the form still works.
- **Honeypot:** an off-screen `company_website` field (CSS positioned off-screen,
  `tabindex="-1"`, `autocomplete="off"`). If filled, the server returns a fake
  success and drops the lead.
- **Time trap:** the form's render time is sent as `formRenderedAt`; submissions
  faster than 2s are rejected as bots.
- **Work-email filter:** free/consumer domains (gmail, yahoo, outlook, hotmail,
  icloud, proton.me, …) are rejected with "Please use your work email."
- **Rate limit:** in-memory, 5 requests / 10 min per IP. In-memory state does not
  survive across serverless instances — use Redis / Vercel KV / Upstash in
  production for a shared limiter.
- All submitted values are stripped of control characters (header-injection
  protection) and HTML-escaped before use in the email body.

## AI engine visibility (AEVO)

- **`/robots.txt`** (`public/robots.txt`) — explicitly allows AI search/fetch bots
  (OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot) plus the
  training crawlers (GPTBot, Google-Extended). To opt out of AI **training** later,
  change only GPTBot and Google-Extended to `Disallow: /`.
- **`/sitemap.xml`** (`app/sitemap.ts`) — generated for `/`, `/case-study`,
  `/roi-calculator`; referenced from robots.txt.
- **`/llms.txt`** (`public/llms.txt`) — concise Markdown index of key pages for LLMs.
- **JSON-LD** (`components/StructuredData.tsx`) — Organization + SoftwareApplication +
  FAQPage on the homepage. Validate with Google's Rich Results Test on the deployed URL.
- All marketing routes are statically prerendered (SSG), so full copy is in the raw
  HTML for crawlers that don't run JS.
