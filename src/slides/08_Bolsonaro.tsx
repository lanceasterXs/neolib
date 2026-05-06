import { ChapterMark } from './shared';

export default function Bolsonaro() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(160deg, #0e3b2e 0%, #1a5a3a 40%, #f7d046 100%)' }}
    >
      {/* Subtle pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.6" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Left content */}
      <div className="w-[58%] h-full p-16 flex flex-col justify-between text-white">
        <div className="fade-up">
          <ChapterMark num="06" label="Verdict in Brasília" />
        </div>

        <div>
          <div className="text-amber-200 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            BRAZIL · SUPREME COURT
          </div>
          <h1 className="font-serif text-7xl leading-[0.9] mb-3 fade-up" style={{ animationDelay: '500ms' }}>
            Jair <span className="italic">Bolsonaro</span>
          </h1>
          <div className="font-serif-alt italic text-2xl text-white/80 fade-up" style={{ animationDelay: '700ms' }}>
            雅伊尔 · 博索纳罗　巴西前总统
          </div>

          <div className="mt-10 max-w-xl">
            <div className="text-white/70 font-serif-alt text-lg italic leading-relaxed fade-up" style={{ animationDelay: '900ms' }}>
              因策划阴谋政变、试图颠覆 2022 年大选结果，巴西最高法院于 2025 年 9 月 11 日作出判决。
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-xl">
            {[
              { k: '判决日', v: '09.11.2025' },
              { k: '入狱日', v: '11.25.2025' },
            ].map((m, i) => (
              <div key={m.k} className="border-l border-amber-200/60 pl-4 fade-up" style={{ animationDelay: `${1100 + i * 150}ms` }}>
                <div className="text-[10px] tracking-[0.3em] text-amber-100/70 uppercase">{m.k}</div>
                <div className="font-serif text-2xl mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-amber-100/70 text-xs tracking-[0.4em] fade-in" style={{ animationDelay: '1700ms' }}>
          ORDEM E PROGRESSO
        </div>
      </div>

      {/* Right: huge sentence */}
      <div className="w-[42%] h-full relative flex items-center justify-center">
        <div className="text-center">
          <div className="text-white/70 text-xs tracking-[0.5em] mb-4 fade-in" style={{ animationDelay: '700ms' }}>
            SENTENCED TO
          </div>
          <div className="relative">
            <div className="font-serif text-white leading-none fade-up" style={{ animationDelay: '900ms' }}>
              <span className="text-[18rem]">27</span>
            </div>
            <div className="font-serif italic text-3xl text-amber-100 mt-2 fade-up" style={{ animationDelay: '1200ms' }}>
              years <span className="text-white/70">+</span> 3 months
            </div>
            <div className="font-serif-alt text-lg text-white/80 mt-1 fade-up" style={{ animationDelay: '1400ms' }}>
              27 年 3 个月监禁
            </div>
          </div>

          {/* Charge list */}
          <div className="mt-10 text-left max-w-sm mx-auto space-y-2 text-white/80 text-sm">
            {[
              '试图发动政变',
              '武装犯罪组织参与',
              '暴力废除民主法治',
              '对受保护遗产的损害',
            ].map((c, i) => (
              <div key={c} className="flex items-baseline gap-3 fade-up" style={{ animationDelay: `${1600 + i * 120}ms` }}>
                <span className="font-mono text-xs text-amber-200/80">0{i + 1}</span>
                <span className="font-serif-alt italic">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar resembling flag */}
      <div className="absolute bottom-0 left-0 right-0 h-1 fade-in" style={{ animationDelay: '2200ms', background: 'linear-gradient(90deg, #006c35 0%, #006c35 35%, #fedb00 35%, #fedb00 65%, #002776 65%, #002776 100%)' }} />
    </div>
  );
}
