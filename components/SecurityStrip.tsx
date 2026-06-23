import { ShieldCheck, Lock, Server, KeyRound, FileSearch, Globe } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "DPDP consent-first by design" },
  { icon: Lock, label: "AES-256 encryption at rest" },
  { icon: Globe, label: "TLS 1.3 in transit" },
  { icon: Server, label: "Hosted on AWS Mumbai" },
  { icon: KeyRound, label: "Role-based access controls" },
  { icon: FileSearch, label: "3-year encrypted audit trail" },
];

export function SecurityStrip() {
  return (
    <section aria-label="Security and compliance" className="border-y border-brand/10 bg-surface">
      <div className="container-site py-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
              <Icon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
