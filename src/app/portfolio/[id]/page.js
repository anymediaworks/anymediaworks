import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, getProjectById } from '@/data/projects';

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

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  // NEXT PROJECT LOGIC
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white pb-20 md:pb-32">
      
      {/* ─── NAVIGATION AREA (Fixed visibility issue) ─── */}
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

      {/* ─── MAIN VISUAL (Fixed mobile height issue) ─── */}
      <section className="px-4 sm:px-8 md:px-16 mb-16 md:mb-32 group/hero">
        <div className="max-w-screen-2xl mx-auto relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-0 md:aspect-[21/9] overflow-hidden bg-zinc-100 border-8 md:border-[12px] border-black shadow-2xl rounded-sm">
          <Image
            src={project.heroImage || project.image || "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2000"} 
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] group-hover/hero:scale-105 md:group-hover/hero:scale-110"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          {/* Subtle Branded Overlay */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
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
            
            {/* Background Image of the next project (Ghosted/Faded) */}
            {/* UPDATED: grayscale-0 on mobile/tablet, grayscale on lg (desktop) */}
            <div className="absolute inset-0 z-0 opacity-20 grayscale-0 lg:grayscale transition-all duration-700 group-hover/next:scale-110 lg:group-hover/next:grayscale-0 group-hover/next:opacity-40">
                <Image 
                    src={nextProject.heroImage || nextProject.image || "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2000"} 
                    alt={`Next Project: ${nextProject.title}`} 
                    fill 
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="font-body font-bold text-primary uppercase text-[10px] tracking-[0.4em] mb-4 md:mb-6">
                Up Next — {nextProject.id}
              </span>
              
              <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter transition-all duration-500 group-hover/next:scale-105 break-words max-w-full">
                {nextProject.title}<span className="text-primary">.</span>
              </h2>

              {/* Animated Arrow Icon */}
              <div className="mt-8 md:mt-12 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/next:bg-primary group-hover/next:border-primary">
                <span className="material-symbols-outlined text-white text-3xl md:text-4xl transform transition-transform duration-500 group-hover/next:translate-x-2">
                  east
                </span>
              </div>
            </div>
            
            {/* Texture/Noise overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
        </Link>
      </footer>

    </div>
  );
}