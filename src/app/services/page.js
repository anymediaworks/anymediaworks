import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services'; // <-- ADD THIS IMPORT

export const metadata = {
  title: 'Services | AnyMediaWorks',
  description: 'High-impact execution for brands that refuse to be ignored.',
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">

      {/* ─── HERO SECTION ─── */}
      <section className="relative px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-24 md:pb-32 overflow-hidden z-0 bg-zinc-900 group cursor-default min-h-[70vh] flex flex-col justify-center">

        {/* Background Image Component */}
        <Image
          src="/images/serviceshero.jpeg" // REPLACE WITH YOUR IMAGE PATH
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center z-[-2] grayscale opacity-40 scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[-1] transition-colors duration-[1200ms] group-hover:bg-black/50 pointer-events-none"></div>

        <div className="relative mt-4 md:mt-0 flex flex-col w-full z-10 pointer-events-none">
          {/* Pulsing Dot Indicator */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 pointer-events-auto w-max">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
            </span>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-sm">
              High-Impact Execution
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-editorial-heading text-[clamp(2.5rem,11vw,12rem)] sm:text-[clamp(3.5rem,14vw,12rem)] leading-[0.85] font-black uppercase tracking-[-0.07em] select-none text-white group/title cursor-default flex flex-col items-start pointer-events-auto max-w-full">
            <span className="inline-block transform group-hover/title:-translate-y-2 group-hover/title:rotate-1 transition-all duration-500 block mb-1 md:mb-0">
              OUR
            </span>
            <span className="inline-block transform group-hover/title:translate-x-2 sm:group-hover/title:translate-x-4 transition-all duration-500 block mb-3 md:mb-6">
              SERVICES
            </span>

            {/* Brutalist "DOMINATE." Block */}
            <span className="relative inline-block mt-2 sm:mt-0 max-w-full">
              <span className="relative z-10 text-white bg-black px-2 sm:px-3 md:px-5 pb-1 md:pb-2 inline-flex items-center gap-1 sm:gap-2 transform group-hover/title:-translate-y-1 sm:group-hover/title:-translate-y-2 group-hover/title:-rotate-1 sm:group-hover/title:-rotate-2 transition-all duration-500 shadow-xl">
                DOMINATE<span className="text-primary">.</span>
                <span className="material-symbols-outlined opacity-0 group-hover/title:opacity-100 transform -translate-x-4 md:-translate-x-6 group-hover/title:translate-x-0 transition-all duration-500 text-[1em] leading-none hidden sm:block text-primary">
                  rocket_launch
                </span>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-primary z-0 translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2 group-hover/title:translate-x-2 sm:group-hover/title:translate-x-4 group-hover/title:translate-y-2 sm:group-hover/title:translate-y-4 transition-all duration-500 shadow-lg"></div>
            </span>
          </h1>

          {/* SHORT DESCRIPTION */}
          <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10 relative z-20 pointer-events-auto w-full">
            <div className="max-w-xl border-l-2 sm:border-l-4 border-primary pl-3 sm:pl-4 md:pl-6">
              <p className="font-body text-base sm:text-lg md:text-2xl font-medium leading-relaxed text-zinc-300">
                We engineer high-impact digital experiences. Our services are built to scale your brand through relentless strategy and cinematic execution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 1. CORE SERVICES GRID ─── */}
      <section className="px-4 sm:px-8 md:px-16 space-y-20 sm:space-y-24 md:space-y-40 my-16 sm:my-24 md:my-32 overflow-hidden">

        {/* 01 Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 z-10 order-2 lg:order-1">
            <span className="font-editorial-heading text-7xl sm:text-8xl md:text-9xl font-black text-primary opacity-20 absolute -top-8 sm:-top-12 left-0 md:-top-16 md:-left-4 select-none pointer-events-none">01</span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-8 relative z-10">
              STRATEGY
            </h2>
            <p className="font-body text-sm sm:text-base md:text-xl font-semibold mb-6 md:mb-10 text-zinc-600 leading-relaxed">
              We plan everything before execution. A blueprint designed for maximum market penetration and brand authority.
            </p>
            <ul className="space-y-3 md:space-y-6 font-editorial-heading text-base sm:text-lg md:text-2xl font-black uppercase tracking-tight border-l-2 border-primary pl-4 md:pl-6">
              <li className="flex items-center gap-3 md:gap-4"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">edit_square</span> Content Strategy</li>
              <li className="flex items-center gap-3 md:gap-4"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">radar</span> Brand Positioning</li>
              <li className="flex items-center gap-3 md:gap-4"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">account_tree</span> Marketing Funnel Planning</li>
              <li className="flex items-center gap-3 md:gap-4"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">rocket_launch</span> Campaign & Launch</li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative group mt-4 lg:mt-0 order-1 lg:order-2 w-full max-w-[100vw]">
            <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-full h-full bg-zinc-200 z-0"></div>
            <img
              alt="Strategy meeting"
              className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>

    {/* 02 Content Production */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-7 order-1 relative mt-4 lg:mt-0 w-full max-w-[100vw]">
            <div className="absolute -left-2 -top-2 md:-left-4 md:-top-4 w-full h-full bg-black z-0"></div>
            <img
              alt="Content production studio"
              className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/images/service2.jpeg"
            />
          </div>
          <div className="lg:col-span-5 order-2 lg:pl-10 relative mt-6 lg:mt-0">
            {/* Number 02 moved to the LEFT */}
            <span className="font-editorial-heading text-7xl sm:text-8xl md:text-9xl font-black text-primary opacity-20 absolute -top-8 sm:-top-12 left-0 md:-top-16 md:-left-4 select-none pointer-events-none">02</span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-8 mt-4 lg:mt-0 relative z-10">
              CONTENT<br />PRODUCTION
            </h2>
            <p className="font-body text-sm sm:text-base md:text-xl font-semibold mb-6 md:mb-10 text-zinc-600 leading-relaxed relative z-10">
              High-quality visuals that grab attention and refuse to let go. Cinematic execution for the digital landscape.
            </p>
            <div className="space-y-3 relative z-10">
              
              {/* 1. Video Editing with Background Image & Software Icons */}
              <Link href="/services/video-editing" className="block">
                <div className="relative overflow-hidden bg-zinc-100 p-4 md:p-6 font-editorial-heading font-black text-sm sm:text-lg md:text-xl uppercase tracking-tighter hover:bg-black hover:text-white transition-colors duration-500 flex items-center justify-between group cursor-pointer">
                  {/* Reveal Background Image */}
                  <img 
                    src={servicesData.find(s => s.slug === "video-editing")?.heroImage} 
                    alt="Video Editing Environment" 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0 pointer-events-none"
                  />
                  
                  <div className="relative z-10 flex items-center gap-2 md:gap-3">
                    {/* Standard Icon restored for alignment */}
                    <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors text-2xl md:text-3xl">movie</span>
                    
                    <div className="flex items-center flex-wrap gap-3 md:gap-4">
                      <span>Video Editing (Reels, Ads)</span>
                      
                      {/* Software Icons moved AFTER text */}
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" 
                          alt="Premiere Pro" 
                          className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
                        />
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg" 
                          alt="DaVinci Resolve" 
                          className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <span className="relative z-10 material-symbols-outlined text-transparent group-hover:text-primary transition-colors hidden sm:block">arrow_forward</span>
                </div>
              </Link>

              {/* 2. Cinematography with Background Image */}
              <Link href="/services/cinematography" className="block">
                <div className="relative overflow-hidden bg-zinc-100 p-4 md:p-6 font-editorial-heading font-black text-sm sm:text-lg md:text-xl uppercase tracking-tighter hover:bg-black hover:text-white transition-colors duration-500 flex items-center justify-between group cursor-pointer">
                  <img 
                    src={servicesData.find(s => s.slug === "cinematography")?.heroImage} 
                    alt="Cinematography Camera" 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0 pointer-events-none"
                  />
                  <div className="relative z-10 flex items-center gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors text-2xl md:text-3xl">videocam</span>
                    Cinematography
                  </div>
                  <span className="relative z-10 material-symbols-outlined text-transparent group-hover:text-primary transition-colors hidden sm:block">arrow_forward</span>
                </div>
              </Link>

              {/* 3. Ad Creatives with Background Image */}
              <Link href="/services/ad-creatives" className="block">
                <div className="relative overflow-hidden bg-zinc-100 p-4 md:p-6 font-editorial-heading font-black text-sm sm:text-lg md:text-xl uppercase tracking-tighter hover:bg-black hover:text-white transition-colors duration-500 flex items-center justify-between group cursor-pointer">
                  <img 
                    src={servicesData.find(s => s.slug === "ad-creatives")?.heroImage} 
                    alt="Ad Creatives Strategy" 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0 pointer-events-none"
                  />
                  <div className="relative z-10 flex items-center gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors text-2xl md:text-3xl">design_services</span>
                    Ad Creatives & Content
                  </div>
                  <span className="relative z-10 material-symbols-outlined text-transparent group-hover:text-primary transition-colors hidden sm:block">arrow_forward</span>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {/* 03 Web Design & 04 Mobile Dev (Professional Block) */}
        <div className="bg-black text-white -mx-4 sm:-mx-8 md:-mx-16 px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 overflow-hidden relative">

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 30s linear infinite;
            }
          `}} />

          {/* 03 Web Design */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center mb-16 sm:mb-24 md:mb-32">
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 z-10 order-2 lg:order-1">
              <span className="font-editorial-heading text-7xl sm:text-8xl md:text-9xl font-black text-primary opacity-20 absolute -top-8 sm:-top-12 left-0 md:-top-16 md:-left-4 select-none pointer-events-none">03</span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-8 relative z-10">
                WEB DESIGN
              </h2>
              <p className="font-body text-sm sm:text-base md:text-xl text-zinc-400 mb-6 md:mb-10 leading-relaxed">
                Digital presence that converts. Beautiful, brutal, and relentlessly optimized architecture.
              </p>
              <ul className="space-y-3 md:space-y-4 font-editorial-heading text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white border-l-2 border-primary pl-4 md:pl-6">
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">web</span> Business Websites</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">view_quilt</span> Landing Pages</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">art_track</span> Portfolio Websites</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-primary text-2xl md:text-3xl">speed</span> Website Optimization</li>
              </ul>
            </div>
            <div className="lg:col-span-7 relative group mt-4 lg:mt-0 order-1 lg:order-2 w-full max-w-[100vw]">
              <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-full h-full bg-zinc-800 z-0"></div>
              <img
                alt="Web development interface"
                className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
          </div>

          {/* 04 Mobile Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center mb-12 sm:mb-16 md:mb-24">
            <div className="lg:col-span-7 order-1 relative mt-4 lg:mt-0 w-full max-w-[100vw]">
              <div className="absolute -left-2 -top-2 md:-left-4 md:-top-4 w-full h-full bg-zinc-800 z-0"></div>
              <img
                alt="Mobile app development"
                className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <div className="lg:col-span-5 order-2 lg:pl-10 relative mt-6 lg:mt-0">
              {/* Number 04 moved to the LEFT */}
              <span className="font-editorial-heading text-7xl sm:text-8xl md:text-9xl font-black text-primary opacity-20 absolute -top-8 sm:-top-12 left-0 md:-top-16 md:-left-4 select-none pointer-events-none">04</span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-8 mt-4 lg:mt-0 relative z-10">
                MOBILE DEV
              </h2>
              <p className="font-body text-sm sm:text-base md:text-xl text-zinc-400 mb-6 md:mb-10 leading-relaxed relative z-10">
                Native and cross-platform apps built for retention and speed. iOS & Android dominance.
              </p>
              <ul className="space-y-3 md:space-y-4 font-editorial-heading text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white border-l-2 border-[#3DDC84] pl-4 md:pl-6">
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-[#3DDC84] text-2xl md:text-3xl">phone_iphone</span> iOS Native Apps</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-[#3DDC84] text-2xl md:text-3xl">android</span> Android Development</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-[#3DDC84] text-2xl md:text-3xl">layers</span> React Native / Flutter</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="material-symbols-outlined text-[#3DDC84] text-2xl md:text-3xl">storefront</span> App Store Optimization</li>
              </ul>
            </div>
          </div>

          {/* Tech Stack Marquee Scroll */}
          <div className="pt-8 sm:pt-10 border-t border-zinc-800 flex overflow-hidden -mx-4 sm:-mx-8 md:-mx-16">
            <div className="flex w-[max-content] animate-infinite-scroll hover:[animation-play-state:paused] gap-6 sm:gap-10 pl-6 sm:pl-10 cursor-default">
              {[1, 2, 3].map((key) => (
                <img
                  key={key}
                  src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,tailwind,nodejs,aws,firebase,apple,android,flutter,dart,figma&theme=dark&perline=15"
                  alt="Tech Stack Icons"
                  className="h-10 sm:h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none"
                />
              ))}
            </div>
          </div>
        </div>

        {/* 05 Marketing & Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 z-10 order-2 lg:order-1">
            <span className="font-editorial-heading text-7xl sm:text-8xl md:text-9xl font-black text-primary opacity-20 absolute -top-8 sm:-top-12 left-0 md:-top-16 md:-left-4 select-none pointer-events-none">05</span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-8 relative z-10">
              MARKETING &<br />GROWTH
            </h2>
            <p className="font-body text-sm sm:text-base md:text-xl font-semibold mb-6 md:mb-10 text-zinc-600 leading-relaxed">
              We turn attention into scalable results. Data-driven growth systems engineered to crush your KPIs.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              <div className="border-t-2 sm:border-t-4 border-black pt-3 sm:pt-4">
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-1 sm:mb-2 text-primary">groups</span>
                <h4 className="font-editorial-heading font-black text-lg sm:text-xl md:text-2xl uppercase mb-1">Social Mgt</h4>
                <p className="font-body text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-widest">Community</p>
              </div>
              <div className="border-t-2 sm:border-t-4 border-black pt-3 sm:pt-4">
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-1 sm:mb-2 text-primary">ads_click</span>
                <h4 className="font-editorial-heading font-black text-lg sm:text-xl md:text-2xl uppercase mb-1">Paid Ads</h4>
                <p className="font-body text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-widest">Meta / Google</p>
              </div>
              <div className="border-t-2 sm:border-t-4 border-black pt-3 sm:pt-4">
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-1 sm:mb-2 text-primary">magnet</span>
                <h4 className="font-editorial-heading font-black text-lg sm:text-xl md:text-2xl uppercase mb-1">Lead Gen</h4>
                <p className="font-body text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-widest">Inbound</p>
              </div>
              <div className="border-t-2 sm:border-t-4 border-black pt-3 sm:pt-4">
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-1 sm:mb-2 text-primary">query_stats</span>
                <h4 className="font-editorial-heading font-black text-lg sm:text-xl md:text-2xl uppercase mb-1">Analytics</h4>
                <p className="font-body text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-widest">Tracking</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative group mt-4 lg:mt-0 order-1 lg:order-2 w-full max-w-[100vw]">
            <div className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full bg-primary/20 z-0"></div>
            <img
              alt="Marketing analytics"
              className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* ─── 4. HOW WE WORK (PROCESS) ─── */}
      <section className="bg-zinc-50 py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6">Our Process</h2>
          <p className="font-script text-primary text-2xl sm:text-3xl md:text-5xl">Simple. Structured. Result-driven.</p>
        </div>

        {/* Vertical line specifically positioned for mobile vs desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative before:absolute before:left-[32px] sm:before:left-[40px] before:top-0 before:bottom-0 before:w-[2px] before:bg-zinc-200 md:before:hidden">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-zinc-200 z-0"></div>

          {[
            { step: "1", title: "Strategy", icon: "architecture", desc: "We understand your brand, audience, and goals." },
            { step: "2", title: "Planning", icon: "route", desc: "We create a clear roadmap for content and growth." },
            { step: "3", title: "Execution", icon: "precision_manufacturing", desc: "We produce high-quality content and assets." },
            { step: "4", title: "Growth", icon: "trending_up", desc: "We optimize, scale, and drive tangible results." },
          ].map((item, index) => (
            <div key={index} className="relative z-10 flex flex-row md:flex-col items-center md:items-start lg:items-start text-left md:text-center lg:text-left gap-4 sm:gap-6 md:gap-0 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-editorial-heading text-xl sm:text-3xl font-black md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden">
                <span className="material-symbols-outlined text-3xl sm:text-4xl absolute opacity-20 transform scale-150 right-[-10px] bottom-[-10px] pointer-events-none">
                  {item.icon}
                </span>
                <span className="relative z-10">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-1 sm:mb-2 md:mb-3 flex items-center justify-start md:justify-center lg:justify-start gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl hidden lg:block">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="font-body text-zinc-600 font-medium text-sm sm:text-base md:text-lg leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. PACKAGES / OFFER ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-white">
        <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2 sm:mb-4">Growth Systems</h2>
          <p className="font-body text-sm sm:text-base md:text-xl text-zinc-500 font-semibold uppercase tracking-widest">For Every Stage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Starter */}
          <div className="border-[3px] sm:border-4 border-black p-6 sm:p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 bg-white group relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-6 -top-6 text-[8rem] sm:text-[12rem] text-zinc-100 group-hover:text-zinc-200 transition-colors z-0 pointer-events-none -rotate-12">
              rocket_launch
            </span>
            <div className="mb-4 sm:mb-6 relative z-10">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-black group-hover:text-primary transition-colors">
                rocket_launch
              </span>
            </div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 relative z-10">Starter</h3>
            <p className="font-body text-sm sm:text-base text-zinc-500 font-medium mb-6 sm:mb-8 relative z-10">Perfect for small businesses</p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow relative z-10">
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-primary mt-0.5 sm:mt-0">check_circle</span> Basic content</li>
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-primary mt-0.5 sm:mt-0">check_circle</span> System setup</li>
            </ul>
            <button className="w-full bg-black text-white py-3 sm:py-4 font-editorial-heading uppercase font-black text-lg sm:text-xl hover:bg-primary transition-colors relative z-10">Inquire</button>
          </div>

          {/* Growth */}
          <div className="border-[3px] sm:border-4 border-primary bg-primary text-white p-6 sm:p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-6 -top-6 text-[8rem] sm:text-[12rem] text-black/10 z-0 pointer-events-none -rotate-12">
              business_center
            </span>
            <div className="mb-4 sm:mb-6 relative z-10">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-white">
                business_center
              </span>
            </div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 relative z-10">Growth</h3>
            <p className="font-body text-sm sm:text-base text-white/80 font-medium mb-6 sm:mb-8 relative z-10">For brands ready to scale</p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow relative z-10">
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-black mt-0.5 sm:mt-0">check_circle</span> Strategic roadmap</li>
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-black mt-0.5 sm:mt-0">check_circle</span> Content production</li>
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-black mt-0.5 sm:mt-0">check_circle</span> Website build</li>
            </ul>
            <button className="w-full bg-white text-black py-3 sm:py-4 font-editorial-heading uppercase font-black text-lg sm:text-xl hover:bg-black hover:text-white transition-colors relative z-10">Inquire</button>
          </div>

          {/* Premium */}
          <div className="border-[3px] sm:border-4 border-black p-6 sm:p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-300 bg-white group relative overflow-hidden md:col-span-2 lg:col-span-1">
            <span className="material-symbols-outlined absolute -right-6 -top-6 text-[8rem] sm:text-[12rem] text-zinc-100 group-hover:text-zinc-200 transition-colors z-0 pointer-events-none -rotate-12">
              workspace_premium
            </span>
            <div className="mb-4 sm:mb-6 relative z-10">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-black group-hover:text-primary transition-colors">
                workspace_premium
              </span>
            </div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 relative z-10">Premium</h3>
            <p className="font-body text-sm sm:text-base text-zinc-500 font-medium mb-6 sm:mb-8 relative z-10">Complete done-for-you system</p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow relative z-10">
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-primary mt-0.5 sm:mt-0">check_circle</span> Advanced strategy</li>
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-primary mt-0.5 sm:mt-0">check_circle</span> Full production</li>
              <li className="flex items-start gap-2 sm:gap-3 font-body font-bold text-base sm:text-lg"><span className="material-symbols-outlined text-primary mt-0.5 sm:mt-0">check_circle</span> Marketing & Ads</li>
            </ul>
            <button className="w-full bg-black text-white py-3 sm:py-4 font-editorial-heading uppercase font-black text-lg sm:text-xl hover:bg-primary transition-colors relative z-10">Inquire</button>
          </div>
        </div>
        <p className="text-center font-body text-zinc-500 font-bold mt-8 sm:mt-12 text-sm sm:text-lg flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
          <span className="material-symbols-outlined text-primary hidden sm:block">arrow_forward</span>
          Custom solutions available based on your exact needs.
        </p>
      </section>

      {/* ─── 6. WHY CHOOSE US & 7. RESULTS ─── */}
      <section className="bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 overflow-hidden">
        
        {/* Why Choose Us - Centered layout for Desktop */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 sm:mb-16 text-center">
            WHY ANY<br className="sm:hidden" />MEDIA WORKS?
          </h2>
          <ul className="space-y-8 md:space-y-12 w-full">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b border-zinc-800 pb-8 group text-center sm:text-left">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-zinc-800 group-hover:text-primary transition-colors mt-1">flag</span>
              <div>
                <h4 className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Strategy-First Approach</h4>
                <p className="font-body text-sm sm:text-base md:text-lg text-zinc-400 font-medium">No random posting. Every piece of content serves the bottom line.</p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b border-zinc-800 pb-8 group text-center sm:text-left">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-zinc-800 group-hover:text-primary transition-colors mt-1">movie_filter</span>
              <div>
                <h4 className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Cinematic Quality</h4>
                <p className="font-body text-sm sm:text-base md:text-lg text-zinc-400 font-medium">High-end production value that separates you from the noise.</p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b border-zinc-800 pb-8 group text-center sm:text-left">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-zinc-800 group-hover:text-primary transition-colors mt-1">hub</span>
              <div>
                <h4 className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">One Team, Zero Friction</h4>
                <p className="font-body text-sm sm:text-base md:text-lg text-zinc-400 font-medium">Stop juggling vendors. We handle everything from idea to ROI.</p>
              </div>
            </li>
          </ul>
          <p className="font-script text-primary text-2xl sm:text-3xl md:text-4xl mt-12 sm:mt-16 text-center">
            We don't just deliver work — we deliver growth.
          </p>
        </div>

      </section>

      {/* ─── 8. CTA SECTION ─── */}
      <section className="bg-primary py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="font-editorial-heading text-[clamp(2.5rem,8vw,8rem)] font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-6">
          LET'S BUILD YOUR<br />GROWTH SYSTEM
        </h2>
        <p className="font-body text-white text-base sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-12 max-w-2xl mx-auto">
          Ready to scale your brand with strategy, content, and marketing? Get in touch today and let's make it happen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 items-center w-full max-w-3xl mx-auto">
          <Link href="/contact" className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-4 sm:py-5 md:px-12 md:py-6 font-editorial-heading text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-none text-center flex justify-center items-center gap-2 sm:gap-3">
            Get a Quote <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_forward</span>
          </Link>
          <Link href="/book" className="w-full sm:w-auto bg-transparent border-[3px] sm:border-4 border-black text-black px-6 sm:px-8 py-3.5 sm:py-4 md:px-12 md:py-5 font-editorial-heading text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-none text-center flex justify-center items-center gap-2 sm:gap-3">
            Book a Call <span className="material-symbols-outlined text-xl sm:text-2xl">calendar_today</span>
          </Link>
        </div>
      </section>
      
    </div>
  );
}