import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

const highlights = [
  'Building long-lasting relationships',
  'Top vendor ratings consistently',
  'Customer success focused',
  'Innovation-driven approach',
];

export const AboutIntro = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-card/10">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Mindwhile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transforming the Way
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent block mt-1">Services are Offered</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Beginning in 2021, Mindwhile changed the way professional services are offered.
              We focus on building long lasting relationships and help our customers succeed
              over building our bottom line. Our clients have continuously ranked us a top vendor.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">100+ Happy Clients</p>
                <p className="text-sm text-muted-foreground">Trust us with their projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-10"
          >
            <div className="relative group">
              {/* Main Image */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1"
              >
                <img
                  src={aboutTeam}
                  alt="Mindwhile Team"
                  className="rounded-[2.5rem] shadow-2xl w-full object-cover border border-white/5"
                />
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl -z-10 animate-pulse-glow" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent to-primary/50 rounded-full -z-10 opacity-60 blur-2xl" />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-6 md:-bottom-8 -left-2 md:-left-12 glass rounded-2xl md:rounded-3xl p-4 md:p-8 z-20 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl bg-card/60 group-hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1 md:mb-2 drop-shadow-sm">Since 2021</div>
                <p className="text-foreground/80 font-medium text-[10px] md:text-base tracking-wide uppercase">Delivering Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
