export const servicesData = [
  {
    slug: "video-editing",
    title: "Video Editing (Reels, Ads)",
    description: "High-retention editing designed for the modern social landscape. We craft pacing, sound design, and visual hooks that keep viewers engaged from the first frame to the last.",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000",
    features: ["Short-form content (Reels/TikToks)", "Direct Response Ads", "Color Grading", "Sound Design"]
  },
  {
    slug: "cinematography",
    title: "Cinematography",
    description: "Industry-standard camera work and lighting to give your brand a premium, cinematic feel. We treat every frame like a painting.",
    heroImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000",
    features: ["Commercial Shoots", "Brand Documentaries", "Lighting Design", "Multi-cam setups"]
  },
  {
    slug: "ad-creatives",
    title: "Ad Creatives & Content",
    description: "Data-driven creatives built to convert. We conceptualize, script, and produce ads that stop the scroll and drive action.",
    heroImage: "/images/service-ad.jpeg",
    features: ["A/B Testing Variants", "Scriptwriting", "UGC Production", "Creative Strategy"]
  }
];

export function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug);
}