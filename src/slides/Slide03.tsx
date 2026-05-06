// Slide 03: Three Phases of Reform
export default function Slide03() {
  const phases = [
    {
      period: '1949–1980',
      title: 'Planned Economy',
      color: '#4299e1',
      bg: 'from-blue-50 to-blue-100',
      items: ['Iron Rice Bowl', 'Danwei system', 'Universal coverage (urban)'],
      icon: '⚙️',
    },
    {
      period: '1980–2000',
      title: 'Shock Marketisation',
      color: '#9f7aea',
      bg: 'from-purple-50 to-purple-100',
      items: ['SOE privatisation', 'Welfare retrenchment', 'Rural-urban split deepens'],
      icon: '📉',
    },
    {
      period: '2000–2010s',
      title: 'Selective Re-embedding',
      color: '#48bb78',
      bg: 'from-emerald-50 to-emerald-100',
      items: ['New rural cooperative insurance', 'Basic medical expansion', 'Minimum living standard'],
      icon: '🔄',
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(150deg,#1a202c 0%,#2d3748 40%,#1a365d 100%)'}}>

      {/* Background image */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=60')`,
          backgroundSize:'cover', backgroundPosition:'center'
        }} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-blue-400" />
          <span className="text-blue-400 text-xs tracking-[0.25em] uppercase font-medium">Historical Arc</span>
        </div>
        <h2 className="anim-fade-up delay-200 text-white mb-8"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:700}}>
          Three Phases of <span className="gradient-text">Reform</span>
        </h2>

        {/* Timeline phases */}
        <div className="flex gap-6 flex-1 items-stretch">
          {phases.map((p, i) => (
            <div key={i}
              className={`anim-scale-in delay-${(i+3)*100} flex-1 relative rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300`}
              style={{background:`linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))`, border:'1px solid rgba(255,255,255,0.12)'}}>
              {/* Color accent top */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{background:`linear-gradient(90deg,transparent,${p.color},transparent)`}} />

              <div className="p-7 flex flex-col h-full">
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-xs tracking-widest mb-1 font-medium" style={{color:p.color}}>{p.period}</div>
                <h3 className="text-white text-lg font-semibold mb-5" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{p.title}</h3>
                <div className="flex-1 space-y-3">
                  {p.items.map((item, j) => (
                    <div key={j} className={`anim-slide-right delay-${(i*3+j+6)*100} flex items-start gap-3`}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{background:p.color}} />
                      <span className="text-white/70 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                {/* Phase number */}
                <div className="mt-6 text-6xl font-black opacity-10 self-end" style={{color:p.color, fontFamily:"'Space Grotesk',sans-serif"}}>
                  {String(i+1).padStart(2,'0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="anim-fade-up delay-900 mt-6 relative">
          <div className="h-1 w-full rounded-full" style={{background:'rgba(255,255,255,0.1)'}}>
            <div className="h-full rounded-full" style={{background:'linear-gradient(90deg,#4299e1,#9f7aea,#48bb78)', width:'100%', animation:'drawLine 1.5s ease forwards'}} />
          </div>
          <div className="flex justify-between mt-2 text-white/30 text-xs">
            <span>1949</span><span>1980</span><span>2001</span><span>2010s</span>
          </div>
        </div>
      </div>
    </div>
  );
}
