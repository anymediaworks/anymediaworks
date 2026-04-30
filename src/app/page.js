// 
import Hero from '@/components/Hero';
import HomeSection from '@/sections/Home'; // Assuming your 'About/Growth/Process' sections go here
import Services from '@/sections/Services';
import Work from '@/sections/Work';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSection /> {/* Your About Section */}
      <Services />
      <Work />
      {/* Include Growth & Process here or inside HomeSection */}
      {/* <Testimonials /> */}
    </>
  );
}