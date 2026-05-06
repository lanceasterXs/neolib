import { ChapterMark } from './shared';

export default function Goodall() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(140deg, #f5efe1 0%, #d6c9a5 40%, #6d7a4a 100%)' }}
    >
      {/* leafy hint */}
      <div className="absolute inset-0 opacity-30 kenburns"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(245,239,225,0.85) 0%, transparent 60%)' }} />

      <div className="relative z-10 w-[60%] h-full p-16 flex flex-col justify-between text-stone-800">
        <div className="fade-up">
          <ChapterMark num="07" label="In Memory of a Pioneer" />
        </div>

        <div>
          <div className="text-emerald-800/80 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            ETHOLOGY · CONSERVATION
          </div>
          <h1 className="font-serif text-stone-900 text-7xl leading-[0.95] fade-up" style={{ animationDelay: '500ms' }}>
            Dr. Jane <span className="italic">Goodall</span>
          </h1>
          <div className="font-serif-alt italic text-2xl text-stone-600 mt-3 fade-up" style={{ animationDelay: '700ms' }}>
            珍 · 古道尔　1934 — 2025
          </div>

          <div className="mt-12 max-w-xl">
            <div className="font-serif italic text-stone-700 text-xl leading-relaxed fade-up" style={{ animationDelay: '900ms' }}>
              <span className="text-3xl text-emerald-800">"</span>
              The least I can do is speak out for those who cannot speak for themselves.
              <span className="text-3xl text-emerald-800">"</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div className="fade-up" style={{ animationDelay: '1100ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">逝世</div>
              <div className="font-serif text-3xl mt-1 text-stone-900">10.01</div>
              <div className="text-xs text-stone-500 italic">Beverly Hills</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '1250ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">享年</div>
              <div className="font-serif text-3xl mt-1 text-stone-900">91</div>
              <div className="text-xs text-stone-500 italic">years</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '1400ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">毕生事业</div>
              <div className="font-serif text-3xl mt-1 text-stone-900">Gombe</div>
              <div className="text-xs text-stone-500 italic">坦桑尼亚 · 黑猩猩研究</div>
            </div>
          </div>
        </div>

        <div className="text-stone-500 text-xs italic font-serif-alt fade-in" style={{ animationDelay: '1700ms' }}>
          联合国和平大使 · 简古道尔研究所创始人 · 2025 年总统自由勋章获得者
        </div>
      </div>

      {/* Right portrait silhouette */}
      <div className="w-[40%] h-full relative">
        <svg viewBox="0 0 200 400" className="absolute right-12 top-1/2 -translate-y-1/2 h-[80%] fade-in" style={{ animationDelay: '700ms' }}>
          <defs>
            <linearGradient id="leaf" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3d5a2f" />
              <stop offset="100%" stopColor="#1f3318" />
            </linearGradient>
          </defs>
          {/* large leaf shape */}
          <path
            d="M 100 20 C 50 60, 30 180, 60 320 C 80 380, 120 380, 140 320 C 170 180, 150 60, 100 20 Z"
            fill="url(#leaf)" opacity="0.85"
          />
          <path d="M 100 30 L 100 360" stroke="#1a2a14" strokeWidth="1" />
          {[60, 100, 140, 180, 220, 260, 300].map((y) => (
            <g key={y}>
              <path d={`M 100 ${y} Q 70 ${y + 15} 55 ${y + 30}`} stroke="#1a2a14" strokeWidth="0.5" fill="none" />
              <path d={`M 100 ${y} Q 130 ${y + 15} 145 ${y + 30}`} stroke="#1a2a14" strokeWidth="0.5" fill="none" />
            </g>
          ))}
        </svg>

        {/* date stamp */}
        <div className="absolute right-16 top-20 text-stone-700 fade-in" style={{ animationDelay: '1500ms' }}>
          <div className="text-[10px] tracking-[0.5em]">FAREWELL</div>
          <div className="font-serif italic text-4xl mt-2">October 1, 2025</div>
        </div>
      </div>
    </div>
  );
}
