import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OkrLearning } from "@/components/OkrLearning";

export const metadata: Metadata = {
  title: "OKR Learning Adventure — Free HR Tool by TalentSpotify",
  description:
    "Practise classifying Objectives, Key Results, and Tasks through real-world scenarios. Gamified OKR learning — free, no sign-up required.",
  alternates: { canonical: "/tools/okr-learning" },
};

export default function OkrLearningPage() {
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
            <OkrLearning />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
