// Slide 09: Housing — Commodification
export default function Slide09() {
  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{background:'linear-gradient(155deg,#141e30 0%,#243b55 60%,#1a1a2e 100%)'}}>

      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:`url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=50')`,
          backgroundSize:'cover', backgroundPosition:'center'
        }} />
      <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(20,30,48,0.88),rgba(36,59,85,0.75))'}} />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-12"
        style={{background:'radial-gradient(circle,#68d391,transparent)', animation:'float 5s ease-in-out infinite'}} />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-10"
        style={{background:'radial-gradient(circle,#63b3ed,transparent)', animation:'float 7s ease-in-out infinite 1s'}} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <div className="anim-slide-right delay-100 flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-green-400" />
          <span className="text-green-400 text-xs tracking-[0.25em] uppercase font-medium">Housing Policy</span>
        </div>
        <h2 className="anim-fade-up delay-200 text-white mb-2"
          style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:700}}>
          From <span className="gradient-text">Right</span> to Commodity
        </h2>
        <p className="anim-fade-up delay-300 text-white/60 text-sm mb-10 max-w-lg">
          1998: danwei housing abolished. Housing became fully marketised. 
          The state withdrew, then re-entered — but only partially.
        </p>

        {/* Three-column layout */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {/* Pre-reform */}
          <div className="anim-scale-in delay-300 rounded-2xl p-6 flex flex-col"
            style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}>
            <div className="text-green-400 text-xs uppercase tracking-widest mb-3 font-medium">Pre-1998</div>
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-white font-semibold mb-3">Work-Unit Housing</h3>
            <div className="space-y-2 text-white/60 text-xs flex-1">
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Subsidised rent</div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Universal for urban employees</div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Tied to state employment</div>
            </div>
            <div className="mt-4 text-white/30 text-xs">The "iron rice bowl" included a roof</div>
          </div>

          {/* Shock marketisation */}
          <div className="anim-scale-in delay-400 rounded-2xl p-6 flex flex-col"
            style={{background:'rgba(252,129,129,0.08)', border:'1px solid rgba(252,129,129,0.2)'}}>
            <div className="text-red-400 text-xs uppercase tracking-widest mb-3 font-medium">1998–2010</div>
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-white font-semibold mb-3">Full Marketisation</h3>
            <div className="space-y-2 text-white/60 text-xs flex-1">
              <div className="flex items-center gap-2"><span className="text-red-400">✗</span> Housing as investment asset</div>
              <div className="flex items-center gap-2"><span className="text-red-400">✗</span> Rural migrants excluded</div>
              <div className="flex items-center gap-2"><span className="text-red-400">✗</span> 60% cannot afford market prices</div>
            </div>
            <div className="mt-4 rounded-xl p-3" style={{background:'rgba(252,129,129,0.1)'}}>
              <div className="text-red-300 text-xs font-semibold">700M people unable to purchase market housing (2015)</div>
            </div>
          </div>

          {/* Partial rebound */}
          <div className="anim-scale-in delay-500 rounded-2xl p-6 flex flex-col"
            style={{background:'rgba(104,211,145,0.08)', border:'1px solid rgba(104,211,145,0.2)'}}>
            <div className="text-green-400 text-xs uppercase tracking-widest mb-3 font-medium">2010s +</div>
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-white font-semibold mb-3">Partial State Return</h3>
            <div className="space-y-2 text-white/60 text-xs flex-1">
              <div className="flex items-center gap-2"><span className="text-yellow-400">◐</span> Low-income housing (baozufang)</div>
              <div className="flex items-center gap-2"><span className="text-yellow-400">◐</span> Shanty-town renovation</div>
              <div className="flex items-center gap-2"><span className="text-yellow-400">◐</span> Policy banks for affordable homes</div>
            </div>
            <div className="mt-4 text-white/30 text-xs">Still excludes migrants without hukou</div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="anim-fade-up delay-900 mt-6 rounded-2xl p-4 flex items-center gap-5"
          style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)'}}>
          <div className="text-3xl">🔑</div>
          <div className="text-white/60 text-sm">
            <strong className="text-white">Key dynamic:</strong> Housing commodification transferred state assets to middle-class urban residents, 
            deepening wealth inequality and eroding the urban-poor's security — a textbook neoliberal outcome.
          </div>
        </div>
      </div>
    </div>
  );
}
