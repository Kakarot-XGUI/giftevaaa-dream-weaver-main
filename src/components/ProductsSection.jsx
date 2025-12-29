import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";

import crochetBirds from "@/assets/crochet-birds.jpg";
import crochetRose from "@/assets/crochet-rose.jpg";
import giftBox from "@/assets/gift-box.jpg";
import strawberryKeychains from "@/assets/strawberry-keychains.jpg";

const products = [
  {
    id: 1,
    title: "Crochet Keychains",
    description: "Adorable handmade keychains — hearts, animals & cute shapes",
    image: strawberryKeychains,
    bgColor: "bg-blush/30",
  },
  {
    id: 2,
    title: "Mini Puppets",
    description: "Cuddly soft toys & mini plushies, perfect for gifting",
    image: crochetBirds,
    bgColor: "bg-baby-blue/30",
  },
  {
    id: 3,
    title: "Flower Bouquets",
    description: "Everlasting crochet flowers wrapped with love",
    image: crochetRose,
    bgColor: "bg-lavender/30",
  },
  {
    id: 4,
    title: "Birthday Gift Boxes",
    description: "Curated surprise hampers for your special ones",
    image: giftBox,
    bgColor: "bg-cream",
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blush/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-lavender/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Collection
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Handcrafted with Love 🧶
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is unique, made with care, and ready to become someone's
            favorite gift
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div
                className={`relative aspect-square ${product.bgColor} overflow-hidden`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
               <Button
  size="sm"
  asChild
  className="
    w-full
    rounded-full
    bg-white
    text-primary
    border border-primary
    hover:bg-primary
    hover:text-white
    transition-all duration-300
    shadow-soft
  "
>
  <a
    href="https://wa.me/9785240147"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2"
  >
    <MessageCircle className="w-4 h-4" />
    Enquire Now
  </a>
</Button>

              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="
      rounded-full
      px-10
      bg-primary
      text-white
      hover:bg-primary/90
      shadow-soft
      hover:shadow-hover
      transition-all duration-300
    "
          >
            <a
              href="https://www.instagram.com/giftevaaaa/?utm_source=qr&igsh=MWg0bXkwM201OW14ZA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on Instagram ✨
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
