// Slide 04: SOE Privatisation & Urban-Rural Divide
export default function Slide04() {
  const stats = [
    { value: '3M', label: 'Workers laid off\n1990s SOE reform', color: '#fc8181' },
    { value: '40%', label: 'Urban pension\ncoverage 2000', color: '#63b3ed' },
    { value: '78¥', label: 'Rural monthly\npension (avg)', color: '#f6ad55' },
    { value: '2500¥', label: 'Urban monthly\npension (avg)', color: '#68d391' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(135deg,#f7fafc 0%,#ebf4ff 50%,#faf5ff 100%)'}}>

      {/* Top image strip */}
      <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
        <div className="w-full h-full opacity-20"
          style={{
            backgroundImage:`url('https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=1400&q=60')`,
            backgroundSize:'cover', backgroundPosition:'center top'
          }} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent,#f7fafc)'}} />
      </div>

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-orange-400" />
          <span className="text-orange-500 text-xs tracking-[0.25em] uppercase font-medium">The Divide</span>
        </div>
        <h2 className="anim-fade-up delay-200 text-gray-800 mb-1"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:700}}>
          Urban Privilege, <span className="gradient-text-warm">Rural Exclusion</span>
        </h2>
        <p className="anim-fade-up delay-300 text-gray-500 text-sm mb-8 max-w-lg">
          The <em>hukou</em> household registration system entrenched spatial inequality across all welfare domains.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {stats.map((s, i) => (
            <div key={i}
              className={`anim-scale-in delay-${(i+3)*100} relative rounded-2xl p-6 text-center overflow-hidden`}
              style={{background:'rgba(255,255,255,0.8)', border:'1px solid rgba(255,255,255,0.9)', boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{background:`linear-gradient(90deg,transparent,${s.color},transparent)`}} />
              <div className="text-3xl font-black mb-2" style={{color:s.color, fontFamily:"'Space Grotesk',sans-serif"}}>{s.value}</div>
              <div className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Urban vs Rural comparison visual */}
        <div className="flex gap-6 flex-1">
          {/* Urban */}
          <div className="flex-1 anim-slide-right delay-600 rounded-2xl overflow-hidden relative"
            style={{background:'linear-gradient(135deg,rgba(66,153,225,0.12),rgba(99,179,237,0.06))', border:'1px solid rgba(66,153,225,0.2)'}}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Urban</span>
              </div>
              {[
                ['Pension','2500 ¥/mo','████████████████'],
                ['Healthcare','Municipal insurance','████████████████'],
                ['Housing','Market access','████████████████'],
                ['Education','Quality schools','████████████████'],
              ].map(([k,v,_bar],j) => (
                <div key={j} className={`anim-fade-up delay-${(j+7)*100} mb-4`}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">{k}</span>
                    <span className="text-blue-600 font-medium">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-blue-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 anim-bar-grow"
                      style={{width:`${85 - j*8}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* vs divider */}
          <div className="anim-fade-up delay-700 flex flex-col items-center justify-center gap-2">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            <div className="glass rounded-full w-10 h-10 flex items-center justify-center text-gray-500 text-xs font-bold" style={{background:'rgba(255,255,255,0.8)'}}>VS</div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          </div>

          {/* Rural */}
          <div className="flex-1 anim-slide-right delay-600 rounded-2xl overflow-hidden relative"
            style={{background:'linear-gradient(135deg,rgba(246,173,85,0.12),rgba(252,129,129,0.06))', border:'1px solid rgba(246,173,85,0.2)'}}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-orange-700 font-semibold text-sm uppercase tracking-wider">Rural</span>
              </div>
              {[
                ['Pension','127 ¥/mo','██'],
                ['Healthcare','Out-of-pocket','████'],
                ['Housing','Land rights uncertain','███'],
                ['Education','Under-resourced','█████'],
              ].map(([k,v,_bar],j) => (
                <div key={j} className={`anim-fade-up delay-${(j+7)*100} mb-4`}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">{k}</span>
                    <span className="text-orange-600 font-medium">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-orange-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-300 anim-bar-grow"
                      style={{width:`${20 + j*5}%`, animationDelay:`${j*0.1+0.4}s`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
