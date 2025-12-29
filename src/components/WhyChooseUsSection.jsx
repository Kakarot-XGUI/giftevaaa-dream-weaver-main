import { Heart, Gift, Sparkles, Wallet } from "lucide-react";

const features = [
  {
    icon: Heart,
    emoji: "🧶",
    title: "100% Handmade with Love",
    description: "Every stitch is crafted by hand with genuine care and passion",
    bgColor: "bg-blush/40",
    iconColor: "text-primary",
  },
  {
    icon: Gift,
    emoji: "🎁",
    title: "Perfect for Gifting",
    description: "Beautifully packaged and ready to make someone's day special",
    bgColor: "bg-lavender/40",
    iconColor: "text-accent",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    title: "Customizable Designs",
    description: "Tell us your vision, and we'll bring it to life just for you",
    bgColor: "bg-baby-blue/40",
    iconColor: "text-soft-pink",
  },
  {
    icon: Wallet,
    emoji: "💖",
    title: "Affordable & Premium",
    description: "High-quality craftsmanship that doesn't break the bank",
    bgColor: "bg-cream",
    iconColor: "text-rose",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-blush/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-lavender/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="text-lg">💕</span>
            <span className="text-sm font-medium text-muted-foreground">Why Giftevaaa?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Us
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're not just selling gifts — we're creating memories
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 bg-card rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{feature.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
