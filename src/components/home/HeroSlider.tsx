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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center pt-20">
        <div className="max-w-[700px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Glass Card */}
              <div className="p-8 md:p-10 rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-2xl bg-slate-900/80 dark:bg-slate-900/85 transform transition-all duration-700 hover:shadow-primary/20">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white font-semibold tracking-wide mb-5 shadow-sm text-sm"
                >
                  IT Solutions & Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-black text-white mb-4 leading-[1.1] drop-shadow-md"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-3xl font-semibold mb-5 text-primary drop-shadow"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-white/90 text-lg font-medium mb-8 max-w-lg leading-relaxed"
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
                    <Button className="btn-primary group text-base px-6 py-6 h-auto rounded-2xl shadow-primary/30 shadow-lg font-semibold bg-primary hover:bg-primary/90 text-white">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="btn-secondary text-base px-6 py-6 h-auto border-none bg-white text-slate-900 hover:bg-white/90 shadow-lg rounded-2xl font-semibold">
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>
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
