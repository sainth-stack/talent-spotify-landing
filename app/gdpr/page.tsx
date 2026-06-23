import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileText,
  RefreshCw,
  Globe,
  AlertTriangle,
  Mail,
  Database,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DPDPA & GDPR Compliance — TalentSpotify",
  description:
    "TalentSpotify's data protection commitments under India's Digital Personal Data Protection Act 2023 (DPDPA) and GDPR for GCC and international users.",
  alternates: { canonical: "/gdpr" },
};

const LAST_UPDATED = "21 June 2026";
const CONTACT_EMAIL = "contact@talentspotify.com";
const GRIEVANCE_EMAIL = "contact@talentspotify.com";
const DPO_EMAIL = "contact@talentspotify.com";
const SECURITY_EMAIL = "contact@talentspotify.com";
const COMPANY = "TalentSpotify Private Limited";
const CIN = "U72900KA2022PTC157845";
const GST = "29AAJCT1805A1ZN";
const ADDRESS = "Sy No. 135/1, No. 87, Ground Floor, Flushing Meadows Layout, Yettakodi, Malur, Kolar, Karnataka, India – 563130";

const sections = [
  { id: "overview",       label: "1. Overview & Applicability" },
  { id: "data-we-collect",label: "2. Data We Collect" },
  { id: "purpose",        label: "3. Purpose & Legal Basis" },
  { id: "consent",        label: "4. Consent Management" },
  { id: "dpdpa-rights",   label: "5. Your Rights (DPDPA)" },
  { id: "gdpr-rights",    label: "6. Your Rights (GDPR)" },
  { id: "retention",      label: "7. Data Retention" },
  { id: "security",       label: "8. Security Safeguards" },
  { id: "subprocessors",  label: "9. Sub-Processors" },
  { id: "transfers",      label: "10. International Transfers" },
  { id: "breach",         label: "11. Breach Notification" },
  { id: "children",       label: "12. Children's Data" },
  { id: "grievance",      label: "13. Grievance Redressal" },
  { id: "dpo",            label: "14. Data Protection Officer" },
  { id: "changes",        label: "15. Policy Changes" },
  { id: "contact",        label: "16. Contact Us" },
];

