export default function Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{background: 'linear-gradient(135deg, #0f2027 0%, #203a43 45%, #2c5364 100%)'}}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{background: 'radial-gradient(circle, #63b3ed 0%, transparent 70%)'}} />
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
        style={{background: 'radial-gradient(circle, #b794f4 0%, transparent 70%)'}} />

      {/* Floating geometric shapes */}
      <div className="absolute top-16 left-16 w-24 h-24 border border-blue-300/20 rounded-full anim-float" style={{animationDelay:'0s'}} />
      <div className="absolute top-32 left-32 w-12 h-12 border border-purple-300/20 rounded-full anim-float" style={{animationDelay:'1s'}} />
      <div className="absolute bottom-24 right-24 w-32 h-32 border border-blue-200/15 rounded-full anim-float" style={{animationDelay:'2s'}} />
      <div className="absolute top-1/2 right-12 w-2 h-32 bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" />
      <div className="absolute top-1/3 left-8 w-2 h-24 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" />

      {/* Thin horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-center">
        {/* Eyebrow */}
        <div className="anim-fade-up delay-100 mb-6 px-4 py-1.5 rounded-full glass text-blue-200/80 text-xs tracking-[0.3em] uppercase font-light">
          Jane Duckett · Political Economy
        </div>

        {/* Main title */}
        <h1 className="anim-fade-up delay-200 font-playfair text-white leading-tight mb-4"
          style={{fontFamily:"'Playfair Display', serif", fontSize:'clamp(2.2rem,5vw,4.5rem)', fontWeight:900, letterSpacing:'-0.02em'}}>
          Neoliberalism,<br />
          <span className="gradient-text">Authoritarianism</span><br />
          & Social Policy
        </h1>

        <div className="anim-fade-up delay-300 text-blue-100/50 text-sm tracking-widest uppercase mb-10 font-light">
          Politics and Social Policy in China
        </div>

        {/* Divider */}
        <div className="anim-fade-up delay-400 flex items-center gap-4 mb-10 w-64">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-300/40" />
        </div>

        {/* Key themes */}
        <div className="anim-fade-up delay-500 flex flex-wrap justify-center gap-3 max-w-2xl mb-12">
          {['Market Reform', 'Social Welfare', 'Inequality', 'State–Society'].map((tag, i) => (
            <span key={i} className="glass px-4 py-2 rounded-full text-white/70 text-sm font-light tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {/* Click hint */}
        <div className="anim-fade-up delay-700 flex items-center gap-2 text-white/30 text-xs tracking-widest">
          <span>CLICK TO BEGIN</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-purple-400/60 to-blue-500/0" />
    </div>
  );
}
