import { Letters } from './shared';

export default function End() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #1c1f2e 0%, #2d2f4a 40%, #5b4d72 80%, #c89a7a 100%)',
      }}
    >
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d8b48f 0%, transparent 70%)' }} />
      <div className="absolute -bottom-60 -right-40 w-[800px] h-[800px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6f7fb5 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center text-white px-16">
        <div className="text-white/60 text-xs tracking-[0.5em] mb-8 fade-in">
          END OF CHRONICLE
        </div>

        <div className="font-serif text-white text-[10vw] leading-[0.9] italic">
          <Letters text="谢谢观看" delay={300} step={150} />
        </div>

        <div className="font-serif-alt italic text-white/70 text-2xl mt-6 fade-up" style={{ animationDelay: '1300ms' }}>
          Thank you for <em>witnessing</em> the year.
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-white/60 text-xs tracking-[0.4em] fade-in" style={{ animationDelay: '1700ms' }}>
          <div className="w-12 h-px bg-white/40" />
          <span>MMXXV — MMXXVI</span>
          <div className="w-12 h-px bg-white/40" />
        </div>

        <div className="mt-12 text-white/50 text-xs italic font-serif-alt fade-in" style={{ animationDelay: '2000ms' }}>
          按 ← 键回看 · 按 Home 回到首页
        </div>
      </div>
    </div>
  );
}
