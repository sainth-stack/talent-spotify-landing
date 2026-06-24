"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { Logo } from "@/components/Logo";
import { LOGIN_PAGE } from "@/lib/api-config";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "TARA AI", href: "/#tara" },
  { label: "Why Fairness", href: "/#fairness" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Customers", href: "/#customers" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <nav aria-label="Main" className="container-site flex h-16 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={LOGIN_PAGE} variant="ghost">
            Login
          </CtaLink>
          <CtaLink href="/#book-demo" variant="primary">
            Request Demo
          </CtaLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-3">
              <CtaLink href={LOGIN_PAGE} variant="outline" className="w-full">
                Login
              </CtaLink>
              <CtaLink href="/#book-demo" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Request Demo
              </CtaLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
