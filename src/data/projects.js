// src/data/projects.js

export const projects = [
  {
    id: '01',
    slug: 'iphone-17-pro',
    title: 'iPhone 17 Pro', // Shortened slightly for grid aesthetics
    category: 'CINEMATIC', // Kept uppercase to match your filter buttons
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
    category: 'WEB DESIGN',
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
    category: 'WEB DESIGN',
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
    slug: 'evergreen-social-campaign',
    title: 'EVERGREEN CO.',
    category: 'LIVE EVENTS',
    year: '2024',
    client: 'EverGreen Co.',
    role: 'Art Direction, Campaign Strategy',
    heroImage: '/images/campaign1.jpeg',
    description: 'A multi-part social media campaign promoting sustainable living, community engagement, and eco-friendly daily swaps to inspire impactful environmental change.',
  },
];

// Helper function to get a single project
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};