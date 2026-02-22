import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'Welcome to Mindwhile IT Solutions',
    subtitle: 'Best IT Technology Services you can Trust',
    description: 'The professional approach to technology.',
  },
  {
    image: hero2,
    title: 'Innovation Meets Excellence',
    subtitle: 'Cutting-edge AI & Software Solutions',
    description: 'Transforming ideas into digital reality.',
  },
  {
    image: hero3,
    title: 'Your Success, Our Mission',
    subtitle: 'Expert Team, Exceptional Results',
    description: 'Building the future of technology together.',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Enhanced Overlay for premium dark vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center pt-20">
        <div className="max-w-[750px] w-full relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative floating elements behind card */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px] animate-pulse-glow" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[50px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

              {/* Premium Glass Card */}
              <div className="p-8 md:p-10 rounded-[2rem] relative overflow-hidden bg-card/60 backdrop-blur-2xl border border-border/50 shadow-2xl hover:border-primary/30 transition-all duration-700 group">

                {/* Diagonal shine effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-40 group-hover:left-[150%] left-[-100%] transition-all duration-1000 z-0" />

                <div className="relative z-10">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary font-bold tracking-wide mb-6 shadow-sm text-sm uppercase"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    IT Solutions & Services
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/60 mb-4 leading-[1.1]"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-muted-foreground text-base md:text-lg font-medium mb-8 max-w-lg leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link to="/contact">
                      <Button className="btn-primary group text-base px-6 py-6 h-auto rounded-xl shadow-primary/30 shadow-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0">
                        Start Your Journey
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" className="text-base px-6 py-6 h-auto border border-border/50 bg-background/50 hover:bg-background/80 text-foreground shadow-lg rounded-xl font-semibold backdrop-blur-sm transition-all">
                        Explore Services
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};
