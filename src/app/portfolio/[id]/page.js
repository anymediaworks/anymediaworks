// src/app/portfolio/[id]/page.js
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, getProjectById } from '@/data/projects';

// HELPER: Check if the source is a video file
const isVideo = (src) => {
  return src && src.match(/\.(mp4|webm|ogg)$/i);
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | AnyMediaWorks`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

// Fully Server-Side Component (Fast & SEO optimized)
export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  // NEXT PROJECT LOGIC
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  // Determine if current and next media are videos
  const isProjectVideo = isVideo(project.heroImage || project.image);
  const isNextProjectVideo = isVideo(nextProject.heroImage || nextProject.image);

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white pb-20 md:pb-32">
      
      {/* ─── NAVIGATION AREA ─── */}
      <nav className="relative z-40 w-full px-6 sm:px-8 md:px-16 py-6 md:py-10 border-b border-zinc-100 flex items-center bg-white">
        <div className="max-w-screen-2xl mx-auto w-full">
          <Link 
            href="/portfolio" 
            className="group inline-flex items-center gap-3 text-black hover:text-primary transition-colors duration-300 w-max"
          >
            <div className="w-8 h-8 rounded-full border border-black/20 group-hover:border-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform duration-300">
                arrow_back
              </span>
            </div>
            <span className="font-body font-bold uppercase text-[10px] tracking-[0.2em] pt-0.5">
              Back to Archive
            </span>
          </Link>
        </div>
      </nav>

      {/* ─── PROJECT HERO SECTION ─── */}
      <header className="pt-12 md:pt-20 px-6 sm:px-8 md:px-16 mb-12 md:mb-20">
        <div className="max-w-screen-2xl mx-auto">
          
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="h-[1px] w-8 md:w-12 bg-primary"></span>
            <span className="font-body font-black text-primary uppercase text-[10px] md:text-xs tracking-[0.3em]">
              {project.category} — {project.year}
            </span>
          </div>

          <h1 className="font-editorial-heading text-5xl sm:text-7xl md:text-[8rem] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-[-0.05em] text-black mb-10 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 break-words">
            {project.title}<span className="text-primary">.</span>
          </h1>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-12 border-y border-zinc-100">
            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-zinc-400">
                <span className="material-symbols-outlined text-base md:text-lg group-hover:text-primary transition-colors animate-pulse">person</span>
                <span className="font-body font-bold uppercase text-[10px] tracking-widest">Client</span>
              </div>
              <p className="font-body font-semibold text-xs md:text-sm uppercase text-black break-words">{project.client || 'Internal Project'}</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-zinc-400">
                <span className="material-symbols-outlined text-base md:text-lg group-hover:text-primary transition-colors animate-pulse">layers</span>
                <span className="font-body font-bold uppercase text-[10px] tracking-widest">Role</span>
              </div>
              <p className="font-body font-semibold text-xs md:text-sm uppercase text-black break-words">{project.role || 'Full Service'}</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-zinc-400">
                <span className="material-symbols-outlined text-base md:text-lg group-hover:text-primary transition-colors animate-pulse">calendar_today</span>
                <span className="font-body font-bold uppercase text-[10px] tracking-widest">Year</span>
              </div>
              <p className="font-body font-semibold text-xs md:text-sm uppercase text-black">{project.year}</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-zinc-400">
                <span className="material-symbols-outlined text-base md:text-lg group-hover:text-primary transition-colors animate-pulse">language</span>
                <span className="font-body font-bold uppercase text-[10px] tracking-widest">Category</span>
              </div>
              <p className="font-body font-semibold text-xs md:text-sm uppercase text-black break-words">{project.category}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MAIN VISUAL (With Clean URL Modal Hack) ─── */}
      <section className="px-4 sm:px-8 md:px-16 mb-16 md:mb-32 group/hero">
        
        {/* HIDDEN CHECKBOX: This controls the modal without altering the URL */}
        <input type="checkbox" id="image-modal-toggle" className="hidden peer" />

        {/* IMAGE/VIDEO CONTAINER */}
        <div className="max-w-screen-2xl mx-auto relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden bg-zinc-900 border-8 md:border-[12px] border-black shadow-2xl rounded-sm z-10">
          
          <label 
            htmlFor="image-modal-toggle" 
            className="block w-full h-full cursor-zoom-in relative"
          >
            {/* 1. Blurred Background Layer */}
            {isProjectVideo ? (
              <video
                src={project.heroImage || project.image} 
                autoPlay loop muted playsInline
                className="absolute inset-0 -z-10 w-full h-full object-cover opacity-30 blur-3xl scale-125 pointer-events-none"
              />
            ) : (
              <Image
                src={project.heroImage || project.image} 
                alt={`${project.title} background`}
                fill
                className="object-cover -z-10 opacity-30 blur-3xl scale-125 pointer-events-none"
              />
            )}

            {/* 2. Main Uncropped Media */}
            {isProjectVideo ? (
              <video
                src={project.heroImage || project.image} 
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-[2000ms] group-hover/hero:scale-105"
              />
            ) : (
              <Image
                src={project.heroImage || project.image} 
                alt={project.title}
                fill
                priority
                className="object-contain object-center transition-transform duration-[2000ms] group-hover/hero:scale-105"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            )}
          </label>
        </div>

        {/* ─── CSS-ONLY FULLSCREEN MEDIA MODAL ─── */}
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-xl opacity-0 invisible pointer-events-none peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto transition-all duration-500">
          
          {/* Click background to close */}
          <label htmlFor="image-modal-toggle" className="absolute inset-0 cursor-zoom-out"></label>
          
          {/* Close Button */}
          <label htmlFor="image-modal-toggle" className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-primary p-3 rounded-full backdrop-blur-md transition-all duration-300 z-10 flex items-center justify-center cursor-pointer hover:scale-110">
            <span className="material-symbols-outlined text-2xl md:text-3xl leading-none block">close</span>
          </label>

          {/* The Full Size Media */}
          <div className="relative w-[95vw] h-[85vh] md:w-[90vw] md:h-[90vh] pointer-events-none drop-shadow-2xl">
            {isProjectVideo ? (
              <video
                src={project.heroImage || project.image} 
                autoPlay loop muted playsInline controls
                className="absolute inset-0 w-full h-full object-contain pointer-events-auto"
              />
            ) : (
              <Image
                src={project.heroImage || project.image} 
                alt={project.title}
                fill
                className="object-contain pointer-events-auto"
                sizes="100vw"
              />
            )}
          </div>
        </div>

      </section>

      {/* ─── CONTENT GRID ─── */}
      <section className="px-6 sm:px-8 md:px-16 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24">
        
        {/* Left Column: The Brief Title */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start mb-6 lg:mb-0">
          <h2 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
            The <br className="hidden md:block" /> <span className="text-primary italic font-serif tracking-normal md:pr-4">Brief</span>
          </h2>
          <div className="mt-6 md:mt-8 flex gap-4 overflow-hidden items-center">
             <span className="material-symbols-outlined text-primary animate-bounce">expand_more</span>
             <div className="h-[1px] flex-1 bg-zinc-200"></div>
          </div>
        </div>

        {/* Right Column: Description text */}
        <div className="lg:col-span-8">
          <p className="font-body text-xl sm:text-2xl md:text-4xl font-medium leading-[1.5] text-zinc-800 mb-10 md:mb-12">
            {project.description || "A high-contrast visual exploration designed to evoke a sense of cinematic tension and modern aesthetics."}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mt-12 md:mt-20 pt-12 md:pt-20 border-t border-zinc-100">
            <div>
              <h4 className="font-body font-black uppercase text-xs tracking-widest mb-4 md:mb-6 text-primary">Challenge</h4>
              <p className="font-body text-base md:text-lg text-zinc-500 leading-relaxed">
                Breaking through the visual noise of the current market required a raw, high-contrast narrative that didn't compromise on editorial precision.
              </p>
            </div>
            <div>
              <h4 className="font-body font-black uppercase text-xs tracking-widest mb-4 md:mb-6 text-primary">Execution</h4>
              <p className="font-body text-base md:text-lg text-zinc-500 leading-relaxed">
                We utilized modern rendering and custom-built digital components to ensure the brand felt as high-end in motion as it did in static form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC NEXT PROJECT PREVIEW ─── */}
      <footer className="mt-24 md:mt-40 px-6 sm:px-8 md:px-16 max-w-screen-2xl mx-auto">
        <Link href={`/portfolio/${nextProject.id}`} className="block">
          <div className="bg-black p-8 sm:p-12 md:p-24 rounded-2xl md:rounded-3xl overflow-hidden relative group/next cursor-pointer border-4 border-transparent hover:border-primary transition-all duration-500">
            
            {/* Background Media of the next project */}
            {/* UPDATED: Changed lg: to xl: for grayscale, and set base opacity to 40 so it's visible on iPads without hovering */}
            <div className="absolute inset-0 z-0 opacity-40 xl:opacity-20 grayscale-0 xl:grayscale transition-all duration-700 group-hover/next:scale-110 xl:group-hover/next:grayscale-0 group-hover/next:opacity-40">
                {isNextProjectVideo ? (
                  <video 
                    src={nextProject.heroImage || nextProject.image} 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={nextProject.heroImage || nextProject.image} 
                    alt={`Next Project: ${nextProject.title}`} 
                    fill 
                    className="object-cover"
                  />
                )}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="font-body font-bold text-primary uppercase text-[10px] tracking-[0.4em] mb-4 md:mb-6">
                Up Next — {nextProject.id}
              </span>
              
              <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter transition-all duration-500 group-hover/next:scale-105 break-words max-w-full">
                {nextProject.title}<span className="text-primary">.</span>
              </h2>

              <div className="mt-8 md:mt-12 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/next:bg-primary group-hover/next:border-primary">
                <span className="material-symbols-outlined text-white text-3xl md:text-4xl transform transition-transform duration-500 group-hover/next:translate-x-2">
                  east
                </span>
              </div>
            </div>
            
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
        </Link>
      </footer>

    </div>
  );
}