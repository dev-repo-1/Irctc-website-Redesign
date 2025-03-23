
import { useState, useEffect } from 'react';
import { Menu, X, User, Search, Train } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <Train className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">IRCTC</span>
          <span className="text-xs font-light text-primary/70 hidden sm:inline">Reimagined</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/trains" className="text-sm font-medium hover:text-primary transition-colors">Trains</Link>
          <Link to="/pnr" className="text-sm font-medium hover:text-primary transition-colors">PNR Status</Link>
          <Link to="/holidays" className="text-sm font-medium hover:text-primary transition-colors">Holidays</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="default" size="sm" className="rounded-full">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-4 border-t border-gray-100 animate-slide-in-bottom">
          <nav className="flex flex-col space-y-4 pt-2 pb-6">
            <Link to="/" className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/trains" className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Trains</Link>
            <Link to="/pnr" className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>PNR Status</Link>
            <Link to="/holidays" className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Holidays</Link>
            <Link to="/contact" className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Button className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
