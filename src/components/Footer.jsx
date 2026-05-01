import Link from 'next/link';

export default function Footer() {
  // Social link data with clean SVG icons
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/anymediaworks?igsh=NGI3bG5qeXd5Zm9m',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://x.com/anymediaworks?fbclid=PAb21jcARh3ZZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad297U42D4wgOMgHpddfL3Wv6_pkD0ffyZrGE2u1Bj7JKEi5VQwYuofXkCzsA_aem_cOZR57hYie7xj3poBZ8Y6A',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black flex flex-col items-start w-full px-6 sm:px-8 md:px-16 py-12 md:py-20 gap-10 md:gap-12 transition-colors duration-300">
      
      {/* ─── TOP SECTION ─── */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        
        {/* Brand & Tagline Wrapper */}
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="text-3xl md:text-2xl font-black tracking-tighter lowercase select-none">
            anymediaworks 
          </div>
          <p className="text-white/70 dark:text-black/70 font-body text-sm sm:text-base max-w-xs md:max-w-sm">
            Content Strategy Partner
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
          {socialLinks.map((social) => (
            <Link 
              key={social.name}
              href={social.href}
              className="group flex items-center gap-2 font-body font-semibold text-sm sm:text-base leading-relaxed text-white/80 dark:text-black/80 hover:text-primary dark:hover:text-primary transition-colors duration-300 ease-out"
            >
              <span className="opacity-80 group-hover:opacity-100 group-hover:-translate-y-[2px] transition-all duration-300">
                {social.icon}
              </span>
              <span>{social.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ─── BOTTOM SECTION ─── */}
      <div className="w-full border-t border-white/10 dark:border-black/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-col gap-2 md:gap-0 text-sm sm:text-base">
          <p className="font-body font-semibold leading-relaxed text-white/80 dark:text-black/80">
            © {new Date().getFullYear()} anymediaworks. All rights reserved.
          </p>
          <a href="mailto:hello@anymediaworks.com" className="font-body font-semibold text-white/50 dark:text-black/50 hover:text-white dark:hover:text-black transition-colors duration-300 md:mt-2 inline-block">
            anymediaworks@gmail.com
          </a>
        </div>
        
        {/* Adjusted rotation origin for better mobile flow */}
        <div className="font-script text-primary text-3xl sm:text-4xl -rotate-3 sm:-rotate-6 origin-left md:origin-bottom-right mt-4 md:mt-0">
          Creative Supremacy.
        </div>
      </div>
      
    </footer>
  );
}