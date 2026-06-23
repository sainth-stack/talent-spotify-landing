import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductModules } from "@/components/ProductModules";
import { TaraSection } from "@/components/TaraSection";
import { FairnessSection } from "@/components/FairnessSection";
import { OkrRnrSection } from "@/components/OkrRnrSection";
import { CustomerProof } from "@/components/CustomerProof";
import { CustomerStory } from "@/components/CustomerStory";
import { Stakeholders } from "@/components/Stakeholders";
import { ResponsibleAi } from "@/components/ResponsibleAi";
import { RoiSection } from "@/components/RoiSection";
import { Pricing } from "@/components/Pricing";
import { SecurityStrip } from "@/components/SecurityStrip";
import { Faq } from "@/components/Faq";
import { DemoCta } from "@/components/DemoCta";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <TaraSection />
        <ProductModules />
        <FairnessSection />
        <OkrRnrSection />
        <CustomerProof />
        <CustomerStory />
        <Stakeholders />
        <ResponsibleAi />
        <Pricing />
        <RoiSection />
        <SecurityStrip />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
