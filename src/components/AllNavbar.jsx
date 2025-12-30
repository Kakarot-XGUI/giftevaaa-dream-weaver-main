import { Heart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/Logo.png";

const AllNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        // scrolling down
        setIsHidden(true);
      } else {
        // scrolling up
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navbar hides
  useEffect(() => {
    if (isHidden && isOpen) setIsOpen(false);
  }, [isHidden, isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Explore More" }
   
  ];

  return (
    <nav className={`fixed top-0 pb-1 left-0 right-0 bg-white shadow-sm z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={Logo} alt="Giftevaaa logo" className="h-10 w-auto rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300" loading="eager" decoding="sync" />
            <span className="font-display text-2xl text-foreground hidden sm:inline">Giftevaaa</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isInternal = link.href && link.href.startsWith('/');
              const Component = isInternal ? Link : 'a';
              return (
                <Component
                  key={link.href}
                  {...(isInternal ? { to: link.href } : { href: link.href })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Component>
              );
            })}
            <Button
  size="lg"
  asChild
  className="
    rounded-full
    bg-primary
    text-white
    hover:bg-primary/90
    shadow-soft
    hover:shadow-hover
    transition-all duration-300
    px-10
    min-w-[160px]
  "
>
  <a href="#products" className="text-center">
    Order Now 💝
  </a>
</Button>

          </div> 

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-lg py-4 border-2 border-dashed animate-fade-up">
            <div className="flex flex-col gap-4 items-center w-full">
              {navLinks.map((link) => {
                const isInternal = link.href && link.href.startsWith('/');
                const Component = isInternal ? Link : 'a';
                return (
                  <Component
                    key={link.href}
                    {...(isInternal ? { to: link.href } : { href: link.href })}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.label}
                  </Component>
                );
              })}
              <Button
  size="sm"
  asChild
  className="
    rounded-full
    bg-primary
    text-white
    hover:bg-primary/90
    shadow-soft
    hover:shadow-hover
    transition-all duration-300
  "
>
  <a href="#products">
    Order Now 💝
  </a>
</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AllNavbar;
