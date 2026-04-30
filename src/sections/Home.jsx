'use client';

import { useState, useRef } from 'react';

export default function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-black text-white px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 flex flex-col gap-16 md:gap-24 overflow-hidden cursor-default"
    >
      
      {/* ─── DYNAMIC PRIMARY COLOR CURSOR GLOW ─── */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          // Replaced the white gradient with your primary-rgb variable
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`
        }}
      />

      {/* ─── AMBIENT BACKGROUND EFFECTS ─── */}
      {/* Top left primary color glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100"></div>
      
      {/* Bottom right subtle dark glow that transitions to primary on hover */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-gray-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse transition-all duration-1000 ease-out group-hover:scale-110 group-hover:bg-primary/20 group-hover:opacity-80" style={{ animationDelay: '2s' }}></div>

      {/* ─── TEXT LAYOUT ─── */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left: Heading */}
        <div className="lg:w-1/3">
          <h2 className="
            font-editorial-heading font-black tracking-tight 
            text-3xl sm:text-4xl lg:text-[40px]
            border-b-4 border-primary inline-block pb-2
            transition-transform duration-700 ease-out group-hover:translate-x-2
          ">
            We are <span className="lowercase font-sans transition-colors duration-500 group-hover:text-primary">anymediaworks</span>
          </h2>
        </div>

        {/* Right: Paragraph */}
        <div className="lg:w-2/3 flex flex-col justify-center">
          <p className="
            font-body font-semibold leading-tight max-w-4xl
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            transition-all duration-700 text-white/90 group-hover:text-white
          ">
            We build <span className="text-primary italic group-hover:drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.8)] transition-all duration-500">digital experiences</span> that help brands stand out and succeed. We combine strong engineering with beautiful design to create platforms your audience will love.
          </p>
          
          {/* Animated Line that expands on hover with an added primary glow */}
          <div className="mt-10 sm:mt-12 md:mt-16 h-1 w-24 md:w-32 bg-primary transition-all duration-700 ease-out group-hover:w-full lg:group-hover:w-3/4 opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]"></div>
        </div>
      </div>

    </section>
  );
}