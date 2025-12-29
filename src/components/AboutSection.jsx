import { Heart, Gift, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blush/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-muted-foreground">Our Story</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
            About Giftevaaa
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every gift tells a story, and at <span className="text-primary font-semibold">Giftevaaa</span>, 
            we believe the best stories are crafted by hand. What started as a passion for crochet and 
            handmade crafts has blossomed into a journey of creating memorable gifts that touch hearts.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Each piece we create is infused with love, patience, and attention to detail. Whether it's 
            a tiny crochet keychain, a soft mini puppet, or a beautifully arranged gift box — we pour 
            our hearts into every stitch and every bow. 💕
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blush/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every item is handcrafted with genuine care and attention
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-lavender/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Perfect for Gifting</h3>
              <p className="text-sm text-muted-foreground">
                Thoughtfully designed to create unforgettable moments
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-baby-blue/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-soft-pink" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Unique Designs</h3>
              <p className="text-sm text-muted-foreground">
                One-of-a-kind pieces that you won't find anywhere else
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
