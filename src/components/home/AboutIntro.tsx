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
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Mindwhile
            </span>
            <h2 className="section-title mb-6">
              Transforming the Way
              <span className="gradient-text block">Services are Offered</span>
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
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src={aboutTeam}
                  alt="Mindwhile Team"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary/50 rounded-full -z-10 opacity-50 blur-xl" />
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 z-20"
              >
                <div className="text-3xl font-bold gradient-text mb-1">Since 2021</div>
                <p className="text-muted-foreground text-sm">Delivering Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
