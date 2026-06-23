import type { Metadata } from "next";
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  Share2,
  Clock,
  UserCheck,
  Globe,
  Cookie,
  Baby,
  AlertTriangle,
  Mail,
  RefreshCw,
  Gavel,
  Database,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — TalentSpotify",
  description:
    "TalentSpotify Privacy Policy — how we collect, use, store, and protect personal data under India's Digital Personal Data Protection Act 2023 and GDPR for EEA/GCC users.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED   = "1 June 2025";
const EFFECTIVE_DATE = "1 June 2025";
const COMPANY        = "TalentSpotify Private Limited";
const CIN            = "U72900KA2022PTC157845";
const GST            = "29AAJCT1805A1ZN";
const ADDRESS        = "Sy No. 135/1, No. 87, Ground Floor, Flushing Meadows Layout, Yettakodi, Malur, Kolar, Karnataka, India – 563130";
const CONTACT_EMAIL  = "contact@talentspotify.com";
const GRIEVANCE_EMAIL = "contact@talentspotify.com";

const sections = [
  { id: "who-we-are",       label: "1. Who We Are" },
  { id: "scope",            label: "2. Scope & Applicability" },
  { id: "data-collected",   label: "3. Data We Collect" },
  { id: "how-we-use",       label: "4. How We Use Your Data" },
  { id: "legal-basis",      label: "5. Legal Basis for Processing" },
  { id: "consent",          label: "6. Consent Management" },
  { id: "sharing",          label: "7. Data Sharing & Sub-Processors" },
  { id: "transfers",        label: "8. International Transfers" },
  { id: "retention",        label: "9. Data Retention" },
  { id: "security",         label: "10. Security Measures" },
  { id: "your-rights",      label: "11. Your Rights" },
  { id: "cookies",          label: "12. Cookies & Tracking" },
  { id: "children",         label: "13. Children's Data" },
  { id: "grievance",        label: "14. Grievance Officer" },
  { id: "dpo",              label: "15. Data Protection Officer" },
  { id: "changes",          label: "16. Changes to this Policy" },
  { id: "contact",          label: "17. Contact Us" },
];

