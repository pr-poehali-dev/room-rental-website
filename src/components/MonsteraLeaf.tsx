interface MonsteraLeafProps {
  className?: string;
  opacity?: number;
  flip?: boolean;
  size?: number;
}

export default function MonsteraLeaf({ className = '', opacity = 0.18, flip = false, size = 220 }: MonsteraLeafProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Main leaf body */}
      <path
        d="M100 175 C60 170 20 140 15 100 C10 60 35 25 70 18 C85 15 95 20 100 30 C105 20 115 15 130 18 C165 25 190 60 185 100 C180 140 140 170 100 175Z"
        fill="#4a7c59"
      />
      {/* Holes */}
      <ellipse cx="72" cy="75" rx="10" ry="16" transform="rotate(-20 72 75)" fill="white" />
      <ellipse cx="128" cy="75" rx="10" ry="16" transform="rotate(20 128 75)" fill="white" />
      <ellipse cx="55" cy="115" rx="8" ry="13" transform="rotate(-35 55 115)" fill="white" />
      <ellipse cx="145" cy="115" rx="8" ry="13" transform="rotate(35 145 115)" fill="white" />
      {/* Center vein */}
      <path d="M100 30 L100 175" stroke="#3a6347" strokeWidth="2" strokeLinecap="round" />
      {/* Side veins */}
      <path d="M100 60 C85 65 55 62 40 75" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 60 C115 65 145 62 160 75" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 90 C80 92 52 92 35 105" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 90 C120 92 148 92 165 105" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 120 C78 125 55 130 42 145" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 120 C122 125 145 130 158 145" stroke="#3a6347" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Stem */}
      <path d="M100 175 L100 195" stroke="#5a8a69" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
