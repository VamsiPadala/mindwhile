import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-start leading-none gap-[2px] mb-6">
              <span className="font-sans font-extrabold text-2xl tracking-widest text-primary uppercase">MINDWHILE</span>
              <span className="font-sans font-semibold text-[10px] tracking-[0.15em] text-foreground/70 uppercase">IT Solutions Pvt.Ltd</span>
            </div>
            <p className="text-background/70 mb-6">
              Transforming businesses with innovative IT solutions since 2021. Your trusted partner for digital excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-background/70 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-background/70">Website Development</li>
              <li className="text-background/70">UI/UX Design</li>
              <li className="text-background/70">Mobile App Development</li>
              <li className="text-background/70">Digital Marketing</li>
              <li className="text-background/70">SEO Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  4th Floor, Mayuri Tech Park,<br /> Mangalagiri, Andhra Pradesh 522503
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@mindwhile.com" className="text-background/70 hover:text-primary transition-colors">
                  info@mindwhile.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919494022475" className="text-background/70 hover:text-primary transition-colors">
                  +91 94940 22475
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50">
          <p>&copy; {new Date().getFullYear()} Mindwhile IT Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
