import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FloatingLines from '@/components/ui/FloatingLines';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Giftevaaa Founded by Avantika");
  console.log("Giftevaaa Website - Created by The Team Dominator's => Ishit, Vanshika, Ayush, Nidhi & Sakshi");
  return (
    <>
      <Helmet>
        <title>Giftevaaa - Handmade Gifts That Speak From the Heart 💝</title>
        <meta
          name="description"
          content="Discover cute handmade crochet keychains, mini puppets, flower bouquets & personalized gift boxes. Perfect for birthdays & special moments. Order on WhatsApp!"
        />
        <meta
          name="keywords"
          content="handmade gifts, crochet keychains, birthday gifts, gift boxes, handmade bouquets, personalized gifts, cute keychains, handmade India"
        />
        <meta property="og:title" content="Giftevaaa - Handmade Gifts That Speak From the Heart" />
        <meta
          property="og:description"
          content="Cute handmade crochet keychains, mini puppets & gift boxes. Made with love, gifted with emotions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://giftevaaa.com" />
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
          <FloatingLines
            enabledWaves={["middle","bottom","top"]}
            lineDistance={19}
            bendStrength={2}
            parallaxStrength={0.35}
          />
        </div>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <HowToOrderSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
