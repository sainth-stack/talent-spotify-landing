"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqGroups } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setOpenMap((m) => ({ ...m, [key]: !m[key] }));

  return (
    <section id="faq" className="section scroll-mt-16 bg-surface">
      <div className="container-site max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions HR and founders ask us"
          subtitle="Straight answers for every buyer — leadership, HR, IT, finance, and the managers and employees who use it."
        />

        <div className="space-y-10">
          {faqGroups.map((group, gi) => (
            <div key={group.label}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
                {group.label}
              </p>
              <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {group.items.map((item, qi) => {
                  const key = `${gi}-${qi}`;
                  const isOpen = !!openMap[key];
                  const btnId = `faq-${key}`;
                  const panelId = `faqpanel-${key}`;
                  return (
                    <div key={key}>
                      <h3 className="m-0">
                        <button
                          id={btnId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(key)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
                        >
                          {item.q}
                          <Plus
                            className={cn(
                              "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                              isOpen && "rotate-45"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        hidden={!isOpen}
                        className="px-5 pb-5 leading-relaxed text-slate-600"
                      >
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
