import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OkrAssessment } from "@/components/OkrAssessment";

export const metadata: Metadata = {
  title: "OKR Readiness Check — Free HR Tool by TalentSpotify",
  description:
    "Answer 8 questions and find out if your organisation is ready to implement OKRs. Get an instant readiness score and personalised recommendations — free, no sign-up required.",
  alternates: { canonical: "/tools/okr-readiness" },
};

export default function OkrReadinessPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
          </div>
          <div className="container-site relative py-16 md:py-20">
            <OkrAssessment />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
