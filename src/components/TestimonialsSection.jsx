import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    text: "The cutest keychains ever! 🥺💕 My friend loved the whale one I got for her birthday. Amazing quality!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya R.",
    text: "Ordered a surprise gift box for my mom and she cried happy tears! The packaging was so beautiful 🎁✨",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha M.",
    text: "The crochet bouquet is still sitting on my desk 6 months later, looking as pretty as day one! 🌸 Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-lavender/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blush/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-muted-foreground">Customer Love</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What Our Customers Say 💖
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real stories from real people who made someone's day special
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6 text-5xl text-primary/20 font-display">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blush/50 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
