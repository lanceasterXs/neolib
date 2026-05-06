import { ChapterMark } from './shared';

export default function GPT5() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(135deg, #f5f0e8 0%, #e6dccb 50%, #c8b89a 100%)' }}
    >
      {/* Right organic gradient blob */}
      <div className="absolute -right-40 -top-20 w-[700px] h-[700px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6b8e9b 0%, transparent 70%)' }} />
      <div className="absolute -right-20 -bottom-40 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d4a373 0%, transparent 70%)' }} />

      {/* Left content */}
      <div className="w-[60%] h-full p-16 flex flex-col justify-between text-stone-800 relative z-10">
        <div className="fade-up">
          <ChapterMark num="04" label="A New Frontier" />
        </div>

        <div>
          <div className="text-stone-600 text-sm tracking-[0.3em] mb-3 fade-up" style={{ animationDelay: '300ms' }}>
            OPENAI · CHATGPT
          </div>
          <div className="font-serif italic text-stone-500 text-2xl fade-up" style={{ animationDelay: '500ms' }}>
            The next generation arrived on
          </div>
          <h1 className="font-serif text-stone-900 text-[12rem] leading-[0.85] mt-2 fade-up" style={{ animationDelay: '700ms' }}>
            GPT<span className="italic text-stone-600">-5</span>
          </h1>
          <div className="font-serif-alt italic text-3xl text-stone-700 mt-4 fade-up" style={{ animationDelay: '900ms' }}>
            <span className="text-stone-500">发布于　</span>
            <span className="border-b border-stone-700">2025 年 8 月 7 日</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
            {[
              { v: '94.6%', k: 'AIME 数学', s: 'no tools' },
              { v: '74.9%', k: 'SWE-bench', s: 'coding' },
              { v: '80%', k: '幻觉减少', s: 'vs o3' },
            ].map((m, i) => (
              <div key={m.k} className="fade-up" style={{ animationDelay: `${1100 + i * 150}ms` }}>
                <div className="font-serif text-4xl text-stone-900">{m.v}</div>
                <div className="text-xs text-stone-600 mt-1 tracking-widest uppercase">{m.k}</div>
                <div className="text-[10px] text-stone-500 italic">{m.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-stone-500 text-xs italic font-serif-alt fade-in" style={{ animationDelay: '1700ms' }}>
          多模态 · 持久记忆 · 内建智能体 —— OpenAI 称之为"博士级智能"。
        </div>
      </div>

      {/* Right: orb visualization */}
      <div className="w-[40%] h-full relative flex items-center justify-center">
        <div className="relative w-80 h-80 fade-in" style={{ animationDelay: '600ms' }}>
          {/* Concentric rings */}
          {[1, 0.85, 0.7, 0.55, 0.4].map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-stone-700/30 float-slow"
              style={{
                inset: `${(1 - s) * 50}%`,
                animationDelay: `${i * 600}ms`,
                animationDuration: `${8 + i}s`,
              }}
            />
          ))}
          {/* Core */}
          <div className="absolute inset-[35%] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #f5e8d0, #b88752 70%, #4a3520)',
              boxShadow: '0 0 60px rgba(184,135,82,0.5)',
            }}
          />
          {/* Floating dots */}
          {[
            { t: 10, l: 50 }, { t: 30, l: 90 }, { t: 70, l: 85 },
            { t: 90, l: 40 }, { t: 60, l: 5 }, { t: 20, l: 15 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-stone-800 float-slow"
              style={{
                top: `${p.t}%`, left: `${p.l}%`,
                animationDelay: `${i * 400}ms`,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-16 right-16 text-stone-700 text-right">
          <div className="text-[10px] tracking-[0.4em] fade-in" style={{ animationDelay: '1500ms' }}>SUCCESSORS</div>
          <div className="font-serif italic text-lg mt-1 fade-in" style={{ animationDelay: '1700ms' }}>5.1 → 5.2 → 5.3</div>
        </div>
      </div>
    </div>
  );
}
