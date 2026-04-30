export default function Testimonials() {
  return (
    <section className="px-8 md:px-16 py-40 bg-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-16">
          <div className="bg-white p-12 border-l-[12px] border-primary">
            <span className="material-symbols-outlined text-primary text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-body text-2xl font-semibold mb-8">"AnyMediaWorks didn't just rebuild our site; they redefined how our customers perceive our luxury brand. Our conversion rates tripled in 60 days."</p>
            <div className="font-editorial-heading">
              <span className="block font-black text-xl">MARCUS VANE</span>
              <span className="text-primary text-sm uppercase tracking-widest">CEO, AETHER WATCHES</span>
            </div>
          </div>
          
          <div className="bg-black text-white p-12 border-l-[12px] border-white">
            <span className="material-symbols-outlined text-white text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-body text-2xl font-semibold mb-8">"The content they produce is cinematic. It stands out in a crowded feed like a lightning strike. Aggressive, clean, and highly effective."</p>
            <div className="font-editorial-heading">
              <span className="block font-black text-xl">ELARA VOSS</span>
              <span className="text-primary text-sm uppercase tracking-widest">CMO, NEXUS DIGITAL</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="font-editorial-heading text-4xl font-black mb-16 uppercase tracking-tighter">Trusted By The Fearless</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 grayscale opacity-60">
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black italic">ELITE.</div>
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black">VOLT_</div>
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black tracking-tighter">PRIME</div>
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black underline">VISTA</div>
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black border-2 border-black p-2">CODE</div>
            <div className="h-20 flex items-center justify-center font-editorial-heading text-3xl font-black">LUMEN</div>
          </div>
        </div>
      </div>
    </section>
  );
}