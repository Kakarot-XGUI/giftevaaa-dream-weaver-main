import keychain from "@/assets/images/Keychain.jpg";
import crochetRose from "@/assets/images/crochet-rose.jpg";
import giftBox from "@/assets/images/gift-box.jpg";
import strawberryKeychains from "@/assets/images/strawberry-keychains.jpg";

const products = [
  {
    id: 1,
    title: "Strawberry Keychain",
    description: "Handmade strawberry keychain — soft & cute",
    image: keychain,
    price: 120,
    category: "Keychain",
    rating: 4.8,
    reviews: 225,
  },
  {
    id: 2,
    title: "Mini Crochet Bird",
    description: "Tiny cuddly puppet for desk buddies & more",
    image: strawberryKeychains,
    price: 15.0,
    category: "Mini Puppets",
    rating: 4.9,
    reviews: 430,
  },
  {
    id: 3,
    title: "Everlasting Rose Bouquet",
    description: "Crochet flower bouquet — lasting love",
    image: crochetRose,
    price: 120.0,
    category: "Bouquet",
    rating: 4.7,
    reviews: 126,
  },
  {
    id: 4,
    title: "Birthday Gift Box",
    description: "Curated hamper with tiny surprises inside you'll love",
    image: giftBox,
    price: 600.0,
    category: "Gift Hampers",
    rating: 4.9,
    reviews: 89,
  },
];

export default products;
