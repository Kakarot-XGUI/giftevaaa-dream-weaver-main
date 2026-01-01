import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/AllNavbar";
import Footer from "@/components/Footer";
import productsData from "@/lib/products";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
  const { id } = useParams();
  const pid = Number(id);

  const product = useMemo(() => productsData.find((p) => p.id === pid), [pid]);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product not found - Giftevaaa</title>
        </Helmet>
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-4">Product not found</h1>
            <p className="text-muted-foreground mb-6">We couldn't find the product you were looking for.</p>
            <Link to="/products">
              <Button className="rounded-full">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Giftevaaa</title>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-12 mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-xl overflow-hidden shadow-card">
            <img src={product.image} alt={product.title} className="w-full object-cover object-center" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-5 h-5" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <div className="text-sm text-muted-foreground">({product.reviews} reviews)</div>
            </div>

            <div className="text-2xl font-bold">₹ {product.price}</div>
            <div className="text-sm text-muted-foreground">Category: {product.category}</div>

            <p className="text-muted-foreground mt-4">{product.description}</p>

            <div className="flex gap-3 mt-6">
              <Button asChild className="rounded-full bg-primary text-white">
                <a href="https://wa.me/+919785240147" target="_blank" rel="noopener noreferrer">Enquire Now</a>
              </Button>

              <Link to="/products">
                <Button variant="outline" className="rounded-full">Back to Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Product;
