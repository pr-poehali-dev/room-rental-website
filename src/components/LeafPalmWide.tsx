interface LeafProps {
  className?: string;
  opacity?: number;
  flip?: boolean;
  size?: number;
}

export default function LeafPalmWide({ className = '', opacity = 0.22, flip = false, size = 260 }: LeafProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 260 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pwGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7ab87a" />
          <stop offset="50%" stopColor="#4a8c55" />
          <stop offset="100%" stopColor="#2d6438" />
        </linearGradient>
        <linearGradient id="pwGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6aab6a" />
          <stop offset="100%" stopColor="#3a7a45" />
        </linearGradient>
        <linearGradient id="pwGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a9e60" />
          <stop offset="100%" stopColor="#2a5e35" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path d="M130 300 C130 280 130 260 130 240 C130 220 128 200 126 185" stroke="#3a6e40" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Top leaflet pair */}
      <path d="M126 185 C110 165 80 148 55 138 C45 134 38 134 36 140 C34 146 40 152 52 155 C68 160 90 166 106 178 C116 185 122 190 126 190 Z" fill="url(#pwGrad1)" />
      <path d="M126 185 C142 165 172 148 197 138 C207 134 214 134 216 140 C218 146 212 152 200 155 C184 160 162 166 146 178 C136 185 130 190 126 190 Z" fill="url(#pwGrad1)" />
      <path d="M55 140 C70 145 90 154 106 178" stroke="#2d5e35" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M197 140 C182 145 162 154 146 178" stroke="#2d5e35" strokeWidth="1" fill="none" opacity="0.5" />

      {/* 2nd leaflet pair */}
      <path d="M126 205 C108 185 72 165 42 154 C30 150 22 150 20 157 C18 164 26 172 40 176 C60 182 88 190 108 205 C118 212 124 217 127 218 Z" fill="url(#pwGrad2)" />
      <path d="M126 205 C144 185 180 165 210 154 C222 150 230 150 232 157 C234 164 226 172 212 176 C192 182 164 190 144 205 C134 212 128 217 125 218 Z" fill="url(#pwGrad2)" />
      <path d="M42 157 C62 162 88 172 108 205" stroke="#2a5a32" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M210 157 C190 162 164 172 144 205" stroke="#2a5a32" strokeWidth="1" fill="none" opacity="0.5" />

      {/* 3rd leaflet pair */}
      <path d="M127 225 C105 205 64 185 28 175 C14 171 5 172 3 180 C1 188 12 197 28 202 C52 209 84 218 108 234 C120 242 126 247 128 250 Z" fill="url(#pwGrad3)" />
      <path d="M127 225 C149 205 190 185 226 175 C240 171 249 172 251 180 C253 188 242 197 226 202 C202 209 170 218 146 234 C134 242 128 247 126 250 Z" fill="url(#pwGrad3)" />
      <path d="M28 180 C52 185 84 196 108 234" stroke="#265530" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M226 180 C202 185 170 196 146 234" stroke="#265530" strokeWidth="1" fill="none" opacity="0.5" />

      {/* 4th leaflet pair (bottom wide) */}
      <path d="M128 248 C104 228 58 210 16 202 C0 198 -8 200 -8 210 C-8 220 6 230 24 236 C52 245 88 256 114 272 C124 278 128 282 129 285 Z" fill="url(#pwGrad3)" />
      <path d="M128 248 C152 228 198 210 240 202 C256 198 264 200 264 210 C264 220 250 230 232 236 C204 245 168 256 142 272 C132 278 128 282 127 285 Z" fill="url(#pwGrad3)" />

      {/* Vein overlays */}
      <path d="M126 185 C126 210 127 240 128 270" stroke="#2a5a32" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}
