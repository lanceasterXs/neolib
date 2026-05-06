import { ChapterMark } from './shared';

export default function DeepSeek() {
  return (
    <div className="relative w-full h-full overflow-hidden flex"
      style={{ background: 'linear-gradient(160deg, #eef4ff 0%, #d6e4f5 40%, #b8c9e6 100%)' }}
    >
      {/* Animated grid bg */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b5b9e" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Left content */}
      <div className="w-[55%] h-full p-16 flex flex-col justify-between text-slate-800">
        <div className="fade-up">
          <ChapterMark num="02" label="The Sputnik Moment" />
        </div>

        <div>
          <div className="text-blue-700/80 text-sm tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '300ms' }}>
            ARTIFICIAL INTELLIGENCE · OPEN SOURCE
          </div>
          <h1 className="font-serif text-[8rem] leading-[0.85] mb-2 text-slate-900 fade-up" style={{ animationDelay: '500ms' }}>
            Deep<span className="italic text-blue-700">Seek</span>
          </h1>
          <div className="font-serif-alt italic text-2xl text-slate-600 fade-up" style={{ animationDelay: '700ms' }}>
            一款来自中国的开源大模型，<br />让华尔街屏住了呼吸。
          </div>

          <div className="mt-12 max-w-xl">
            <div className="font-serif italic text-slate-600 text-lg leading-relaxed fade-up" style={{ animationDelay: '1000ms' }}>
              <span className="text-3xl text-blue-700 font-serif">"</span>
              DeepSeek R1 是 AI 领域的<em>斯普特尼克时刻</em>。
              <span className="text-3xl text-blue-700 font-serif">"</span>
              <div className="text-xs text-slate-500 mt-2 not-italic tracking-widest">— MARC ANDREESSEN</div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 tracking-[0.3em] fade-in" style={{ animationDelay: '1500ms' }}>
          JANUARY 27, 2025 · WALL STREET
        </div>
      </div>

      {/* Right: dramatic stat panel */}
      <div className="w-[45%] h-full relative flex items-center justify-center">
        <div className="absolute inset-8 rounded-sm border border-slate-800/10" />

        <div className="relative w-full px-12">
          <div className="text-slate-700 text-xs tracking-[0.4em] mb-4 fade-in" style={{ animationDelay: '800ms' }}>
            NVIDIA · MARKET CAP LOSS
          </div>

          <div className="font-serif text-slate-900 leading-none fade-up" style={{ animationDelay: '1000ms' }}>
            <span className="text-[10rem]">−$600</span>
            <span className="text-3xl ml-2 align-top">B</span>
          </div>

          <div className="text-slate-600 mt-4 fade-up" style={{ animationDelay: '1200ms' }}>
            单日市值蒸发，跌幅近 <span className="font-bold text-blue-800">17%</span>
          </div>

          {/* Falling line chart */}
          <svg viewBox="0 0 400 150" className="w-full mt-8">
            <defs>
              <linearGradient id="fall" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 L 60 35 L 120 28 L 180 32 L 220 40 L 260 90 L 320 130 L 400 138"
              fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line"
              style={{ animationDelay: '1300ms' }}
            />
            <path
              d="M 0 30 L 60 35 L 120 28 L 180 32 L 220 40 L 260 90 L 320 130 L 400 138 L 400 150 L 0 150 Z"
              fill="url(#fall)" className="fade-in" style={{ animationDelay: '2200ms' }}
            />
            {/* impact marker */}
            <circle cx="220" cy="40" r="4" fill="#1e40af" className="fade-in" style={{ animationDelay: '2400ms' }} />
            <text x="225" y="32" fontSize="10" fill="#1e3a8a" className="fade-in" style={{ animationDelay: '2500ms' }}>R1 released</text>
          </svg>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="fade-up" style={{ animationDelay: '2000ms' }}>
              <div className="text-[10px] text-slate-500 tracking-[0.3em]">MODEL</div>
              <div className="font-serif text-2xl mt-1">DeepSeek R1</div>
            </div>
            <div className="fade-up" style={{ animationDelay: '2150ms' }}>
              <div className="text-[10px] text-slate-500 tracking-[0.3em]">LICENSE</div>
              <div className="font-serif text-2xl mt-1">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
