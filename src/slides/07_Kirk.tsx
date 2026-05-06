import { ChapterMark } from './shared';

export default function Kirk() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(180deg, #2c3346 0%, #3e4a64 50%, #6c7a96 100%)' }}
    >
      {/* atmospheric image suggesting a campus / sky */}
      <div className="absolute inset-0 opacity-40 kenburns"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(60%) brightness(0.6)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(44,51,70,0.4) 0%, rgba(44,51,70,0.95) 100%)' }} />

      <div className="relative z-10 w-full h-full p-16 flex flex-col justify-between text-white">
        <div className="fade-up">
          <ChapterMark num="05" label="A Shot at Noon" />
        </div>

        <div className="max-w-5xl">
          <div className="text-rose-200/70 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            ASSASSINATION · UTAH VALLEY UNIVERSITY
          </div>
          <h1 className="font-serif text-7xl leading-[0.95] mb-3 fade-up" style={{ animationDelay: '500ms' }}>
            Charlie <span className="italic">Kirk</span>
          </h1>
          <div className="font-serif-alt italic text-2xl text-white/70 fade-up" style={{ animationDelay: '700ms' }}>
            美国保守派活动家 · 31 岁
          </div>

          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="fade-up" style={{ animationDelay: '900ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Date</div>
              <div className="font-serif text-2xl mt-1">2025.09.10</div>
              <div className="text-xs text-white/50 italic mt-1">12:23 MDT</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '1050ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Location</div>
              <div className="font-serif text-2xl mt-1">Orem, Utah</div>
              <div className="text-xs text-white/50 italic mt-1">犹他谷大学</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '1200ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Distance</div>
              <div className="font-serif text-2xl mt-1">142 yds</div>
              <div className="text-xs text-white/50 italic mt-1">130 米外屋顶</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '1350ms' }}>
              <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Suspect</div>
              <div className="font-serif text-2xl mt-1">T. Robinson</div>
              <div className="text-xs text-white/50 italic mt-1">22 岁，次日自首</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="font-serif italic text-white/60 text-lg max-w-md fade-in" style={{ animationDelay: '1700ms' }}>
            "一场政治暗杀。"
            <div className="text-xs not-italic tracking-widest mt-2 text-white/40">— 犹他州州长 Spencer Cox</div>
          </div>
          <div className="text-right text-white/40 text-xs tracking-[0.4em] fade-in" style={{ animationDelay: '1900ms' }}>
            TURNING POINT USA · CO-FOUNDER
          </div>
        </div>
      </div>

      {/* Crosshair on right */}
      <svg className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 text-white/15 fade-in" style={{ animationDelay: '1100ms' }} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="0.4" />
        <line x1="50" y1="60" x2="50" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="0" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="0.4" />
        <line x1="60" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.4" />
      </svg>
    </div>
  );
}
