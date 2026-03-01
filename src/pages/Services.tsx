import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  Code,
  Palette,
  Smartphone,
  Apple,
  Megaphone,
  Search,
  ArrowRight,
  CheckCircle,
  Layers,
  Database,
  Cloud,
  Shield,
  Cpu,
  GitBranch,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Custom websites, dashboards, scalable web apps using latest technologies.',
    detailedDescription: 'Our comprehensive web development services cover everything from striking frontend designs to robust backend architectures. We build fast, secure, and scalable digital solutions tailored to your unique business needs, ensuring a flawless user experience across all devices.',
    features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'E-commerce Solutions'],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric designs, wireframes, prototypes, product UX research.',
    detailedDescription: 'We craft intuitive and visually stunning interfaces that captivate users and drive engagement. By blending extensive user research with modern design aesthetics, we create seamless user journeys that elevate your brand and improve conversion rates.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    description: 'High performance Android apps using modern frameworks.',
    detailedDescription: 'Tap into the massive Android user base with our expertly crafted mobile applications. We utilize the latest frameworks and native technologies to deliver high-performance, feature-rich apps that provide a smooth and engaging experience on any Android device.',
    features: ['Native Apps', 'Cross-Platform', 'Material Design', 'Play Store Publishing'],
    techStack: ['Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Apple,
    title: 'iOS Development',
    description: 'Secure & scalable iOS applications for the Apple ecosystem.',
    detailedDescription: 'Establish a premium presence on the App Store with our specialized iOS development services. We build elegant, secure, and highly scalable applications that leverage the full potential of Apple\'s ecosystem, ensuring a pristine experience for your users.',
    features: ['Swift Development', 'SwiftUI', 'App Store Publishing', 'Apple Guidelines'],
    techStack: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data', 'CloudKit'],
    gradient: 'from-gray-500 to-slate-700',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Growth marketing, paid ads, brand strategy for online presence.',
    detailedDescription: 'Accelerate your business growth with our data-driven digital marketing strategies. From targeted social media campaigns to comprehensive brand strategies, we help you reach the right audience, increase brand awareness, and maximize your ROI across digital channels.',
    features: ['Bulk SMS, Email & WhatsApp', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'],
    techStack: ['Google Ads', 'Meta Ads', 'Analytics', 'HubSpot', 'Mailchimp'],
    gradient: 'from-orange-500 to-red-500',
    isPremium: true,
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Search ranking optimization, content strategy, and performance SEO.',
    detailedDescription: 'Dominate search engine results and drive organic traffic with our proven SEO methodologies. We provide comprehensive on-page and technical optimization, strategic link building, and high-quality content strategies to ensure your business stands out online.',
    features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Optimization'],
    techStack: ['Ahrefs', 'SEMrush', 'Moz', 'Google Search Console', 'Screaming Frog'],
    gradient: 'from-teal-500 to-cyan-500',
    isPremium: true,
  },
];

