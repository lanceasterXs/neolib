import { Letters } from './shared';

export default function Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden grain"
      style={{
        background:
          'radial-gradient(120% 80% at 80% 10%, #f4d9b8 0%, #e9c498 22%, #c9a583 42%, #6c5e74 70%, #2a2940 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f6e1c2 0%, transparent 70%)' }} />
      <div className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6f7fb5 0%, transparent 70%)' }} />

      {/* Vertical art line */}
      <div className="absolute left-[8%] top-[12%] bottom-[12%] w-px bg-white/30 fade-in" style={{ animationDelay: '300ms' }} />

      {/* Year */}
      <div className="absolute left-[10%] top-[18%]">
        <div className="text-white/70 text-xs tracking-[0.5em] mb-3 fade-in" style={{ animationDelay: '500ms' }}>
          MMXXV — MMXXVI
        </div>
        <div className="font-serif text-white text-[14vw] leading-none italic">
          <Letters text="2025" delay={300} step={120} />
        </div>
      </div>

      {/* Title */}
      <div className="absolute left-[10%] bottom-[18%] max-w-[78%]">
        <div className="font-serif text-white text-[5.5vw] leading-[0.95] mb-4">
          <span className="block fade-up" style={{ animationDelay: '900ms' }}>
            时代回响
          </span>
          <span className="block font-serif-alt italic text-white/80 text-[3vw] mt-2 fade-up" style={{ animationDelay: '1200ms' }}>
            A Chronicle of <span className="italic">Our Year</span>
          </span>
        </div>
        <div className="flex items-center gap-4 mt-8 fade-in" style={{ animationDelay: '1700ms' }}>
          <div className="w-16 h-px bg-white/60" />
          <span className="text-white/70 text-[10px] tracking-[0.4em] uppercase">十一帧 · Eleven Frames of History</span>
        </div>
      </div>

      {/* Bottom right author block */}
      <div className="absolute right-[10%] bottom-[10%] text-right text-white/70 fade-in" style={{ animationDelay: '2000ms' }}>
        <div className="font-serif italic text-sm">curated visual essay</div>
        <div className="font-mono text-[10px] tracking-[0.3em] mt-1">Vol. I — Edition 2026</div>
      </div>

      {/* SVG ornament */}
      <svg className="absolute right-[8%] top-[14%] w-40 h-40 text-white/30 fade-in" style={{ animationDelay: '1500ms' }} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.4" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.3" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    </div>
  );
}
