import { motion } from 'framer-motion';
import { Target, Rocket, TrendingUp, Award } from 'lucide-react';
import successImage from '@/assets/success.jpg';

const features = [
  { icon: Target, text: 'Performance Focused' },
  { icon: Rocket, text: 'Scalable Solutions' },
  { icon: TrendingUp, text: 'Future Growth' },
  { icon: Award, text: 'Excellence Driven' },
];

export const SuccessSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src={successImage}
                alt="Success with Mindwhile"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 w-20 h-20 border-4 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl -z-10"
              />
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 right-8 glass rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">Top Rated</p>
                <p className="text-sm text-muted-foreground">IT Solutions Provider</p>
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
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="section-title mb-6">
              Your Success with
              <span className="gradient-text block">Mindwhile IT Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We develop your projects based on your ideas, focusing on performance, 
              scalability and future growth. Our team of experts ensures every solution 
              is crafted with precision and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 glass rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
