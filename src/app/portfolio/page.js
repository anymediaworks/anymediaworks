// src/app/portfolio/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects'; 

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL WORK');

  const filteredProjects = activeFilter === 'ALL WORK' 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-primary selection:text-white">

      {/* ─── HERO SECTION ─── */}
      <section className="relative px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 lg:pt-20 pb-16 sm:pb-20 md:pb-32 overflow-hidden group cursor-default bg-black">
        <Image
          src="/images/portofilohero.jpeg" 
          alt="Hero Background"
          fill 
          priority 
          className="object-cover object-center z-0 grayscale opacity-40 scale-100 transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none transition-colors duration-[1200ms] group-hover:bg-black/40"></div>

        <div className="relative mt-4 md:mt-0 flex flex-col w-full lg:w-max z-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-12 pointer-events-auto w-max">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary"></span>
            </span>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-sm">
              Case Studies & Archive
            </span>
          </div>

          <h1 className="font-editorial-heading text-[clamp(3.5rem,14vw,12rem)] leading-[0.85] font-black uppercase tracking-[-0.07em] select-none text-white group/title flex flex-col items-start pointer-events-auto">
            <span className="inline-block transform group-hover/title:-translate-y-2 group-hover/title:rotate-1 transition-all duration-500 block mb-1 md:mb-0">
              OUR
            </span>
            <span className="inline-block transform group-hover/title:translate-x-4 transition-all duration-500 block mb-3 md:mb-6">
              WORK
            </span>
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="relative z-10 text-white bg-black px-2 sm:px-3 md:px-5 pb-1 md:pb-2 inline-flex items-center gap-1 sm:gap-2 transform group-hover/title:-translate-y-2 group-hover/title:-rotate-2 transition-all duration-500 border border-white/10">
                ARCHIVE<span className="text-primary">.</span>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-primary z-0 translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 group-hover/title:translate-x-2 sm:group-hover/title:translate-x-3 group-hover/title:translate-y-2 sm:group-hover/title:translate-y-3 transition-all duration-500"></div>
            </span>
          </h1>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10 relative z-20 pointer-events-auto">
          <div className="max-w-xl border-l-2 sm:border-l-4 border-primary pl-3 sm:pl-4 md:pl-6">
            <p className="font-body text-base sm:text-lg md:text-2xl font-medium leading-relaxed text-zinc-300">
              We don't just build brands; we manifest identities. Our portfolio is a testament to visual tension, high-contrast narratives, and raw editorial precision.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC FILTER NAVIGATION (MOBILE OPTIMIZED) ─── */}
      <section className="sticky top-0 z-40 bg-zinc-50/90 backdrop-blur-xl border-b border-zinc-200">
        {/* We use padding on the wrapper and a nested container to allow the scroll to bleed to the edges nicely on mobile */}
        <div className="w-full max-w-screen-2xl mx-auto px-0 md:px-16">
          <div className="flex overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-6 sm:gap-8 md:gap-12 px-6 py-5 md:px-0 md:py-10 font-body font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            
            {['ALL WORK', 'CINEMATIC', 'DIGITAL', 'BRANDING', 'PHOTOGRAPHY', 'WEB DESIGN', 'ADVERTISING', 'SOCIAL CAMPAIGN'].map((filterName) => (
              <button 
                key={filterName}
                onClick={() => setActiveFilter(filterName)}
                /* shrink-0 is CRITICAL here so text doesn't wrap/squish inside the scrolling container */
                className={`group relative flex-shrink-0 flex items-center gap-1.5 sm:gap-2 pb-2 transition-all duration-300 ${
                  activeFilter === filterName ? 'text-black' : 'text-zinc-400 hover:text-black'
                }`}
              >
                <span className={`material-symbols-outlined text-[1.1em] sm:text-[1.2em] transform transition-transform ${activeFilter !== filterName ? 'group-hover:scale-110' : ''}`}>
                  {filterName === 'ALL WORK' ? 'grid_view' : 
                   filterName === 'CINEMATIC' ? 'movie_filter' : 
                   filterName === 'DIGITAL' ? 'devices' : 
                   filterName === 'BRANDING' ? 'diamond' :
                   filterName === 'PHOTOGRAPHY' ? 'photo_camera' :
                   filterName === 'WEB DESIGN' ? 'web' :
                   filterName === 'ADVERTISING' ? 'campaign' :
                   filterName === 'SOCIAL CAMPAIGN' ? 'share' : 
                   'label'}
                </span>
                <span className="whitespace-nowrap">{filterName}</span>
                
                <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                  activeFilter === filterName ? 'w-full bg-primary' : 'w-0 bg-black group-hover:w-full'
                }`}></div>
              </button>
            ))}
            
            {/* Added a spacer element at the end of the scroll container to ensure the last item doesn't stick directly to the right edge of the screen on mobile */}
            <div className="w-4 flex-shrink-0 md:hidden"></div>
          </div>
        </div>
      </section>

      {/* ─── UNIFORM PROJECT GRID ─── */}
      <section className="px-4 sm:px-6 md:px-16 pb-24 md:pb-48 pt-8 sm:pt-12 md:pt-20 bg-zinc-50 min-h-[50vh]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/portfolio/${project.id}`} 
              className="group block relative overflow-hidden rounded-xl aspect-square sm:aspect-[4/5] md:aspect-square bg-zinc-200 shadow-sm hover:shadow-2xl transition-shadow duration-700 animate-in fade-in zoom-in-95 duration-500"
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1500ms] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 md:via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* On mobile (default), text is always visible but shifted. On md+ screens, it hides until hover. */}
              <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex-1">
                    <span className="font-body font-bold text-primary uppercase text-[9px] sm:text-[10px] tracking-widest block mb-1 md:mb-2 drop-shadow-md">
                      {project.category} / {project.year}
                    </span>
                    <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-lg break-words">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="bg-white/20 md:bg-white/10 backdrop-blur-md rounded-full p-2.5 sm:p-3 border border-white/20 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="material-symbols-outlined relative z-10 text-white group-hover:text-black transform translate-y-0 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 ease-out text-lg sm:text-xl">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-16 md:py-20 text-center">
              <p className="font-body text-lg md:text-xl text-zinc-500">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="bg-black text-white px-4 sm:px-8 md:px-16 py-20 sm:py-24 md:py-40 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="font-editorial-heading text-[15vw] sm:text-[12vw] md:text-[8vw] font-black uppercase leading-[0.9] mb-6 md:mb-10 relative z-10">
          READY TO <br /> BE SEEN?
        </h2>
        <Link
          href="/contact"
          className="group relative overflow-hidden flex items-center gap-3 md:gap-4 bg-primary text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 font-editorial-heading font-black uppercase text-lg sm:text-xl md:text-2xl tracking-tighter hover:text-black transition-colors duration-300 z-10 border-[3px] sm:border-4 border-primary"
        >
          <span className="relative z-10">START A PROJECT</span>
          <span className="material-symbols-outlined relative z-10 text-xl sm:text-2xl md:text-3xl transform group-hover:translate-x-2 transition-transform duration-300">
            east
          </span>
          <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
        </Link>
      </section>
      
    </div>
  );
}