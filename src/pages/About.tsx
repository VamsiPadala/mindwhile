import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatsCounter } from '@/components/home/StatsCounter';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Users,
  Target,
  Shield,
  Zap,
  Globe,
  Car,
  Package,
  Building,
  Heart,
  AlertTriangle,
  Receipt,
  Sparkles,
  ArrowRight,
  Database,
  Code,
  Cloud,
  Gem,
  ShoppingCart,
  Briefcase,
  MapPin,
  UtensilsCrossed,
  Home,
  FileText
} from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our priority. We build lasting relationships.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of security and confidentiality.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with continuous feedback loops.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

const productsData = [
  {
    id: 'our-school',
    icon: Building,
    title: 'OurSchool ERP',
    subtitle: 'School Administration System',
    description: "A robust web application dashboard designed for complete school administration. It centralizes student data, staff management, academics, and communication in one intuitive interface.",
    features: ['Student Management', 'Staff Payroll', 'Attendance Tracking', 'Parent Portal', 'Report Generation'],
    techStack: ['React', 'Express', 'MySQL', 'Tailwind CSS', 'JWT'],
    gradient: 'from-amber-400 via-yellow-500 to-amber-600',
    tag: 'Explore',
    tagColor: 'from-green-400 to-emerald-500',
    link: 'https://ourschoolerp.com/',
  },
  {
    id: 'raksha-assist',
    icon: Heart,
    title: 'Raksha Assist',
    subtitle: 'Health Insurance Platform',
    description: "A comprehensive health insurance company platform that streamlines policy management, claims processing, and user assistance, making healthcare coverage accessible and transparent for all users.",
    features: ['Policy Management', 'Claims Processing', 'Customer Portal', 'Healthcare Network', 'Secure Data'],
    techStack: ['Next.js', 'PostgreSQL', 'Docker', 'Stripe', 'Redis'],
    gradient: 'from-amber-400 via-yellow-500 to-amber-600',
    tag: 'In Progress',
    tagColor: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'jago-pro',
    icon: Car,
    title: 'JagoPro',
    subtitle: "India's Logistics & Ride Platform",
    description: "A revolutionary transportation and logistics platform designed for modern India utilizing advanced route algorithms, scalable system design, and real-time optimization.",
    features: ['Bike, Auto, Car Pooling', 'Parcel Delivery', 'Corporate Tie-ups', 'Women-Friendly Matching', 'SOS Safety', 'Transparent GST'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io'],
    gradient: 'from-amber-400 via-yellow-500 to-amber-600',
    tag: 'In Progress',
    tagColor: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'neuro-talk',
    icon: Globe,
    title: 'NeuroTalk',
    subtitle: 'AI Call Translation',
    description: "Advanced AI-powered communication tool that enables real-time call translation. What sets it apart is its ability to clone and translate using your own voice across 22 different languages seamlessly.",
    features: ['22 Languages', 'Voice Cloning AI', 'Real-time Translation', 'Global Connectivity', 'Seamless Integration'],
    techStack: ['Python', 'OpenAI', 'WebRTC', 'React', 'AWS'],
    gradient: 'from-amber-400 via-yellow-500 to-amber-600',
    tag: 'In Progress',
    tagColor: 'from-yellow-400 to-orange-500',
  }
];

const futureProjects = [
  {
    id: 'matrimony-app',
    icon: Gem,
    title: 'Matrimony App',
    note: 'A premium matrimony platform with AI-powered matchmaking, verified profiles, and end-to-end privacy controls.',
    tag: 'Planning',
    gradient: 'from-rose-500 to-pink-600',
    glowColor: 'rgba(244,63,94,0.3)',
    bgTint: 'from-rose-500/10 to-pink-500/5',
  },
  {
    id: 'food-delivery',
    icon: UtensilsCrossed,
    title: 'Food Delivery App',
    note: 'Lightweight delivery platform optimized for quick onboarding and real-time tracking.',
    tag: 'Planning',
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249,115,22,0.3)',
    bgTint: 'from-orange-500/10 to-red-500/5',
  },
  {
    id: 'real-estate',
    icon: Home,
    title: 'Real Estate Script',
    note: 'Scalable marketplace for listings, lead management and property analytics.',
    tag: 'Planning',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16,185,129,0.3)',
    bgTint: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    id: 'directory-script',
    icon: MapPin,
    title: 'Directory Script',
    note: 'Local business directory with reviews, maps and monetization features.',
    tag: 'Planning',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59,130,246,0.3)',
    bgTint: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    id: 'job-portal',
    icon: Briefcase,
    title: 'Job Portal',
    note: 'Modern job board with resume parsing and AI recommendations.',
    tag: 'Planning',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.3)',
    bgTint: 'from-violet-500/10 to-purple-500/5',
  },
  {
    id: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    note: 'Full-featured e-commerce platform with headless storefront support.',
    tag: 'Planning',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6,182,212,0.3)',
    bgTint: 'from-cyan-500/10 to-blue-500/5',
  },
  {
    id: 'marriage-biodata',
    icon: FileText,
    title: 'Marriage Biodata',
    note: 'A dedicated marriage biodata builder with templates and privacy options.',
    tag: 'Planning',
    gradient: 'from-fuchsia-500 to-pink-600',
    glowColor: 'rgba(217,70,239,0.3)',
    bgTint: 'from-fuchsia-500/10 to-pink-500/5',
  }
];


