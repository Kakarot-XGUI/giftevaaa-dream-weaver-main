import { Gift, Palette, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Gift,
    title: "Choose Your Gift",
    description: "Browse our collection and pick the perfect handmade item for your loved one",
    emoji: "🎁",
  },
  {
    number: "02",
    icon: Palette,
    title: "Customize If Needed",
    description: "Want specific colors or personal touches? Just let us know your preferences",
    emoji: "🎨",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Order via WhatsApp",
    description: "Message us directly on WhatsApp or Instagram to place your order",
    emoji: "💬",
  },
];

const HowToOrderSection = () => {
  return (
    <section id="how-to-order" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blush/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-lavender/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6">
            <span className="text-lg">📦</span>
            <span className="text-sm font-medium text-muted-foreground">Simple Process</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            How to Order
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Getting your handmade gift is as easy as 1-2-3!
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card rounded-3xl p-8 text-center shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-soft">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-blush/40 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5">
                      <span className="text-3xl">{step.emoji}</span>
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (between cards on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Start Your Order Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
