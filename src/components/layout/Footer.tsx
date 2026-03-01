import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
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

          {/* Our Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/schoolerp" className="text-background/70 hover:text-primary transition-colors">SchoolERP</Link>
              </li>
              <li>
                <Link to="/products/jago" className="text-background/70 hover:text-primary transition-colors">Jago</Link>
              </li>
              <li>
                <Link to="/products/attendance" className="text-background/70 hover:text-primary transition-colors">Attendance Manager</Link>
              </li>
              <li>
                <Link to="/products/more" className="text-background/70 hover:text-primary transition-colors">More Products</Link>
              </li>
            </ul>
          </div>

          {/* Future Projects */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Future Projects</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Matrimony App</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Food Delivery App</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Real Estate Script</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Directory Script</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Job Portal</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">E-commerce</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">Marriage Biodata</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services?view=website" className="text-background/70 hover:text-primary transition-colors block">Website Development</Link></li>
              <li><Link to="/services?view=ui-ux" className="text-background/70 hover:text-primary transition-colors block">UI/UX Design</Link></li>
              <li><Link to="/services?view=mobile" className="text-background/70 hover:text-primary transition-colors block">Mobile App Development</Link></li>
              <li><Link to="/services?view=marketing" className="text-background/70 hover:text-primary transition-colors block">Digital Marketing</Link></li>
              <li><Link to="/services?view=seo" className="text-background/70 hover:text-primary transition-colors block">SEO Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-background/50 text-xs font-semibold uppercase tracking-widest mb-2">Current Address</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-background/70 text-sm leading-relaxed">
                    4th Floor, Mayuri Tech Park,<br /> Mangalagiri, Andhra Pradesh 522503
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@mindwhile.com" className="text-background/70 hover:text-primary transition-colors">
                  info@mindwhile.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+917995526153" className="text-background/70 hover:text-primary transition-colors">
                  +91 79955 26153
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Registered Address */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-background/10">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-background/50 text-xs font-semibold uppercase tracking-widest">Registered Office</span>
            </div>
            <span className="text-background/60 text-sm text-center">
              D.No 4-1583/1, Podili Road, Darsi-523247, Prakasam, Andhra Pradesh, India
            </span>
          </div>
          <p className="text-center text-background/50">&copy; Copyright {new Date().getFullYear()} Mindwhile IT Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
