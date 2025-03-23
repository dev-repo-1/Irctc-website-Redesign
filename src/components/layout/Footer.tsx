
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-xl font-bold">IRCTC</h3>
              <span className="text-xs font-light text-primary/70">Reimagined</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              A modern approach to train travel across India with seamless bookings and real-time updates.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/trains" className="text-muted-foreground hover:text-primary transition-colors">Find Trains</Link>
              </li>
              <li>
                <Link to="/pnr" className="text-muted-foreground hover:text-primary transition-colors">PNR Status</Link>
              </li>
              <li>
                <Link to="/holidays" className="text-muted-foreground hover:text-primary transition-colors">Holiday Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/trains" className="text-muted-foreground hover:text-primary transition-colors">Train Tickets</Link>
              </li>
              <li>
                <Link to="/tatkal" className="text-muted-foreground hover:text-primary transition-colors">Tatkal Booking</Link>
              </li>
              <li>
                <Link to="/e-catering" className="text-muted-foreground hover:text-primary transition-colors">E-Catering</Link>
              </li>
              <li>
                <Link to="/tourism" className="text-muted-foreground hover:text-primary transition-colors">Tourism</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-muted-foreground hover:text-primary transition-colors">Hotel Bookings</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">Indian Railways, New Delhi, 110001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">+91 139</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">care@irctc.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IRCTC Reimagined. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
