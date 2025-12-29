import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#how-to-order", label: "Order" },
    { href: "#testimonials", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={Logo} alt="Giftevaaa logo" className="h-10 w-auto rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300" loading="eager" decoding="sync" />
            <span className="font-display text-2xl text-foreground hidden sm:inline">Giftevaaa</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
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
  "
>
  <a href="#products">
    Order Now 💝
  </a>
</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
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

export default Navbar;
