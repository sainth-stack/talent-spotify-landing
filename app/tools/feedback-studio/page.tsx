import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeedbackStudio } from "@/components/FeedbackStudio";

export const metadata: Metadata = {
  title: "AI Feedback Studio — Free HR Tool by TalentSpotify",
  description:
    "Instantly analyse your performance feedback for bias, vague language, and missing impact. Get an SBI-structured rewrite — free, powered by TARA, no sign-up required.",
  alternates: { canonical: "/tools/feedback-studio" },
};

export default function FeedbackStudioPage() {
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
            <FeedbackStudio />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
