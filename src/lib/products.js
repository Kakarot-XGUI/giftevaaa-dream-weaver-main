import alphabetKc99 from "@/assets/images/alphabetkc99.jpg";
import beeKc70 from "@/assets/images/beekc70.jpg";
import carDecor250 from "@/assets/images/cardecor250.jpg";
import carDecor300 from "@/assets/images/cardecor300.jpg";
import crochetBirds from "@/assets/images/crochet-birds.jpg";
import crochetRose from "@/assets/images/crochet-rose.jpg";
import flower250 from "@/assets/images/flower250.jpg";
import flower650 from "@/assets/images/flower650.jpg";
import flowerBouquet450 from "@/assets/images/flowerboquei450.jpg";
import flowerKc150 from "@/assets/images/flowerkc150.jpg";
import flowerKc99 from "@/assets/images/flowerkc99.jpg";
import flowers600 from "@/assets/images/flowers600.jpg";
import giftBox from "@/assets/images/gift-box.jpg";
import giftbox300 from "@/assets/images/giftbox300.jpg";
import giftbox400 from "@/assets/images/giftbox400.jpg";
import giftbox450 from "@/assets/images/giftbox450.jpg";
import heart200 from "@/assets/images/heart200.jpg";
import kc250 from "@/assets/images/kc250.jpg";
import keychain from "@/assets/images/Keychain.jpg";
import lip99 from "@/assets/images/lip99.jpg";
import puppetKc250 from "@/assets/images/puppetkc250.jpg";
import puppetKc251 from "@/assets/images/puppetkc251.jpg";
import scootyC150 from "@/assets/images/scootyc150.jpg";
import scootyC200 from "@/assets/images/scootyc200.jpg";
import scootyDecor150 from "@/assets/images/scootydecor150.jpg";
import starKc99 from "@/assets/images/starkc99.jpg";
import strawberryKeychains from "@/assets/images/strawberry-keychains.jpg";
import sunflowerBouque450 from "@/assets/images/sunflowerboque450.jpg";
import wflower250 from "@/assets/images/wflower250.jpg";
import woolPc350 from "@/assets/images/woolpc350.jpg";

