"use client";

export default function QuantumOrbital() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -z-[5] h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.55]"
    >
      <svg
        viewBox="0 0 800 800"
        className="h-full w-full motion-safe:animate-[spin_120s_linear_infinite]"
      >
        <defs>
          <radialGradient id="orbitalCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5fd6f5" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#5fd6f5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bfe0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38bfe0" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <circle cx="400" cy="400" r="220" fill="url(#orbitalCore)" />

        <g stroke="url(#ringStroke)" fill="none" strokeWidth="0.75">
          <ellipse cx="400" cy="400" rx="320" ry="120" />
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="120"
            transform="rotate(60 400 400)"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="120"
            transform="rotate(120 400 400)"
          />
        </g>

        <g fill="#9be9ff">
          <circle cx="720" cy="400" r="3" opacity="0.9" />
          <circle cx="176.9" cy="670.6" r="2.4" opacity="0.75" />
          <circle cx="176.9" cy="129.4" r="2.4" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
}
