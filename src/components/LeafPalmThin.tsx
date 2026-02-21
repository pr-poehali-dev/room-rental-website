interface LeafProps {
  className?: string;
  opacity?: number;
  flip?: boolean;
  size?: number;
}

export default function LeafPalmThin({ className = '', opacity = 0.22, flip = false, size = 240 }: LeafProps) {
  return (
    <svg
      width={size * 0.75}
      height={size}
      viewBox="0 0 180 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, transform: flip ? 'scaleX(-1)' : undefined, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ptGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#74b87a" />
          <stop offset="40%" stopColor="#4a8c55" />
          <stop offset="100%" stopColor="#2a5e35" />
        </linearGradient>
      </defs>

      {/* Central stem */}
      <path d="M90 295 C90 270 90 245 90 220 C90 180 90 130 90 85" stroke="#3a6e40" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Thin arching fronds — left side */}
      <path d="M90 100 C78 90 58 78 38 70 C24 64 14 64 12 70 C10 76 18 82 30 86 C48 92 70 98 86 108 Z" fill="url(#ptGrad)" />
      <path d="M90 100 C80 86 62 72 44 62 C30 55 20 54 18 61 C16 68 26 75 40 80 C58 87 78 96 88 108 Z" fill="url(#ptGrad)" opacity="0.5" />

      <path d="M90 120 C76 108 52 94 28 86 C12 80 2 80 0 88 C-2 96 10 104 26 109 C48 117 74 124 88 136 Z" fill="url(#ptGrad)" />
      <path d="M90 140 C74 126 46 112 18 104 C2 98 -6 100 -6 108 C-6 116 8 125 26 130 C52 140 78 148 88 162 Z" fill="url(#ptGrad)" />
      <path d="M90 160 C72 144 40 130 8 122 C-8 118 -16 120 -16 130 C-16 140 0 150 20 156 C48 166 78 176 88 190 Z" fill="url(#ptGrad)" />
      <path d="M90 180 C70 166 36 152 0 146 C-16 142 -22 146 -20 156 C-18 166 -2 176 18 183 C46 194 76 204 88 218 Z" fill="url(#ptGrad)" />
      <path d="M90 200 C68 188 32 176 -4 170 C-20 168 -26 172 -24 182 C-22 192 -6 202 16 210 C44 222 76 232 88 246 Z" fill="url(#ptGrad)" />
      <path d="M90 220 C66 210 28 200 -8 196 C-24 194 -30 200 -28 210 C-26 220 -8 230 14 238 C42 250 76 260 88 274 Z" fill="url(#ptGrad)" />

      {/* Right side */}
      <path d="M90 100 C102 90 122 78 142 70 C156 64 166 64 168 70 C170 76 162 82 150 86 C132 92 110 98 94 108 Z" fill="url(#ptGrad)" />
      <path d="M90 120 C104 108 128 94 152 86 C168 80 178 80 180 88 C182 96 170 104 154 109 C132 117 106 124 92 136 Z" fill="url(#ptGrad)" />
      <path d="M90 140 C106 126 134 112 162 104 C178 98 186 100 186 108 C186 116 172 125 154 130 C128 140 102 148 92 162 Z" fill="url(#ptGrad)" />
      <path d="M90 160 C108 144 140 130 172 122 C188 118 196 120 196 130 C196 140 180 150 160 156 C132 166 102 176 92 190 Z" fill="url(#ptGrad)" />
      <path d="M90 180 C110 166 144 152 180 146 C196 142 202 146 200 156 C198 166 182 176 162 183 C134 194 104 204 92 218 Z" fill="url(#ptGrad)" />
      <path d="M90 200 C112 188 148 176 184 170 C200 168 206 172 204 182 C202 192 186 202 164 210 C136 222 104 232 92 246 Z" fill="url(#ptGrad)" />
      <path d="M90 220 C114 210 152 200 188 196 C204 194 210 200 208 210 C206 220 188 230 166 238 C138 250 104 260 92 274 Z" fill="url(#ptGrad)" />

      {/* Vein lines per frond (left) */}
      <path d="M90 100 C72 88 46 78 20 72" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 120 C70 108 42 96 16 88" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 140 C68 126 38 114 8 108" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 160 C66 144 34 132 2 128" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 180 C64 166 30 155 -4 152" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      {/* Vein lines (right) */}
      <path d="M90 100 C108 88 134 78 160 72" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 120 C110 108 138 96 164 88" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 140 C112 126 142 114 172 108" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 160 C114 144 146 132 178 128" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M90 180 C116 166 150 155 184 152" stroke="#2a5530" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}
