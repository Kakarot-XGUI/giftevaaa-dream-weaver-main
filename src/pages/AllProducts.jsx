import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/AllNavbar";
import Footer from "@/components/Footer";
import productsData from "@/lib/products";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = ["Keychain", "Bouquet", "Gift Hampers", "Mini Puppets"];

const AllProducts = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productsData.filter((p) => {
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(p.category);
      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategories]);

  return (
    <>
      <Helmet>
        <title>All Products - Giftevaaa</title>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-12 mt-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl mb-2">All Products</h1>
          <p className="text-muted-foreground">Search, filter and discover all our handmade gifts</p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search products, e.g. keychain, bouquet, box..."
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-4 py-2 rounded-full border ${selectedCategories.has(cat) ? "bg-primary text-white border-primary" : "bg-card text-muted-foreground border-border"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="bg-white rounded-xl shadow-card border-2 border-dashed border-border p-4">
              <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium">{p.rating}</span>
                    </div>
                    <span>({p.reviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-foreground font-bold text-lg">₹ {p.price}</div>
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground my-3 line-clamp-2">{p.description}</p>

              <div className="flex gap-3">
                <Button asChild size="sm" className="flex-1 rounded-full bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-200">
                  <a href="https://wa.me/+919785240147" target="_blank" rel="noopener noreferrer">Enquire Me</a>
                </Button>
                <Link to={`/products/${p.id}`} className="px-4 py-2 rounded-full bg-primary text-white text-sm">View</Link>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-12">No products found.</div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AllProducts;
