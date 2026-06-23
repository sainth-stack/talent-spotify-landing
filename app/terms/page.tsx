import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, ShieldCheck, CreditCard, FileText, Lock, AlertTriangle, Gavel, RefreshCw, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — TalentSpotify",
  description:
    "TalentSpotify Terms & Conditions governing your use of our AI-powered performance management platform. Jurisdiction: India. Governing law: Karnataka.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "1 June 2025";
const CONTACT_EMAIL = "contact@talentspotify.com";
const COMPANY = "TalentSpotify Private Limited";
const CIN = "U72900KA2022PTC157845";
const GST = "29AAJCT1805A1ZN";
const ADDRESS = "Sy No. 135/1, No. 87, Ground Floor, Flushing Meadows Layout, Yettakodi, Malur, Kolar, Karnataka, India – 563130";

const sections = [
  { id: "acceptance",      label: "1. Acceptance of Terms" },
  { id: "services",        label: "2. Description of Services" },
  { id: "accounts",        label: "3. Account Registration" },
  { id: "payments",        label: "4. Subscription & Payments" },
  { id: "acceptable-use",  label: "5. Acceptable Use" },
  { id: "data",            label: "6. Data Processing" },
  { id: "ip",              label: "7. Intellectual Property" },
  { id: "confidentiality", label: "8. Confidentiality" },
  { id: "sla",             label: "9. Service Availability" },
  { id: "warranties",      label: "10. Warranties" },
  { id: "liability",       label: "11. Limitation of Liability" },
  { id: "indemnification", label: "12. Indemnification" },
  { id: "termination",     label: "13. Term & Termination" },
  { id: "governing-law",   label: "14. Governing Law" },
  { id: "amendments",      label: "15. Amendments" },
  { id: "contact",         label: "16. Contact & Notices" },
];

function SidebarNav() {
  return (
    <nav aria-label="Terms sections" className="hidden lg:block">
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
            <Icon className="h-4.5 w-4.5 text-brand" aria-hidden="true" />
          </span>
        )}
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="prose-legal">{children}</div>
    </section>
  );
}

