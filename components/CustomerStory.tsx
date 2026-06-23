import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";

const proofStats = [
  { value: "30%", label: "shorter review cycles" },
  { value: "3 in 10", label: "reviews carry a detectable bias instance" },
  { value: "14", label: "biases flagged before ratings finalise" },
];

export function CustomerStory() {
  return (
    <section className="section bg-ink text-white">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-light">
            Why it matters
          </p>

          <h2 className="text-2xl font-bold leading-snug tracking-tight md:text-3xl">
            Your managers decide raises, promotions and ratings in a 30-minute
            conversation — once a year. In most companies, that decision is made
            from memory, not evidence.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/85">
            <p>
              The result is predictable. Your best performer, whose biggest win
              happened eight months ago, gets a 3. Your quieter employee, who
              delivered consistently but didn&apos;t advocate loudly, gets passed
              over. Your HR team signs off on ratings they can&apos;t defend —
              because nothing was captured during the conversation itself.
            </p>
            <p>
              <strong className="font-semibold text-white">
                TalentSpotify fixes this at the source — inside the review
                conversation.
              </strong>{" "}
              TARA, our AI voice agent, joins manager-employee review
              conversations in real time, captures spoken evidence, and flags
              14 biases across a named taxonomy — including recency bias, halo
              effect, and language-based scoring gaps — before ratings are finalised.
            </p>
          </div>

          <dl className="my-9 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-3">
            {proofStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dd className="text-3xl font-bold gradient-text">{value}</dd>
                <dt className="mt-1.5 text-sm text-white/70">{label}</dt>
              </div>
            ))}
          </dl>

          <div className="space-y-5 text-lg leading-relaxed text-white/85">
            <p>
              Alongside TARA, TalentSpotify connects OKRs, KPIs, rewards and
              recognition in one platform — in English and Indian regional
              languages — so every employee is measured on contribution, not
              manager memory.
            </p>
            <p className="font-semibold text-white">
              If your next review cycle is within 90 days, the right time to see
              this is now.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-start gap-3">
            <CtaLink href="/#book-demo" variant="primary" size="lg">
              Book a 30-minute demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
            <p className="text-sm text-white/60">
              We&apos;ll show you exactly what TARA would catch in your current
              review process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
