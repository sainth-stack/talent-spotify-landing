import { cn } from "@/lib/utils";

const DARK = "#3F6F5E";
const LIGHT = "#7FA995";
const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

/** SVG recreation of the TalentSpotify mark: eight people around a target. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {ANGLES.map((angle, i) => {
        const fill = i % 2 === 0 ? DARK : LIGHT;
        return (
          <g key={angle} transform={`rotate(${angle} 50 50)`}>
            <circle cx="50" cy="7" r="6" fill={fill} />
            <path
              d="M39 19 L61 19 L54 35 L46 35 Z"
              fill={fill}
              stroke={fill}
              strokeWidth="8"
              strokeLinejoin="round"
            />
          </g>
        );
      })}
      <circle cx="50" cy="50" r="15" fill="#fff" />
      <circle cx="50" cy="50" r="12" fill={DARK} />
      <circle cx="50" cy="50" r="8.5" fill="#fff" />
      <circle cx="50" cy="50" r="5.5" fill={DARK} />
      <circle cx="50" cy="50" r="2.5" fill="#fff" />
    </svg>
  );
}

/** TalentSpotify wordmark — bold Talent + light Spotify. */
export function LogoWordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={cn(
        "text-lg tracking-wide",
        onDark ? "text-white" : "text-slate-900"
      )}
    >
      <span className="font-extrabold">Talent</span><span className="font-light">Spotify</span>
    </span>
  );
}

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2.5", className)} aria-label="TalentSpotify home">
      <LogoMark className="h-9 w-9" />
      <LogoWordmark onDark={onDark} />
    </a>
  );
}
