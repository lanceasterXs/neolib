// Slide 06: Education — Marketisation & Inequality
export default function Slide06() {
  const issues = [
    {
      icon: '📚',
      title: 'Fee-Based Schooling',
      detail: 'Post-1986, schools began charging tuition, books, uniforms — pricing out rural families.',
      color: '#f6ad55',
    },
    {
      icon: '🏫',
      title: 'Hukou Barrier',
      detail: 'Migrant children denied access to quality urban schools; forced into private or "floating" schools.',
      color: '#63b3ed',
    },
    {
      icon: '📊',
      title: 'Resource Gap',
      detail: 'Urban per-student spending 3–5× higher. Elite university quotas heavily favour Shanghai & Beijing.',
      color: '#b794f4',
    },
    {
      icon: '♀️',
      title: 'Gender Penalty',
      detail: 'Girls bear disproportionate withdrawal from schooling when fees rise; rural girls most at risk.',
      color: '#f687b3',
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(145deg,#fffaf0 0%,#fef3c7 40%,#e0f2fe 100%)'}}>

      {/* Decorative blob shapes */}
      <div className="absolute -top-10 -right-10 w-72 h-72 opacity-20 blob"
        style={{background:'linear-gradient(135deg,#f6ad55,#f6e05e)', borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%'}} />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 opacity-15 blob"
        style={{background:'linear-gradient(135deg,#63b3ed,#b794f4)', borderRadius:'40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay:'3s'}} />

      {/* Background photo subtle */}
      <div className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=40')`,
          backgroundSize:'cover', backgroundPosition:'center'
        }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-yellow-500" />
          <span className="text-yellow-600 text-xs tracking-[0.25em] uppercase font-medium">Education Policy</span>
        </div>
        <h2 className="anim-fade-up delay-200 text-gray-800 mb-2"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:700}}>
          Schools for <span className="gradient-text-warm">Sale</span>
        </h2>
        <p className="anim-fade-up delay-300 text-gray-500 text-sm mb-8 max-w-xl">
          The 2006 compulsory education reform abolished fees — yet structural inequalities in funding and access persist.
        </p>

        {/* Issue cards */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {issues.map((issue, i) => (
            <div key={i}
              className={`anim-scale-in delay-${(i+3)*100} relative rounded-2xl p-6 flex gap-4 items-start group hover:scale-[1.02] transition-all`}
              style={{background:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.95)', boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{background:`linear-gradient(135deg,${issue.color}18,transparent)`}} />
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{background:`${issue.color}22`}}>
                {issue.icon}
              </div>
              <div className="relative">
                <h3 className="font-semibold text-gray-800 mb-1.5 text-sm">{issue.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{issue.detail}</p>
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{background:`linear-gradient(90deg,transparent,${issue.color},transparent)`}} />
            </div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <div className="anim-fade-up delay-900 mt-6 rounded-2xl p-5 flex items-center gap-8"
          style={{background:'linear-gradient(135deg,rgba(107,70,193,0.08),rgba(66,153,225,0.08))', border:'1px solid rgba(107,70,193,0.15)'}}>
          <div className="text-center">
            <div className="text-2xl font-black text-purple-600" style={{fontFamily:"'Space Grotesk',sans-serif"}}>18%</div>
            <div className="text-gray-500 text-xs mt-0.5">Rural college\nenrolment 2006</div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600" style={{fontFamily:"'Space Grotesk',sans-serif"}}>5×</div>
            <div className="text-gray-500 text-xs mt-0.5">Urban vs rural\nper-student spend</div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center">
            <div className="text-2xl font-black text-pink-500" style={{fontFamily:"'Space Grotesk',sans-serif"}}>30%</div>
            <div className="text-gray-500 text-xs mt-0.5">Girls drop-out\nrate rural areas</div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="flex-1">
            <div className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-purple-600">Key finding:</strong> Educational marketisation deepened class and spatial stratification — 
              contradicting formal commitments to universal education under the CCP.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
