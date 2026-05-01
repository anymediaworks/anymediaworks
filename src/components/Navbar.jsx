"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',      label: 'Home',     icon: 'home' },
  { href: '/about',     label: 'About',    icon: 'visibility' },
  { href: '/services',  label: 'Services', icon: 'bolt' },
  { href: '/portfolio', label: 'Work',     icon: 'grid_view' },
  { href: '/contact',   label: 'Contact',  icon: 'mail' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized Scroll Listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Optimized Resize Listener
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => { 
    setMenuOpen(false); 
  }, [pathname]);

  return (
    <>
      {/* ─── HEADER ─── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-[100] w-full
          flex justify-between items-center
          px-6 md:px-12 lg:px-16
          py-5 sm:py-6 md:py-8
          transition-all duration-500
          ${scrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-black/5 dark:border-white/5 py-4 sm:py-4 md:py-5' 
            : 'bg-white dark:bg-black'
          }
        `}
      >
        {/* ─── LOGO ─── */}
        <Link
          href="/"
          // FIX: Added 'relative' so z-50 actually works properly
          className="group relative flex items-center gap-1 sm:gap-2 text-2xl sm:text-3xl font-black tracking-tight lowercase select-none z-50"
        >
          <span className="relative inline-grid overflow-hidden pt-1 pb-1">
            <span className="col-start-1 row-start-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[120%] text-black dark:text-white">
              anymediaworks
            </span>
            <span className="col-start-1 row-start-1 translate-y-[120%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 text-primary">
              anymediaworks
            </span>
          </span>
          
          <span className="material-symbols-outlined text-primary opacity-0 transform rotate-[-90deg] -translate-x-4 group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            change_history
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 lg:gap-12 items-center">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  group relative flex items-center gap-2 py-2
                  font-editorial-heading font-black uppercase tracking-tight leading-tight
                  transition-colors duration-300
                  ${isActive ? 'text-primary' : 'text-black dark:text-white hover:text-primary'}
                `}
              >
                <span className="material-symbols-outlined text-[1.1rem] transform group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300 ease-out">
                  {icon}
                </span>
                <span className="relative z-10">{label}</span>
                {isActive ? (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary"></span>
                ) : (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-out"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile & Tablet Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          // FIX: Added 'relative' so z-50 functions. 
          className="group relative lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-50 focus:outline-none"
        >
          {/* FIX: Added pointer-events-none to the spans so touches don't misfire on iOS */}
          <span className={`pointer-events-none block h-[3px] w-7 bg-black dark:bg-white group-hover:bg-primary rounded transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
          <span className={`pointer-events-none block h-[3px] w-7 bg-black dark:bg-white group-hover:bg-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`} />
          <span className={`pointer-events-none block h-[3px] w-7 bg-black dark:bg-white group-hover:bg-primary rounded transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
        </button>
      </header>

      {/* ─── PREMIUM MOBILE/TABLET MENU OVERLAY ─── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`
          fixed inset-0 z-[90] lg:hidden
          bg-white dark:bg-black
          /* FIX: Changed justify-center to pt-32 + overflow-y-auto so top links never hide under the header */
          flex flex-col justify-start items-start pt-32 pb-12 pl-10 sm:pl-20 overflow-y-auto
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}
        `}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

        <nav className="flex flex-col items-start gap-8 relative z-10 w-full">
          {navLinks.map(({ href, label, icon }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                // FIX: Explicitly close the menu on click, handling "same route" clicks perfectly.
                onClick={() => setMenuOpen(false)} 
                aria-current={isActive ? 'page' : undefined}
                style={{ transitionDelay: menuOpen ? `${i * 100}ms` : '0ms' }}
                className={`
                  group flex items-center gap-4
                  font-editorial-heading font-black uppercase tracking-tight leading-tight
                  text-5xl sm:text-7xl
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${isActive ? 'text-primary' : 'text-black dark:text-white hover:text-primary'}
                `}
              >
                <span className="material-symbols-outlined text-[0.8em] opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300">
                  {icon}
                </span>
                
                <span className="relative pb-2">
                  {label}
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 w-full h-[5px] bg-primary"></span>
                  ) : (
                    <span className="absolute bottom-0 left-0 w-full h-[5px] bg-primary origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-out"></span>
                  )}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-[72px] sm:h-[80px] md:h-[96px] bg-transparent" aria-hidden="true" />
    </>
  );
}