const About = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedFuture, setSelectedFuture] = useState<any>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                We Execute Our Ideas
                <span className="gradient-text block">From Start to Finish</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Mindwhile IT Solutions Pvt Ltd, we believe in building solutions that
                transform everyday life with innovation, trust, and community impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Products (moved up) */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold uppercase tracking-widest shadow-sm mb-4">
                  <Sparkles className="w-4 h-4" /> Premium Portfolio
                </span>
                <h2 className="section-title mb-4">Our Masterpieces</h2>
                <p className="section-subtitle">
                  State-of-the-art platforms built by Mindwhile. Click any product to explore deeply.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {productsData.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => setSelectedProduct(product)}
                    className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 cursor-pointer transition-all duration-500 border border-amber-500/20 shadow-lg hover:shadow-amber-500/20 bg-gradient-to-br from-card to-card/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/5 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 group-hover:left-[150%] left-[-100%] transition-all duration-1000" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-[1px] shadow-[0_0_20px_rgba(251,191,36,0.3)] group-hover:scale-110 transition-transform duration-500`}>
                          <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center">
                            <product.icon className="w-8 h-8 text-amber-500 drop-shadow-md" />
                          </div>
                        </div>
                        <div className={`px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase rounded-full bg-gradient-to-r ${product.tagColor || 'from-amber-300 to-amber-500'} shadow-md flex items-center gap-1`}>
                          <Sparkles className="w-3 h-3" /> {product.tag || 'Gold Tier'}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-foreground mb-3">{product.title}</h3>
                      <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-bold mb-4">{product.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="mt-6 flex items-center text-amber-500 font-semibold group-hover:text-amber-400 transition-colors">
                        <span className="uppercase text-xs tracking-widest">Explore Details</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="section-title mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Founded in 2021, Mindwhile IT Solutions emerged with a vision to revolutionize
                  how professional IT services are delivered. We understood that true success
                  comes from genuine partnerships, not just transactions.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our approach is simple: we prioritize our clients' success over everything else.
                  This philosophy has earned us the trust of businesses across multiple industries,
                  consistently ranking us as a top vendor.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {['Client-Centric Approach', 'Innovation Driven', 'Quality Assured', 'Long-term Partnerships'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img
                    src={aboutTeam}
                    alt="Mindwhile Team"
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="section-title mb-4">What Drives Us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-transform duration-300 border border-white/5 overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-20 blur-md`} />
                  <div className={`absolute inset-0 bg-card/95 backdrop-blur-2xl rounded-[2rem] -z-10`} />

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} p-[1px] mx-auto mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-xl`}>
                    <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <value.icon className="w-10 h-10 text-foreground drop-shadow-sm" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Future Projects */}
        <section className="py-20 bg-secondary/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-500 text-sm font-bold uppercase tracking-widest shadow-sm mb-4">
                  <Sparkles className="w-4 h-4" /> Coming Soon
                </span>
                <h2 className="section-title mb-4">Our Future Projects</h2>
                <p className="section-subtitle">Ideas we are planning next — small, focused products with high impact.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {futureProjects.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedFuture(p)}
                    className="relative group cursor-pointer"
                  >
                    {/* Glow border on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem] blur-md -z-10`} />

                    <div className="glass rounded-[1.5rem] p-7 h-full border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-card to-card/80">
                      {/* Background tint */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.bgTint} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      {/* Shine effect */}
                      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-40 group-hover:left-[150%] left-[-100%] transition-all duration-1000" />

                      <div className="relative z-10">
                        {/* Icon + Tag Row */}
                        <div className="flex items-start justify-between mb-5">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-500`} style={{ boxShadow: `0 0 20px ${p.glowColor}` }}>
                            <div className="w-full h-full rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center">
                              <p.icon className="w-7 h-7 text-foreground drop-shadow-sm" />
                            </div>
                          </div>
                          <span className={`px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase rounded-full bg-gradient-to-r ${p.gradient} shadow-md flex items-center gap-1`}>
                            <Sparkles className="w-3 h-3" /> {p.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${p.gradient} transition-all duration-300">{p.title}</h4>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.note}</p>

                        {/* Footer */}
                        <div className="flex items-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span className="uppercase text-xs tracking-widest">Learn More</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modal Logic */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl overflow-hidden border border-amber-500/30 bg-card/95 backdrop-blur-2xl text-card-foreground shadow-2xl shadow-amber-500/20 rounded-[2rem] flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              >
                {/* Left Visual Side (Golden) */}
                <div className={`md:w-5/12 p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br ${selectedProduct.gradient} shrink-0`}>
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Floating animated blobs */}
                  <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-12 -left-12 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                  <motion.div animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl" />

                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="relative z-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-white/40 mb-6"
                  >
                    <selectedProduct.icon className="w-16 h-16 text-white drop-shadow-lg" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10 text-center"
                  >
                    <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">{selectedProduct.title}</h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase rounded-full bg-white/90 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Premium Edition
                    </div>
                  </motion.div>
                </div>

                {/* Right Content Side */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between relative bg-gradient-to-br from-background/50 to-muted/20">
                  <div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-4">{selectedProduct.subtitle}</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {selectedProduct.description}
                      </p>
                    </motion.div>

                    <div className="space-y-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-500" /> Key Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedProduct.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                              <div className="w-full flex items-center gap-2.5 p-2 rounded-lg bg-gradient-to-r from-amber-500/5 to-yellow-500/5 border border-amber-500/10 shadow-sm hover:shadow-amber-500/20 transition-shadow">
                                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                                <span className="leading-snug">{feature}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3 mt-6 flex items-center gap-2">
                          <Code className="w-4 h-4 text-amber-500" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.techStack.map((tech: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 bg-background border border-amber-500/20 text-foreground text-xs font-semibold rounded-lg shadow-sm">
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
                    <Button variant="outline" onClick={() => setSelectedProduct(null)} className="rounded-xl px-6 border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-500 text-foreground">
                      Close
                    </Button>
                    {selectedProduct.link ? (
                      <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary rounded-xl px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 text-white shadow-lg shadow-green-500/20">
                          Explore
                        </Button>
                      </a>
                    ) : (
                      <Button onClick={() => setSelectedProduct(null)} className="btn-primary rounded-xl px-8 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 border-0 text-white shadow-lg shadow-amber-500/20">
                        Request Demo
                      </Button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedFuture && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-background/70 backdrop-blur-sm"
              onClick={() => setSelectedFuture(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md overflow-hidden bg-card/95 backdrop-blur-md border border-white/10 rounded-[1.5rem] shadow-2xl text-foreground"
              >
                {/* Gradient header */}
                <div className={`p-8 bg-gradient-to-br ${selectedFuture.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <selectedFuture.icon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{selectedFuture.title}</h3>
                      <span className="text-xs font-bold tracking-widest text-white/80 uppercase">{selectedFuture.tag}</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">{selectedFuture.note}</p>
                  <div className="flex justify-end">
                    <Button variant="outline" onClick={() => setSelectedFuture(null)} className="rounded-xl px-6">Close</Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <StatsCounter />
      </main>

      <Footer />
    </div>
  );
};

export default About;
