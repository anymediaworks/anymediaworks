"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

// Helper function to check if the source is a video
const isVideo = (src) => {
  return src.match(/\.(mp4|webm|ogg)$/i);
};

// Reusable Carousel Component for the Bento Grid
const CarouselCard = ({ images, titlePre, titleHighlight, subtitle, tags, icon, isPortrait = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Refs to control video playback manually
  const videoRefs = useRef([]);

  const nextSlide = useCallback((e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = (e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleCardClick = () => {
    if (icon === "play_arrow") {
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play logic
  useEffect(() => {
    let interval;
    // Only auto-slide if we aren't in "Playing" mode
    if (isHovered && images.length > 1 && !isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, images.length, isPlaying]);

  // Handle Video Play/Pause based on isPlaying state and currentIndex
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (isPlaying && index === currentIndex) {
        // We are in "play" mode, and this is the active slide, so play it
        video.play().catch(e => console.log("Video auto-play prevented:", e));
      } else {
        // Pause all other videos, or if we exited "play" mode
        video.pause();
        // Optional: Reset video to start when navigating away
        if (index !== currentIndex) {
          video.currentTime = 0;
        }
      }
    });
  }, [isPlaying, currentIndex]);

  return (
    <div 
      className="group relative overflow-hidden bg-zinc-900 rounded-xl lg:rounded-2xl cursor-pointer border border-white/10 h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      
      {/* ─── CAROUSEL MEDIA (Images or Videos) ─── */}
      {images.map((src, index) => {
        const isVid = isVideo(src);
        const isActive = index === currentIndex;
        
        return (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            {isVid ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={src}
                muted // Muted by default to allow auto-play/preview. Change if you want audio on click.
                loop
                playsInline
                className={`w-full h-full object-cover transition-all duration-1000 ease-out transform 
                  ${isPlaying 
                    ? 'grayscale-0 brightness-100 scale-100' 
                    : 'grayscale-0 brightness-95 md:grayscale md:brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105' 
                  }`}
              />
            ) : (
              <Image 
                src={src}
                alt={`${titlePre} ${titleHighlight} - slide ${index + 1}`}
                fill
                className={`object-cover transition-all duration-1000 ease-out transform 
                  ${isPlaying 
                    ? 'grayscale-0 brightness-100 scale-100' 
                    : 'grayscale-0 brightness-95 md:grayscale md:brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105' 
                  }`} 
              />
            )}
          </div>
        );
      })}

      {/* ─── UI ELEMENTS TO HIDE WHEN PLAYING ─── */}
      <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Top Tag (White Pill, Black Text) */}
        {tags && (
          <div className={`absolute left-5 bg-white text-black px-4 py-1.5 rounded-full font-editorial-heading tracking-widest font-black z-30 pointer-events-auto shadow-md ${isPortrait ? 'top-6 text-xs' : 'top-5 text-[10px]'}`}>
            {tags}
          </div>
        )}
        
        {/* Play Icon (Centered, large transparent circle) */}
        {icon && (
          <div className={`absolute z-30 transition-all duration-500 pointer-events-auto
            ${isPortrait 
              ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-105' 
              : 'top-6 right-6 group-hover:scale-110'
            }`}
          >
             <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 md:p-6 flex items-center justify-center border border-white/20 shadow-xl">
               <span className={`material-symbols-outlined text-white drop-shadow-md ${isPortrait ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                 {icon}
               </span>
             </div>
          </div>
        )}

        {/* ─── NAVIGATION OVERLAY ─── */}
        {images.length > 1 && (
          <div className="absolute top-5 right-5 z-50 flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 md:translate-x-4 group-hover:translate-x-0 pointer-events-auto">
            <button 
              onClick={prevSlide}
              className="flex items-center justify-center font-body text-[10px] font-bold tracking-wider text-white hover:text-black transition-colors bg-white/30 hover:bg-white backdrop-blur-md p-1.5 md:px-3 md:py-1.5 rounded-full border border-white/40 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm md:hidden leading-none">chevron_left</span>
              <span className="hidden md:block">Prev</span>
            </button>
            <button 
              onClick={nextSlide}
              className="flex items-center justify-center font-body text-[10px] font-bold tracking-wider text-white hover:text-black transition-colors bg-white/30 hover:bg-white backdrop-blur-md p-1.5 md:px-3 md:py-1.5 rounded-full border border-white/40 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm md:hidden leading-none">chevron_right</span>
              <span className="hidden md:block">Next</span>
            </button>
          </div>
        )}

        {/* ─── BOTTOM GRADIENT & TEXT CONTENT ─── */}
        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end z-20 h-3/4 pointer-events-none ${isPortrait ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
          
          <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col justify-end pointer-events-none
            ${subtitle ? 'translate-y-0 md:translate-y-14 group-hover:translate-y-0' : 'translate-y-0 md:translate-y-4 group-hover:translate-y-0'}
          `}>
            
            <h3 className={`font-editorial-heading font-black transition-colors duration-300 drop-shadow-md m-0 leading-none tracking-tight
              ${isPortrait ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}
            `}>
              <span className="text-white block">{titlePre}</span>
              {titleHighlight && <span className="text-primary block">{titleHighlight}</span>}
            </h3>
            
            {/* Hidden entirely on mobile, visible only on hover for desktop */}
            {subtitle && (
              <p className={`hidden md:block font-body text-sm sm:text-base text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-sm mt-3`}>
                {subtitle}
              </p>
            )}

            {/* Show progress dots by default on mobile, hide and rely on hover for desktop */}
            {images.length > 1 && !isPlaying && (
              <div className="mt-5 flex gap-2 h-[3px] w-full bg-transparent overflow-hidden opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-full flex-1 rounded-full transition-colors duration-500 ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default function Work() {
  
  const photographyImages = ["/images/brandphotography3.jpeg", "/images/brandphotography2.jpeg", "/images/brandphotography1.png"];
  const webImages = ["/images/website1.jpeg", "/images/website2.jpeg", "/images/website3.jpeg", "/images/website4.jpeg"];
  const brandFilmImages = ["/images/brand4.jpeg", "/images/brand3.png", "/images/brand2.png", "/images/brand1.png"];
  
  // Mixed or video arrays now work flawlessly
  const verticalReelImages = ["/videos/adsreels1.mp4", "/videos/adsreels2.mp4", "/videos/adsreels3.mp4"];
  const socialCampaignImages = ["/images/campaign1.jpeg", "/images/campaign2.jpeg"]; 

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 py-24 sm:py-32 md:py-32">
      
      {/* ─── HEADER ─── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
        <div>
          <h2 className="font-editorial-heading text-5xl sm:text-6xl md:text-[5.5rem] lg:text-8xl font-black tracking-tighter leading-none">
            Work in Motion
          </h2>
        </div>
        
        <div className="text-left md:text-right hidden sm:block">
          <p className="font-body font-semibold text-white/50 tracking-widest text-sm uppercase mb-1">Featured Projects</p>
          <p className="font-editorial-heading text-xl sm:text-2xl font-black">COLLECTION '26</p>
        </div>
      </div>
      
      {/* ─── PREMIUM BENTO GRID ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[350px] lg:auto-rows-[380px]">
        
        {/* Box 1: Square Block */}
        <div className="col-span-1 lg:col-span-1 lg:row-span-1">
          <CarouselCard 
            images={photographyImages}
            titlePre="Brand"
            titleHighlight="Photography"
            subtitle="High-end visuals for modern brands"
            tags="PHOTOS"
          />
        </div>

        {/* Box 2: Square Block */}
        <div className="col-span-1 lg:col-span-1 lg:row-span-1">
          <CarouselCard 
            images={webImages}
            titlePre="Web"
            titleHighlight="Experiences"
            subtitle="Fast, scalable & conversion-focused"
            tags="PLATFORM"
          />
        </div>

        {/* Box 3: Portrait Block (Vertical Reels - MP4 Video Support Added) */}
        <div className="md:col-span-1 lg:col-span-1 lg:row-span-2">
          <CarouselCard 
            images={verticalReelImages}
            titlePre="Short-Form"
            titleHighlight="Reels"
            subtitle="Built for attention & engagement"
            tags="VERTICAL REEL"
            icon="play_arrow"
            isPortrait={true}
          />
        </div>

        {/* Box 4: Portrait Block */}
        <div className="md:col-span-1 lg:col-span-1 lg:row-span-2">
           <CarouselCard 
            images={socialCampaignImages}
            titlePre="Live"
            titleHighlight="Events"
            subtitle="Data-driven viral mechanics"
            tags="LIVE EVENTS"
            icon="play_arrow"
            isPortrait={true}
          />
        </div>

        {/* Box 5: Wide Horizontal Block */}
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
           <CarouselCard 
            images={brandFilmImages}
            titlePre="Brand"
            titleHighlight="Films"
            subtitle="Stories that sell, not just look good"
            tags="COMMERCIAL FILM"
            isPortrait={false} 
          />
        </div>

      </div>
    </section>
  );
}