export default function TermsPage() {
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
              <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Legal
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              These terms govern your access to and use of the TalentSpotify platform. Please read them carefully before using our services.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium">
                <RefreshCw className="h-3.5 w-3.5" /> Last updated: {LAST_UPDATED}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium">
                <Gavel className="h-3.5 w-3.5" /> Governing law: Karnataka, India
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
              <Section id="acceptance" icon={Scale} title="1. Acceptance of Terms">
                <p>
                  By accessing or using the TalentSpotify platform (the <strong>"Platform"</strong>), you (<strong>"Customer"</strong> or <strong>"User"</strong>) agree to be bound by these Terms &amp; Conditions (<strong>"Terms"</strong>), our Privacy Policy, and any additional terms incorporated by reference. If you do not agree to all of these Terms, you must not access or use the Platform.
                </p>
                <p className="mt-4">
                  These Terms constitute a legally binding agreement between you and <strong>{COMPANY}</strong> (CIN: {CIN}), a company incorporated under the laws of India and registered at {ADDRESS} (<strong>"TalentSpotify"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>).
                </p>
                <p className="mt-4">
                  If you are entering into these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. If you do not have such authority, you must not accept these Terms or use the Platform.
                </p>
              </Section>

              {/* 2 */}
              <Section id="services" icon={FileText} title="2. Description of Services">
                <p>
                  TalentSpotify provides an AI-powered human-resource performance management platform that includes the following core capabilities:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li><strong>TARA — AI Voice Agent:</strong> A voice-assisted review agent that joins performance review conversations, transcribes them, analyses transcripts for bias signals across 14 cognitive, social, and calibration categories, and surfaces evidence-backed findings to HR before ratings are finalised.</li>
                  <li><strong>Performance Reviews:</strong> Structured review cycles with multi-rater feedback, calibration workflows, and bias-signal reporting.</li>
                  <li><strong>OKR Management:</strong> Company-to-individual goal cascade, check-in tracking, and live progress dashboards.</li>
                  <li><strong>Recognition &amp; Rewards:</strong> Peer recognition, leaderboard-based points, and value-linked acknowledgement workflows.</li>
                  <li><strong>People Analytics:</strong> Retention risk signals, fairness metrics, and HR reporting dashboards.</li>
                </ul>
                <p className="mt-4">
                  The Platform supports 22 Indian languages and English. Features available to you depend on your subscription plan. We reserve the right to modify, suspend, or discontinue any feature with reasonable notice.
                </p>
              </Section>

              {/* 3 */}
              <Section id="accounts" icon={Lock} title="3. Account Registration &amp; Security">
                <p>
                  To access the Platform, you must register for an account and provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Maintaining the confidentiality of your login credentials.</li>
                  <li>All activities that occur under your account, whether or not authorised by you.</li>
                  <li>Promptly notifying us of any actual or suspected unauthorised access or breach of security at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>.</li>
                  <li>Ensuring that all users under your account (employees, managers, HR administrators) comply with these Terms.</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts where we have reasonable grounds to believe security has been compromised or these Terms have been violated.
                </p>
                <div className="mt-5 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm">
                  <strong className="text-brand-dark">Enterprise SSO:</strong> Enterprise customers may enable single sign-on (SSO) via SAML 2.0 or OIDC. Your organisation's identity provider policies apply in addition to these Terms.
                </div>
              </Section>

              {/* 4 */}
              <Section id="payments" icon={CreditCard} title="4. Subscription &amp; Payments">
                <h3 className="mt-2 mb-2 font-semibold text-slate-800">4.1 Plans &amp; Pricing</h3>
                <p>
                  TalentSpotify offers subscription plans billed on a per-employee-per-month basis. Current pricing is published on our Pricing page and may be updated from time to time with 30 days' written notice to active subscribers.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">4.2 Billing Cycle</h3>
                <p>
                  Subscriptions are billed monthly or annually, as selected at the time of purchase. Annual subscribers receive a discounted rate. All prices are quoted in Indian Rupees (INR) and exclude applicable Goods and Services Tax (GST) unless stated otherwise.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">4.3 Payment Terms</h3>
                <p>
                  Payment is due on or before the billing date. Invoices not paid within 15 days of the due date may result in suspension of access. We accept bank transfer (NEFT/RTGS/IMPS) and major payment gateways. A GST-compliant invoice will be issued for every transaction.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">4.4 Refund Policy</h3>
                <p>
                  Monthly subscriptions: no refunds after the billing date. Annual subscriptions: a pro-rata refund is available within 30 days of the annual billing date, less any onboarding or professional services fees already incurred. No refunds are issued for partial months or unused TARA voice minutes.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">4.5 TARA Voice Minutes</h3>
                <p>
                  TARA Standalone and TARA on TalentSpotify plans include 150 voice minutes per employee per year. Consumption beyond this allocation is billed at ₹7 per minute, invoiced monthly in arrears.
                </p>
              </Section>

              {/* 5 */}
              <Section id="acceptable-use" icon={AlertTriangle} title="5. Acceptable Use Policy">
                <p>You agree not to use the Platform to:</p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Violate any applicable law, regulation, or third-party right.</li>
                  <li>Upload or transmit content that is unlawful, defamatory, harassing, or discriminatory.</li>
                  <li>Introduce malware, viruses, or any code designed to disrupt, damage, or gain unauthorised access to systems.</li>
                  <li>Reverse-engineer, decompile, or extract source code from the Platform.</li>
                  <li>Scrape, crawl, or systematically extract data without prior written consent.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                  <li>Use the Platform to benchmark against a competing product without prior written consent.</li>
                  <li>Process the personal data of individuals who have not provided valid consent under the Digital Personal Data Protection Act, 2023 (<strong>"DPDPA"</strong>).</li>
                </ul>
                <p className="mt-4">
                  We may suspend or terminate access immediately and without notice for material violations of this policy.
                </p>
              </Section>

              {/* 6 */}
              <Section id="data" icon={ShieldCheck} title="6. Data Processing &amp; Privacy">
                <p>
                  TalentSpotify processes personal data on your behalf as a <strong>Data Processor</strong> under the DPDPA 2023. You, as the Customer, are the <strong>Data Fiduciary</strong> responsible for ensuring that all employee data uploaded to or processed via the Platform has been collected with valid, informed consent and for a lawful purpose.
                </p>
                <p className="mt-4">
                  Our data handling practices are detailed in our <a href="/gdpr" className="text-brand underline underline-offset-4 hover:text-brand-dark">DPDPA &amp; GDPR Compliance</a> page and our Privacy Policy. Key commitments:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Data is hosted on <strong>AWS Mumbai (ap-south-1)</strong> and does not leave India unless you explicitly enable cross-border features.</li>
                  <li>All data is encrypted at rest with <strong>AES-256</strong> and in transit with <strong>TLS 1.3</strong>.</li>
                  <li>TARA voice recordings and transcripts are retained for the duration of the active review cycle and deleted 90 days after the cycle closes, unless longer retention is required by law or agreed in writing.</li>
                  <li>We will not sell, rent, or share your data with third parties for their own marketing purposes.</li>
                  <li>Upon termination, your data will be deleted within 30 days unless export is requested during the notice period.</li>
                </ul>
              </Section>

              {/* 7 */}
              <Section id="ip" icon={FileText} title="7. Intellectual Property Rights">
                <h3 className="mt-2 mb-2 font-semibold text-slate-800">7.1 Our IP</h3>
                <p>
                  All software, algorithms, models, designs, trademarks, and content that form part of the Platform are and remain the exclusive intellectual property of AppsDreamz Technologies Private Limited. These Terms do not transfer any ownership of our IP to you. Your subscription grants a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform for your internal business purposes during the subscription term.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">7.2 Your Data</h3>
                <p>
                  You retain full ownership of all data you upload, input, or generate through your use of the Platform (<strong>"Customer Data"</strong>). You grant us a limited licence to process, store, and analyse Customer Data solely to provide the contracted services and improve service quality. We will not use Customer Data to train or improve AI models that are made available to third parties without your explicit written consent.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">7.3 Feedback</h3>
                <p>
                  If you provide suggestions, ideas, or feedback about the Platform, you grant us a perpetual, irrevocable, royalty-free licence to use that feedback without restriction or obligation to you.
                </p>
              </Section>

              {/* 8 */}
              <Section id="confidentiality" icon={Lock} title="8. Confidentiality">
                <p>
                  Each party (<strong>"Receiving Party"</strong>) agrees to hold the other party's Confidential Information in strict confidence and not to disclose it to any third party without prior written consent, except:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>To employees or advisers who need access to perform obligations under these Terms and are bound by equivalent confidentiality obligations.</li>
                  <li>As required by applicable law, court order, or regulatory authority, provided the Receiving Party gives prompt written notice (where legally permitted) and cooperates to limit the scope of disclosure.</li>
                </ul>
                <p className="mt-4">
                  <strong>"Confidential Information"</strong> means any non-public information disclosed by one party to the other that is marked confidential or that a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure. This includes, without limitation, pricing, product roadmaps, employee data, and technical architecture.
                </p>
                <p className="mt-4">
                  Confidentiality obligations survive termination of these Terms for a period of three (3) years.
                </p>
              </Section>

              {/* 9 */}
              <Section id="sla" icon={ShieldCheck} title="9. Service Availability &amp; SLA">
                <p>
                  We target <strong>99.5% monthly uptime</strong> for the Platform, excluding scheduled maintenance windows (communicated with at least 48 hours' notice) and events beyond our reasonable control (force majeure).
                </p>
                <p className="mt-4">
                  In the event that monthly uptime falls below 99.5%, eligible Enterprise customers may receive a service credit as follows:
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Monthly Uptime</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">Service Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-3">99.0% – 99.49%</td><td className="px-4 py-3">10% of monthly fee</td></tr>
                      <tr><td className="px-4 py-3">95.0% – 98.99%</td><td className="px-4 py-3">25% of monthly fee</td></tr>
                      <tr><td className="px-4 py-3">Below 95.0%</td><td className="px-4 py-3">50% of monthly fee</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Credits must be claimed within 30 days of the incident via <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4">{CONTACT_EMAIL}</a>. Credits are applied to the next invoice and are not redeemable for cash.
                </p>
              </Section>

              {/* 10 */}
              <Section id="warranties" icon={Scale} title="10. Warranties &amp; Representations">
                <p>Each party warrants that:</p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>It has full legal authority to enter into these Terms.</li>
                  <li>Its performance under these Terms does not violate any other agreement to which it is a party.</li>
                </ul>
                <p className="mt-4">We further warrant that:</p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>The Platform will function materially in accordance with our published documentation.</li>
                  <li>We will implement and maintain industry-standard security measures appropriate to the nature of the data processed.</li>
                  <li>TARA's bias-signal analysis is designed to surface evidence for human review — it does not make, recommend, or record final employment decisions. All decisions remain with your authorised HR personnel.</li>
                </ul>
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  <strong>Disclaimer:</strong> Except as expressly stated above, the Platform is provided "as is" and "as available." We disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement to the fullest extent permitted by law.
                </div>
              </Section>

              {/* 11 */}
              <Section id="liability" icon={AlertTriangle} title="11. Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Neither party shall be liable to the other for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages.</li>
                  <li>TalentSpotify's total aggregate liability arising from or relating to these Terms shall not exceed the total fees paid by you in the <strong>twelve (12) months</strong> immediately preceding the event giving rise to the claim.</li>
                </ul>
                <p className="mt-4">
                  These limitations apply regardless of the form of action (contract, tort, statute, or otherwise) and regardless of whether such damages were foreseeable.
                </p>
                <p className="mt-4">
                  Nothing in these Terms limits liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any liability that cannot be excluded or limited under applicable Indian law.
                </p>
              </Section>

              {/* 12 */}
              <Section id="indemnification" icon={ShieldCheck} title="12. Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless TalentSpotify and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:
                </p>
                <ul className="mt-4 space-y-2 pl-5 list-disc">
                  <li>Your use of or access to the Platform in violation of these Terms.</li>
                  <li>Your breach of any representation or warranty under these Terms.</li>
                  <li>Your infringement of any third-party right, including intellectual property or privacy rights.</li>
                  <li>Your failure to obtain valid consent from data principals before processing their personal data through the Platform.</li>
                </ul>
                <p className="mt-4">
                  TalentSpotify will indemnify you against third-party claims that the Platform, as delivered, infringes any Indian intellectual property right, subject to you promptly notifying us, cooperating fully in our defence, and granting us control over the defence and settlement.
                </p>
              </Section>

              {/* 13 */}
              <Section id="termination" icon={AlertTriangle} title="13. Term &amp; Termination">
                <h3 className="mt-2 mb-2 font-semibold text-slate-800">13.1 Term</h3>
                <p>
                  These Terms are effective from the date you first access the Platform and continue until the end of your active subscription period, unless terminated earlier.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">13.2 Termination for Convenience</h3>
                <p>
                  Either party may terminate the subscription at the end of the current billing period by providing at least 30 days' written notice. Annual subscriptions may be terminated subject to the refund policy in Section 4.4.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">13.3 Termination for Cause</h3>
                <p>
                  Either party may terminate immediately on written notice if: (a) the other party materially breaches these Terms and fails to cure the breach within 15 days of written notice; or (b) the other party becomes insolvent, makes a general assignment for the benefit of creditors, or is subject to insolvency proceedings.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">13.4 Effect of Termination</h3>
                <p>
                  On termination: (a) all licences granted to you cease immediately; (b) you must cease using the Platform; (c) we will provide a data export window of 30 days upon request, after which Customer Data will be deleted from our systems in accordance with our data retention schedule; (d) outstanding invoices remain due.
                </p>
              </Section>

              {/* 14 */}
              <Section id="governing-law" icon={Gavel} title="14. Governing Law &amp; Dispute Resolution">
                <p>
                  These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">14.1 Negotiation</h3>
                <p>
                  Before initiating formal proceedings, the parties agree to attempt to resolve any dispute through senior management negotiation for a period of 30 days from the date of written notice of the dispute.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">14.2 Arbitration</h3>
                <p>
                  If the dispute is not resolved through negotiation, it shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Bengaluru, Karnataka. The arbitration shall be conducted in English before a sole arbitrator mutually appointed by the parties.
                </p>
                <h3 className="mt-5 mb-2 font-semibold text-slate-800">14.3 Jurisdiction</h3>
                <p>
                  For interim or injunctive relief, both parties submit to the exclusive jurisdiction of the courts at Bengaluru, Karnataka.
                </p>
              </Section>

              {/* 15 */}
              <Section id="amendments" icon={RefreshCw} title="15. Amendments">
                <p>
                  We may revise these Terms at any time. When we make material changes, we will notify you by email (to the address on your account) and/or by posting a prominent notice on the Platform at least <strong>30 days</strong> before the changes take effect. Your continued use of the Platform after the effective date constitutes your acceptance of the revised Terms.
                </p>
                <p className="mt-4">
                  If you do not agree to the revised Terms, you may terminate your subscription before the effective date. In that case, the previous version of the Terms will continue to govern until the termination date.
                </p>
              </Section>

              {/* 16 */}
              <Section id="contact" icon={Mail} title="16. Contact &amp; Notices">
                <p>
                  All legal notices under these Terms must be in writing and sent to:
                </p>
                <address className="mt-4 not-italic rounded-xl border border-slate-200 bg-surface p-5 text-sm leading-relaxed">
                  <strong>{COMPANY}</strong><br />
                  CIN: {CIN}<br />
                  GST: {GST}<br />
                  {ADDRESS}<br />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>
                </address>
                <p className="mt-5">
                  Notices sent by email are effective on the next business day. For all queries, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4 hover:text-brand-dark">{CONTACT_EMAIL}</a>.
                </p>
              </Section>

            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-slate-100 bg-surface">
          <div className="container-site flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-slate-600">
              Questions about these terms?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark">
                Email our legal team
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
