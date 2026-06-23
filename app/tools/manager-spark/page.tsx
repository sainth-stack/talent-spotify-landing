import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ManagerSparkIndex } from '@/components/ManagerSparkIndex';

export const metadata: Metadata = {
  title: 'Manager Spark Index — Free HR Tool by TalentSpotify',
  description:
    'A 24-question self-assessment across six dimensions of great management. Get your personal Spark Index score and a prioritised action plan — free, no sign-up required.',
  alternates: { canonical: '/tools/manager-spark' },
};

export default function ManagerSparkPage() {
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
            <ManagerSparkIndex />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
