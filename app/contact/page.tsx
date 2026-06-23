import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us — TalentSpotify",
  description: "Get in touch with the TalentSpotify team for sales, support, or general enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="Contact"
              title="We'd love to hear from you"
              subtitle="Questions about TARA, pricing, or a pilot? Send us a message and we'll respond within one business day."
            />
            <div className="mx-auto max-w-2xl">
              <ContactForm />
            </div>
            <p className="mt-8 text-center text-sm text-slate-600">
              Prefer email?{" "}
              <a href="mailto:contact@talentspotify.com" className="font-semibold text-brand hover:text-brand-dark">
                contact@talentspotify.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