function SidebarNav() {
  return (
    <nav aria-label="Privacy policy sections" className="hidden lg:block">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand">Contents</p>
        <ul className="space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-surface hover:text-slate-900"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon?: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-100 pt-10 first:border-0 first:pt-0">
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
          </span>
        )}
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="prose-legal">{children}</div>
    </section>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm text-slate-700">
      {children}
    </div>
  );
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      {children}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
          </div>
          <div className="container-site relative py-16 md:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Privacy
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              We are committed to protecting the personal data of every individual whose information passes through TalentSpotify. This policy explains what we collect, why we collect it, how we use it, and the rights you hold over your data.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium">
                <RefreshCw className="h-3.5 w-3.5" /> Last updated: {LAST_UPDATED}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium">
                <Gavel className="h-3.5 w-3.5" /> Effective: {EFFECTIVE_DATE}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium">
                <Globe className="h-3.5 w-3.5" /> DPDPA 2023 · GDPR
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container-site py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <SidebarNav />

            <div className="space-y-10 text-slate-700 leading-relaxed">

              {/* 1 */}
              <Section id="who-we-are" icon={FileText} title="1. Who We Are">
                <p>
                  This Privacy Policy is published by <strong>{COMPANY}</strong> (CIN: {CIN}, GST: {GST}), registered at {ADDRESS} (<strong>"TalentSpotify"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>).
                </p>
                <p className="mt-4">
                  TalentSpotify operates an AI-powered human-resource performance management platform that includes TARA (an AI voice agent for structured performance review conversations), OKR management, recognition, and people analytics.
                </p>
                <p className="mt-4">
                  For personal data processed through our platform on behalf of our business customers, TalentSpotify acts as a <strong>Data Processor</strong> (or Sub-Processor under GDPR). Our customers — the organisations that subscribe to TalentSpotify — are the <strong>Data Fiduciaries / Data Controllers</strong> responsible for determining the purpose and means of processing employee personal data.
                </p>
                <p className="mt-4">
                  For personal data we collect directly (website visitors, trial users, marketing contacts), TalentSpotify acts as the <strong>Data Fiduciary / Controller</strong>.
                </p>
              </Section>

              {/* 2 */}
              <Section id="scope" icon={Globe} title="2. Scope & Applicability">
                <p>This policy applies to:</p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li><strong>Visitors</strong> to our website at <span className="font-medium">www.talentspotify.com</span> and any related subdomains.</li>
                  <li><strong>Trial and prospective customers</strong> who submit demo requests, sign up for free trials, or contact our sales team.</li>
                  <li><strong>Subscribers</strong> — authorised users (employees, managers, HR administrators) of organisations that have purchased a TalentSpotify subscription.</li>
                  <li><strong>Data Principals</strong> — employees of our customers whose personal data is processed through our platform as part of performance management workflows.</li>
                </ul>
                <p className="mt-4">
                  This policy does not cover third-party websites linked from our platform. We encourage you to review the privacy policies of any third-party services you access through links on our site.
                </p>
                <InfoBox>
                  <strong className="text-brand-dark">GCC / EEA users:</strong> If you are located in the European Economic Area, the Gulf Cooperation Council, or another jurisdiction with localised data protection laws, additional rights and obligations described in Sections 7, 8, 11, and 15 apply to you.
                </InfoBox>
              </Section>

              {/* 3 */}
              <Section id="data-collected" icon={Database} title="3. Data We Collect">
                <p>We collect and process the following categories of personal data, depending on your relationship with us:</p>

                <h3 className="mt-6 mb-3 font-semibold text-slate-800">3.1 Data you provide directly</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Examples</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Collected from</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium">Identity data</td>
                        <td className="px-4 py-3">Full name, employee ID, job title, department, reporting line</td>
                        <td className="px-4 py-3">Customer HR upload, user profile</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Contact data</td>
                        <td className="px-4 py-3">Work email address, phone number</td>
                        <td className="px-4 py-3">Customer HR upload, demo request form</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Performance data</td>
                        <td className="px-4 py-3">OKR goals, check-in updates, review ratings, manager feedback, bias signal flags</td>
                        <td className="px-4 py-3">Platform usage during active subscription</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Voice & conversation data</td>
                        <td className="px-4 py-3">Audio recordings of TARA review conversations, transcripts, AI-generated analysis</td>
                        <td className="px-4 py-3">TARA AI agent (with participant consent)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Recognition data</td>
                        <td className="px-4 py-3">Peer recognition messages, award points, leaderboard standings</td>
                        <td className="px-4 py-3">Platform usage</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Account credentials</td>
                        <td className="px-4 py-3">Username, hashed password, SSO tokens</td>
                        <td className="px-4 py-3">Account registration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-6 mb-3 font-semibold text-slate-800">3.2 Data collected automatically</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Examples</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium">Usage data</td>
                        <td className="px-4 py-3">Pages visited, features used, button clicks, session duration, login timestamps</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Device & technical data</td>
                        <td className="px-4 py-3">IP address, browser type, operating system, device type, timezone</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Log data</td>
                        <td className="px-4 py-3">Server logs, error reports, API call timestamps</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Cookie data</td>
                        <td className="px-4 py-3">Session cookies, preference cookies, analytics identifiers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  We do not intentionally collect <strong>sensitive personal data</strong> (such as health information, biometric data, caste, religion, political opinions, or sexual orientation). If such data is incidentally mentioned in a TARA voice review, it is not extracted, stored separately, or used for any purpose other than providing the review summary in the context in which it was shared.
                </p>
              </Section>

              {/* 4 */}
              <Section id="how-we-use" icon={Eye} title="4. How We Use Your Data">
                <p>We use personal data only for the purposes for which it was collected or to which you have consented:</p>
                <ul className="mt-4 space-y-3 pl-5 list-disc">
                  <li><strong>Service delivery:</strong> To operate the TalentSpotify platform, including running OKR cycles, performance reviews, TARA conversations, and recognition workflows on behalf of our customers.</li>
                  <li><strong>Bias signal analysis:</strong> TARA analyses review transcripts to surface potential cognitive, social, and calibration bias signals. This analysis is provided to HR for human review only — it does not make, record, or recommend final employment decisions.</li>
                  <li><strong>Account management:</strong> To create and manage user accounts, authenticate users, and process subscription billing.</li>
                  <li><strong>Customer support:</strong> To respond to queries, resolve technical issues, and provide onboarding assistance.</li>
                  <li><strong>Security:</strong> To detect and prevent fraud, unauthorised access, and security incidents.</li>
                  <li><strong>Platform improvement:</strong> To analyse aggregated, anonymised usage patterns to improve features and user experience. We do not use identifiable Customer Data to train AI models made available to third parties without explicit written consent.</li>
                  <li><strong>Marketing communications:</strong> To send product updates, newsletters, and promotional materials to individuals who have opted in. You can unsubscribe at any time.</li>
                  <li><strong>Legal compliance:</strong> To comply with applicable laws, respond to lawful government requests, and enforce our Terms &amp; Conditions.</li>
                </ul>
              </Section>

              {/* 5 */}
              <Section id="legal-basis" icon={Gavel} title="5. Legal Basis for Processing">
                <p>
                  Under India's <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, we rely on the following grounds to process personal data:
                </p>
                <ul className="mt-4 space-y-3 pl-5 list-disc">
                  <li><strong>Consent (§7 DPDPA):</strong> For TARA voice recordings, marketing emails, and any optional data collection. Consent is obtained before data collection and may be withdrawn at any time.</li>
                  <li><strong>Contractual necessity:</strong> To deliver the services you or your employer has subscribed to.</li>
                  <li><strong>Legitimate uses (§7(f)–(i) DPDPA):</strong> For security monitoring, fraud prevention, legal compliance, and aggregated analytics.</li>
                  <li><strong>Legal obligation:</strong> Where processing is required by applicable Indian law.</li>
                </ul>

                <h3 className="mt-6 mb-2 font-semibold text-slate-800">GDPR Lawful Bases (EEA/GCC users)</h3>
                <p>
                  For users located in the European Economic Area or jurisdictions where GDPR applies, we rely on:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li><strong>Article 6(1)(b):</strong> Performance of a contract — to provide the services your organisation subscribed to.</li>
                  <li><strong>Article 6(1)(a):</strong> Consent — for optional processing such as marketing communications and voice recordings.</li>
                  <li><strong>Article 6(1)(f):</strong> Legitimate interests — for security, fraud prevention, and product analytics, where these interests are not overridden by your rights.</li>
                  <li><strong>Article 6(1)(c):</strong> Legal obligation — where processing is required by EU or member-state law.</li>
                </ul>
              </Section>

              {/* 6 */}
              <Section id="consent" icon={UserCheck} title="6. Consent Management">
                <p>
                  Where we rely on consent as the lawful basis for processing, we ensure that consent is:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li><strong>Freely given</strong> — not bundled with acceptance of terms unrelated to the processing.</li>
                  <li><strong>Specific</strong> — obtained for a defined purpose, not a blanket permission.</li>
                  <li><strong>Informed</strong> — provided only after a clear, plain-language description of what data is collected and how it is used.</li>
                  <li><strong>Unambiguous</strong> — via a positive opt-in action (e.g., checking a box, tapping an on-screen confirmation before a TARA session starts).</li>
                </ul>
                <h3 className="mt-6 mb-2 font-semibold text-slate-800">TARA Voice Recording Consent</h3>
                <p>
                  Before any TARA-assisted performance conversation begins, all participants (manager and employee) receive an in-app and/or verbal notification that the conversation will be recorded and analysed by TARA. The session does not commence until all participants have confirmed consent. Participants may withdraw at any time by ending the session — any recording made up to that point is deleted.
                </p>
                <h3 className="mt-6 mb-2 font-semibold text-slate-800">Withdrawing Consent</h3>
                <p>
                  You may withdraw consent at any time by contacting us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a> or via the account settings in the platform. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.
                </p>
              </Section>

              {/* 7 */}
              <Section id="sharing" icon={Share2} title="7. Data Sharing & Sub-Processors">
                <p>
                  We do not sell, rent, or share your personal data with third parties for their own marketing or commercial purposes. We share data only in the following circumstances:
                </p>
                <ul className="mt-4 space-y-3 pl-5 list-disc">
                  <li><strong>Within your organisation:</strong> Authorised HR administrators and managers in your organisation can access data relevant to their role as permitted by your organisation's configuration.</li>
                  <li><strong>Sub-processors:</strong> We engage trusted third-party service providers to help us deliver the Platform. Each sub-processor is bound by a data processing agreement that requires them to protect data to at least the same standard as this policy.</li>
                  <li><strong>Legal requirements:</strong> Where required by applicable law, court order, or a lawful government request, we may disclose personal data. We will notify you of such a request where legally permitted.</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or substantially all of our assets, personal data may be transferred to the acquiring entity, subject to equivalent privacy protections.</li>
                </ul>

                <h3 className="mt-6 mb-3 font-semibold text-slate-800">Key Sub-Processors</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Provider</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Purpose</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium">Amazon Web Services (AWS)</td>
                        <td className="px-4 py-3">Cloud hosting, storage, compute (ap-south-1 Mumbai)</td>
                        <td className="px-4 py-3">India</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Payment gateway</td>
                        <td className="px-4 py-3">Subscription billing, invoice processing</td>
                        <td className="px-4 py-3">India</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Email / notification service</td>
                        <td className="px-4 py-3">Transactional emails, product notifications</td>
                        <td className="px-4 py-3">India / EU</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Analytics</td>
                        <td className="px-4 py-3">Aggregated, anonymised product usage analytics</td>
                        <td className="px-4 py-3">India / EU</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  A full list of current sub-processors is available on request at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4">{CONTACT_EMAIL}</a>.
                </p>
              </Section>

              {/* 8 */}
              <Section id="transfers" icon={Globe} title="8. International Data Transfers">
                <p>
                  All personal data processed through TalentSpotify is stored on <strong>AWS Mumbai (ap-south-1)</strong> servers located in India. Data does not leave India unless:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>You have explicitly enabled cross-border features (e.g., GCC entity management).</li>
                  <li>Required by a lawful order of a government authority.</li>
                  <li>A sub-processor listed above operates infrastructure partially outside India (in which case Standard Contractual Clauses or equivalent safeguards apply).</li>
                </ul>
                <h3 className="mt-6 mb-2 font-semibold text-slate-800">GDPR Transfers</h3>
                <p>
                  For customers in the EEA or GCC, transfers of personal data outside those jurisdictions are protected by:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>EU Standard Contractual Clauses (SCCs) for transfers to third countries without an adequacy decision.</li>
                  <li>Adequacy decisions where applicable (e.g., transfers to countries with equivalent protection recognised by the European Commission).</li>
                </ul>
                <InfoBox>
                  <strong className="text-brand-dark">Note for DPDPA:</strong> TalentSpotify complies with any cross-border transfer restrictions notified by the Government of India under the Digital Personal Data Protection Act, 2023 and the rules made thereunder. Transfers to countries not listed in the whitelist published by the Government will not be made without your explicit consent.
                </InfoBox>
              </Section>

              {/* 9 */}
              <Section id="retention" icon={Clock} title="9. Data Retention">
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes described in this policy, to comply with legal obligations, or to resolve disputes. Our standard retention schedule is as follows:
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Data Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Retention Period</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3">TARA voice recordings</td>
                        <td className="px-4 py-3">Duration of active review cycle + 90 days</td>
                        <td className="px-4 py-3">Contractual / consent</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3">TARA transcripts & analysis</td>
                        <td className="px-4 py-3">Duration of active subscription + 12 months</td>
                        <td className="px-4 py-3">Contractual</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Performance review records</td>
                        <td className="px-4 py-3">Duration of active subscription + 3 years</td>
                        <td className="px-4 py-3">Legal / contractual</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3">Account & billing records</td>
                        <td className="px-4 py-3">7 years from last transaction</td>
                        <td className="px-4 py-3">Tax / legal obligation (Companies Act, GST)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Marketing contact data</td>
                        <td className="px-4 py-3">Until you unsubscribe + 6 months</td>
                        <td className="px-4 py-3">Consent</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3">Website analytics</td>
                        <td className="px-4 py-3">13 months (rolling)</td>
                        <td className="px-4 py-3">Legitimate interest</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Server logs</td>
                        <td className="px-4 py-3">90 days</td>
                        <td className="px-4 py-3">Security / legitimate interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  On termination of a subscription, Customer Data will be available for export for 30 days. After this period, data is securely deleted or anonymised in accordance with the schedule above.
                </p>
              </Section>

              {/* 10 */}
              <Section id="security" icon={ShieldCheck} title="10. Security Measures">
                <p>
                  We implement and maintain technical and organisational security measures appropriate to the risk and nature of the personal data we process:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Encryption at rest", "AES-256 for all stored data on AWS"],
                    ["Encryption in transit", "TLS 1.3 for all data in motion"],
                    ["Access control", "Role-based access with least-privilege principles; MFA enforced for admin accounts"],
                    ["Audit logging", "Immutable access logs retained for 90 days for security investigation"],
                    ["Vulnerability management", "Regular penetration testing and third-party security assessments"],
                    ["Incident response", "Documented incident response plan with breach notification procedures"],
                    ["Vendor assessment", "All sub-processors reviewed against security standards before engagement"],
                    ["Data minimisation", "We collect only what is necessary for the stated purpose"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="font-semibold text-slate-800 text-sm">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5">
                  Despite these measures, no system is completely secure. In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, we will notify you and the relevant supervisory authority within <strong>72 hours</strong> of becoming aware of the breach, in accordance with applicable law.
                </p>
              </Section>

              {/* 11 */}
              <Section id="your-rights" icon={UserCheck} title="11. Your Rights">
                <p>
                  Depending on your location and the applicable law, you may have the following rights over your personal data:
                </p>

                <h3 className="mt-6 mb-3 font-semibold text-slate-800">Rights under DPDPA 2023 (India)</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Right to access", "Request a copy of the personal data we hold about you and information about how it is processed."],
                    ["Right to correction", "Request correction of inaccurate or incomplete personal data."],
                    ["Right to erasure", "Request deletion of your personal data where it is no longer necessary for the purpose for which it was collected, or where you withdraw consent."],
                    ["Right to grievance redressal", "Lodge a complaint with our Grievance Officer (see Section 14) if you believe your rights have been violated."],
                    ["Right to nominate", "Nominate another person to exercise your DPDPA rights on your behalf in the event of your death or incapacity."],
                    ["Right to withdraw consent", "Withdraw previously given consent at any time, without affecting the lawfulness of prior processing."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="font-semibold text-brand-dark text-sm">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-6 mb-3 font-semibold text-slate-800">Additional Rights under GDPR (EEA / GCC users)</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Right to data portability", "Receive your personal data in a structured, machine-readable format and transfer it to another controller."],
                    ["Right to restrict processing", "Request that we limit how we use your data while a correction or objection is being resolved."],
                    ["Right to object", "Object to processing based on legitimate interests or for direct marketing at any time."],
                    ["Rights related to automated decisions", "Not be subject to decisions based solely on automated processing that produce significant legal or similarly significant effects, without human review."],
                    ["Right to lodge a complaint", "File a complaint with your local supervisory authority (e.g., the relevant Data Protection Authority in your country)."],
                    ["Right to be informed", "Receive clear, transparent information about how your data is processed, provided in plain language."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="font-semibold text-brand-dark text-sm">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>

                <InfoBox>
                  <strong className="text-brand-dark">How to exercise your rights:</strong> Submit a written request to <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a> with the subject line "Privacy Rights Request." We will respond within <strong>30 days</strong>. If your request is complex or numerous, we may extend this by a further 60 days with notice. We will verify your identity before processing the request. We do not charge a fee for reasonable requests.
                </InfoBox>

                <WarnBox>
                  <strong>Note for employee data principals:</strong> If your personal data is processed through TalentSpotify by your employer, your employer (as the Data Fiduciary / Controller) is the primary contact for exercising your rights. We will work cooperatively with your employer to fulfil any verified request within our technical capability.
                </WarnBox>
              </Section>

              {/* 12 */}
              <Section id="cookies" icon={Cookie} title="12. Cookies & Tracking Technologies">
                <p>
                  We use cookies and similar technologies on our website and platform. Cookies are small text files placed on your device that help us recognise you and provide a better experience.
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Cookie Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Purpose</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Can be declined?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium">Essential</td>
                        <td className="px-4 py-3">Login sessions, security tokens, CSRF protection</td>
                        <td className="px-4 py-3">No — required to use the platform</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Functional</td>
                        <td className="px-4 py-3">Language preference, UI settings, timezone</td>
                        <td className="px-4 py-3">Yes — platform may lose preferences</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Analytics</td>
                        <td className="px-4 py-3">Aggregated page views, feature usage heatmaps</td>
                        <td className="px-4 py-3">Yes — via cookie banner</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="px-4 py-3 font-medium">Marketing</td>
                        <td className="px-4 py-3">Ad retargeting, campaign attribution (website only)</td>
                        <td className="px-4 py-3">Yes — via cookie banner</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  You can manage cookie preferences through your browser settings or our cookie banner. Please note that disabling certain cookies may affect the functionality of the platform. For platform (logged-in) users, essential cookies cannot be disabled as they are required for secure authentication.
                </p>
                <p className="mt-4">
                  We use Cloudflare Turnstile for bot protection on our public forms. Cloudflare's privacy practices are governed by Cloudflare's own privacy policy.
                </p>
              </Section>

              {/* 13 */}
              <Section id="children" icon={Baby} title="13. Children's Data">
                <p>
                  The TalentSpotify platform is a B2B enterprise product designed for use by employed adults in a professional context. We do not knowingly collect, process, or solicit personal data from individuals under the age of <strong>18</strong>.
                </p>
                <p className="mt-4">
                  If you believe that a person under 18 has provided personal data to us without appropriate parental or guardian consent, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>. We will take prompt steps to verify and delete such data.
                </p>
                <WarnBox>
                  <strong>Employer responsibility:</strong> Customer organisations are responsible for ensuring that all employees whose data is uploaded to TalentSpotify meet the minimum age requirement under applicable Indian labour and data protection law.
                </WarnBox>
              </Section>

              {/* 14 */}
              <Section id="grievance" icon={AlertTriangle} title="14. Grievance Officer">
                <p>
                  In accordance with the Information Technology Act, 2000 (as amended), the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023, we have appointed a Grievance Officer to address complaints related to personal data processing:
                </p>
                <address className="mt-5 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>Grievance Officer</strong><br />
                  <strong>{COMPANY}</strong><br />
                  {ADDRESS}<br />
                  Email: <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{GRIEVANCE_EMAIL}</a><br />
                  Response time: Within <strong>30 days</strong> of receipt of complaint
                </address>
                <p className="mt-4">
                  If your complaint is not resolved to your satisfaction by our Grievance Officer, you may escalate your complaint to the <strong>Data Protection Board of India</strong>, once constituted under the DPDPA 2023.
                </p>
              </Section>

              {/* 15 */}
              <Section id="dpo" icon={ShieldCheck} title="15. Data Protection Officer (GDPR)">
                <p>
                  For customers and data subjects in the European Economic Area or jurisdictions where GDPR applies, enquiries related to data protection may be directed to our Data Protection contact:
                </p>
                <address className="mt-5 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>Data Protection Contact</strong><br />
                  <strong>{COMPANY}</strong><br />
                  {ADDRESS}<br />
                  Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>
                </address>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the supervisory authority in your country of residence. In India, the relevant authority is the Data Protection Board of India (once constituted). For EEA users, this is the relevant national Data Protection Authority.
                </p>
              </Section>

              {/* 16 */}
              <Section id="changes" icon={RefreshCw} title="16. Changes to this Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in law, our data practices, or our services. When we make material changes, we will:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Update the "Last updated" date at the top of this page.</li>
                  <li>Send an email notification to all active subscribers at least <strong>30 days</strong> before the changes take effect.</li>
                  <li>Display a prominent banner on the platform for the notice period.</li>
                </ul>
                <p className="mt-4">
                  For changes that reduce your privacy rights, we will seek fresh consent where required by law. Your continued use of the Platform after the effective date of the revised policy constitutes acceptance of the updated terms.
                </p>
                <p className="mt-4">
                  We encourage you to review this policy periodically. Prior versions are available on request.
                </p>
              </Section>

              {/* 17 */}
              <Section id="contact" icon={Mail} title="17. Contact Us">
                <p>
                  For any questions, concerns, or requests related to this Privacy Policy or our data processing practices, please contact us:
                </p>
                <address className="mt-4 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>{COMPANY}</strong><br />
                  CIN: {CIN}<br />
                  GST: {GST}<br />
                  {ADDRESS}<br />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>
                </address>
                <p className="mt-5">
                  We aim to respond to all privacy-related enquiries within <strong>5 business days</strong> and to resolve requests within 30 days. For complaints that we cannot resolve, you may contact the relevant data protection authority in your jurisdiction.
                </p>
              </Section>

            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-slate-100 bg-surface">
          <div className="container-site flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-slate-600">
              Questions about how we handle your data?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark">
                Email our privacy team
              </a>
            </p>
            <a
              href="/#book-demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Request Demo
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
