import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSlider } from '@/components/home/HeroSlider';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import { AboutIntro } from '@/components/home/AboutIntro';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SuccessSection } from '@/components/home/SuccessSection';
import { StatsCounter } from '@/components/home/StatsCounter';
import { ContactSection } from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <IndustrySolutions />
        <AboutIntro />
        <ServicesSection />
        <SuccessSection />
        <StatsCounter />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
