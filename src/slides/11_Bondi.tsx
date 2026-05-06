import { ChapterMark } from './shared';

export default function Bondi() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(180deg, #1c2540 0%, #2d3a5c 40%, #4d5e87 70%, #b8a585 100%)' }}
    >
      <div className="absolute inset-0 opacity-50 kenburns"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          filter: 'brightness(0.65) contrast(1.05)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,37,64,0.8) 0%, rgba(28,37,64,0.4) 50%, rgba(28,37,64,0.92) 100%)' }} />

      <div className="relative z-10 w-full h-full p-16 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div className="fade-up">
            <ChapterMark num="09" label="Bondi · A Night of Light" />
          </div>
          <div className="text-right fade-up" style={{ animationDelay: '200ms' }}>
            <div className="text-[10px] tracking-[0.4em] text-white/60">SYDNEY · ARCHER PARK</div>
            <div className="font-serif italic text-lg mt-1">December 14, 2025</div>
          </div>
        </div>

        <div className="max-w-5xl">
          <div className="text-amber-200/80 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            "CHANUKAH BY THE SEA" · 18:42 AEDT
          </div>
          <h1 className="font-serif text-[7rem] leading-[0.9] fade-up" style={{ animationDelay: '500ms' }}>
            <span className="italic">Bondi</span> Beach
          </h1>
          <div className="font-serif-alt text-2xl text-white/80 mt-3 fade-up" style={{ animationDelay: '700ms' }}>
            悉尼邦迪海滩 · 光明节庆典遭袭
          </div>

          <div className="mt-10 max-w-2xl text-white/80 font-serif-alt italic text-lg leading-relaxed fade-up" style={{ animationDelay: '900ms' }}>
            两名父子枪手于人行天桥开火，向数百名犹太社区民众射击。<br />
            这是澳大利亚自 1996 年阿瑟港惨案以来最严重的大规模枪击事件，<br />
            也是该国历史上最致命的恐怖袭击。
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[
            { v: '16', k: '死亡', s: 'incl. 1 attacker' },
            { v: '40+', k: '受伤', s: 'wounded' },
            { v: '~1,000', k: '现场人数', s: 'in attendance' },
            { v: '7', k: '蜡烛之夜', s: 'first night of Hanukkah' },
          ].map((m, i) => (
            <div key={m.k} className="border-l border-amber-200/50 pl-4 fade-up" style={{ animationDelay: `${1100 + i * 150}ms` }}>
              <div className="font-serif text-5xl text-white">{m.v}</div>
              <div className="text-xs text-amber-100/80 mt-2 tracking-widest">{m.k}</div>
              <div className="text-[10px] text-white/50 italic">{m.s}</div>
            </div>
          ))}
        </div>

        {/* Hero footnote */}
        <div className="absolute right-16 bottom-32 max-w-xs text-right fade-in" style={{ animationDelay: '1900ms' }}>
          <div className="text-amber-200/70 text-[10px] tracking-[0.4em]">A HERO IN THE CROWD</div>
          <div className="font-serif italic text-white/90 text-base mt-2 leading-snug">
            水果店主 Ahmed al-Ahmed 从背后冲向枪手，徒手夺枪 —— 救下无数生命。
          </div>
        </div>
      </div>
    </div>
  );
}
