import { CtaLink } from "@/components/ui/cta-link";

/** Sticky bottom CTA bar, mobile only: primary demo + secondary TARA. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <CtaLink href="/#book-demo" variant="primary" size="lg" className="flex-1">
        Request Demo
      </CtaLink>
      <CtaLink href="/#tara" variant="outline" size="lg" className="flex-1">
        Watch TARA
      </CtaLink>
    </div>
  );
}
