import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CtaLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

/** Anchor styled as a button — used for all CTAs so links stay real links. */
export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
