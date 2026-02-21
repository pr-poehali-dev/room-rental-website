interface MonsteraLeafProps {
  className?: string;
  opacity?: number;
  flip?: boolean;
  size?: number;
}

export default function MonsteraLeaf({ className = '', opacity = 0.22, flip = false, size = 260 }: MonsteraLeafProps) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 280 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#7ec47e" />
          <stop offset="45%" stopColor="#4a8c55" />
          <stop offset="100%" stopColor="#234e2e" />
        </radialGradient>
      </defs>

      {/* Petiole / stem */}
      <path d="M140 298 C140 278 140 262 140 248 C140 238 139 228 138 218" stroke="#3a6e40" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Main leaf body — rounded monstera shape */}
      <path
        d="
          M138 218
          C125 206 108 194 88 184
          C66 173 42 166 22 166
          C8 166 0 172 0 182
          C0 192 10 200 26 204
          C46 209 70 212 90 220
          C108 227 122 237 132 248
          C134 251 136 254 137 258

          C133 262 126 268 118 272
          C108 276 98 274 96 266
          C94 258 102 250 114 248

          C112 258 108 268 100 274

          L 140 286

          L 180 274
          C172 268 168 258 166 248

          C178 250 186 258 184 266
          C182 274 172 276 162 272
          C154 268 147 262 143 258

          C142 254 144 251 146 248
          C156 237 170 227 188 220
          C208 212 232 209 252 204
          C268 200 278 192 278 182
          C278 172 270 166 256 166
          C236 166 212 173 190 184
          C170 194 153 206 140 218 Z
        "
        fill="url(#mGrad)"
      />

      {/* Left edge slits (cuts from perimeter inward) */}
      <path d="M22 174 C34 178 56 186 78 198 C56 196 28 196 14 200 C4 202 2 192 10 184 Z" fill="white" />
      <path d="M4 196 C18 198 46 204 70 216 C46 218 16 220 2 226 C-6 230 -4 218 0 208 Z" fill="white" />

      {/* Right edge slits */}
      <path d="M258 174 C246 178 224 186 202 198 C224 196 252 196 266 200 C276 202 278 192 270 184 Z" fill="white" />
      <path d="M276 196 C262 198 234 204 210 216 C234 218 264 220 278 226 C286 230 284 218 280 208 Z" fill="white" />

      {/* Upper slits */}
      <path d="M60 170 C70 174 88 182 104 194 C88 190 66 186 52 188 C42 188 38 180 46 174 Z" fill="white" />
      <path d="M220 170 C210 174 192 182 176 194 C192 190 214 186 228 188 C238 188 242 180 234 174 Z" fill="white" />

      {/* Small holes near stem */}
      <ellipse cx="118" cy="250" rx="7" ry="5" transform="rotate(-10 118 250)" fill="white" />
      <ellipse cx="162" cy="250" rx="7" ry="5" transform="rotate(10 162 250)" fill="white" />
      <ellipse cx="116" cy="262" rx="5" ry="4" fill="white" />
      <ellipse cx="164" cy="262" rx="5" ry="4" fill="white" />

      {/* Centre vein */}
      <path d="M138 218 C139 230 140 242 140 256" stroke="#2a5530" strokeWidth="2.4" strokeLinecap="round" fill="none" />

      {/* Left veins */}
      <path d="M138 192 C122 196 96 196 68 188" stroke="#2a5530" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M138 206 C118 210 88 212 56 206" stroke="#2a5530" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M138 220 C116 224 82 228 46 224" stroke="#2a5530" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M138 234 C118 240 90 246 62 246" stroke="#2a5530" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Right veins */}
      <path d="M140 192 C156 196 182 196 210 188" stroke="#2a5530" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M140 206 C160 210 190 212 222 206" stroke="#2a5530" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M140 220 C162 224 196 228 232 224" stroke="#2a5530" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M140 234 C160 240 188 246 216 246" stroke="#2a5530" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Gloss highlight */}
      <path d="M138 172 C146 182 154 198 150 216 C144 202 140 186 138 172 Z" fill="white" opacity="0.12" />
    </svg>
  );
}
