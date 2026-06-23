import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AiRiskNavigator } from '@/components/AiRiskNavigator';

export const metadata: Metadata = {
  title: 'AI Risk Navigator — Free HR Tool by TalentSpotify',
  description:
    '20 questions across 5 dimensions: automation exposure, data privacy, bias & fairness, compliance, and workforce readiness. Get your AI risk score and a personalised mitigation playbook — free, no sign-up required.',
  alternates: { canonical: '/tools/ai-risk-navigator' },
};

export default function AiRiskNavigatorPage() {
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
            <AiRiskNavigator />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
