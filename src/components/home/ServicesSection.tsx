import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Code,
  Palette,
  Smartphone,
  Apple,
  Megaphone,
  Search,
  ArrowRight,
  Sparkles,
  Cloud,
  Database,
  Truck,
  ShieldCheck,
  Shield,
  Glasses,
  Link as LinkIcon,
  GraduationCap,
  MessageSquare,
  Briefcase,
  Infinity as InfinityIcon,
  Building,
  Users
} from 'lucide-react';

const row1 = [
  { icon: Code, title: "Website Development", color: "from-blue-500 to-cyan-400" },
  { icon: Palette, title: "UI/UX Design", color: "from-purple-500 to-pink-400" },
  { icon: Sparkles, title: "Artificial Intelligence", color: "from-amber-500 to-orange-400" },
  { icon: Search, title: "SEO Optimization", color: "from-emerald-500 to-teal-400" },
  { icon: Megaphone, title: "Digital Marketing", color: "from-rose-500 to-red-400" },
  { icon: Cloud, title: "Cloud Computing", color: "from-sky-500 to-indigo-400" },
  { icon: Database, title: "Big Data Analytics", color: "from-fuchsia-500 to-purple-400" },
];

const row2 = [
  { icon: Smartphone, title: "Android Apps", color: "from-green-500 to-emerald-400" },
  { icon: Apple, title: "iOS Applications", color: "from-gray-500 to-slate-400" },
  { icon: Truck, title: "Logistics Management", color: "from-yellow-500 to-orange-400" },
  { icon: ShieldCheck, title: "Insurance Management", color: "from-blue-600 to-cyan-400" },
  { icon: Shield, title: "Cybersecurity", color: "from-red-600 to-rose-400" },
  { icon: Glasses, title: "AR/VR Solutions", color: "from-violet-500 to-fuchsia-400" },
  { icon: LinkIcon, title: "Blockchain", color: "from-teal-500 to-emerald-400" },
];

const row3 = [
  { icon: GraduationCap, title: "School Management", color: "from-orange-500 to-red-400" },
  { icon: MessageSquare, title: "SMS Management", color: "from-indigo-500 to-blue-400" },
  { icon: Briefcase, title: "IT Consulting", color: "from-slate-600 to-gray-400" },
  { icon: InfinityIcon, title: "DevOps Services", color: "from-blue-500 to-indigo-400" },
  { icon: Building, title: "ERP Systems", color: "from-pink-500 to-rose-400" },
  { icon: Users, title: "CRM Integration", color: "from-fuchsia-500 to-purple-400" },
  { icon: Code, title: "Custom Software", color: "from-emerald-500 to-cyan-400" },
];

const ServiceCard = ({ item }: { item: any }) => (
  <div className="glass rounded-[1.5rem] p-4 pr-6 w-[280px] md:w-[320px] flex items-center gap-4 hover:shadow-2xl transition-all duration-300 border border-border/40 hover:border-primary/30 group shrink-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md cursor-pointer">
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </div>
    <div>
      <h3 className="font-bold text-foreground text-base md:text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
        {item.title}
      </h3>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
  // We duplicate array twice (4 sets total) to guarantee it fills wide screens and loops perfectly at -50%
  const multipliedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="flex w-full overflow-hidden py-3 my-1 relative"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <motion.div
        className="flex gap-4 md:gap-6 w-max items-center pr-4 md:pr-6 hover:opacity-80 transition-opacity"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {multipliedItems.map((item, index) => (
          <ServiceCard key={`${item.title}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Limitless Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IT Services & Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From logistics to education, we offer an expansive library of technological solutions customized to scale your business.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col w-full max-w-[100vw] overflow-hidden" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <MarqueeRow items={row1} direction="left" speed={60} />
          <MarqueeRow items={row2} direction="right" speed={55} />
          <MarqueeRow items={row3} direction="left" speed={65} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/services">
            <Button className="btn-primary group px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-primary/25">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
