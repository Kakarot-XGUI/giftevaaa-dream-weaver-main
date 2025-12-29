import { Button } from "@/components/ui/button";
import { Heart, Sparkles, MessageCircle } from "lucide-react";
import Logo from "@/assets/Logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blush/40 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-lavender/40 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-baby-blue/40 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-blush/30 rounded-full blur-xl animate-float-delayed" />
      
      {/* Floating Hearts */}
      <Heart className="absolute top-1/4 left-[15%] w-8 h-8 text-primary/30 fill-primary/20 animate-float" />
      <Heart className="absolute top-1/3 right-[20%] w-6 h-6 text-accent/40 fill-accent/20 animate-float-delayed" />
      <Sparkles className="absolute bottom-1/3 left-[25%] w-6 h-6 text-soft-pink/50 animate-pulse-soft" />

      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Handmade with Love</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          {/* Brand Mark */}
          <img src={Logo} alt="Giftevaaa logo" className="mx-auto h-20 w-auto mb-6 opacity-95 drop-shadow-md animate-fade-up" loading="lazy" decoding="async" />

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Handmade Gifts That Speak From the Heart 💝
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Cute keychains, mini puppets & handcrafted bouquets — perfect for birthdays & special moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
           <Button
  size="xl"
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
    Explore Gifts ✨
  </a>
</Button>

            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/9785240147" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🧶</span>
              <span className="text-sm font-medium">100% Handmade</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🎁</span>
              <span className="text-sm font-medium">Gift Ready</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">💖</span>
              <span className="text-sm font-medium">Made to Order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
