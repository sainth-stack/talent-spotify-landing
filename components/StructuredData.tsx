import { faqGroups } from "@/lib/faqs";

const SITE = "https://www.talentspotify.com";

// Flatten the grouped FAQ content so the FAQPage schema always mirrors the
// questions visitors actually see on the page (single source of truth).
const faqs = faqGroups.flatMap((g) => g.items);

/** JSON-LD structured data for the homepage: Organization, SoftwareApplication,
 *  and FAQPage. Rendered server-side as a single script tag. */
export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "TalentSpotify",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "AI-powered performance management platform for fairer performance reviews, OKRs, and recognition, built for Indian mid-market companies.",
      foundingLocation: {
        "@type": "Place",
        name: "Bengaluru, India",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "GCC" },
      ],
      // TODO(owner): add real social profile URLs (LinkedIn, X, etc.) to sameAs.
      sameAs: [] as string[],
    },
    {
      "@type": "SoftwareApplication",
      name: "TalentSpotify",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI performance review software with TARA, an AI voice agent that surfaces bias signals, generates a fairness score, captures OKR progress, and helps HR teams prevent unfair review outcomes.",
      offers: {
        "@type": "Offer",
        price: "76",
        priceCurrency: "INR",
        description: "Per employee / month, billed annually. Final pricing depends on employee count, TARA usage, and implementation scope.",
      },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
