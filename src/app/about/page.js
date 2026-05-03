import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About | AnyMediaWorks',
  description: 'We fuse brutalist engineering with cinematic aesthetics.',
};

export default function AboutPage() {
  return (
    <div className="pt-0 overflow-hidden">
      
      {/* ─── HERO SECTION: Premium Impact Masthead ─── */}
      <section className="relative px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 lg:pt-20 pb-16 sm:pb-20 md:pb-32 overflow-hidden z-0 bg-zinc-900 group cursor-default">

        {/* Background Image Component (Cinematic Hover Reveal) */}
        <Image
          src="/images/abouthero.jpeg" // REPLACE WITH YOUR IMAGE PATH
          alt="Hero Background"
          fill 
          priority 
          /* UPDATED: Changed lg: to xl: for grayscale logic so iPads show color */
          className="object-cover object-center z-[-2] grayscale-0 xl:grayscale opacity-40 scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] xl:group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105" 
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[-1] transition-colors duration-[1200ms] group-hover:bg-black/40 pointer-events-none"></div>

        <div className="relative mt-4 md:mt-0 flex flex-col w-full lg:w-max z-10 pointer-events-none">
          {/* Pulsing Dot Indicator */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 pointer-events-auto w-max">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
            </span>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-sm">
              The New Standard
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-editorial-heading text-[clamp(3.5rem,14vw,12rem)] leading-[0.85] font-black uppercase tracking-[-0.07em] select-none text-white group/title cursor-default flex flex-col items-start pointer-events-auto">

            {/* Hover shifts */}
            <span className="inline-block transform group-hover/title:-translate-y-2 group-hover/title:rotate-1 transition-all duration-500 block mb-1 md:mb-0">
              WE ARE
            </span>
            <span className="inline-block transform group-hover/title:translate-x-4 transition-all duration-500 block mb-3 md:mb-6">
              THE
            </span>

            {/* Brutalist "OUTLIERS." Block */}
            <span className="relative inline-block mt-2 sm:mt-0">
              {/* Main Black Text Box */}
              <span className="relative z-10 text-white bg-black px-2 sm:px-3 md:px-5 pb-1 md:pb-2 inline-flex items-center gap-1 sm:gap-2 transform group-hover/title:-translate-y-2 group-hover/title:-rotate-2 transition-all duration-500 shadow-xl">
                OUTLIERS<span className="text-primary">.</span>

                {/* Hidden Icon */}
                <span className="material-symbols-outlined opacity-0 group-hover/title:opacity-100 transform -translate-x-4 md:-translate-x-6 group-hover/title:translate-x-0 transition-all duration-500 text-[1em] leading-none hidden sm:block text-primary">
                  arrow_outward
                </span>
              </span>

              {/* Brutalist Primary Offset Shadow */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary z-0 translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 md:translate-x-2 md:translate-y-2 group-hover/title:translate-x-2 sm:group-hover/title:translate-x-3 md:group-hover/title:translate-x-4 group-hover/title:translate-y-2 sm:group-hover/title:translate-y-3 md:group-hover/title:translate-y-4 transition-all duration-500 shadow-lg"></div>
            </span>
          </h1>
        </div>

      </section>

      {/* ─── ABOUT & PILLARS SECTION ─── */}
      <section className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-16 bg-white border-b-[8px] sm:border-b-[12px] md:border-b-[20px] border-black overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto mb-16 sm:mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <span className="font-editorial-heading text-lg sm:text-xl text-primary font-black uppercase tracking-widest mb-2 sm:mb-4 block">About <span className="lowercase font-sans text-primary font-bold">anymediaworks</span></span>
              <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] sm:leading-[0.85]">
                WE BUILD <br />
                <span className="text-primary border-b-4 sm:border-b-8 border-black pb-1 sm:pb-2 inline-block mt-2 sm:mt-0">SYSTEMS.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-end pt-4 lg:pt-16">
              <p className="font-body text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-black mb-6 sm:mb-8">
                anymediaworks is a creative and digital agency focused on helping brands grow. We believe that content alone isn’t enough — <span className="font-bold bg-primary/20 px-1">it needs direction, purpose, and execution.</span>
              </p>
              <p className="font-body text-base sm:text-lg md:text-xl font-medium leading-relaxed text-zinc-600 border-l-4 border-black pl-4 sm:pl-6">
                That’s why we combine absolute creativity with ruthless strategy. We don't just make things look good; we build end-to-end growth systems that drive real, measurable results.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Strategy */}
          <div className="group relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden bg-black border-[3px] sm:border-4 border-black hover:border-primary transition-colors duration-500 flex flex-col justify-between p-6 sm:p-8 md:p-10 cursor-default">
            {/* UPDATED: Changed lg: to xl: for grayscale/opacity logic */}
            <img src="/images/strategy.jpeg" alt="Strategy Planning" className="absolute inset-0 w-full h-full object-cover opacity-60 xl:opacity-40 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 group-hover:scale-110 xl:group-hover:opacity-60 transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-primary font-black opacity-80">01</span>
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">analytics</span>
            </div>
            <div className="relative z-10 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 sm:mb-3">Strategy</h3>
              <div className="w-8 sm:w-12 h-1 bg-primary mb-3 sm:mb-4 group-hover:w-full transition-all duration-700"></div>
              <p className="font-body text-sm sm:text-base md:text-lg text-zinc-300 font-medium">The blueprint. We analyze markets, position brands, and architect the roadmap before a single pixel is pushed.</p>
            </div>
          </div>

          {/* Production */}
          <div className="group relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden bg-black border-[3px] sm:border-4 border-black hover:border-primary transition-colors duration-500 flex flex-col justify-between p-6 sm:p-8 md:p-10 cursor-default">
            {/* UPDATED: Changed lg: to xl: for grayscale/opacity logic */}
            <img src="/images/production.jpeg" alt="Cinematic Production" className="absolute inset-0 w-full h-full object-cover opacity-60 xl:opacity-40 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 group-hover:scale-110 xl:group-hover:opacity-60 transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-primary font-black opacity-80">02</span>
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">movie_filter</span>
            </div>
            <div className="relative z-10 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 sm:mb-3">Production</h3>
              <div className="w-8 sm:w-12 h-1 bg-primary mb-3 sm:mb-4 group-hover:w-full transition-all duration-700"></div>
              <p className="font-body text-sm sm:text-base md:text-lg text-zinc-300 font-medium">High-end visuals that demand attention. Cinematic video, premium photography, and editorial-grade design.</p>
            </div>
          </div>

          {/* Execution */}
          <div className="group relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden bg-black border-[3px] sm:border-4 border-black hover:border-primary transition-colors duration-500 flex flex-col justify-between p-6 sm:p-8 md:p-10 cursor-default">
            {/* UPDATED: Changed lg: to xl: for grayscale/opacity logic */}
            <img src="/images/execution.jpeg" alt="Data and Execution" className="absolute inset-0 w-full h-full object-cover opacity-60 xl:opacity-40 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 group-hover:scale-110 xl:group-hover:opacity-60 transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-primary font-black opacity-80">03</span>
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">show_chart</span>
            </div>
            <div className="relative z-10 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 sm:mb-3">Execution</h3>
              <div className="w-8 sm:w-12 h-1 bg-primary mb-3 sm:mb-4 group-hover:w-full transition-all duration-700"></div>
              <p className="font-body text-sm sm:text-base md:text-lg text-zinc-300 font-medium">Deploying the assets into the wild. Paid media, organic growth, web deployment, and ruthless performance tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIRECTOR'S NOTE ─── */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 md:mb-20">
            "GOOD CONTENT <span className="text-primary">CATCHES THE EYE.</span><br />
            GREAT CONTENT <span className="text-primary">DRIVES ACTION.</span>"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div className="font-body text-base sm:text-xl md:text-2xl font-medium leading-relaxed text-zinc-300">
              At <span className="lowercase font-sans text-white font-bold">anymediaworks</span>, every idea starts with purpose and ends with impact. We combine strategy with creativity to craft visuals and systems that not only capture attention but turn it into real growth for brands.
            </div>
            <div className="flex flex-col justify-end items-start md:items-start mt-4 md:mt-0">
              <div className="h-1 w-16 sm:w-full max-w-[100px] md:max-w-full bg-primary mb-4 sm:mb-6 md:mb-8"></div>
              <span className="font-script text-primary text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">Director's Note</span>
              <p className="text-zinc-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">— <span className="lowercase font-sans">anymediaworks</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PHILOSOPHY SECTION ─── */}
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-8 md:px-16 relative overflow-hidden bg-white">
        <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-10 sm:mb-12 md:mb-24 border-l-[6px] sm:border-l-[8px] md:border-l-[15px] border-primary pl-4 md:pl-8">
          Our Philosophy
        </h2>

        {/* Brutalist Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-black border-4 border-black">

          {/* 01. STRATEGY BEFORE EXECUTION */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-primary hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">01.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">STRATEGY BEFORE EXECUTION</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">We don’t create without direction. Every idea begins with a clear purpose and a defined outcome. No random content. No guesswork. Every move is intentional.</p>
            </div>
          </div>

          {/* 02. CONTENT THAT PERFORMS */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-black hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">02.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">CONTENT THAT PERFORMS</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">Aesthetic alone is not enough. We create visuals designed to capture attention, hold it, and convert it into measurable results. Every frame serves a function.</p>
            </div>
          </div>

          {/* 03. CREATIVITY WITH CLARITY */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-primary hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">03.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">CREATIVITY WITH CLARITY</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">We balance bold creativity with structured thinking. Our work is not just expressive — it is precise, focused, and built to communicate effectively.</p>
            </div>
          </div>

          {/* 04. CONSISTENCY BUILDS POWER */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-black hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">04.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">CONSISTENCY BUILDS POWER</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">Growth doesn’t come from one viral moment. It comes from consistent, strategic execution over time. We build systems that sustain momentum.</p>
            </div>
          </div>

          {/* 05. DETAILS DEFINE QUALITY */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-primary hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">05.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">DETAILS DEFINE QUALITY</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">From lighting to typography, every detail matters. We refine, adjust, and perfect until the final output meets the highest standard.</p>
            </div>
          </div>

          {/* 06. RESULTS OVER NOISE */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative group hover:bg-black hover:text-white transition-none h-auto min-h-[250px] sm:min-h-[350px] md:h-[450px] flex flex-col justify-between cursor-default">
            <span className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black block">06.</span>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 md:mb-4">RESULTS OVER NOISE</h3>
              <p className="font-body font-semibold opacity-80 text-sm md:text-base">We don’t chase trends — we build impact. Everything we create is measured by what it achieves, not just how it looks.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-8 md:px-16 bg-surface-container-highest">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-24">
          <h2 className="font-editorial-heading text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-0">THE <br className="hidden md:block" />TEAM</h2>
          <div className="w-1/2 md:w-1/2 h-1 bg-black mb-1 sm:mb-2 md:mb-4"></div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Team Member 1 */}
          <div className="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-sm mx-auto sm:mx-0">
            <div className="aspect-square bg-white border-[3px] sm:border-4 border-black overflow-hidden relative">
              {/* UPDATED: Changed lg: to xl: for grayscale logic */}
              <img className="w-full h-full object-cover grayscale-0 xl:grayscale brightness-110 xl:group-hover:grayscale-0 transition-all duration-[1500ms] xl:duration-300" alt="Nitish Kumar" src="/images/team1.PNG" />
            </div>
            <div className="mt-4 md:mt-6 text-center sm:text-left">
              <p className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter">NITISH KUMAR</p>
              <p className="font-body font-semibold text-primary uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">FOUNDER & Creative Director</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-sm mx-auto sm:mx-0">
            <div className="aspect-square bg-white border-[3px] sm:border-4 border-black overflow-hidden relative">
              {/* UPDATED: Changed lg: to xl: for grayscale logic */}
              <img className="w-full h-full object-cover grayscale-0 xl:grayscale brightness-110 xl:group-hover:grayscale-0 transition-all duration-[1500ms] xl:duration-300" alt="Yashoda Kumari" src="/images/team4.PNG" />
            </div>
            <div className="mt-4 md:mt-6 text-center sm:text-left">
              <p className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter">VIJAY ATISH</p>
              <p className="font-body font-semibold text-primary uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">Service Representative</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-sm mx-auto sm:mx-0">
            <div className="aspect-square bg-white border-[3px] sm:border-4 border-black overflow-hidden relative">
              {/* UPDATED: Changed lg: to xl: for grayscale logic */}
              <img className="w-full h-full object-cover grayscale-0 xl:grayscale brightness-110 xl:group-hover:grayscale-0 transition-all duration-[1500ms] xl:duration-300" alt="Pintu Kumar" src="/images/team3.PNG" />
            </div>
            <div className="mt-4 md:mt-6 text-center sm:text-left">
              <p className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter">PINTU KUMAR</p>
              <p className="font-body font-semibold text-primary uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">FULL STACK DEVELOPER</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND MANIFEST SECTION ─── */}
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-8 md:px-16 border-t-[8px] sm:border-t-[12px] md:border-t-[20px] border-black overflow-hidden group/manifest">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">
            <h2 className="font-editorial-heading text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none lg:sticky lg:top-32">
              BRAND <br className="hidden lg:block" />MANIFEST
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col space-y-16 sm:space-y-20 md:space-y-32 mt-6 md:mt-0">

            {/* 01. CONTENT MUST PERFORM */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">01</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">CONTENT MUST PERFORM.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                We don’t create for decoration. Every piece of content is built to capture attention, hold it, and drive action. If it doesn’t perform, it doesn’t belong.
              </p>
            </div>

            {/* 02. STRATEGY IS NON-NEGOTIABLE */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">02</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">STRATEGY IS NON-NEGOTIABLE.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                We don’t guess. Every decision is backed by intent, direction, and clarity. Execution without strategy is noise — we eliminate it.
              </p>
            </div>

            {/* 03. ATTENTION IS EARNED */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">03</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">ATTENTION IS EARNED.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                We design for impact, not comfort. In a world full of distractions, we create work that demands to be seen and remembered.
              </p>
            </div>

            {/* 04. SIMPLICITY IS POWER */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">04</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">SIMPLICITY IS POWER.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                We remove the unnecessary and focus on what matters. Clear ideas, sharp visuals, and strong direction — nothing more, nothing less.
              </p>
            </div>

            {/* 05. CONSISTENCY BUILDS AUTHORITY */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">05</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">CONSISTENCY BUILDS AUTHORITY.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                Growth is not accidental. It is built through disciplined execution, repeated over time. We create systems, not one-time wins.
              </p>
            </div>

            {/* 06. RESULTS DEFINE EVERYTHING */}
            <div className="relative group">
              <span className="font-editorial-heading text-[5rem] sm:text-[8rem] md:text-[10rem] font-black absolute left-0 sm:-left-6 md:-left-16 -top-8 sm:-top-12 md:-top-20 opacity-5 select-none -z-10 group-hover:text-primary transition-colors duration-500">06</span>
              <h4 className="font-editorial-heading text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter relative z-10 mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-0">RESULTS DEFINE EVERYTHING.</h4>
              <p className="font-body text-base sm:text-lg md:text-2xl font-semibold leading-relaxed border-l-4 border-black pl-4 sm:pl-6 md:pl-8 group-hover:border-primary transition-colors duration-300">
                We measure success by outcomes, not opinions. Every project is judged by what it achieves — reach, engagement, and real business growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ─── */}
      <section className="py-24 sm:py-32 md:py-32 px-4 sm:px-8 md:px-16 bg-black text-white text-center relative overflow-hidden">
        <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-[-0.05em] leading-[0.9] mb-6 sm:mb-8 md:mb-12 relative z-10">
          READY TO <br className="hidden sm:block" /> <span className="text-primary">DISRUPT?</span>
        </h2>
        <p className="font-body text-base sm:text-xl md:text-3xl font-semibold mb-10 sm:mb-12 md:mb-16 opacity-70">
          Stop blending in. Start existing.
        </p>
        <Link href="/contact" className="inline-block bg-white text-black px-6 sm:px-10 md:px-16 py-3 sm:py-4 md:py-6 font-editorial-heading font-black text-lg sm:text-xl md:text-3xl tracking-tighter hover:bg-primary hover:text-white transition-none uppercase relative z-10 flex w-max mx-auto justify-center items-center gap-2 sm:gap-3">
          INITIATE PROJECT <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
}