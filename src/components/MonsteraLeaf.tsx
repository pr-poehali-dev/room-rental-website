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
      viewBox="0 0 300 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="leafGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5d9e6e" />
          <stop offset="50%" stopColor="#3f7d52" />
          <stop offset="100%" stopColor="#2a5c38" />
        </radialGradient>
        <radialGradient id="leafGrad2" cx="55%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#6aab78" />
          <stop offset="60%" stopColor="#3f7d52" />
          <stop offset="100%" stopColor="#254d30" />
        </radialGradient>
      </defs>

      {/* Stem */}
      <path
        d="M150 310 C148 295 147 280 149 265 C150 255 151 245 150 230"
        stroke="#4a7a40"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main leaf shape — realistic monstera outline with lobes and cuts */}
      <path
        d="
          M150 230
          C145 220 135 210 122 200
          C108 188 90 178 72 172
          C52 165 32 162 20 155
          C10 149 8 140 12 132
          C16 123 26 118 36 118
          C30 110 28 100 32 92
          C37 82 48 78 58 80
          C52 70 52 58 58 50
          C65 40 78 37 88 42
          C84 32 86 20 94 14
          C102 7 115 8 122 16
          C126 8 134 3 144 2
          C154 1 164 6 168 14
          C175 7 186 4 196 9
          C207 14 212 26 208 36
          C218 34 230 38 236 48
          C242 58 240 72 233 80
          C244 80 254 86 258 96
          C262 107 258 120 250 126
          C260 128 268 136 268 146
          C268 157 260 166 250 168
          C262 172 270 182 268 194
          C266 206 255 214 244 214
          C238 218 230 222 222 228
          C210 237 196 244 182 250
          C168 256 155 258 150 254
          C150 254 150 254 150 230 Z
        "
        fill="url(#leafGrad)"
      />

      {/* Left side shading overlay */}
      <path
        d="
          M150 230
          C145 220 135 210 122 200
          C108 188 90 178 72 172
          C52 165 32 162 20 155
          C10 149 8 140 12 132
          C36 118 58 80 88 42
          C84 32 86 20 94 14
          C102 7 115 8 122 16
          C106 35 95 55 90 80
          C82 108 88 138 100 162
          C112 185 130 205 150 220 Z
        "
        fill="#2d5e3a"
        opacity="0.25"
      />

      {/* Characteristic monstera holes / slits — left side */}
      <path
        d="M88 115 C82 108 78 98 80 88 C82 79 90 74 98 76 C104 78 108 85 106 94 C104 104 96 112 88 115 Z"
        fill="white"
      />
      <path
        d="M72 158 C64 152 58 140 60 130 C62 120 72 114 80 118 C88 121 92 132 88 142 C84 152 78 160 72 158 Z"
        fill="white"
      />

      {/* Right side holes */}
      <path
        d="M200 105 C206 98 214 94 222 96 C230 99 234 108 230 116 C226 124 216 128 208 124 C200 120 196 112 200 105 Z"
        fill="white"
      />
      <path
        d="M224 158 C230 150 240 146 248 150 C256 154 258 164 252 172 C246 180 234 182 226 177 C218 171 218 166 224 158 Z"
        fill="white"
      />

      {/* Narrow edge slits (characteristic notches on outer edge) */}
      <path
        d="M34 142 C28 136 26 126 34 120 C36 118 38 118 40 120 C38 128 37 136 42 142 C39 144 36 144 34 142 Z"
        fill="white"
        opacity="0.7"
      />
      <path
        d="M255 148 C262 142 264 132 256 126 C254 124 252 124 250 126 C252 134 253 142 248 148 C251 150 254 150 255 148 Z"
        fill="white"
        opacity="0.7"
      />

      {/* Center vein */}
      <path
        d="M150 228 C150 210 150 190 150 170 C150 148 150 120 150 90 C150 68 150 46 150 24"
        stroke="#2a5c38"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left veins */}
      <path d="M150 80  C138 85  118 85  96 78" stroke="#2a5c38" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M150 106 C136 112 112 114 88 110" stroke="#2a5c38" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M150 132 C134 138 108 142 80 136" stroke="#2a5c38" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M150 158 C132 164 104 168 72 162" stroke="#2a5c38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M150 182 C134 188 112 196 86 196" stroke="#2a5c38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M150 205 C138 210 122 218 104 222" stroke="#2a5c38" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* Right veins */}
      <path d="M150 80  C162 85  182 85  204 78" stroke="#2a5c38" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M150 106 C164 112 188 114 212 108" stroke="#2a5c38" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M150 132 C166 138 190 140 218 134" stroke="#2a5c38" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M150 158 C168 164 196 166 226 160" stroke="#2a5c38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M150 182 C168 188 192 194 216 192" stroke="#2a5c38" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M150 205 C164 210 180 218 198 222" stroke="#2a5c38" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* Sub-veins left */}
      <path d="M96 78  C90 86  88 96  90 108" stroke="#3a6e47" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M80 136 C72 144  68 154  72 164" stroke="#3a6e47" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Sub-veins right */}
      <path d="M204 78  C210 86  212 96  210 108" stroke="#3a6e47" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M218 134 C226 142  230 152  226 162" stroke="#3a6e47" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Highlight gloss */}
      <path
        d="M150 30 C158 40 166 58 164 76 C162 90 154 100 150 108 C148 98 146 84 148 68 C149 52 150 40 150 30 Z"
        fill="white"
        opacity="0.08"
      />
    </svg>
  );
}
