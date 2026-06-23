import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { RoiCalculator } from "@/components/RoiCalculator";

export const metadata: Metadata = {
  title: "Bias Cost & ROI Calculator | TalentSpotify",
  description:
    "Estimate what biased performance reviews cost you — and what TARA recovers. Every number traces to an editable assumption. Built for Indian mid-market teams.",
  alternates: { canonical: "/roi-calculator" },
};

export default function RoiCalculatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="Calculate your bias cost"
              title="What an unfair review actually costs you"
              subtitle="Every number below traces to an assumption you can see and edit. We lead with the value you're certain to recover, not the scariest figure."
            />
            <RoiCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
