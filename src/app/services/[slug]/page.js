import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData, getServiceBySlug } from '@/data/services'; // Adjust import path as needed

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | AnyMediaWorks`,
    description: service.description,
  };
}

// 2. Generate Static Routes for faster loading
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 3. The Page Component
export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  // If URL slug doesn't exist in our data, show 404
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white pb-20 md:pb-32">
      
      {/* Navigation Bar */}
      <nav className="relative z-40 w-full px-6 sm:px-8 md:px-16 py-6 md:py-10 border-b border-zinc-100 flex items-center bg-white">
        <div className="max-w-screen-2xl mx-auto w-full">
          {/* Ensure this href points back to your main services page if needed */}
          <Link href="/services" className="group inline-flex items-center gap-3 text-black hover:text-primary transition-colors duration-300 w-max">
            <div className="w-8 h-8 rounded-full border border-black/20 group-hover:border-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform duration-300">
                arrow_back
              </span>
            </div>
            <span className="font-body font-bold uppercase text-[10px] tracking-[0.2em] pt-0.5">
              Back to Services
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-12 md:pt-20 px-6 sm:px-8 md:px-16 mb-12 md:mb-20 max-w-screen-2xl mx-auto">
        <h1 className="font-editorial-heading text-5xl sm:text-7xl md:text-[7rem] leading-[0.9] font-black uppercase tracking-[-0.05em] text-black mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 break-words">
          {service.title}<span className="text-primary">.</span>
        </h1>
        <p className="font-body text-xl md:text-3xl font-medium leading-[1.5] text-zinc-600 max-w-4xl">
          {service.description}
        </p>
      </header>

      {/* Main Visual */}
      <section className="px-4 sm:px-8 md:px-16 mb-16 md:mb-24">
        {/* ADDED: 'group' class to the container to enable hover effects */}
        <div className="group max-w-screen-2xl mx-auto relative w-full min-h-[50vh] md:aspect-[21/9] overflow-hidden bg-zinc-100 border-8 md:border-[12px] border-black rounded-sm shadow-2xl">
          <Image
            src={service.heroImage} 
            alt={service.title}
            fill
            priority
            /* UPDATED: Forced grayscale-0 for iPads, xl:grayscale for desktop hover effect */
            className="object-cover grayscale-0 xl:grayscale transition-all duration-[1500ms] group-hover:scale-105 xl:group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none transition-opacity duration-[1500ms] group-hover:opacity-0"></div>
        </div>
      </section>

      {/* Features/Deliverables List */}
      <section className="px-6 sm:px-8 md:px-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-100 pt-16 md:pt-24">
        <div>
          <h2 className="font-editorial-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-8">
            What We <span className="text-primary italic font-serif">Deliver</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <p className="font-body text-lg font-medium text-zinc-800">{feature}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}