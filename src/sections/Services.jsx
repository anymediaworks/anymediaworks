import Image from 'next/image';

export default function Services() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-16 sm:py-24 lg:py-32 bg-white selection:bg-primary/20 overflow-hidden">
      
      {/* ─── HEADER SECTION ─── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-32 gap-12 lg:gap-8">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs sm:text-sm md:text-base">
              Our Expertise
            </span>
          </div>
          <h2 className="font-editorial-heading text-[clamp(3.2rem,8vw,9rem)] leading-[0.9] font-black tracking-tighter text-black">
            What We <span className="font-script font-light tracking-normal lowercase text-primary pb-2">do</span>
          </h2>
        </div>
        
        {/* Right Aligned Paragraph */}
        <div className="relative pb-10 sm:pb-16 self-start lg:self-end lg:text-right z-10 w-full lg:w-auto mt-4 lg:mt-0">
          <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-md leading-relaxed text-gray-700">
            Built to make brands{" "}
          </p>
          <span className="font-script text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl absolute bottom-0 left-0 lg:left-auto lg:-bottom-8 lg:-right-4 transform lg:-rotate-2 drop-shadow-sm">
            unforgettable
          </span>
        </div>
      </div>

      {/* ─── POSITIONING SECTION ─── */}
      <div className="mb-20 lg:mb-32 flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 max-w-5xl">
        <div className="hidden md:block w-1.5 bg-gradient-to-b from-primary to-primary/10 rounded-full"></div>
        <div className="border-l-4 border-primary md:border-none pl-6 md:pl-0">
          <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            We Don’t Just Create — <br className="hidden md:block" />
            <span className="text-primary">We Build Growth Systems</span>
          </h3>
          <div className="space-y-4 max-w-2xl">
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Most agencies focus on design or content alone. We combine <strong className="text-gray-900 font-bold">strategy, content, and marketing</strong> to help you attract attention, build trust, and convert customers.
            </p>
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed italic font-medium">
              From idea to execution — everything works together.
            </p>
          </div>
        </div>
      </div>

      {/* ─── BENTO GRID SECTION ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-[280px] sm:auto-rows-[300px] lg:auto-rows-[320px]">
        
        {/* 1. Content Creation */}
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/content_creation.jpeg" 
            alt="Content creation by Anymediaworks" 
            fill
            className="object-cover opacity-70 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-105 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 xl:group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-4 xl:group-hover:translate-y-0 transition-transform duration-700 ease-out">
              <h3 className="font-editorial-heading text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-2 sm:mb-4 leading-none">
                <span className="text-white block pb-1">Content</span>
                <span className="text-primary block pb-1">Creation</span>
              </h3>
              <p className="text-white/90 font-body text-sm sm:text-base lg:text-xl max-w-md opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-700 delay-100 mt-2">
                Editorial grade digital storytelling to capture and hold attention.
              </p>
            </div>
          </div>
        </div>

        {/* 2. UI/UX Design */}
        <div className="col-span-1 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/ui-ux.jpeg" 
            alt="UI/UX Design by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-110 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-2 xl:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-wide break-words leading-none">
                <span className="text-white block pb-1">UI/UX</span>
                <span className="text-primary block pb-1">Design</span>
              </h3>
            </div>
          </div>
        </div>

        {/* 3. Photography */}
        <div className="col-span-1 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/photography-home.jpeg" 
            alt="Photography by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-110 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-2 xl:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-wide break-words leading-none">
                <span className="text-white block pb-1">Brand</span>
                <span className="text-primary block pb-1">Photography</span>
              </h3>
            </div>
          </div>
        </div>

        {/* 4. Web & Mobile Dev */}
        <div className="md:col-span-2 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/web and mobile.jpeg" 
            alt="Web & Mobile Development by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-105 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-4 xl:group-hover:translate-y-0 transition-transform duration-700 ease-out">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 leading-none">
                <span className="text-white block pb-1">Web & Mobile</span>
                <span className="text-primary block pb-1">Development</span>
              </h3>
              <p className="text-white/90 font-body text-sm sm:text-base opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-700 delay-100 mt-2">
                High-performance platforms engineered for scale and aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Cinematography */}
        <div className="col-span-1 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/cinematography.jpeg" 
            alt="Cinematography by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-110 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-2 xl:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-wide break-words leading-none">
                <span className="text-white block pb-1">Film &</span>
                <span className="text-primary block pb-1">Cinematography</span>
              </h3>
            </div>
          </div>
        </div>

        {/* 6. Video Editing */}
        <div className="col-span-1 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/videoediting-home.jpeg" 
            alt="Video Editing by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-110 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-2 xl:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-wide break-words leading-none">
                <span className="text-white block pb-1">Video</span>
                <span className="text-primary block pb-1">Editing</span>
              </h3>
            </div>
          </div>
        </div>

        {/* 7. Digital Strategy / SEO */}
        <div className="md:col-span-2 group relative overflow-hidden bg-black rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/seo-digitalmarketing.jpeg" 
            alt="Digital Strategy & Marketing by Anymediaworks" 
            fill
            className="object-cover opacity-60 grayscale-0 xl:grayscale xl:group-hover:grayscale-0 scale-100 xl:group-hover:scale-105 transition-all duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
            <div className="transform translate-y-0 xl:translate-y-4 xl:group-hover:translate-y-0 transition-transform duration-700 ease-out">
              <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 leading-none">
                <span className="text-white block pb-1">Digital Strategy</span>
                <span className="text-primary block pb-1">& SEO</span>
              </h3>
              <p className="text-white/90 font-body text-sm sm:text-base opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-700 delay-100 mt-2">
                Data-driven marketing to dominate your niche.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}