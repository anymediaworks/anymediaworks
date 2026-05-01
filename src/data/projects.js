// src/data/projects.js

export const projects = [
  {
    id: '01',
    slug: 'iphone-17-pro',
    title: 'iPhone 17 Pro', // Shortened slightly for grid aesthetics
    category: 'BRANDING', // Kept uppercase to match your filter buttons
    year: '2025',
    client: 'Apple Concept',
    role: 'Creative Direction & Visual Design',
    heroImage: '/images/brand3.png', // Your custom image
    description: 'The design blends fashion + technology, presenting the phone not just as a device, but as a lifestyle statement. The bold orange theme creates a high-energy, modern, and premium vibe.',
  },
  {
    id: '02',
    slug: 'luce-skincare',
    title: 'LUCE SKINCARE',
    category: 'PHOTOGRAPHY',
    year: '2026',
    client: 'Luce Skincare',
    role: 'Art Direction, Product Photography',
    heroImage: '/images/brandphotography1.png',
    description: 'Capturing the organic essence of daily skincare rituals through minimalist set design, warm earthy tones, and natural shadow play.',
  },
  {
   id: '03',
    slug: 'olivia-estate',
    title: 'OLIVIA ESTATE',
    category: 'DIGITAL',
    year: '2025',
    client: 'Olivia Estate',
    role: 'UI/UX Design, Frontend',
    heroImage: '/images/website3.jpeg',
    description: 'An elegant e-commerce experience designed for a premium, cold-pressed olive oil brand, emphasizing artisanal quality and sustainable sourcing through earthy, natural aesthetics.',
  },
  {
   id: '04',
    slug: 'evergreen-co',
    title: 'EVERGREEN & CO.',
    category: 'DIGITAL',
    year: '2024',
    client: 'Evergreen & Co.',
    role: 'UI/UX Design, Frontend',
    heroImage: '/images/website2.jpeg',
    description: 'A modern, earthy e-commerce platform designed for a sustainable apparel brand, focusing on conscious shopping, natural aesthetics, and a seamless user experience.',
  },
  {
    id: '05',
    slug: 'classic-double',
    title: 'THE CLASSIC DOUBLE',
    category: 'ADVERTISING',
    year: '2024',
    client: 'Burger Restaurant',
    role: 'Graphic Design, Art Direction',
    heroImage: '/images/brand4.jpeg',
    description: 'A vibrant, mouth-watering advertising graphic designed to showcase a perfectly stacked double beef burger, emphasizing fresh ingredients and bold flavors.',
  },
  {
    id: '06',
    slug: 'wedding-shots',
    title: 'WEDDING SHOTS',
    category: 'LIVE EVENTS',
    year: '2026',
    client: 'Private Clients',
    role: 'Event Coverage & Photography',
    heroImage: '/images/event_weddingshots.PNG', // Using the first image for the main grid cover
    gallery: ["/images/event_weddingshots.PNG"], // Stored the rest in a gallery array for the detail page
    description: 'Comprehensive live event coverage spanning weddings, birthdays, and baby showers. We focus on capturing authentic emotions and candid moments with a high-end cinematic and editorial touch.',
  },
   {
    id: '07',
    slug: 'birthday-photography',
    title: 'BIRTHDAY PHOTOGRAPHY',
    category: 'LIVE EVENTS',
    year: '2026',
    client: 'Private Clients',
    role: 'Event Coverage & Photography',
    heroImage: '/images/event_birthdayparty.PNG', // Using the first image for the main grid cover
    gallery: ["/images/event_birthdayparty.PNG" ], // Stored the rest in a gallery array for the detail page
    description: 'Comprehensive live event coverage spanning weddings, birthdays, and baby showers. We focus on capturing authentic emotions and candid moments with a high-end cinematic and editorial touch.',
  },
   {
    id: '08',
    slug: 'baby-shower-photoshoot',
    title: 'BABY SHOWER PHOTOSHOOT',
    category: 'LIVE EVENTS',
    year: '2026',
    client: 'Private Clients',
    role: 'Event Coverage & Photography',
    heroImage: '/images/event_babeshower.PNG', // Using the first image for the main grid cover
    gallery: ["/images/event_babeshower.PNG"], // Stored the rest in a gallery array for the detail page
    description: 'Comprehensive live event coverage spanning weddings, birthdays, and baby showers. We focus on capturing authentic emotions and candid moments with a high-end cinematic and editorial touch.',
  },

   {
    id: '09',
    slug: 'vertical-reels-collection',
    title: 'SHORT-FORM REELS',
    category: 'CINEMATIC',
    year: '2026',
    client: 'Various Brands',
    role: 'Video Editing & Motion Graphics',
    heroImage: '/videos/reel1.mp4', // Using the first video as the hero cover
    gallery: ["/videos/reel1.mp4"], // Stores all videos so you can loop/display them on the detail page
    description: 'A high-impact collection of short-form vertical reels engineered for maximum audience retention and social media engagement. Built for speed, attention, and visual dominance.',
  },

  {
    id: '10',
    slug: 'vertical-reels-collection',
    title: 'SHORT-FORM REELS',
    category: 'CINEMATIC',
    year: '2026',
    client: 'Various Brands',
    role: 'Video Editing & Motion Graphics',
    heroImage: '/videos/reel2.mp4', // Using the first video as the hero cover
    gallery: ["/videos/reel2.mp4"], // Stores all videos so you can loop/display them on the detail page
    description: 'A high-impact collection of short-form vertical reels engineered for maximum audience retention and social media engagement. Built for speed, attention, and visual dominance.',
  },

  {
    id: '11',
    slug: 'vertical-reels-collection',
    title: 'SHORT-FORM REELS',
    category: 'CINEMATIC',
    year: '2026',
    client: 'Various Brands',
    role: 'Video Editing & Motion Graphics',
    heroImage: '/videos/reel3.mp4', // Using the first video as the hero cover
    gallery: ["/videos/reel3.mp4"], // Stores all videos so you can loop/display them on the detail page
    description: 'A high-impact collection of short-form vertical reels engineered for maximum audience retention and social media engagement. Built for speed, attention, and visual dominance.',
  },

];

// Helper function to get a single project
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};