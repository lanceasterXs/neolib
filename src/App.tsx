import { useState, useEffect, useCallback } from 'react';
import Cover from './slides/Cover';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';

const TOTAL_SLIDES = 10;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);

  const goNext = useCallback(() => {
    if (animating || current >= TOTAL_SLIDES - 1) return;
    setDirection('next');
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => c + 1);
      setAnimating(false);
    }, 600);
  }, [animating, current]);

  const goPrev = useCallback(() => {
    if (animating || current <= 0) return;
    setDirection('prev');
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => c - 1);
      setAnimating(false);
    }, 600);
  }, [animating, current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const slides = [
    <Cover key={0} />,
    <Slide02 key={1} />,
    <Slide03 key={2} />,
    <Slide04 key={3} />,
    <Slide05 key={4} />,
    <Slide06 key={5} />,
    <Slide07 key={6} />,
    <Slide08 key={7} />,
    <Slide09 key={8} />,
    <Slide10 key={9} />,
  ];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden cursor-pointer select-none"
      onClick={goNext}
    >
      {/* Slide wrapper */}
      <div
        key={current}
        className={`absolute inset-0 ${
          animating
            ? direction === 'next'
              ? 'slide-exit-next'
              : 'slide-exit-prev'
            : 'slide-enter'
        }`}
      >
        {slides[current]}
      </div>

      {/* Navigation dots */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50"
        onClick={e => e.stopPropagation()}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animating) return;
              setDirection(i > current ? 'next' : 'prev');
              setAnimating(true);
              setTimeout(() => { setCurrent(i); setAnimating(false); }, 600);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Prev arrow */}
      {current > 0 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white/70 hover:text-white transition-all backdrop-blur-sm"
          onClick={e => { e.stopPropagation(); goPrev(); }}
        >
          ‹
        </button>
      )}

      {/* Slide counter */}
      <div className="absolute top-5 right-6 z-50 text-white/40 text-xs font-light tracking-widest">
        {String(current + 1).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
      </div>
    </div>
  );
}
