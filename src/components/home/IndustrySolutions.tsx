import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Factory,
  Megaphone,
  ArrowUpRight
} from 'lucide-react';

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare Solutions',
    description: 'HIPAA-compliant healthcare software. Next-generation EMR/EHR systems, telemedicine platforms, and smart patient management.',
    gradient: 'from-pink-500 to-rose-400',
    color: 'text-pink-500',
    colSpan: 'md:col-span-2 lg:col-span-3 h-[320px] md:h-[360px]',
  },
  {
    icon: GraduationCap,
    title: 'Education Solutions',
    description: 'Transforming EdTech. Immersive learning management systems, virtual classrooms, and interactive student engagement tools.',
    gradient: 'from-violet-500 to-purple-400',
    color: 'text-violet-500',
    colSpan: 'md:col-span-2 lg:col-span-3 h-[320px] md:h-[360px]',
  },
  {
    icon: Factory,
    title: 'Manufacturing Solutions',
    description: 'Industry 4.0 innovations. Seamless IoT integration, automated supply chains, and predictive maintenance.',
    gradient: 'from-orange-500 to-amber-400',
    color: 'text-orange-500',
    colSpan: 'md:col-span-2 lg:col-span-3 h-[320px] md:h-[360px]',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Networking',
    description: 'Data-driven growth. Marketing automation, intelligent CRM systems, and real-time social analytics platforms.',
    gradient: 'from-emerald-500 to-teal-400',
    color: 'text-emerald-500',
    colSpan: 'md:col-span-2 lg:col-span-3 h-[320px] md:h-[360px]',
  },
];

export const IndustrySolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Tailored Technology for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Industry Sector</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't just build software. We craft specialized, scalable, and innovative platforms designed to dominate your specific market.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 xl:gap-8 cursor-pointer"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`group relative [perspective:1500px] ${industry.colSpan}`}
            >
              <div className="relative w-full h-full transition-transform duration-700 md:duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl rounded-[2.5rem]">

                {/*
                  =================
                  FRONT FACE
                  =================
                */}
                <div className="absolute inset-0 glass rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center overflow-hidden border border-border/40 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] z-20 bg-background text-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-[0.03] group-hover:opacity-0 transition-opacity duration-500`} />

                  {/* Deep watermark background */}
                  <industry.icon className="absolute -bottom-10 -left-10 w-64 h-64 opacity-[0.03] text-foreground pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                  <div className={`w-20 h-20 rounded-[1.5rem] bg-secondary/80 dark:bg-slate-900/60 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <industry.icon className={`w-10 h-10 ${industry.color}`} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground transition-transform duration-500">
                    {industry.title}
                  </h3>
                </div>

                {/*
                  =================
                  BACK FACE
                  =================
                */}
                <div className="absolute inset-0 glass rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center overflow-hidden border border-border/40 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] z-10 bg-white/50 dark:bg-slate-900/80 backdrop-blur-3xl">
                  {/* Rich back face gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-[0.08]`} />
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${industry.gradient} opacity-20 blur-[80px] rounded-full`} />

                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg`}>
                      <industry.icon className={`w-7 h-7 md:w-8 md:h-8 ${industry.color}`} />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center bg-white/40 dark:bg-slate-800/40">
                      <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 ${industry.color}`} />
                    </div>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-end pb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-base font-medium">
                      {industry.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

