// Slide 02: Core Argument — What is Neoliberalism in China?
export default function Slide02() {
  const chars = [
    { icon: '🏭', label: 'Privatisation', desc: 'SOE restructuring & mass layoffs' },
    { icon: '🌐', label: 'Marketisation', desc: 'Prices, trade & capital deregulated' },
    { icon: '✂️', label: 'Retrenchment', desc: 'Welfare state rolled back' },
    { icon: '🏙️', label: 'Commodification', desc: 'Housing, education, health = market goods' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(160deg,#f8f4ef 0%,#edf2f7 50%,#e9d8fd 100%)'}}>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 blob"
        style={{background:'linear-gradient(135deg,#b794f4,#63b3ed)'}} />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15 blob"
        style={{background:'linear-gradient(135deg,#f6ad55,#fc8181)', animationDelay:'2s'}} />

      <div className="relative z-10 flex flex-col h-full px-16 py-14">
        {/* Header */}
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-purple-400" />
          <span className="text-purple-500 text-xs tracking-[0.25em] uppercase font-medium">Core Framework</span>
        </div>
        <h2 className="anim-fade-up delay-200 font-playfair text-gray-800 mb-2"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:700}}>
          What is China's
          <span className="gradient-text-warm"> "Neoliberalism"?</span>
        </h2>
        <p className="anim-fade-up delay-300 text-gray-500 text-sm max-w-xl mb-8 leading-relaxed">
          Not a simple copy of Western neoliberalism — China's variant combines
          <strong className="text-purple-600"> market reforms</strong> with
          <strong className="text-blue-600"> authoritarian party control</strong>, producing a unique hybrid.
        </p>

        {/* 4 cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {chars.map((c, i) => (
            <div key={i}
              className={`anim-scale-in delay-${(i+3)*100} group relative glass-dark rounded-2xl p-5 bg-white/60 border border-white/80 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1`}
              style={{background:'rgba(255,255,255,0.65)'}}>
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1.5">{c.label}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{c.desc}</div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Central thesis */}
        <div className="anim-fade-up delay-700 relative rounded-2xl p-6 overflow-hidden"
          style={{background:'linear-gradient(135deg,rgba(107,70,193,0.12),rgba(66,153,225,0.12))'}}>
          <div className="absolute inset-0 border border-purple-300/30 rounded-2xl" />
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">✦</div>
            <div>
              <div className="text-xs text-purple-500 uppercase tracking-widest mb-1 font-medium">Central Thesis</div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Party embraced economic liberalisation <em>selectively</em>, retaining political monopoly. 
                Social policy became a tool of <strong>legitimation</strong>, not universal welfare — 
                sustaining urban elites while managing rural discontent.
              </p>
            </div>
          </div>
        </div>

        {/* 1980 marker */}
        <div className="anim-fade-up delay-900 mt-5 flex items-center gap-6">
          <div className="flex items-center gap-3 glass px-5 py-2.5 rounded-full" style={{background:'rgba(255,255,255,0.7)'}}>
            <span className="text-2xl font-bold text-purple-600" style={{fontFamily:"'Space Grotesk',sans-serif"}}>1980</span>
            <span className="text-gray-500 text-xs">Reform Era Begins</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-300/60 to-transparent" />
          <div className="flex items-center gap-3 glass px-5 py-2.5 rounded-full" style={{background:'rgba(255,255,255,0.7)'}}>
            <span className="text-2xl font-bold text-blue-600" style={{fontFamily:"'Space Grotesk',sans-serif"}}>2001</span>
            <span className="text-gray-500 text-xs">WTO Accession</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-300/60 to-transparent" />
          <div className="flex items-center gap-3 glass px-5 py-2.5 rounded-full" style={{background:'rgba(255,255,255,0.7)'}}>
            <span className="text-2xl font-bold text-teal-600" style={{fontFamily:"'Space Grotesk',sans-serif"}}>2006</span>
            <span className="text-gray-500 text-xs">Welfare Rebound</span>
          </div>
        </div>
      </div>
    </div>
  );
}
