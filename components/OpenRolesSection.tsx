"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";
import type { ApiJob } from "@/lib/api-config";
import { fetchOpenJobs } from "@/lib/landing-api";

export function OpenRolesSection() {
  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchOpenJobs()
      .then((data) => {
        if (!cancelled) setJobs(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="open-roles" className="section scroll-mt-20 bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Open roles</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find your place on the team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We hire for high ownership, strong opinions, and genuine curiosity about fairness in the
            workplace. Not for pedigree.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {loading ? (
            <p className="py-8 text-center text-slate-500">Loading open roles…</p>
          ) : jobs.length === 0 ? (
            <p className="py-8 text-center text-slate-500">
              No open positions at the moment. Check back later or send a general application below.
            </p>
          ) : (
            jobs.map((job) => {
              const isOpen = openJobId === job._id;
              return (
                <article
                  key={job._id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenJobId(isOpen ? null : job._id)}
                    className="flex w-full items-start gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        {job.department ? (
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                            {job.department}
                          </span>
                        ) : null}
                        {job.location ? (
                          <>
                            {job.department ? <span aria-hidden="true">·</span> : null}
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                              {job.location}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand">
                      {isOpen ? (
                        <>
                          Close <ChevronUp className="h-4 w-4" aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          View &amp; apply <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 p-6">
                      <div className="grid gap-10 md:grid-cols-2">
                        <div>
                          <h4 className="text-base font-semibold text-slate-900">About the role</h4>
                          <div className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                            {job.description || "No description provided."}
                          </div>
                        </div>
                        <CareerApplicationForm
                          jobId={job._id}
                          roleTitle={job.title}
                          formIdPrefix={`job-${job._id}`}
                          compact
                        />
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-dashed border-brand/30 bg-brand/5 p-8 text-center">
          <p className="text-lg font-semibold text-slate-800">Don&apos;t see a role that fits?</p>
          <p className="mt-2 text-slate-600">
            We sometimes hire ahead of a specific role for the right person. Tell us who you are and
            what you want to build.
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Send a general application <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
