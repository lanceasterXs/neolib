// Slide 10: Conclusion — Authoritarian Social Policy
export default function Slide10() {
  const conclusions = [
    {
      num: '01',
      title: 'Not Pure Neoliberalism',
      body: "China's reforms were selective and state-directed — the Party retained control even as markets expanded.",
      color: '#63b3ed',
    },
    {
      num: '02',
      title: 'Welfare as Legitimation',
      body: 'Social policy was never about universal rights — it served political stability and urban middle-class support.',
      color: '#b794f4',
    },
    {
      num: '03',
      title: 'Persistent Stratification',
      body: 'Hukou, class, gender and geography continued to determine life chances despite partial reforms.',
      color: '#f6ad55',
    },
    {
      num: '04',
      title: 'Authoritarian Advantage?',
      body: 'The CCP could implement sweeping reforms rapidly — but without accountability, inequities were locked in.',
      color: '#68d391',
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(160deg,#f0f4ff 0%,#e8f4f8 40%,#f5f0ff 100%)'}}>

      {/* Background image */}
      <div className="absolute inset-0 opacity-12"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=40')`,
          backgroundSize:'cover', backgroundPosition:'center'
        }} />

      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{background:'linear-gradient(135deg,#b794f4,#63b3ed)'}} />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 blob opacity-15"
        style={{background:'linear-gradient(135deg,#63b3ed,#b794f4)'}} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-blue-500" />
          <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-medium">Synthesis</span>
        </div>
        <h2 className="anim-fade-up delay-200 text-gray-800 mb-2"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:700}}>
          The <span className="gradient-text">Authoritarian</span> Social Contract
        </h2>
        <p className="anim-fade-up delay-300 text-gray-500 text-sm mb-8 max-w-2xl">
          China's experience reveals how authoritarianism <em>shapes</em> rather than <em>resists</em> neoliberalism — 
          producing a hybrid that is efficient for growth but inequitable by design.
        </p>

        {/* Conclusions grid */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {conclusions.map((c, i) => (
            <div key={i}
              className={`anim-scale-in delay-${(i+3)*100} group relative rounded-2xl p-6 flex gap-5 hover:scale-[1.02] transition-all`}
              style={{background:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.9)', boxShadow:'0 4px 24px rgba(0,0,0,0.05)'}}>
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="text-4xl font-black opacity-15" style={{color:c.color, fontFamily:"'Space Grotesk',sans-serif"}}>{c.num}</div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{background:c.color}} />
                  <h3 className="font-semibold text-gray-800 text-sm">{c.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{background:`linear-gradient(90deg,transparent,${c.color},transparent)`}} />
            </div>
          ))}
        </div>

        {/* Final quote */}
        <div className="anim-fade-up delay-900 mt-6 relative rounded-2xl overflow-hidden p-6"
          style={{background:'linear-gradient(135deg,rgba(107,70,193,0.1),rgba(66,153,225,0.08))', border:'1px solid rgba(107,70,193,0.18)'}}>
          <div className="absolute top-3 left-5 text-6xl text-purple-200/50 font-serif leading-none">"</div>
          <blockquote className="relative text-gray-700 text-sm italic leading-relaxed pl-8 max-w-3xl">
            China's social policy reflects a distinctive mode of <strong>authoritarian neoliberalism</strong> — 
            one that uses market mechanisms selectively to sustain Party legitimacy while perpetuating 
            structural inequalities across class, space, and gender.
            <footer className="mt-2 text-gray-400 text-xs not-italic">— Jane Duckett</footer>
          </blockquote>
        </div>

        {/* Author / source */}
        <div className="anim-fade-up delay-1100 mt-4 flex items-center justify-between text-gray-400 text-xs">
          <span>Neoliberalism, Authoritarian Politics and Social Policy in China · Jane Duckett</span>
          <div className="flex gap-2">
            {['Neoliberalism', 'China', 'Social Policy', 'Authoritarianism'].map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full text-xs"
                style={{background:'rgba(107,70,193,0.1)', color:'#6b46c1'}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
