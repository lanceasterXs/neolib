// Slide 05: Healthcare — The Fragmented System
export default function Slide05() {
  const tiers = [
    { name: 'Government Officials', coverage: '98%', spend: '2629 ¥', color: '#b794f4', width: '95%' },
    { name: 'Urban Employees', coverage: '85%', spend: '980 ¥', color: '#63b3ed', width: '78%' },
    { name: 'Urban Residents', coverage: '60%', spend: '340 ¥', color: '#68d391', width: '55%' },
    { name: 'Rural Population', coverage: '32%', spend: '40 ¥', color: '#f6ad55', width: '28%' },
    { name: 'Migrant Workers', coverage: '18%', spend: '~20 ¥', color: '#fc8181', width: '15%' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(150deg,#0f2027 0%,#2d4059 50%,#1a1a2e 100%)'}}>

      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-80 h-80 opacity-10 rounded-full"
        style={{background:'radial-gradient(circle,#b794f4 0%,transparent 70%)'}} />
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-8 rounded-full"
        style={{background:'radial-gradient(circle,#63b3ed 0%,transparent 70%)'}} />

      {/* Medical cross watermark */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-white/5 font-black select-none pointer-events-none"
        style={{fontSize:'20rem', fontFamily:"'Playfair Display',serif"}}>+</div>

      <div className="relative z-10 flex h-full px-16 py-12 gap-12">
        {/* Left content */}
        <div className="flex flex-col justify-center w-2/5">
          <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-purple-400" />
            <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium">Healthcare</span>
          </div>
          <h2 className="anim-fade-up delay-200 text-white mb-4"
            style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:700}}>
            A <span className="gradient-text">Fragmented</span><br />Medical System
          </h2>
          <p className="anim-fade-up delay-300 text-white/60 text-sm leading-relaxed mb-6">
            Post-WTO, the state <em>retrenched</em> from healthcare. By 1993–2005, 
            cities bore 40% of the burden; rural residents paid entirely out-of-pocket.
          </p>

          {/* Key fact box */}
          <div className="anim-scale-in delay-500 rounded-2xl p-5"
            style={{background:'rgba(183,148,244,0.15)', border:'1px solid rgba(183,148,244,0.25)'}}>
            <div className="text-5xl font-black gradient-text mb-1" style={{fontFamily:"'Space Grotesk',sans-serif"}}>40×</div>
            <div className="text-white/70 text-sm">disparity in per-capita healthcare spending between officials and rural residents (1993–2005)</div>
          </div>

          <div className="anim-fade-up delay-700 mt-5 glass rounded-xl p-4"
            style={{background:'rgba(255,255,255,0.06)'}}>
            <div className="text-green-400 text-xs tracking-widest uppercase mb-1 font-medium">2006 Reform</div>
            <div className="text-white/70 text-sm">New Cooperative Medical Scheme expanded to cover rural residents — but gaps persisted.</div>
          </div>
        </div>

        {/* Right: bar chart */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="anim-fade-up delay-300 text-white/40 text-xs uppercase tracking-widest mb-5">
            Healthcare coverage by population group
          </div>
          <div className="space-y-4">
            {tiers.map((t, i) => (
              <div key={i} className={`anim-slide-right delay-${(i+4)*100}`}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-white/80 text-sm font-light">{t.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 text-xs">{t.spend}/yr</span>
                    <span className="text-sm font-semibold" style={{color:t.color}}>{t.coverage}</span>
                  </div>
                </div>
                <div className="h-2 rounded-full" style={{background:'rgba(255,255,255,0.08)'}}>
                  <div
                    className="h-full rounded-full anim-bar-grow"
                    style={{
                      width:t.width,
                      background:`linear-gradient(90deg,${t.color}99,${t.color})`,
                      animationDelay:`${i*0.12+0.3}s`,
                      transformOrigin:'left'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="anim-fade-up delay-1000 mt-8 flex gap-4">
            <div className="flex-1 rounded-xl p-3 text-center" style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="text-xl font-bold text-purple-300" style={{fontFamily:"'Space Grotesk',sans-serif"}}>78%</div>
              <div className="text-white/40 text-xs mt-0.5">Urban insurance\ncoverage 2015</div>
            </div>
            <div className="flex-1 rounded-xl p-3 text-center" style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="text-xl font-bold text-blue-300" style={{fontFamily:"'Space Grotesk',sans-serif"}}>700M</div>
              <div className="text-white/40 text-xs mt-0.5">Rural still\nunder-insured</div>
            </div>
            <div className="flex-1 rounded-xl p-3 text-center" style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="text-xl font-bold text-green-300" style={{fontFamily:"'Space Grotesk',sans-serif"}}>2006</div>
              <div className="text-white/40 text-xs mt-0.5">NCMS rural\nhealth scheme</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
