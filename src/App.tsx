import { useEffect, useState, useCallback } from 'react';
import Slides from './slides';

export default function App() {
  const [index, setIndex] = useState(0);
  const total = Slides.length;

  const next = useCallback(() => setIndex(i => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex(i => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') { e.preventDefault(); prev(); }
      else if (e.key === 'Home') { setIndex(0); }
      else if (e.key === 'End') { setIndex(total - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, total]);

  const Current = Slides[index];

  return (
    <div className="w-full h-full relative select-none">
      {/* Click anywhere to advance, except on prev arrow */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={next}
        onContextMenu={(e) => { e.preventDefault(); prev(); }}
      >
        <div key={index} className="w-full h-full slide-enter">
          <Current />
        </div>
      </div>

      {/* Top bar: brand + counter */}
      <div className="absolute top-0 left-0 right-0 px-8 py-5 flex items-center justify-between z-50 pointer-events-none">
        <div className="flex items-center gap-3 text-white/80 text-xs tracking-[0.3em] uppercase mix-blend-difference">
          <div className="w-6 h-px bg-white/60" />
          <span className="font-serif italic">Chronicle&nbsp;·&nbsp;时代回响</span>
        </div>
        <div className="text-white/80 text-xs tracking-[0.3em] mix-blend-difference font-mono">
          {String(index + 1).padStart(2, '0')} <span className="opacity-50">/ {String(total).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Bottom progress + navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="px-8 pb-5 flex items-end justify-between pointer-events-none">
          <div className="text-white/70 text-[10px] tracking-[0.4em] uppercase mix-blend-difference font-sans">
            点击任意位置 · 继续 →
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="text-white/80 hover:text-white text-xs tracking-widest mix-blend-difference px-3 py-1 transition"
              aria-label="prev"
            >← PREV</button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="text-white/80 hover:text-white text-xs tracking-widest mix-blend-difference px-3 py-1 transition"
              aria-label="next"
            >NEXT →</button>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-[2px] bg-white/10">
          <div
            className="h-full bg-white/80 transition-all duration-700 ease-out"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pointer-events-auto">
        {Slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`w-1.5 rounded-full transition-all mix-blend-difference ${i === index ? 'h-6 bg-white' : 'h-1.5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
