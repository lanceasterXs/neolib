// Slide 07: WTO-era Social Policy Reforms (2001+)
const reforms = [
  { policy: 'Rural SOE Privatisation', content: 'Reduced agricultural employment' },
  { policy: 'New Cooperative Medical', content: 'Govt co-pay for rural health' },
  { policy: 'Rural Social Care (NRSAS)', content: 'Basic social care for rural poor' },
  { policy: 'Minimum Rural Medical', content: 'Village-level basic insurance' },
  { policy: 'MLGS Expansion', content: 'Safety net to 87M rural residents' },
  { policy: 'Free Compulsory Education', content: 'Abolished rural school fees 2006' },
];

export default function Slide07() {
  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(150deg,#1a202c 0%,#2a4365 50%,#1a365d 100%)'}}>

      <div className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=1200&q=40')`,
          backgroundSize:'cover', backgroundPosition:'center'
        }} />
      <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(26,32,44,0.85),rgba(26,54,93,0.75))'}} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'32px 32px'}} />

      <div className="relative z-10 flex h-full px-16 py-12 gap-12">
        {/* Left */}
        <div className="w-2/5 flex flex-col justify-center">
          <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-teal-400" />
            <span className="text-teal-400 text-xs tracking-[0.25em] uppercase font-medium">Post-WTO Response</span>
          </div>
          <h2 className="anim-fade-up delay-200 text-white mb-4"
            style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:700}}>
            The <span className="gradient-text">Welfare</span><br />Rebound (2001–)
          </h2>
          <p className="anim-fade-up delay-300 text-white/60 text-sm leading-relaxed mb-6">
            Joining the WTO accelerated inequality. Facing legitimacy crisis, the Party launched a 
            <strong className="text-teal-300"> "harmonious society"</strong> agenda — a selective social policy rebound.
          </p>

          <div className="anim-scale-in delay-500 space-y-3">
            {[
              ['Harmonious Society', '和谐社会 · Hu Jintao 2004'],
              ['Scientific Development', '科学发展观 · Growth with equity'],
              ['New Socialist Countryside', '新农村建设 · Rural development'],
            ].map(([title, sub], i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-3"
                style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background:'#4fd1c5'}} />
                <div>
                  <div className="text-white text-sm font-medium">{title}</div>
                  <div className="text-white/40 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: reform table */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="anim-fade-up delay-300 text-white/40 text-xs uppercase tracking-widest mb-4">Key policy reforms</div>
          <div className="space-y-2">
            {reforms.map((r, i) => (
              <div key={i}
                className={`anim-slide-right delay-${(i+4)*100} flex items-center gap-4 rounded-xl px-5 py-3.5 group hover:bg-white/10 transition-all`}
                style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)'}}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{background:'rgba(79,209,197,0.2)', color:'#4fd1c5'}}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-white/90 text-sm font-medium">{r.policy}</div>
                </div>
                <div className="text-white/40 text-xs max-w-[180px] text-right leading-snug">{r.content}</div>
                <div className="w-4 h-4 text-white/20 group-hover:text-teal-400 transition-colors">→</div>
              </div>
            ))}
          </div>

          {/* Tension note */}
          <div className="anim-fade-up delay-1000 mt-6 rounded-xl p-4"
            style={{background:'rgba(79,209,197,0.08)', border:'1px solid rgba(79,209,197,0.2)'}}>
            <div className="flex items-start gap-3">
              <span className="text-teal-400 text-lg">⚠</span>
              <div className="text-white/60 text-xs leading-relaxed">
                <strong className="text-teal-300">The paradox:</strong> Reforms were <em>market-correcting</em> but not universalist. 
                Coverage expanded, yet access remained stratified by <em>hukou</em>, employment, and geography.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
