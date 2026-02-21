import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
  GitBranch
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
    features: ['Social Media Marketing', 'PPC Campaigns', 'Content Strategy', 'Analytics'],
    techStack: ['Google Ads', 'Meta Ads', 'Analytics', 'HubSpot', 'Mailchimp'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Search ranking optimization, content strategy, and performance SEO.',
    detailedDescription: 'Dominate search engine results and drive organic traffic with our proven SEO methodologies. We provide comprehensive on-page and technical optimization, strategic link building, and high-quality content strategies to ensure your business stands out online.',
    features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Optimization'],
    techStack: ['Ahrefs', 'SEMrush', 'Moz', 'Google Search Console', 'Screaming Frog'],
    gradient: 'from-teal-500 to-cyan-500',
  },
];

const processSteps = [
  {
    icon: Layers,
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and target audience.',
  },
  {
    icon: GitBranch,
    title: 'Planning',
    description: 'Creating detailed roadmaps and architecture designs.',
  },
  {
    icon: Cpu,
    title: 'Development',
    description: 'Agile development with regular updates and feedback loops.',
  },
  {
    icon: Shield,
    title: 'Testing',
    description: 'Rigorous QA and security testing for reliability.',
  },
  {
    icon: Cloud,
    title: 'Deployment',
    description: 'Seamless deployment and continuous integration.',
  },
  {
    icon: Database,
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 support services.',
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

  return (
    <div className="min-h-screen">
      <Navbar />

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
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                >
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
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-base text-foreground font-medium">{feature}</span>
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
                    <div className="glass rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center items-center group shadow-xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/20 z-0 h-auto">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-8 text-center h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
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
    </div>
  );
};

export default Services;