const products = [
  { id: 1, title: "Teddy Keychain", description: "Handmade Teddy keychain — soft & cute", image: keychain, price: 120, category: "Keychain", rating: 4.8, reviews: 225 },
  { id: 2, title: "All Alphabet Keychain", description: "Custom alphabet keychain — personalize your keys", image: alphabetKc99, price: 99, category: "Keychain", rating: 4.7, reviews: 142 },
  { id: 3, title: "Bee Keychain", description: "Cute bee keychain — handcrafted with love", image: beeKc70, price: 70, category: "Keychain", rating: 4.6, reviews: 84 },
  { id: 4, title: "Car Decor Hanging", description: "Handmade car decor to brighten your ride", image: carDecor250, price: 250, category: "Deco", rating: 4.6, reviews: 47 },
  { id: 5, title: "Car Decor Set", description: "Stylish car decor — perfect gifting for Car Lover's", image: carDecor300, price: 300, category: "Mini Puppets", rating: 4.7, reviews: 58 },
  { id: 6, title: "Crochet Bird Pair", description: "Adorable crochet birds — cute miniature puppets", image: crochetBirds, price: 250, category: "keychain", rating: 4.9, reviews: 312 },
  { id: 7, title: "Cute Rose Bouquet", description: "Crochet flower bouquet — lasting love for Your Special One", image: crochetRose, price: 450, category: "Bouquet", rating: 4.7, reviews: 126 },
  { id: 8, title: "Flower Bunch ", description: "Handmade flower bunch — small & pretty", image: flower250, price: 250, category: "Bouquet", rating: 4.6, reviews: 92 },
  { id: 9, title: "Deluxe Flower Bunch", description: "Larger handcrafted bouquet for special days", image: flower650, price: 650, category: "Bouquet", rating: 4.8, reviews: 210 },
  { id: 10, title: "Bouquet Bomb 💖", description: "Cheerful flower bouquet — ideal for gifting", image: flowerBouquet450, price: 450, category: "Bouquet", rating: 4.7, reviews: 154 },
  { id: 11, title: "Flower Keychain", description: "Tiny flower keychain — cute accessory for Girl's", image: flowerKc150, price: 150, category: "Keychain", rating: 4.5, reviews: 68 },
  { id: 12, title: "Flower Keychain vol-2", description: "Budget-friendly flower keychain, You'll Loved it", image: flowerKc99, price: 99, category: "Keychain", rating: 4.4, reviews: 120 },
  { id: 13, title: "Flowers Luxury", description: "Premium handcrafted flowers bouquet, So Sassy 🔥", image: flowers600, price: 600, category: "Bouquet", rating: 4.9, reviews: 201 },
  { id: 14, title: "Gift Box Classic", description: "Curated hamper with tiny surprises inside", image: giftBox, price: 600, category: "Gift Hampers", rating: 4.9, reviews: 89 },
  { id: 15, title: "Gift Hamper", description: "Small gift box for sweet moments, This will Made Your Day", image: giftbox300, price: 300, category: "Gift Hampers", rating: 4.7, reviews: 42 },
  { id: 16, title: "Gift Hamper vol-2", description: "Medium gift box with handmade goodies", image: giftbox400, price: 400, category: "Gift Hampers", rating: 4.8, reviews: 61 },
  { id: 17, title: "Gift Hamper (450)", description: "Premium gift box — ready to surprise", image: giftbox450, price: 450, category: "Gift Hampers", rating: 4.9, reviews: 77 },
  { id: 18, title: "Heart Decor", description: "Soft heart keychain — affectionate", image: heart200, price: 200, category: "Deco", rating: 4.7, reviews: 198 },
  { id: 19, title: "Classic Keychain (250)", description: "Handmade classic keychain", image: kc250, price: 250, category: "Keychain", rating: 4.6, reviews: 110 },
  { id: 20, title: "Lip Guard Case", description: "Quirky lips Case — fun and cute", image: lip99, price: 99, category: "Deco", rating: 4.5, reviews: 88 },
  { id: 21, title: "Mini Puppet A", description: "Small crochet puppet — playful and soft", image: puppetKc250, price: 250, category: "keychain", rating: 4.8, reviews: 240 },
  { id: 22, title: "Mini Puppet B", description: "Cute little puppet to gift , She Gonna Love this", image: puppetKc251, price: 251, category: "Mini Puppets", rating: 4.9, reviews: 188 },
  { id: 23, title: "Scooty Charm", description: "Scooter hanging charm — decorative and bright", image: scootyC150, price: 150, category: "Deco", rating: 4.6, reviews: 53 },
  { id: 24, title: "Scooty Charm", description: "Larger scooter charm for stylish rides & Fun", image: scootyC200, price: 200, category: "Deco", rating: 4.6, reviews: 67 },
  { id: 25, title: "Scooty Decor", description: "Decorative scooty hang — handmade", image: scootyDecor150, price: 150, category: "Deco", rating: 4.5, reviews: 40 },
  { id: 26, title: "Star Keychain (99)", description: "Shiny star keychain to brighten up keys", image: starKc99, price: 99, category: "Keychain", rating: 4.5, reviews: 176 },
  { id: 27, title: "Sunflower Bouquet", description: "Bright  bouquet spreading happiness", image: sunflowerBouque450, price: 450, category: "Bouquet", rating: 4.8, reviews: 154 },
  { id: 28, title: "Woven Flower", description: "Handcrafted woven flower bouquet", image: wflower250, price: 250, category: "Bouquet", rating: 4.6, reviews: 97 },
  { id: 29, title: "Wooven Case", description: "Warm wool customized — soft and cozy", image: woolPc350, price: 350, category: "Deco", rating: 4.7, reviews: 131 },
  { id: 30, title: "Strawberry Keychains", description: "Set of cute strawberry keychains u'll Loved it", image: strawberryKeychains, price: 199, category: "Keychain", rating: 4.8, reviews: 145 },
  ];

export default products;
