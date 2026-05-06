import { ChapterMark } from './shared';

export default function Typhoon() {
  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a2a3e 0%, #2c4a6b 40%, #4d7aa3 80%, #d6c89c 100%)' }}
    >
      {/* swirling vortex */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <svg viewBox="0 0 800 800" className="w-[140%] h-[140%] fade-in" style={{ animationDelay: '300ms' }}>
          <defs>
            <radialGradient id="storm" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.0" />
              <stop offset="40%" stopColor="#a8c5e6" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#5d7fa9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2c4a6b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="380" fill="url(#storm)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <path
              key={a}
              d={`M 400 400 Q ${400 + Math.cos(a * Math.PI / 180) * 200} ${400 + Math.sin(a * Math.PI / 180) * 200} ${400 + Math.cos((a + 60) * Math.PI / 180) * 350} ${400 + Math.sin((a + 60) * Math.PI / 180) * 350}`}
              stroke="#cfe0f4" strokeWidth="1.5" fill="none" opacity="0.4"
            />
          ))}
          {/* Eye */}
          <circle cx="400" cy="400" r="30" fill="#1a2a3e" />
          <circle cx="400" cy="400" r="28" fill="none" stroke="#cfe0f4" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 w-full h-full p-16 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div className="fade-up">
            <ChapterMark num="08" label="Eye of the Storm" />
          </div>
          <div className="text-right fade-up" style={{ animationDelay: '200ms' }}>
            <div className="text-[10px] tracking-[0.4em] text-white/60">PHILIPPINES · LANDFALL</div>
            <div className="font-serif italic text-lg mt-1">November 4, 2025</div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="text-cyan-200/80 text-sm tracking-[0.4em] mb-3 fade-up" style={{ animationDelay: '500ms' }}>
            TYPHOON
          </div>
          <h1 className="font-serif italic text-[12rem] leading-[0.85] text-white fade-up" style={{ animationDelay: '700ms' }}>
            Kalmaegi
          </h1>
          <div className="font-serif-alt text-3xl text-cyan-100/90 mt-2 fade-up" style={{ animationDelay: '900ms' }}>
            台风「卡玛吉」 · 当地名 <span className="italic">Tino</span>
          </div>
          <div className="text-white/70 text-sm mt-6 max-w-2xl mx-auto leading-relaxed font-serif-alt italic fade-up" style={{ animationDelay: '1100ms' }}>
            首登南莱特岛 Silago，最大持续风速 130 km/h；同日袭击宿务、内格罗斯岛。<br />为 2025 年第 20 次袭击菲律宾的热带风暴级以上系统。
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto w-full">
          {[
            { v: '188', k: '罹难人数', s: 'lives lost' },
            { v: '500K+', k: '流离失所', s: 'displaced (Cebu)' },
            { v: '5M+', k: '受影响', s: 'people affected' },
            { v: '$500M', k: '世行援助', s: 'World Bank aid' },
          ].map((m, i) => (
            <div key={m.k} className="text-center fade-up" style={{ animationDelay: `${1300 + i * 150}ms` }}>
              <div className="font-serif text-white text-5xl">{m.v}</div>
              <div className="text-xs text-cyan-100/80 mt-2 tracking-widest">{m.k}</div>
              <div className="text-[10px] text-white/50 italic">{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
