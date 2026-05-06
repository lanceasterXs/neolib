import { ChapterMark } from './shared';

export default function Venezuela() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(135deg, #2a1f3d 0%, #4a2c5e 40%, #c46f5a 80%, #f3c98b 100%)' }}
    >
      {/* texture */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-[55%] h-full p-16 flex flex-col justify-between text-white">
        <div className="fade-up">
          <ChapterMark num="10" label="Strike Before Dawn" />
        </div>

        <div>
          <div className="text-orange-200/80 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            UNITED STATES INTERVENTION · CARACAS
          </div>
          <h1 className="font-serif text-7xl leading-[0.95] fade-up" style={{ animationDelay: '500ms' }}>
            U.S. <span className="italic font-serif-alt">vs.</span> Venezuela
          </h1>
          <div className="font-serif-alt italic text-2xl text-white/80 mt-3 fade-up" style={{ animationDelay: '700ms' }}>
            2026 年 1 月 3 日凌晨　02:01–04:29 (VET)
          </div>

          <div className="mt-12 max-w-xl space-y-3 text-white/80 fade-up" style={{ animationDelay: '900ms' }}>
            <div className="font-serif italic text-xl leading-relaxed">
              美军在加拉加斯发起大规模空袭，<br />俘获总统 <span className="border-b border-orange-200">Nicolás Maduro</span> 与其妻 Cilia Flores。
            </div>
            <div className="text-sm text-white/60 font-serif-alt italic mt-4">
              二人随即被押解至纽约，面临贩毒、共谋走私可卡因等多项指控。<br />
              副总统 Delcy Rodríguez 宣誓就任代理总统。
            </div>
          </div>
        </div>

        <div className="text-white/50 text-xs tracking-[0.4em] fade-in" style={{ animationDelay: '1700ms' }}>
          OPERATION COMMANDED BY · TRUMP / HEGSETH / CAINE
        </div>
      </div>

      {/* Right: timeline */}
      <div className="w-[45%] h-full relative p-16 flex flex-col justify-center">
        <div className="text-white/70 text-[10px] tracking-[0.5em] mb-8 fade-in" style={{ animationDelay: '600ms' }}>
          TIMELINE · 2 HOURS 28 MINUTES
        </div>

        <div className="relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-white/30" />
          {[
            { t: '02:01', l: '空袭开始', d: '加拉加斯多点目标' },
            { t: '03:15', l: '突击行动展开', d: '美军 + 中央情报局' },
            { t: '04:29', l: '马杜罗被俘', d: '随即押往纽约' },
            { t: '08:00', l: 'Rodríguez 就职', d: '出任代理总统' },
          ].map((e, i) => (
            <div key={e.t} className="relative mb-8 fade-up" style={{ animationDelay: `${800 + i * 200}ms` }}>
              <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-orange-200 border-2 border-white/80" />
              <div className="font-mono text-sm text-orange-100 tracking-widest">{e.t}</div>
              <div className="font-serif italic text-2xl text-white mt-1">{e.l}</div>
              <div className="text-white/60 text-sm mt-1">{e.d}</div>
            </div>
          ))}
        </div>

        {/* Casualties */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-white">
          {[
            { v: '23+', k: '委内瑞拉军方' },
            { v: '32', k: '古巴军警' },
            { v: '7', k: '美军阵亡' },
          ].map((m, i) => (
            <div key={m.k} className="text-center border-t border-white/30 pt-3 fade-up" style={{ animationDelay: `${1700 + i * 120}ms` }}>
              <div className="font-serif text-3xl">{m.v}</div>
              <div className="text-[10px] tracking-widest mt-1 text-white/70 uppercase">{m.k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
