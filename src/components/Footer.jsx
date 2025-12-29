import { Heart, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-foreground">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={Logo} alt="Giftevaaa logo" className="h-20 w-auto rounded-md shadow-sm" loading="lazy" decoding="async" />
            <span className="font-display text-3xl hidden sm:inline">Giftevaaa</span>
          </div>

          {/* Tagline */}
          <p className="text-lg text-primary-foreground/80 mb-8 italic">
            "Made with love, gifted with emotions." 💝
          </p>

{/* Social Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
  
  {/* WhatsApp Button */}
  <Button
    size="lg"
    asChild
    className="
      rounded-full px-8 py-6
      bg-gradient-to-r from-emerald-400 to-green-500
      text-white
      shadow-soft
      hover:shadow-hover
      hover:scale-105
      transition-all duration-300
    "
  >
    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <MessageCircle className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  </Button>

  {/* Instagram Button */}
  <Button
    size="lg"
    asChild
    className="
      rounded-full px-8 py-6
      bg-white/10 backdrop-blur-md
      border border-white/25
      text-primary-foreground
      shadow-soft
      hover:bg-white/20
      hover:border-white/40
      hover:shadow-hover
      hover:scale-105
      transition-all duration-300
    "
  >
    <a href="https://www.instagram.com/giftevaaaa/?utm_source=qr&igsh=MWg0bXkwM201OW14ZA%3D%3D#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <Instagram className="w-5 h-5" />
      Follow on Instagram
    </a>
  </Button>


</div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70 mb-8">
            <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            <a href="#products" className="hover:text-primary transition-colors duration-300">Products</a>
            <a href="#why-us" className="hover:text-primary transition-colors duration-300">Why Us</a>
            <a href="#how-to-order" className="hover:text-primary transition-colors duration-300">How to Order</a>
            <a href="#testimonials" className="hover:text-primary transition-colors duration-300">Reviews</a>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-primary-foreground/20 mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Giftevaaa. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            Handmade with 🧶 in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
