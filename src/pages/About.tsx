import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatsCounter } from '@/components/home/StatsCounter';
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
  Receipt
} from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our priority. We build lasting relationships.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of security and confidentiality.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with continuous feedback loops.',
  },
];

const liftmateFeatures = [
  { icon: Car, text: 'Bike, auto, car pooling' },
  { icon: Package, text: 'Parcel delivery services' },
  { icon: Building, text: 'Corporate tie-ups' },
  { icon: Heart, text: 'Women-friendly pilot matching' },
  { icon: AlertTriangle, text: 'SOS safety tools' },
  { icon: Receipt, text: 'GST & platform fee transparency' },
];

const About = () => {
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
                  className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Portfolio
                </span>
                <h2 className="section-title mb-4">Featured Products</h2>
                <p className="section-subtitle">
                  Innovative platforms built by Mindwhile, transforming industries from logistics to education.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* JagoPro */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">JagoPro</h3>
                    <p className="text-xl text-primary font-medium mb-4">India's Logistics & Ride Platform</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      A revolutionary transportation and logistics platform designed for modern India utilizing advanced route algorithms, scalable system design, and real-time optimization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Bike, Auto, Car Pooling', 'Parcel Delivery', 'Corporate Tie-ups', 'Women-Friendly Matching', 'SOS Safety', 'Transparent GST'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* NeuroTalk */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">NeuroTalk</h3>
                    <p className="text-xl text-primary font-medium mb-4">AI Call Translation</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Advanced AI-powered communication tool that enables real-time call translation. What sets it apart is its ability to clone and translate using your own voice across 22 different languages seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['22 Languages', 'Voice Cloning AI', 'Real-time Translation', 'Global Connectivity', 'Seamless Integration'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Raksha Assist */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">Raksha Assist</h3>
                    <p className="text-xl text-primary font-medium mb-4">Health Insurance Platform</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      A comprehensive health insurance company platform that streamlines policy management, claims processing, and user assistance, making healthcare coverage accessible and transparent for all users.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Policy Management', 'Claims Processing', 'Customer Portal', 'Healthcare Network', 'Secure Data'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* OurSchool ERP */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">OurSchool ERP</h3>
                    <p className="text-xl text-primary font-medium mb-4">School Administration System</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      A robust web application dashboard designed for complete school administration. It centralizes student data, staff management, academics, and communication in one intuitive interface.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Student Management', 'Staff Payroll', 'Attendance Tracking', 'Parent Portal', 'Report Generation'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsCounter />
      </main>

      <Footer />
    </div>
  );
};

export default About;
