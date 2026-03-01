import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatsCounter } from '@/components/home/StatsCounter';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Users,
  Target,
  Shield,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
  Code,
  Cloud,
  Lightbulb,
  HeartHandshake,
  Award,
  Rocket,
  TrendingUp,
  Layers,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

/* ─── Values ─── */
const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions that keep our clients ahead of the curve.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our priority. We build lasting relationships through genuine partnerships and measurable outcomes.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of data security, privacy, and confidentiality in every project we undertake.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with continuous feedback loops — we deliver on time, every time, without compromise.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

/* ─── Tech Stack ─── */
const techStack = [
  { icon: Code, label: 'React & Next.js', desc: 'Modern frontend frameworks', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Cloud, label: 'Node.js & Express', desc: 'Scalable backend systems', gradient: 'from-green-500 to-emerald-400' },
  { icon: Layers, label: 'MySQL & MongoDB', desc: 'Relational & NoSQL databases', gradient: 'from-purple-500 to-violet-400' },
  { icon: Globe, label: 'AWS & Docker', desc: 'Cloud infrastructure & DevOps', gradient: 'from-orange-500 to-amber-400' },
  { icon: Shield, label: 'JWT & OAuth', desc: 'Secure authentication', gradient: 'from-rose-500 to-pink-400' },
  { icon: Zap, label: 'React Native', desc: 'Cross-platform mobile apps', gradient: 'from-indigo-500 to-blue-400' },
];

/* ─── Milestones ─── */
const milestones = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Mindwhile IT Solutions was established with a vision to revolutionize how IT services are delivered across India.',
    icon: Rocket,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    year: '2022',
    title: 'First Product Launch',
    description: 'Launched OurSchoolERP, our flagship School Management System, now trusted by 50+ institutions.',
    icon: Star,
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    year: '2023',
    title: 'Expanded Portfolio',
    description: 'Added JagoPro and began development of Raksha Assist and NeuroTalk — pushing into new markets.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    year: '2024',
    title: '100+ Clients Served',
    description: 'Crossed a major milestone — 100+ happy clients across education, logistics, and healthcare sectors.',
    icon: Award,
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    year: '2025+',
    title: 'Global Expansion',
    description: 'Scaling our products internationally, with active clients in 3+ countries and a growing team of experts.',
    icon: Globe,
    gradient: 'from-rose-500 to-fuchsia-400',
  },
];

/* ─── Team Pillars ─── */
const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovative Thinking',
    description: 'Every solution we build starts with a deep understanding of the problem. We think creatively to solve challenges others can\'t.',
    gradient: 'from-yellow-500 to-amber-400',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Mindset',
    description: 'We don\'t just deliver projects — we become your technology partner, invested in your long-term growth and success.',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timelines. Our agile processes and dedicated teams ensure projects are delivered on schedule.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Award,
    title: 'Quality Obsession',
    description: 'Every line of code, every design element, every feature goes through rigorous quality assurance before release.',
    gradient: 'from-emerald-500 to-teal-400',
  },
];

/* ─── About Page ─── */
const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <main className="pt-24">

        {/* ━━ HERO ━━ */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.10, 0.04] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                About Us
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.05] tracking-tight">
                We Execute Our Ideas
                <span className="gradient-text block mt-2">From Start to Finish</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At Mindwhile IT Solutions Pvt Ltd, we believe in building solutions that transform everyday life with innovation, trust, and lasting community impact.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex flex-wrap justify-center gap-4 mt-10">
                <Link to="/products">
                  <Button className="btn-primary group px-8 py-5 h-auto text-base rounded-2xl">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-5 h-auto text-base rounded-2xl border-2">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ━━ OUR STORY ━━ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  Born from a Passion
                  <span className="gradient-text block">for Innovation</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-5 leading-relaxed">
                  Founded in 2021, Mindwhile IT Solutions emerged with a clear vision: to revolutionize how professional IT services are delivered across industries. We understood that true success comes from genuine partnerships, not just transactions.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our approach is simple — we prioritize our clients' success above all else. This philosophy has earned us the trust of businesses across education, logistics, healthcare, and beyond, consistently making us their top technology partner.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Client-Centric Approach',
                    'Innovation Driven',
                    'Quality Assured',
                    'Long-term Partnerships',
                    'On-time Delivery',
                    'Transparent Communication',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm">{item}</span>
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
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                  <img src={aboutTeam} alt="Mindwhile Team" className="rounded-3xl shadow-2xl w-full object-cover" />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 opacity-60 blur-xl" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 border border-white/10 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Top Rated</p>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">IT Solutions Provider</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ━━ OUR PILLARS ━━ */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                Our Pillars
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">What Sets Us Apart</h2>
              <p className="text-xl text-muted-foreground">The core principles that guide every decision, every project, and every relationship we build.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass rounded-[2rem] p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem]`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <p.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ VALUES ━━ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                <Star className="w-3.5 h-3.5" />
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">What Drives Us</h2>
              <p className="text-xl text-muted-foreground">The beliefs we hold firm as we build, grow, and serve our global community of clients.</p>
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
                  <div className="absolute inset-0 bg-card/95 backdrop-blur-2xl rounded-[2rem] -z-10" />

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} p-[1px] mx-auto mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-xl`}>
                    <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <value.icon className="w-10 h-10 text-foreground drop-shadow-sm" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ JOURNEY / MILESTONES ━━ */}
        <section className="py-20 md:py-28 bg-secondary/20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">Growth Through the Years</h2>
              <p className="text-xl text-muted-foreground">From a small team with big dreams to a trusted IT partner for 100+ clients.</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-accent/30 to-transparent hidden md:block" style={{ transform: 'translateX(-50%)' }} />

              <div className="space-y-12">
                {milestones.map((m, index) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content card */}
                    <div className="w-full md:w-5/12">
                      <div className="glass rounded-2xl p-6 border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${m.gradient} shadow-lg`}>
                          <m.icon className="w-3.5 h-3.5" />
                          {m.year}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-xl z-10 shrink-0`}>
                      <m.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━ TECH STACK ━━ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                <Code className="w-3.5 h-3.5" />
                Our Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                Technology We
                <span className="gradient-text"> Master</span>
              </h2>
              <p className="text-xl text-muted-foreground">We leverage the best tools and technologies to build scalable, high-performance solutions.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((t, index) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 flex items-center gap-5 border border-white/5 group hover:-translate-y-1 transition-all duration-300 hover:border-primary/20"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <t.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{t.label}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ STATS ━━ */}
        <StatsCounter />

        {/* ━━ CTA ━━ */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 relative z-10">Ready to Build Something Great?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Whether you want to explore our existing products or need a custom solution — we're here to help turn your vision into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link to="/products">
                  <Button className="btn-primary group text-base px-8 py-5 h-auto rounded-2xl">
                    See Our Products
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="text-base px-8 py-5 h-auto rounded-2xl border-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
