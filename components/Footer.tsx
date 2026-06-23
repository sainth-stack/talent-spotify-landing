"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { FooterEmailSignup } from "@/components/FooterEmailSignup";

const LIVE = "https://www.talentspotify.com";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "/#product" },
      { label: "TARA AI", href: "/#tara" },
      { label: "Pricing", href: "/#pricing" },
      { label: "ROI Calculator", href: "/roi-calculator" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Customer Stories", href: "/case-study" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Free HR Tools", href: "/tools" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Security", href: "/gdpr#security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "DPDPA & GDPR", href: "/gdpr" },
    ],
  },
];

function isActive(href: string, pathname: string): boolean {
  // Exact path match for internal page routes (e.g. /careers, /about)
  if (!href.startsWith("http") && !href.startsWith("/#")) {
    return pathname === href;
  }
  return false;
}

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-ink text-white/85">
      <div className="container-site py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Fairer performance reviews, OKRs and recognition.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Become a People Engagement pro!</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/55">
              Sign up for best practices, news and product updates.
            </p>
            <FooterEmailSignup />
          </div>
          {columns.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map(({ label, href }) => {
                  const active = isActive(href, pathname);
                  const baseClass = "text-sm transition-colors";
                  const activeClass = "text-white/40 underline underline-offset-2 decoration-white/25";
                  const inactiveClass = "text-white/65 hover:text-white";
                  const cls = `${baseClass} ${active ? activeClass : inactiveClass}`;

                  if (href.startsWith("http")) {
                    return (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cls}
                          {...(active ? { "aria-current": "page" as const } : {})}
                        >
                          {label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        className={cls}
                        {...(active ? { "aria-current": "page" as const } : {})}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© 2026 TalentSpotify Private Limited. All rights reserved.</p>
          <p>CIN: U72900KA2022PTC157845 · Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
