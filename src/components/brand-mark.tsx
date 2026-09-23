type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-9 w-9" }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="14" r="8" fill="#FF6B4A" />
      <path
        d="M6 28.5C9.6 24.4 14.1 24.4 17.7 28.5C21.3 32.6 25.8 32.6 29.4 28.5C33 24.4 37.5 24.4 42 28.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M6 36C9.6 31.9 14.1 31.9 17.7 36C21.3 40.1 25.8 40.1 29.4 36C33 31.9 37.5 31.9 42 36"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity=".48"
      />
    </svg>
  );
}
