import Script from "next/script";

/** Legacy landing analytics — Clarity, faittracker, Clearbit. */
export function AnalyticsScripts() {
  return (
    <>
      <Script src="/clarity.js" strategy="afterInteractive" />
      <Script src="/faittracker.js" strategy="afterInteractive" />
      <Script
        src="https://tag.clearbitscripts.com/v1/pk_dc97a33b14aa2e9ebc805625c1f38492/tags.js"
        strategy="afterInteractive"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </>
  );
}