const processSteps = [
  {
    icon: Layers,
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and target audience.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GitBranch,
    title: 'Planning',
    description: 'Creating detailed roadmaps and architecture designs.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Development',
    description: 'Agile development with regular updates and feedback loops.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Shield,
    title: 'Testing',
    description: 'Rigorous QA and security testing for reliability.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Cloud,
    title: 'Deployment',
    description: 'Seamless deployment and continuous integration.',
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    icon: Database,
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 support services.',
    gradient: 'from-rose-500 to-red-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get('view');
    if (view) {
      let activeService = null;
      if (view === 'website') activeService = services.find(s => s.title.includes('Website'));
      if (view === 'ui-ux') activeService = services.find(s => s.title.includes('UI/UX'));
      if (view === 'mobile') activeService = services.find(s => s.title.includes('Android')); // Defaults to Android for mobile
      if (view === 'marketing') activeService = services.find(s => s.title.includes('Digital Marketing'));
      if (view === 'seo') activeService = services.find(s => s.title.includes('SEO'));

      if (activeService) {
        setSelectedService(activeService);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location.search]);

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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Comprehensive IT
                <span className="gradient-text block">Solutions & Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From web development to digital marketing, we provide end-to-end technology
                solutions to help your business thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4 space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  onClick={() => setSelectedService(service)}
                  className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-12 cursor-pointer group/card ${isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Removed tag from here */}

                  {/* Content Side */}
                  <div className="w-full lg:w-7/12 space-y-6">
                    <div className="inline-flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className={`text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                        0{index + 1} // Service
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{service.title}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          {feature.includes('Bulk') ? (
                            <>
                              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                              <span className="text-sm md:text-base font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-lg border border-amber-500/30 flex-1">{feature}</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                              <span className="text-base text-foreground font-medium">{feature}</span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="w-full lg:w-5/12 relative">
                    <div className={`glass rounded-3xl p-6 relative flex flex-col justify-center items-center group transition-all duration-500 z-0 h-auto ${service.isPremium ? 'shadow-2xl shadow-primary/20 border-2 border-primary/50' : 'overflow-hidden shadow-xl hover:shadow-primary/20 hover:border-primary/20'}`}>

                      {service.isPremium && (
                        <div
                          onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                          className="absolute -top-4 -left-3 lg:-left-4 lg:-top-4 px-4 md:px-6 py-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 cursor-pointer
                                     before:content-[''] before:absolute before:top-full before:left-0 before:border-t-[12px] before:border-t-amber-800 before:border-l-[12px] lg:before:border-l-[16px] before:border-l-transparent before:border-r-0 z-[100] hover:scale-105 transition-all rounded-r-md rounded-tr-md"
                        >
                          <Sparkles className="w-4 h-4" />
                          Most Demanded
                        </div>
                      )}

                      {service.isPremium && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl pointer-events-none" />
                      )}
                      {/* Abstract Backgrounds */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className={`absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen`} />
                      <div className={`absolute -left-10 -bottom-10 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen`} />

                      {/* Content Overlay */}
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-full"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`} />
                        <div className="glass rounded-2xl p-6 md:p-8 bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl border-white/40 relative flex flex-col items-center justify-center text-center gap-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                            <service.icon className="w-7 h-7 text-white" />
                          </div>

                          <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                            {service.detailedDescription}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="section-title mb-4">How We Work</h2>
              <p className="section-subtitle">
                A proven methodology that ensures quality delivery and client satisfaction.
              </p>
            </motion.div>

            <div className="relative w-full max-w-6xl mx-auto pt-16 pb-8">
              {/* Connecting Line - Horizontal on large screens, hidden on mobile in favor of grid alignment */}
              <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[2px] bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 relative items-center justify-center">

                {processSteps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={step.title} className={`relative flex flex-col justify-center min-h-[300px] lg:min-h-[400px] w-full max-w-[320px] mx-auto`}>

                      {/* Center Node (Always visible) */}
                      <div className="absolute top-[10%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-5 h-5 rounded-full bg-background border-[3px] border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.3)] box-border transition-transform hover:scale-125 duration-300">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>
                      </div>

                      {/* Display Top Content (LG screens alternating, Mobile always top if not modified further) 
                          On Mobile (lg:hidden), we just stack them nicely.
                          On LG, we alternate top/bottom hemispeheres. */}

                      <div className={`flex flex-col items-center w-full group relative z-10 transition-all ${isEven ? 'lg:justify-end pb-8 lg:pb-16 pt-8 lg:pt-0' : 'lg:justify-start pt-8 lg:pt-16 lg:order-last'}`}>
                        {isEven ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative w-full bg-card dark:bg-slate-900/95 border border-border/50 rounded-2xl p-6 text-left shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300"
                          >
                            <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-card dark:bg-slate-900 border-b border-r border-border/50 group-hover:border-primary/50 rotate-45 transition-colors z-[-1]" />
                            {/* Mobile pointer pointing up toward the node */}
                            <div className="block lg:hidden absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-card dark:bg-slate-900 border-t border-l border-border/50 group-hover:border-primary/50 rotate-45 transition-colors z-[-1]" />

                            <span className="text-primary text-xs font-bold tracking-[0.15em] uppercase mb-3 block">Step 0{index + 1}</span>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="hidden lg:flex pb-4 justify-center w-full"
                          >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${step.gradient} p-[1px] shadow-lg shadow-primary/20 hover:scale-110 transition-transform duration-300`}>
                              <div className="w-full h-full bg-card dark:bg-slate-900 rounded-full flex items-center justify-center">
                                <step.icon className="w-7 h-7 text-primary dark:text-foreground" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Display Bottom Content (LG screens alternating) */}
                      <div className={`flex flex-col items-center w-full group relative z-10 transition-all ${!isEven ? 'lg:justify-end pb-8 lg:pb-16 hidden lg:flex' : 'lg:justify-start pt-8 lg:pt-16 hidden lg:flex order-last'}`}>
                        {!isEven ? (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative w-full bg-card dark:bg-slate-900/95 border border-border/50 rounded-2xl p-6 text-left shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300"
                          >
                            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-card dark:bg-slate-900 border-t border-l border-border/50 group-hover:border-primary/50 rotate-45 transition-colors z-[-1]" />

                            <span className="text-primary text-xs font-bold tracking-[0.15em] uppercase mb-3 block">Step 0{index + 1}</span>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="pt-4 justify-center w-full flex"
                          >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${step.gradient} p-[1px] shadow-lg shadow-primary/20 hover:scale-110 transition-transform duration-300`}>
                              <div className="w-full h-full bg-card dark:bg-slate-900 rounded-full flex items-center justify-center">
                                <step.icon className="w-7 h-7 text-primary dark:text-foreground" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* On mobile, if NOT even, display the card under the node without alternating heights */}
                      {!isEven && (
                        <div className={`flex lg:hidden flex-col items-center w-full group relative z-10 transition-all pt-8`}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative w-full bg-card dark:bg-slate-900/95 border border-border/50 rounded-2xl p-6 text-left shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300"
                          >
                            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-card dark:bg-slate-900 border-t border-l border-border/50 group-hover:border-primary/50 rotate-45 transition-colors z-[-1]" />

                            <span className="text-primary text-xs font-bold tracking-[0.15em] uppercase mb-3 block">Step 0{index + 1}</span>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                          </motion.div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button className="btn-primary group text-lg px-10 py-6">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
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
              <div className={`md:w-5/12 p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br ${selectedService.gradient}`}>
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
                      {selectedService.detailedDescription}
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
                        {selectedService.features.map((feature: string, idx: number) => (
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
                        <Layers className="w-4 h-4 text-primary" /> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.techStack.map((tech: string, i: number) => (
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
                    <Button onClick={() => setSelectedService(null)} className={`btn-primary rounded-xl px-8 bg-gradient-to-r ${selectedService.gradient} border-0 text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity`}>
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