function SidebarNav() {
  return (
    <nav aria-label="DPDPA & GDPR sections" className="hidden lg:block">
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
  badge,
  children,
}: {
  id: string;
  icon?: React.ElementType;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-100 pt-10 first:border-0 first:pt-0">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {Icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <Icon className="h-4.5 w-4.5 text-brand" aria-hidden="true" />
          </span>
        )}
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        {badge && (
          <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

function RightsCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="font-semibold text-slate-800">{title}</p>
      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function GdprPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
            <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/8 blur-[120px]" />
          </div>
          <div className="container-site relative py-16 md:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Data Protection
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              DPDPA &amp; GDPR Compliance
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              How TalentSpotify collects, processes, and protects personal data — aligned with India's Digital Personal Data Protection Act 2023 and GDPR for our GCC and international users.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                <RefreshCw className="h-3.5 w-3.5" /> Last updated: {LAST_UPDATED}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand-dark">
                <ShieldCheck className="h-3.5 w-3.5" /> DPDPA 2023 Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand-dark">
                <Globe className="h-3.5 w-3.5" /> GDPR Article 27 Ready
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
              <Section id="overview" icon={FileText} title="1. Overview &amp; Applicability">
                <p>
                  This Data Protection &amp; Privacy page (<strong>"Policy"</strong>) describes how <strong>{COMPANY}</strong> (CIN: {CIN}), registered at {ADDRESS}, collects, processes, stores, and protects personal data.
                </p>
                <p className="mt-4">
                  This Policy applies to:
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li><strong>Data Principals / Employees</strong> whose performance data is processed through the Platform.</li>
                  <li><strong>HR Administrators and Managers</strong> who configure and operate the Platform.</li>
                  <li><strong>Visitors</strong> to our website and marketing materials.</li>
                </ul>
                <p className="mt-4">
                  <strong>Regulatory framework:</strong> Our primary compliance framework is the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong> — India's landmark data protection legislation. For customers or data principals located in the European Economic Area (EEA), the United Kingdom, or the Gulf Cooperation Council (GCC), we additionally apply the principles of the <strong>General Data Protection Regulation (GDPR)</strong>.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                    <p className="font-semibold text-brand-dark">India — DPDPA 2023</p>
                    <p className="mt-1 text-sm text-slate-600">Primary framework. We act as Data Processor for customer organisations (Data Fiduciaries). Data stored on AWS Mumbai (ap-south-1).</p>
                  </div>
                  <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                    <p className="font-semibold text-brand-dark">GCC &amp; International — GDPR</p>
                    <p className="mt-1 text-sm text-slate-600">Applied for EEA/UK/GCC data subjects. SCCs in place for cross-border transfers. Article 27 EU Representative designated.</p>
                  </div>
                </div>
              </Section>

              {/* 2 */}
              <Section id="data-we-collect" icon={Database} title="2. Data We Collect">
                <p>We collect only the personal data necessary to provide the contracted services (data minimisation principle). This includes:</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-surface">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">Category</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">Examples</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">Identity &amp; Contact</td>
                          <td className="px-4 py-3 text-slate-600">Name, work email, employee ID, job title, department</td>
                          <td className="px-4 py-3 text-slate-600">Account creation, review attribution, reporting</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">Performance Data</td>
                          <td className="px-4 py-3 text-slate-600">OKR scores, review ratings, competency assessments, feedback text</td>
                          <td className="px-4 py-3 text-slate-600">Core platform functionality</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">TARA Voice Data</td>
                          <td className="px-4 py-3 text-slate-600">Audio recording (consented), transcript, bias-signal flags</td>
                          <td className="px-4 py-3 text-slate-600">AI-assisted review facilitation and fairness analysis</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">Usage &amp; Log Data</td>
                          <td className="px-4 py-3 text-slate-600">IP address, browser type, session timestamps, page views</td>
                          <td className="px-4 py-3 text-slate-600">Security, fraud prevention, service improvement</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">Payment Data</td>
                          <td className="px-4 py-3 text-slate-600">Billing contact name, GST number, payment reference</td>
                          <td className="px-4 py-3 text-slate-600">Invoice generation, accounting compliance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  We do not collect or process sensitive personal data (biometric identifiers, health records, religious beliefs, caste) as defined under DPDPA unless explicitly contracted and consented for a specific purpose.
                </p>
              </Section>

              {/* 3 */}
              <Section id="purpose" icon={Eye} title="3. Purpose &amp; Legal Basis for Processing">
                <p>We process personal data only for specific, lawful purposes. Under DPDPA, our lawful bases are <strong>consent</strong> and <strong>legitimate use</strong>. Under GDPR, we rely on contract performance, legitimate interests, and legal obligation.</p>
                <div className="mt-5 space-y-3">
                  {[
                    { purpose: "Performance review facilitation", basis: "Consent (DPDPA) / Contract (GDPR)", note: "Employees provide affirmative consent via the in-app consent screen before any TARA session." },
                    { purpose: "Bias-signal analysis", basis: "Consent (DPDPA) / Legitimate interest (GDPR)", note: "Analysis is performed on transcripts only after recorded consent. Findings are surfaced to HR — never used to make automated decisions." },
                    { purpose: "OKR tracking & recognition", basis: "Consent / Contract", note: "Core platform functionality as contracted with the employer." },
                    { purpose: "Product improvement & model training", basis: "Separate explicit consent", note: "We will not use your data to improve AI models available to third parties without a separate, explicit opt-in." },
                    { purpose: "Security & fraud prevention", basis: "Legitimate interest / Legal obligation", note: "Logs retained for 90 days for security incident investigation." },
                    { purpose: "Invoice & tax compliance", basis: "Legal obligation", note: "Financial records retained for 7 years as required under the Companies Act, 2013 and GST law." },
                  ].map((row) => (
                    <div key={row.purpose} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="font-semibold text-slate-800">{row.purpose}</p>
                        <span className="shrink-0 rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-slate-600">{row.basis}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-slate-600">{row.note}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 4 */}
              <Section id="consent" icon={UserCheck} title="4. Consent Management" badge="DPDPA §7">
                <p>
                  Under the DPDPA 2023, consent must be <strong>free, specific, informed, unconditional, and unambiguous</strong>. We implement this as follows:
                </p>
                <ul className="mt-4 space-y-3 pl-5 list-disc">
                  <li><strong>TARA Session Consent:</strong> Before every AI-assisted review conversation, each participant receives a clear, plain-language consent notice in their preferred language (22 Indian languages + English). The session does not begin until affirmative consent is recorded.</li>
                  <li><strong>Granular Controls:</strong> Employees can consent to transcript generation without consenting to voice recording, and vice versa. No mid-session scoring without prior explicit consent.</li>
                  <li><strong>Consent Records:</strong> Timestamped consent records are stored and linked to each session. These are available to your HR administrator via the compliance dashboard.</li>
                  <li><strong>Withdrawal:</strong> Employees may withdraw consent at any time through the Platform's privacy settings or by contacting your HR administrator. Withdrawal does not affect processing already carried out before withdrawal.</li>
                  <li><strong>No Dark Patterns:</strong> Consent is never bundled with Terms acceptance or pre-ticked. We do not use deceptive design to obtain consent.</li>
                </ul>
              </Section>

              {/* 5 */}
              <Section id="dpdpa-rights" icon={UserCheck} title="5. Your Rights as a Data Principal" badge="DPDPA §12–18">
                <p>
                  Under the Digital Personal Data Protection Act 2023, every Data Principal (employee) has the following rights. To exercise any right, contact your HR administrator or email <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{GRIEVANCE_EMAIL}</a>.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <RightsCard title="Right to Information (§12)" description="You have the right to know what personal data we hold about you, the purposes for which it is processed, and the identity of any third parties to whom it has been disclosed." />
                  <RightsCard title="Right to Correction (§13)" description="You may request correction of inaccurate or incomplete personal data. Requests are acknowledged within 3 business days and actioned within 15." />
                  <RightsCard title="Right to Erasure (§13)" description="You may request deletion of your personal data where it is no longer necessary for the purpose for which it was collected, subject to legal retention obligations." />
                  <RightsCard title="Right to Grievance Redressal (§13)" description="You may raise a grievance with our Grievance Officer. We will acknowledge within 24 hours and resolve within 30 days." />
                  <RightsCard title="Right to Nominate (§14)" description="You may nominate another individual to exercise your rights in the event of death or incapacity." />
                  <RightsCard title="Right to Withdraw Consent (§7)" description="You may withdraw consent at any time. Withdrawal will not affect processing already completed and may limit certain Platform features going forward." />
                </div>
                <div className="mt-5 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm">
                  <strong className="text-brand-dark">Response timelines:</strong> We acknowledge all rights requests within <strong>72 hours</strong> and respond substantively within <strong>30 days</strong>, as required by DPDPA. Complex requests may be extended by a further 30 days with notification.
                </div>
              </Section>

              {/* 6 */}
              <Section id="gdpr-rights" icon={Globe} title="6. Your Rights under GDPR" badge="For GCC / EEA users">
                <p>
                  If you are located in the European Economic Area, United Kingdom, or in GCC countries where GDPR-equivalent obligations apply, you additionally have the following rights under Regulation (EU) 2016/679:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <RightsCard title="Right of Access (Art. 15)" description="Request a copy of all personal data we hold about you, together with information about how it is processed." />
                  <RightsCard title="Right to Rectification (Art. 16)" description="Request correction of inaccurate personal data without undue delay." />
                  <RightsCard title="Right to Erasure (Art. 17)" description="The 'right to be forgotten' — request deletion where no overriding legal ground exists." />
                  <RightsCard title="Right to Restrict Processing (Art. 18)" description="Request that we restrict processing while a correction or objection request is under consideration." />
                  <RightsCard title="Right to Data Portability (Art. 20)" description="Receive your personal data in a structured, machine-readable format and transmit it to another controller." />
                  <RightsCard title="Right to Object (Art. 21)" description="Object to processing based on legitimate interests, including profiling. We will cease processing unless we demonstrate compelling legitimate grounds." />
                </div>
                <p className="mt-5 text-sm text-slate-600">
                  If you believe we have not addressed your concern adequately, you have the right to lodge a complaint with your national supervisory authority (e.g., the ICO in the UK or relevant DPA in the EEA).
                </p>
              </Section>

              {/* 7 */}
              <Section id="retention" icon={Database} title="7. Data Retention">
                <p>We retain personal data only for as long as necessary for the stated purpose or as required by law. Our standard retention schedule:</p>
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Data Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Retention Period</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-3 font-medium">TARA voice recordings</td><td className="px-4 py-3">90 days after review cycle closes</td><td className="px-4 py-3">Operational necessity; deleted earlier on request</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Transcripts &amp; bias-signal reports</td><td className="px-4 py-3">Duration of active subscription + 90 days</td><td className="px-4 py-3">Audit trail for HR; exportable on request</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Performance review data</td><td className="px-4 py-3">Duration of subscription + 90 days after termination</td><td className="px-4 py-3">Customer data ownership</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Usage &amp; security logs</td><td className="px-4 py-3">90 days</td><td className="px-4 py-3">Security incident response</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Invoices &amp; financial records</td><td className="px-4 py-3">7 years</td><td className="px-4 py-3">Companies Act 2013 / GST compliance</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Consent records</td><td className="px-4 py-3">Duration of subscription + 3 years</td><td className="px-4 py-3">DPDPA audit obligation</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  All data is securely destroyed at end-of-life using NIST SP 800-88 compliant methods. Customers may request early deletion at any time during the subscription.
                </p>
              </Section>

              {/* 8 */}
              <Section id="security" icon={Lock} title="8. Security Safeguards">
                <p>We implement layered security controls proportionate to the sensitivity of performance and HR data:</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Encryption at Rest", desc: "AES-256 encryption for all stored data including voice recordings, transcripts, and review data." },
                    { title: "Encryption in Transit", desc: "TLS 1.3 enforced for all data transmission. HSTS enabled. Certificate pinning for mobile clients." },
                    { title: "Infrastructure", desc: "Hosted on AWS Mumbai (ap-south-1). VPC isolation, private subnets, and WAF protection." },
                    { title: "Access Control", desc: "Role-based access control (RBAC) with least-privilege principles. MFA enforced for all admin accounts." },
                    { title: "Vulnerability Management", desc: "Annual penetration testing by independent third party. Continuous dependency scanning via automated tooling." },
                    { title: "Employee Training", desc: "All staff complete data protection and security awareness training annually. Background checks for staff with data access." },
                    { title: "Incident Response", desc: "Documented incident response plan. Dedicated security team on-call 24/7. Breach notification within 72 hours of discovery." },
                    { title: "Backup &amp; Recovery", desc: "Daily encrypted backups with 30-day retention. RTO of 4 hours, RPO of 1 hour for Enterprise plans." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <p className="font-semibold text-slate-800" dangerouslySetInnerHTML={{ __html: item.title }} />
                          <p className="mt-1 text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 9 */}
              <Section id="subprocessors" icon={Database} title="9. Sub-Processors">
                <p>
                  We engage the following categories of sub-processors to deliver the Platform. All sub-processors are contractually bound to data protection obligations at least equivalent to those we owe you.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Sub-Processor</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Purpose</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-3 font-medium">Amazon Web Services (AWS)</td><td className="px-4 py-3">Cloud infrastructure &amp; storage</td><td className="px-4 py-3">India (ap-south-1)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">AI/ML Inference Provider</td><td className="px-4 py-3">Speech-to-text transcription &amp; NLP analysis</td><td className="px-4 py-3">India (primary)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Email Delivery Provider</td><td className="px-4 py-3">Transactional and notification emails</td><td className="px-4 py-3">India / EEA</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Payment Gateway</td><td className="px-4 py-3">Payment processing (no card data stored by us)</td><td className="px-4 py-3">India (RBI-compliant)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Analytics Provider</td><td className="px-4 py-3">Anonymised product usage analytics</td><td className="px-4 py-3">India</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  We will notify you of any intended changes to sub-processors with at least 30 days' notice, giving you the opportunity to object. An up-to-date list is available on request.
                </p>
              </Section>

              {/* 10 */}
              <Section id="transfers" icon={Globe} title="10. International Data Transfers">
                <p>
                  By default, all Customer Data is stored and processed in <strong>India (AWS Mumbai region)</strong> and does not leave India. For customers who explicitly enable cross-border features (e.g., GCC payroll integrations), we ensure appropriate safeguards are in place:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li><strong>Standard Contractual Clauses (SCCs):</strong> For transfers to EEA or UK-based sub-processors, we use the European Commission-approved SCCs (2021/914/EU).</li>
                  <li><strong>Adequacy Decisions:</strong> Where the destination country has received an adequacy decision from the European Commission or a DPDPA-equivalent notification from the Indian government, we rely on that decision.</li>
                  <li><strong>Cross-Border Transfer Agreements:</strong> Under DPDPA §16, we enter into a cross-border data transfer agreement with the overseas entity before any transfer of personal data.</li>
                </ul>
                <p className="mt-4">
                  We will not transfer your data to countries identified as restricted under DPDPA notifications without your explicit prior consent.
                </p>
              </Section>

              {/* 11 */}
              <Section id="breach" icon={AlertTriangle} title="11. Data Breach Notification">
                <p>
                  In the event of a personal data breach affecting your data:
                </p>
                <ol className="mt-4 space-y-3 pl-5 list-decimal">
                  <li>We will notify your designated security or privacy contact <strong>within 72 hours</strong> of becoming aware of the breach (as required by DPDPA §8 and GDPR Article 33).</li>
                  <li>Notification will include: nature of the breach; categories and approximate number of data principals affected; likely consequences; measures taken or proposed to address the breach.</li>
                  <li>Where required by DPDPA, we will simultaneously report the breach to the <strong>Data Protection Board of India</strong>.</li>
                  <li>Where required by GDPR, we will notify the relevant supervisory authority and, where high risk to data subjects is likely, notify affected data subjects directly.</li>
                  <li>We will cooperate fully in any investigation and provide all reasonable assistance.</li>
                </ol>
                <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-800">
                  To report a suspected security incident or data breach, contact us immediately at{" "}
                  <a href={`mailto:${SECURITY_EMAIL}`} className="font-semibold underline underline-offset-4">{SECURITY_EMAIL}</a>. Our security team is on-call 24/7.
                </div>
              </Section>

              {/* 12 */}
              <Section id="children" icon={UserCheck} title="12. Children's Data">
                <p>
                  The TalentSpotify Platform is designed exclusively for use in professional workplace settings. We do not knowingly collect personal data from individuals under the age of 18. If you believe that a minor's data has been collected through the Platform, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a> and we will take prompt steps to delete that data.
                </p>
                <p className="mt-4">
                  Under DPDPA §9, processing of personal data of children requires verifiable parental consent and additional safeguards. Our standard service agreements expressly prohibit use of the Platform to process data of individuals below 18 years of age.
                </p>
              </Section>

              {/* 13 */}
              <Section id="grievance" icon={UserCheck} title="13. Grievance Redressal Officer" badge="DPDPA §13">
                <p>
                  In accordance with the Digital Personal Data Protection Act 2023, TalentSpotify has designated a <strong>Grievance Redressal Officer</strong> (GRO) to handle complaints and queries from Data Principals.
                </p>
                <address className="mt-4 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>Grievance Redressal Officer</strong><br />
                  {COMPANY}<br />
                  CIN: {CIN} · GST: {GST}<br />
                  {ADDRESS}<br />
                  <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{GRIEVANCE_EMAIL}</a>
                </address>
                <p className="mt-4">
                  We acknowledge all grievances within <strong>24 hours</strong> and resolve them within <strong>30 days</strong>. If you are not satisfied with our response, you may escalate to the <strong>Data Protection Board of India</strong> once it is constituted, as provided under DPDPA §20.
                </p>
              </Section>

              {/* 14 */}
              <Section id="dpo" icon={ShieldCheck} title="14. Data Protection Officer">
                <p>
                  For GDPR purposes and as a matter of best practice, TalentSpotify has designated a <strong>Data Protection Officer (DPO)</strong> responsible for overseeing compliance with data protection laws and acting as the point of contact for supervisory authorities.
                </p>
                <address className="mt-4 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>Data Protection Officer</strong><br />
                  {COMPANY}<br />
                  CIN: {CIN} · GST: {GST}<br />
                  {ADDRESS}<br />
                  <a href={`mailto:${DPO_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{DPO_EMAIL}</a>
                </address>
                <p className="mt-4 text-sm text-slate-600">
                  EEA/UK data subjects may also contact our EU Representative (Article 27 GDPR) for matters relating to EU data protection law. Contact details available on request.
                </p>
              </Section>

              {/* 15 */}
              <Section id="changes" icon={RefreshCw} title="15. Policy Changes">
                <p>
                  We may update this Policy to reflect changes in our data practices, product features, or applicable law. When we make material changes, we will:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Update the <strong>"Last updated"</strong> date at the top of this page.</li>
                  <li>Notify Customer account administrators by email at least <strong>30 days before</strong> material changes take effect.</li>
                  <li>Where consent is the legal basis, obtain fresh consent before the new processing begins.</li>
                </ul>
                <p className="mt-4">
                  Continued use of the Platform after the effective date of the updated Policy constitutes acceptance of the revised terms. If you do not agree, you may terminate your subscription as described in our Terms &amp; Conditions.
                </p>
              </Section>

              {/* 16 */}
              <Section id="contact" icon={Mail} title="16. Contact Us">
                <p>For all data protection queries, rights requests, or privacy concerns:</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <address className="not-italic rounded-xl border border-slate-200 bg-white p-4 text-sm">
                    <p className="font-semibold text-slate-800 mb-1">General Privacy</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>
                  </address>
                  <address className="not-italic rounded-xl border border-slate-200 bg-white p-4 text-sm">
                    <p className="font-semibold text-slate-800 mb-1">Grievance Officer</p>
                    <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{GRIEVANCE_EMAIL}</a>
                  </address>
                  <address className="not-italic rounded-xl border border-slate-200 bg-white p-4 text-sm">
                    <p className="font-semibold text-slate-800 mb-1">Security Incidents</p>
                    <a href={`mailto:${SECURITY_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{SECURITY_EMAIL}</a>
                  </address>
                </div>
              </Section>

            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-slate-100 bg-surface">
          <div className="container-site flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-slate-600">
              Questions about how we protect your data?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark">
                Contact our privacy team
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
