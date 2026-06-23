import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AttritionInsight } from '@/components/AttritionInsight';

export const metadata: Metadata = {
  title: 'Attrition Insight — Free HR Tool by TalentSpotify',
  description:
    'Calculate the true cost of employee attrition by cohort. Input headcount, salary, and turnover rate to get a full cost breakdown, cohort analysis, and a personalised retention playbook — free, no sign-up required.',
  alternates: { canonical: '/tools/attrition-insight' },
};

export default function AttritionInsightPage() {
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
            <AttritionInsight />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
