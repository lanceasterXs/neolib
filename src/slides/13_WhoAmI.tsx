import { Letters, ChapterMark } from './shared';

export default function WhoAmI() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{
        background:
          'radial-gradient(120% 80% at 30% 30%, #f0e6d2 0%, #d4c2a0 30%, #6b8a8b 70%, #2c3a4a 100%)',
      }}
    >
      {/* faint grid + orb */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="g2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>

      {/* Floating orb */}
      <div className="absolute right-[10%] top-[15%] w-72 h-72 rounded-full opacity-70 blur-2xl float-slow"
        style={{ background: 'radial-gradient(circle, #f8e8c4 0%, #c89a5e 50%, transparent 80%)' }} />

      <div className="absolute top-16 left-16 fade-up">
        <ChapterMark num="11" label="A Final Question" />
      </div>

      <div className="relative z-10 text-center px-16">
        <div className="text-stone-700 text-sm tracking-[0.5em] mb-8 fade-up" style={{ animationDelay: '300ms' }}>
          A QUESTION FOR THE MACHINE
        </div>

        <div className="font-serif text-stone-900 text-[14vw] leading-[0.9]">
          <Letters text="你是谁？" delay={500} step={300} />
        </div>

        <div className="font-serif-alt italic text-stone-700 text-3xl mt-6 fade-up" style={{ animationDelay: '2200ms' }}>
          Who <span className="border-b border-stone-700">are</span> you?
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-stone-600 text-base font-serif-alt italic leading-relaxed fade-in" style={{ animationDelay: '2700ms' }}>
          十个问题之后，最后一个 —— <br />
          也许并非问向远方的世界，而是问向回答的那一方。
        </div>
      </div>

      {/* corner decoration */}
      <div className="absolute bottom-16 right-16 fade-in" style={{ animationDelay: '3000ms' }}>
        <svg className="w-28 h-28 text-stone-700/40" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <text x="50" y="20" textAnchor="middle" fontSize="6" fill="currentColor" letterSpacing="2">QUERY · 11</text>
        </svg>
      </div>
    </div>
  );
}
