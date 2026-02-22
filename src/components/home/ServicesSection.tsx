import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
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
  Users,
  CheckCircle,
  Layers
} from 'lucide-react';

const row1 = [
  { icon: Code, title: "Website Development", color: "from-blue-500 to-cyan-400" },
  { icon: Palette, title: "UI/UX Design", color: "from-purple-500 to-pink-400" },
  { icon: Sparkles, title: "Artificial Intelligence", color: "from-amber-500 to-orange-400" },
  {
    icon: Search, title: "SEO Optimization", color: "from-emerald-500 to-teal-400",
    isPremium: true,
    detailedDescription: "Dominate search engine results and drive organic traffic with our proven SEO methodologies. We provide comprehensive on-page and technical optimization, strategic link building, and high-quality content strategies to ensure your business stands out online.",
    features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Optimization'],
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: Megaphone, title: "Digital Marketing", color: "from-rose-500 to-red-400",
    isPremium: true,
    detailedDescription: "Accelerate your business growth with our data-driven digital marketing strategies. From targeted social media campaigns to comprehensive brand strategies, we help you reach the right audience, increase brand awareness, and maximize your ROI across digital channels.",
    features: ['Bulk SMS, Email & WhatsApp', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'],
    techStack: ['Google Ads', 'Meta Ads', 'Analytics', 'HubSpot', 'Mailchimp'],
    gradient: "from-orange-500 to-red-500"
  },
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

const ServiceCard = ({ item, onCardClick }: { item: any, onCardClick?: (item: any) => void }) => (
  <div onClick={() => { if (onCardClick) onCardClick(item); }} className={`relative glass rounded-2xl md:rounded-[1.5rem] p-3 md:p-4 pr-4 md:pr-6 w-[240px] md:w-[320px] flex items-center gap-3 md:gap-4 hover:shadow-2xl transition-all duration-300 border ${item.isPremium ? 'border-primary/50 shadow-primary/20 bg-primary/5 hover:border-primary' : 'border-border/40 hover:border-primary/30'} group shrink-0 ${item.isPremium ? 'dark:bg-slate-900/70 bg-white/70' : 'bg-white/50 dark:bg-slate-900/50'} backdrop-blur-md cursor-pointer overflow-hidden`}>

    {item.isPremium && (
      <div
        onClick={(e) => { e.stopPropagation(); if (onCardClick) onCardClick(item); }}
        className="absolute -top-3 -left-3 px-4 py-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white text-[10px] font-bold tracking-wider rounded-r-md rounded-tr-md z-10 shadow-sm uppercase flex items-center gap-1 cursor-pointer before:content-[''] before:absolute before:top-full before:left-0 before:border-t-8 before:border-t-amber-800 before:border-l-8 before:border-l-transparent before:border-r-0 hover:scale-105 transition-all">
        <Sparkles className="w-3 h-3" /> Highly Demanded
      </div>
    )}

    {item.isPremium && (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
    )}

    <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
    </div>
    <div className="relative z-10 pt-2 lg:pt-0">
      <h3 className={`font-bold text-foreground text-sm md:text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 ${item.isPremium ? 'mt-2 lg:mt-0' : ''}`}>
        {item.title}
      </h3>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40, onCardClick }: { items: any[], direction?: "left" | "right", speed?: number, onCardClick?: (item: any) => void }) => {
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
          <ServiceCard key={`${item.title}-${index}`} item={item} onCardClick={onCardClick} />
        ))}
      </motion.div>
    </div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<any>(null);

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
          <MarqueeRow items={row1} direction="left" speed={60} onCardClick={setSelectedService} />
          <MarqueeRow items={row2} direction="right" speed={55} onCardClick={setSelectedService} />
          <MarqueeRow items={row3} direction="left" speed={65} onCardClick={setSelectedService} />
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

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden border border-white/10 bg-card/95 backdrop-blur-2xl text-card-foreground shadow-2xl rounded-[2rem] flex flex-col md:flex-row"
            >
              {/* Left Visual Side */}
              <div className={`md:w-5/12 p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br ${selectedService.gradient || selectedService.color}`}>
                <div className="absolute inset-0 bg-black/10" />

                {/* Floating animated blobs */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-12 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl"
                />

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative z-10 w-28 h-28 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl mb-6 border border-white/30"
                >
                  <selectedService.icon className="w-14 h-14 text-white drop-shadow-md" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative z-10 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{selectedService.title}</h3>
                  {selectedService.isPremium && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase rounded-full bg-gradient-to-r from-amber-300 to-amber-500 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Premium
                    </div>
                  )}
                </motion.div>

                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-60">
                  <Database className="w-6 h-6 text-white" />
                  <Cloud className="w-6 h-6 text-white" />
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Right Content Side */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between relative bg-gradient-to-br from-background/50 to-muted/20">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {selectedService.detailedDescription || `Discover our comprehensive ${selectedService.title} services designed to accelerate your growth and establish your leading presence in the market.`}
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" /> Key Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(selectedService.features || ['Tailored Solutions', 'Expert Implementation', 'Process Optimization', '24/7 Support']).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                            {feature.includes('Bulk') ? (
                              <div className="w-full flex items-center gap-2.5 p-2 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 shadow-sm">
                                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                                <span className="leading-snug font-bold text-amber-700 dark:text-amber-400">{feature}</span>
                                <span className="ml-auto text-[10px] uppercase font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 rounded-full shadow-md">Core</span>
                              </div>
                            ) : (
                              <>
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span className="leading-snug">{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3 mt-6 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-primary" /> Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(selectedService.techStack || ['Latest Frameworks', 'Cloud Automation', 'Agile Methodology', 'Scalable Security']).map((tech: string, i: number) => (
                          <span key={i} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg border border-border/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 flex justify-end gap-3 pt-6 border-t border-border/40"
                >
                  <Button variant="outline" onClick={() => setSelectedService(null)} className="rounded-xl px-6">
                    Close
                  </Button>
                  <Link to="/contact">
                    <Button onClick={() => setSelectedService(null)} className={`btn-primary rounded-xl px-8 bg-gradient-to-r ${selectedService.gradient || selectedService.color} border-0 text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity`}>
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
