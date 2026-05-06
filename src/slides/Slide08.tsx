// Slide 08: Inequality — Gini & Gender
export default function Slide08() {
  const giniData = [
    { year: '1981', value: 28, pct: '28%' },
    { year: '1990', value: 35, pct: '35%' },
    { year: '2000', value: 43, pct: '43%' },
    { year: '2008', value: 49, pct: '49%' },
    { year: '2013', value: 47, pct: '47%' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(145deg,#fdf4ff 0%,#f0e6ff 40%,#e6f0ff 100%)'}}>

      <div className="absolute -top-20 -right-20 w-80 h-80 opacity-25 blob"
        style={{background:'linear-gradient(135deg,#d6bcfa,#b794f4)', animationDuration:'8s'}} />
      <div className="absolute -bottom-10 left-20 w-60 h-60 opacity-15 blob"
        style={{background:'linear-gradient(135deg,#a3bffa,#63b3ed)', animationDelay:'2s', animationDuration:'6s'}} />

      <div className="relative z-10 flex h-full px-16 py-12 gap-12">
        {/* Left: Gini chart */}
        <div className="flex-1 flex flex-col">
          <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-purple-500" />
            <span className="text-purple-600 text-xs tracking-[0.25em] uppercase font-medium">Inequality Metrics</span>
          </div>
          <h2 className="anim-fade-up delay-200 text-gray-800 mb-6"
            style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.6rem,3vw,2.6rem)', fontWeight:700}}>
            Rising <span className="gradient-text">Gini</span>,<br />Divided Society
          </h2>

          {/* Gini bar chart */}
          <div className="anim-fade-in delay-300 flex-1 flex items-end gap-5 pb-6 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400 w-8">
              <span>50</span><span>40</span><span>30</span><span>20</span><span>0</span>
            </div>
            <div className="flex-1 flex items-end gap-4 pl-10">
              {giniData.map((d, i) => (
                <div key={i} className={`anim-fade-up delay-${(i+3)*100} flex-1 flex flex-col items-center gap-2`}>
                  <div className="text-xs font-bold" style={{
                    color: d.value >= 45 ? '#9f7aea' : d.value >= 40 ? '#63b3ed' : '#68d391'
                  }}>{d.pct}</div>
                  <div className="w-full rounded-t-lg anim-bar-grow relative overflow-hidden"
                    style={{
                      height:`${(d.value/50)*180}px`,
                      background:`linear-gradient(to top,${d.value>=45?'#b794f4':d.value>=40?'#63b3ed':'#68d391'}99,${d.value>=45?'#d6bcfa':d.value>=40?'#bee3f8':'#c6f6d5'})`,
                      animationDelay:`${i*0.12+0.3}s`,
                    }}>
                    {d.value >= 45 && (
                      <div className="absolute top-1 left-0 right-0 flex justify-center">
                        <div className="text-purple-700 text-xs font-bold">⚠</div>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs">{d.year}</div>
                </div>
              ))}
            </div>
            {/* Danger threshold line */}
            <div className="absolute left-10 right-0 border-t border-dashed border-red-300/50"
              style={{bottom:`${(45/50)*180+24}px`}}>
              <span className="absolute right-0 -top-4 text-xs text-red-400">Gini 45 = high inequality</span>
            </div>
          </div>
        </div>

        {/* Right: Gender & multidimensional inequality */}
        <div className="w-2/5 flex flex-col justify-center gap-5">
          <div className="anim-fade-up delay-200 text-gray-700 font-semibold text-sm uppercase tracking-wider">Gender Gaps</div>

          {[
            { label: "Women's pension (avg vs men)", women: 35, men: 100, wLabel:'35%', mLabel:'100%', note:'65% below male average', color:'#f687b3' },
            { label: 'Rural vs urban health insurance', women: 20, men: 100, wLabel:'Rural 20%', mLabel:'Urban 85%', note:'3x geographic gap', color:'#63b3ed' },
          ].map((item, i) => (
            <div key={i} className={`anim-scale-in delay-${(i+4)*100} rounded-2xl p-5`}
              style={{background:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.9)', boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
              <div className="text-gray-700 text-xs font-medium mb-3">{item.label}</div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Women / Rural</span>
                    <span style={{color:item.color}} className="font-semibold">{item.wLabel}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full anim-bar-grow"
                      style={{width:`${item.women}%`, background:item.color, animationDelay:`${i*0.2+0.5}s`}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Men / Urban</span>
                    <span className="text-gray-600 font-semibold">{item.mLabel}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full anim-bar-grow"
                      style={{width:`${item.men}%`, background:'#a0aec0', animationDelay:`${i*0.2+0.7}s`}} />
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs" style={{color:item.color}}>→ {item.note}</div>
            </div>
          ))}

          {/* Migrant workers note */}
          <div className="anim-fade-up delay-800 rounded-2xl p-5"
            style={{background:'linear-gradient(135deg,rgba(107,70,193,0.1),rgba(66,153,225,0.08))', border:'1px solid rgba(107,70,193,0.15)'}}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏗️</span>
              <div>
                <div className="text-purple-700 text-sm font-semibold mb-1">Migrant Workers</div>
                <div className="text-gray-600 text-xs leading-relaxed">
                  16–17% received social protection. No urban hukou = no access. 
                  <br />Estimated <strong>290M</strong> workers in this liminal legal status.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
