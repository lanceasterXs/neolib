const items = [
  { n: '01', label: 'David Lynch', sub: '电影巨匠的告别', tag: 'Cinema' },
  { n: '02', label: 'DeepSeek', sub: '东方的开源震动', tag: 'AI' },
  { n: '03', label: '第97届奥斯卡', sub: '《阿诺拉》之夜', tag: 'Awards' },
  { n: '04', label: 'GPT-5', sub: 'OpenAI 的新纪元', tag: 'AI' },
  { n: '05', label: 'Charlie Kirk', sub: '犹他谷的枪声', tag: 'Politics' },
  { n: '06', label: 'Bolsonaro', sub: '巴西的审判', tag: 'Justice' },
  { n: '07', label: 'Jane Goodall', sub: '一位先驱的离去', tag: 'Science' },
  { n: '08', label: '台风 Kalmaegi', sub: '菲律宾的灾难', tag: 'Nature' },
  { n: '09', label: 'Bondi Beach', sub: '悉尼的悲剧之夜', tag: 'World' },
  { n: '10', label: '美国 · 委内瑞拉', sub: '一月的清晨', tag: 'Conflict' },
  { n: '11', label: '你是谁', sub: 'A Final Question', tag: 'Coda' },
];

export default function TOC() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(135deg, #f3efe7 0%, #e8e2d4 60%, #d8cdb8 100%)' }}
    >
      {/* Left ornamental block */}
      <div className="w-[38%] h-full relative flex flex-col justify-between p-16"
        style={{ background: 'linear-gradient(180deg, #2d3e50 0%, #1c2a3a 100%)' }}
      >
        <div className="text-white/70 text-[10px] tracking-[0.5em] uppercase fade-in">Index</div>
        <div>
          <div className="font-serif italic text-white/90 text-[5vw] leading-none fade-up">目录</div>
          <div className="font-serif text-white/60 text-2xl mt-3 italic fade-up" style={{ animationDelay: '200ms' }}>Contents</div>
          <div className="w-24 h-px bg-amber-300/70 mt-8 fade-in" style={{ animationDelay: '500ms' }} />
          <p className="text-white/50 text-sm mt-6 leading-relaxed max-w-xs font-serif-alt italic fade-in" style={{ animationDelay: '700ms' }}>
            从一位艺术家的逝去，到一场远方的风暴 —— 11 个瞬间，构成这一年的轮廓。
          </p>
        </div>
        <div className="text-white/40 text-[10px] tracking-[0.4em] fade-in" style={{ animationDelay: '900ms' }}>
          11 ENTRIES · 2025–2026
        </div>

        {/* decorative big number */}
        <div className="absolute right-[-30px] top-[40%] text-white/5 font-serif text-[20vw] leading-none pointer-events-none">11</div>
      </div>

      {/* Right list */}
      <div className="flex-1 h-full overflow-hidden p-14 pr-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-8">
          {items.map((it, i) => (
            <div
              key={it.n}
              className="group flex items-baseline gap-4 py-2 border-b border-stone-400/40 fade-up"
              style={{ animationDelay: `${300 + i * 70}ms` }}
            >
              <span className="font-mono text-xs text-stone-500">{it.n}</span>
              <div className="flex-1">
                <div className="font-serif text-stone-800 text-xl leading-tight">{it.label}</div>
                <div className="text-stone-500 text-xs mt-0.5">{it.sub}</div>
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">{it.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
