import { SectionHeading } from "@/components/SectionHeading";
import { RoiCalculator } from "@/components/RoiCalculator";

export function RoiSection() {
  return (
    <section id="roi" className="section scroll-mt-16 bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="See what it saves you"
          title="What an unfair review actually costs you"
          subtitle="The plans above show what you pay. This shows what you get back — every number traces to an assumption you can see and edit, and we lead with the value you're certain to recover."
        />
        <RoiCalculator />
      </div>
    </section>
  );
}
