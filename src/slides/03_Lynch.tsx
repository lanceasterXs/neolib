import { ChapterMark } from './shared';

export default function Lynch() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(140deg, #1f1d2b 0%, #2a2840 50%, #3d3358 100%)' }}
    >
      {/* Left: portrait area with image */}
      <div className="w-[46%] h-full relative overflow-hidden">
        <div
          className="absolute inset-0 kenburns"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.7)',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(20,18,32,0.9) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 60%, rgba(20,18,32,1) 100%)' }} />

        {/* Caption over image */}
        <div className="absolute left-10 bottom-10 text-white/80 fade-in" style={{ animationDelay: '900ms' }}>
          <div className="font-serif italic text-xl">"Keep your eye on the donut,</div>
          <div className="font-serif italic text-xl">not on the hole."</div>
          <div className="text-white/50 text-[10px] tracking-[0.3em] mt-3">— DAVID LYNCH</div>
        </div>
      </div>

      {/* Right: content */}
      <div className="flex-1 h-full p-16 flex flex-col justify-between text-white">
        <div className="fade-up">
          <ChapterMark num="01" label="A Light Goes Out" />
        </div>

        <div>
          <div className="text-amber-200/80 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            CINEMA · IN MEMORIAM
          </div>
          <h1 className="font-serif text-7xl leading-[0.95] mb-3 fade-up" style={{ animationDelay: '500ms' }}>
            David <span className="italic">Lynch</span>
          </h1>
          <div className="font-serif-alt italic text-2xl text-white/60 fade-up" style={{ animationDelay: '700ms' }}>
            大卫 · 林奇　1946 — 2025
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { k: '逝世', v: '2025.01.16', s: 'Los Angeles' },
              { k: '享年', v: '78', s: 'years' },
              { k: '代表作', v: '双峰', s: 'Twin Peaks' },
            ].map((m, i) => (
              <div key={m.k} className="border-l border-amber-200/40 pl-4 fade-up" style={{ animationDelay: `${900 + i * 150}ms` }}>
                <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">{m.k}</div>
                <div className="font-serif text-3xl mt-1">{m.v}</div>
                <div className="text-xs text-white/50 mt-1 italic">{m.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-white/60 text-sm leading-relaxed max-w-md font-serif-alt italic fade-up" style={{ animationDelay: '1500ms' }}>
          《橡皮头》《蓝丝绒》《穆赫兰道》——他用梦境编织影像，让美国独立电影拥有了真正的诗意。
        </div>
      </div>

      {/* Background giant date */}
      <div className="absolute right-[-50px] top-10 text-white/[0.04] font-serif text-[18vw] leading-none pointer-events-none">01.16</div>
    </div>
  );
}
