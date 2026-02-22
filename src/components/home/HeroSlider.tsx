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
    }, 6000);
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
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Glass Card */}
              <div className="glass p-8 md:p-14 rounded-3xl backdrop-blur-2xl border-white/20 shadow-2xl bg-white/10 dark:bg-slate-900/40 transform transition-all duration-700 hover:shadow-primary/30">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block px-5 py-2 rounded-full bg-primary/90 text-white shadow-lg text-sm font-bold tracking-wider mb-6 border border-white/10"
                >
                  IT Solutions & Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-2xl md:text-3xl font-semibold mb-6 text-primary drop-shadow-md"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-lg"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="flex flex-wrap gap-5"
                >
                  <Link to="/contact">
                    <Button className="btn-primary group text-lg px-8 py-6 rounded-2xl shadow-primary/50 shadow-xl">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-6 border border-white/40 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white hover:text-primary dark:hover:bg-slate-800 shadow-xl rounded-2xl">
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
