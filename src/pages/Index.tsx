import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Hero } from '@/components/home/Hero';
import { ClientLogos } from '@/components/home/ClientLogos';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import { ProcessSection } from '@/components/home/ProcessSection';
import { MarqueeServices } from '@/components/home/MarqueeServices';

import { StatsCounter } from '@/components/home/StatsCounter';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FaqSection } from '@/components/home/FaqSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingActionButton />
      <main>
        <Hero />
        <ClientLogos />
        <IndustrySolutions />
        <ProcessSection />
        <MarqueeServices />
        <WhyChooseUs />

        <StatsCounter />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
