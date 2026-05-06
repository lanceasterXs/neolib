import { ChapterMark } from './shared';

export default function Oscars() {
  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #1a1410 0%, #2b1f15 40%, #5a3f1f 100%)' }}
    >
      {/* Spotlight gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 60% at 50% 35%, rgba(245,200,120,0.18) 0%, transparent 60%)' }} />

      {/* Top */}
      <div className="absolute top-16 left-16 right-16 flex items-start justify-between text-amber-100/80">
        <div className="fade-up">
          <ChapterMark num="03" label="The 97th Academy Awards" />
        </div>
        <div className="text-right fade-up" style={{ animationDelay: '200ms' }}>
          <div className="text-[10px] tracking-[0.4em]">MARCH 2, 2025</div>
          <div className="font-serif italic text-sm mt-1">Dolby Theatre · Hollywood</div>
        </div>
      </div>

      {/* Center stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-5xl px-8">
          <div className="font-serif italic text-amber-200/70 text-2xl mb-6 fade-up" style={{ animationDelay: '400ms' }}>
            And the Oscar goes to —
          </div>

          {/* Statue silhouette */}
          <svg viewBox="0 0 80 200" className="mx-auto h-32 fade-in float-slow" style={{ animationDelay: '600ms' }}>
            <defs>
              <linearGradient id="gold" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#f6d28a" />
                <stop offset="50%" stopColor="#d6a347" />
                <stop offset="100%" stopColor="#8a6b2c" />
              </linearGradient>
            </defs>
            <g fill="url(#gold)">
              <ellipse cx="40" cy="20" rx="9" ry="11" />
              <rect x="36" y="30" width="8" height="80" rx="2" />
              <path d="M 25 40 Q 40 35 55 40 L 52 70 Q 40 65 28 70 Z" />
              <rect x="20" y="115" width="40" height="6" />
              <rect x="15" y="125" width="50" height="40" rx="2" />
              <rect x="10" y="170" width="60" height="20" rx="2" />
            </g>
          </svg>

          <div className="mt-10">
            <div className="text-amber-100/60 text-xs tracking-[0.4em] mb-3 fade-up" style={{ animationDelay: '900ms' }}>
              BEST PICTURE · 最佳影片
            </div>
            <div className="font-serif text-amber-50 text-[8rem] leading-none italic fade-up" style={{ animationDelay: '1100ms' }}>
              Anora
            </div>
            <div className="font-serif-alt text-amber-200/70 text-3xl mt-2 fade-up" style={{ animationDelay: '1300ms' }}>
              《阿诺拉》
            </div>
          </div>
        </div>
      </div>

      {/* Bottom split */}
      <div className="absolute bottom-16 left-16 right-16 grid grid-cols-3 gap-12 text-amber-100/90">
        <div className="fade-up" style={{ animationDelay: '1500ms' }}>
          <div className="text-[10px] tracking-[0.4em] text-amber-200/50">BEST DIRECTOR</div>
          <div className="font-serif text-2xl mt-2 italic">Sean Baker</div>
          <div className="text-amber-200/60 text-sm mt-1">肖恩 · 贝克</div>
        </div>
        <div className="fade-up" style={{ animationDelay: '1700ms' }}>
          <div className="text-[10px] tracking-[0.4em] text-amber-200/50">BEST ACTOR</div>
          <div className="font-serif text-2xl mt-2 italic">Adrien Brody</div>
          <div className="text-amber-200/60 text-sm mt-1">《粗野派》</div>
        </div>
        <div className="fade-up" style={{ animationDelay: '1900ms' }}>
          <div className="text-[10px] tracking-[0.4em] text-amber-200/50">BEST ACTRESS</div>
          <div className="font-serif text-2xl mt-2 italic">Mikey Madison</div>
          <div className="text-amber-200/60 text-sm mt-1">《阿诺拉》</div>
        </div>
      </div>

      {/* Bg ornament */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
    </div>
  );
}
