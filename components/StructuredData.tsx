import { faqGroups } from "@/lib/faqs";

const SITE = "https://www.talentspotify.com";

const faqs = faqGroups.flatMap((g) => g.items);

/** JSON-LD structured data for the homepage: Organization (with sameAs entity
 *  graph + founders), SoftwareApplication (all three pricing tiers + featureList),
 *  and FAQPage. Rendered server-side as a single script tag. */
export function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${SITE}/#aneel`,
      name: "Aneel Kumar Bonu",
      jobTitle: "Founder & CEO",
      worksFor: { "@id": `${SITE}/#organization` },
      url: `${SITE}/about`,
      image: `${SITE}/team/aneel.jpg`,
      sameAs: ["https://www.linkedin.com/in/aneelkumarbonu/"],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#prashanth`,
      name: "Prashanth Guraka",
      jobTitle: "Co-Founder & CTO",
      worksFor: { "@id": `${SITE}/#organization` },
      url: `${SITE}/about`,
      image: `${SITE}/team/prashanth.jpg`,
    },
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
      founder: [
        { "@id": `${SITE}/#aneel` },
        { "@id": `${SITE}/#prashanth` },
      ],
      sameAs: [
        "https://www.linkedin.com/company/talentspotify/",
        "https://www.crunchbase.com/organization/talentspotify",
        "https://x.com/talentspotify",
        "https://www.instagram.com/talentspotify/",
        "https://www.g2.com/products/talentspotify",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE}/#software`,
      name: "TalentSpotify",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI performance review software with TARA, an AI voice agent that surfaces bias signals, generates a fairness score, captures OKR progress, and helps HR teams prevent unfair review outcomes.",
      featureList: [
        "AI voice agent (TARA) for performance conversations",
        "Real-time bias detection across 14 bias types",
        "Fairness score and evidence trail on every review",
        "OKR setting and continuous check-ins",
        "Recognition and rewards feed",
        "Calibration and fairness dashboards",
        "DPDPA & GDPR compliant data handling",
        "Multilingual support for Indian workforces",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Platform",
          price: "76",
          priceCurrency: "INR",
          description: "OKR & goal setting, performance reviews, fairness scoring, recognition feed. ₹76/employee/month billed annually.",
        },
        {
          "@type": "Offer",
          name: "TARA Standalone",
          price: "99",
          priceCurrency: "INR",
          description: "TARA AI voice agent for bias-detected reviews and OKR conversations, layered onto your existing HRMS. ₹99/employee/month billed annually.",
        },
        {
          "@type": "Offer",
          name: "TARA on TalentSpotify",
          price: "149",
          priceCurrency: "INR",
          description: "Full platform plus TARA AI voice reviews, calibration, and fairness dashboards. ₹149/employee/month billed annually.",
        },
      ],
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
