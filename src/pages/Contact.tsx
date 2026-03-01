import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSuccess(true);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Start a
                <span className="gradient-text block">Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear about it. Get in touch and let's
                discuss how we can help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Contact Info (Moved to left for better reading flow if desired, or keep form left. Let's keep info left, form right, or simply upgrade inplace). Keeping Form Left: */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="glass rounded-[2rem] p-8 md:p-10 relative bg-card/80 backdrop-blur-3xl border border-white/10 shadow-2xl">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Your Name *
                          </label>
                          <Input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-14 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-14 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-14 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            placeholder="Project Discussion"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            className="h-14 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Message *
                        </label>
                        <Textarea
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          className="rounded-xl bg-background/50 border-border focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full h-14 text-lg group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full justify-center lg:pl-8"
              >
                <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Feel free to reach out through any of the following channels.
                </p>

                <div className="space-y-6 mb-10">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-6 p-6 glass rounded-2xl group border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 text-lg">Our Office</h4>
                      <p className="text-muted-foreground">
                        4th Floor, Mayuri Tech Park,<br />
                        Mangalagiri, AP 522503
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-6 p-6 glass rounded-2xl group border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground mb-1 text-lg">Email Us</h4>
                      <a href="mailto:info@mindwhile.com" className="text-primary group-hover:text-purple-500 transition-colors text-lg font-medium">
                        info@mindwhile.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-6 p-6 glass rounded-2xl group border border-white/5 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground mb-1 text-lg">Call Us</h4>
                      <a href="tel:+917995526153" className="text-primary group-hover:text-emerald-500 transition-colors text-lg font-medium font-mono">
                        +91 79955 26153
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9am-6pm IST</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, href: '#' },
                      { icon: Twitter, href: '#' },
                      { icon: Linkedin, href: '#' },
                      { icon: Instagram, href: '#' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ y: -3 }}
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <social.icon className="w-5 h-5 text-foreground" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Google Map */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden h-[450px] md:h-[500px] bg-secondary/30 relative glass border border-border/50 shadow-2xl group"
            >
              {/* Added Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.965777717616!2d80.5613674!3d16.4265492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f6b505eda9a7%3A0x78bc4cda0a07679e!2sMayuri%20Tech%20Park!5e0!3m2!1sen!2sin!4v1716382902931!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10 w-full h-full transition-all duration-700 group-hover:filter-none"
              ></iframe>

              {/* Decorative overlay edge glow */}
              <div className="absolute inset-0 pointer-events-none border-[6px] border-white/10 dark:border-black/10 rounded-3xl z-20 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
