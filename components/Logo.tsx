"use client";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Masuel Matos logo"
      role="img"
    >
      {/* Background */}
      <rect
        x="1"
        y="1"
        width="28"
        height="28"
        rx="8"
        className="fill-blue-600"
      />

      {/* M */}
      <path
        d="M7.5 21V9L15 16.5L22.5 9V21"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}