import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            dark ? "text-brand-light" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", dark ? "text-slate-300" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
