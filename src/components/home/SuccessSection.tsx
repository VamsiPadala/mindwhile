import { motion } from 'framer-motion';
import { Target, Rocket, TrendingUp, Award } from 'lucide-react';
import successImage from '@/assets/success.jpg';

const features = [
  { icon: Target, text: 'Performance Focused', gradient: 'from-blue-500 to-cyan-400', shadow: 'shadow-cyan-500/30' },
  { icon: Rocket, text: 'Scalable Solutions', gradient: 'from-purple-500 to-pink-400', shadow: 'shadow-pink-500/30' },
  { icon: TrendingUp, text: 'Future Growth', gradient: 'from-amber-500 to-orange-400', shadow: 'shadow-orange-500/30' },
  { icon: Award, text: 'Excellence Driven', gradient: 'from-emerald-500 to-teal-400', shadow: 'shadow-teal-500/30' },
];

export const SuccessSection = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-card/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Background Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 lg:pr-10 group"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
            >
              <img
                src={successImage}
                alt="Success with Mindwhile"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover border border-white/5"
              />
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -left-10 w-24 h-24 border-[3px] border-dashed border-primary/40 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.3)]"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl -z-10 blur-xl opacity-60"
              />
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-6 md:-bottom-8 -right-2 md:right-4 glass rounded-2xl md:rounded-3xl p-4 md:p-8 z-20 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl bg-card/60 group-hover:-translate-y-2 transition-transform duration-500 flex items-center gap-3 md:gap-4"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 drop-shadow-sm uppercase tracking-wide">Top Rated</p>
                <p className="text-foreground/80 font-medium text-[10px] md:text-base tracking-wide uppercase mt-0.5 md:mt-1">IT Solutions Provider</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Success with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent block mt-1">Mindwhile IT Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We develop your projects based on your ideas, focusing on performance,
              scalability and future growth. Our team of experts ensures every solution
              is crafted with precision and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-card/90 backdrop-blur-xl rounded-2xl md:rounded-[1.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 shadow-lg ${feature.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md transition-transform duration-500 group-hover:-rotate-3" />
                  </div>

                  <div className="relative z-10">
                    <span className="font-bold text-foreground text-sm md:text-[1.15rem] tracking-wide transition-colors duration-300 group-hover:text-primary">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
