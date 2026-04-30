import Link from 'next/link';

export default function Hero() {
  return (
    // Swapped min-h-screen to min-h-[100dvh] to fix iOS Safari bottom-bar clipping issues
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-4 sm:px-10 md:px-16 pt-28 sm:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden group/hero">

      {/* ─── 1. VIDEO BACKGROUND ─── */}
      {/* Note: I added a bg-image placeholder and a 'poster' attribute to fix the black screen flash */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-zinc-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg" // MUST ADD: A screenshot of the video's first frame to prevent black flash
          className="w-full h-full object-cover scale-105 sm:scale-110" 
        >
          <source src="/videos/animate_3d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ─── 2. GLASS EFFECT LAYER ─── */}
      <div className="absolute inset-0 z-0 backdrop-blur-xl bg-black/20 border-white/5 pointer-events-none"></div>

      {/* ─── 3. SUBTLE GRADIENT OVERLAY ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0 pointer-events-none"></div>

      {/* ─── CONTENT CONTAINER ─── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8 pointer-events-none">

        {/* ─── LEFT SIDE: TEXT BLOCK ─── */}
        <div className="w-full lg:w-[65%] xl:w-[65%] flex flex-col z-20">
          
          {/* Badge */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-16 pointer-events-auto w-max">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
            </span>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-sm">
              Content Strategy Partner
            </span>
          </div>

          {/* Heading - Adjusted clamp for better mobile wrapping */}
          <h1 className="font-editorial-heading font-black leading-[0.9] sm:leading-[0.85] tracking-[-0.05em] sm:tracking-[-0.07em] text-white text-[clamp(2.5rem,11vw,120px)] w-full">
            <span className="font-script font-normal tracking-normal lowercase capitalize text-primary block mb-1 sm:mb-4 transform -rotate-2 origin-left hover:scale-105 hover:-rotate-4 transition-all duration-500 cursor-default w-max drop-shadow-sm pointer-events-auto text-[clamp(2rem,8vw,80px)]">
              We Turn
            </span>
            <span className="pointer-events-auto drop-shadow-lg block sm:inline">CONTENT INTO{' '}</span>
            
            <span className="relative inline-block group cursor-default mt-2 sm:mt-0 pointer-events-auto">
              <span className="relative z-10 text-black bg-white px-3 sm:px-4 md:px-6 py-1 inline-block transform group-hover:-translate-y-2 group-hover:rotate-2 transition-all duration-300">
                CLIENTS
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-primary z-0 translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 transition-all duration-300"></div>
            </span>
          </h1>

          <p className="mt-6 sm:mt-10 text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed pointer-events-auto drop-shadow-sm">
            We help businesses grow through strategic content, high-quality video production, websites, and performance marketing — all designed to generate real results.
          </p>

          {/* Buttons - Switched to flex-col on mobile, row on tablet/desktop */}
          <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 items-start sm:items-center pointer-events-auto">
            <Link
              href="/contact"
              className="group relative flex items-center justify-center sm:justify-start gap-3 bg-white text-black font-editorial-heading px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-xl md:text-2xl hover:text-white transition-colors duration-300 overflow-hidden border-[3px] sm:border-4 border-white shadow-2xl shadow-black/50 w-full sm:w-auto"
            >
              <span className="relative z-10 uppercase tracking-tighter">Get a Quote</span>
              <span className="material-symbols-outlined relative z-10 transform group-hover:translate-x-2 transition-transform duration-300 text-2xl sm:text-3xl">
                arrow_right_alt
              </span>
              <div className="absolute inset-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </Link>

            <Link
              href="/portfolio"
              className="group flex items-center justify-center sm:justify-start gap-2 font-editorial-heading text-primary text-xl sm:text-3xl md:text-4xl leading-none transition-colors duration-300 uppercase tracking-tighter w-full sm:w-auto"
            >
              <span className="border-b-2 sm:border-b-4 border-primary pb-1 group-hover:text-white group-hover:border-white transition-colors duration-300">
                View Our Work
              </span>
              <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 group-hover:text-white">
                arrow_outward
              </span>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 sm:mt-12 flex items-start sm:items-center gap-3 pointer-events-auto border-t border-white/20 pt-6 max-w-max">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">verified</span>
            <p className="text-xs sm:text-sm md:text-base text-white/80 font-medium tracking-wide">
              Trusted by brands, creators, and businesses to drive real growth.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[35%] flex justify-start sm:justify-center lg:justify-end relative z-10 pointer-events-auto">
           {/* Empty right side container kept intact for your layout */}
        </div>

      </div>
    </section>
  );
}