
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "smartphone" | "earbuds";
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  features: string[];
  image: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  colors?: string[];
}

export const products: Product[] = [
  // Smartphones
  {
    id: "samsung-galaxy-s23",
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "smartphone",
    price: 124999,
    originalPrice: 149999,
    discount: 17,
    description: "The ultimate flagship phone with S-Pen support and 200MP camera",
    features: [
      "200MP camera system",
      "12GB RAM + 256GB storage",
      "6.8-inch Dynamic AMOLED display",
      "5000mAh battery",
      "S-Pen included"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 1245,
    colors: ["Phantom Black", "Green", "Cream", "Lavender"]
  },
  {
    id: "samsung-galaxy-s22",
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    category: "smartphone",
    price: 54999,
    originalPrice: 69999,
    discount: 21,
    description: "Compact flagship with powerful camera system",
    features: [
      "50MP camera system",
      "8GB RAM + 128GB storage",
      "6.1-inch Dynamic AMOLED display",
      "3700mAh battery"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 890,
    colors: ["Phantom Black", "Green", "Pink Gold"]
  },
  {
    id: "realme-gt-neo-3",
    name: "Realme GT Neo 3",
    brand: "Realme",
    category: "smartphone",
    price: 29999,
    originalPrice: 38999,
    discount: 23,
    description: "Fast charging flagship killer with 150W UltraDart charging",
    features: [
      "MediaTek Dimensity 8100 5G",
      "8GB RAM + 128GB storage",
      "6.7-inch 120Hz AMOLED display", 
      "5000mAh battery with 150W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 756,
    colors: ["Nitro Blue", "Sprint White", "Asphalt Black"]
  },
  {
    id: "realme-11-pro",
    name: "Realme 11 Pro+ 5G",
    brand: "Realme",
    category: "smartphone",
    price: 27999,
    originalPrice: 31999,
    discount: 12,
    description: "Best-in-class camera smartphone with 200MP SuperZoom camera",
    features: [
      "MediaTek Dimensity 7050 5G",
      "12GB RAM + 256GB storage",
      "6.7-inch curved AMOLED display",
      "5000mAh battery with 67W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 560,
    colors: ["Sunrise Beige", "Oasis Green", "Astral Black"]
  },
  {
    id: "oppo-reno-10-pro",
    name: "OPPO Reno 10 Pro+ 5G",
    brand: "OPPO",
    category: "smartphone",
    price: 54999,
    description: "Portrait expert with periscope telephoto camera",
    features: [
      "Snapdragon 8+ Gen 1",
      "12GB RAM + 256GB storage",
      "6.7-inch curved AMOLED display",
      "4700mAh battery with 80W SuperVOOC charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 320,
    colors: ["Glossy Purple", "Silvery Grey"]
  },
  {
    id: "oppo-f23",
    name: "OPPO F23 5G",
    brand: "OPPO",
    category: "smartphone",
    price: 24999,
    originalPrice: 28999,
    discount: 14,
    description: "Stylish mid-ranger with excellent battery life",
    features: [
      "Snapdragon 695 5G",
      "8GB RAM + 128GB storage",
      "6.72-inch FHD+ display",
      "5000mAh battery with 67W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 268,
    colors: ["Bold Gold", "Cool Black"]
  },
  {
    id: "asus-rog-phone-7",
    name: "ASUS ROG Phone 7 Ultimate",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 119999,
    description: "The ultimate gaming smartphone with AeroActive Cooler",
    features: [
      "Snapdragon 8 Gen 2",
      "16GB RAM + 512GB storage",
      "6.78-inch 165Hz AMOLED display",
      "6000mAh dual battery with 65W charging",
      "AeroActive Cooler 7 included"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviewCount: 145,
    colors: ["Storm White"]
  },
  {
    id: "asus-rog-phone-6",
    name: "ASUS ROG Phone 6",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    description: "High-performance gaming phone with GameCool 6 cooling system",
    features: [
      "Snapdragon 8+ Gen 1",
      "12GB RAM + 256GB storage",
      "6.78-inch 165Hz AMOLED display",
      "6000mAh battery with 65W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 256,
    colors: ["Phantom Black", "Storm White"]
  },
  {
    id: "tecno-pova-5-pro",
    name: "Tecno Pova 5 Pro 5G",
    brand: "Tecno",
    category: "smartphone",
    price: 14999,
    originalPrice: 16999,
    discount: 12,
    description: "Budget performance phone with RGB lights",
    features: [
      "MediaTek Dimensity 6080",
      "8GB RAM + 128GB storage",
      "6.78-inch FHD+ display",
      "5000mAh battery with 68W charging",
      "RGB Arc Interface lighting system"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2,
    reviewCount: 189,
    colors: ["Dark Illusion", "Silver Fantasy"]
  },
  {
    id: "tecno-phantom-v-fold",
    name: "Tecno Phantom V Fold",
    brand: "Tecno",
    category: "smartphone",
    price: 84999,
    originalPrice: 89999,
    discount: 5,
    description: "Affordable foldable flagship with large displays",
    features: [
      "MediaTek Dimensity 9000+",
      "12GB RAM + 256GB storage",
      "7.85-inch AMOLED main display, 6.42-inch cover display",
      "5000mAh battery with 45W charging"
    ],
    image: "/placeholder.svg",
    inStock: false,
    rating: 4.3,
    reviewCount: 78,
    colors: ["Black"]
  },
  {
    id: "samsung-galaxy-a54",
    name: "Samsung Galaxy A54 5G",
    brand: "Samsung",
    category: "smartphone",
    price: 34999,
    originalPrice: 38999,
    discount: 10,
    description: "Premium mid-ranger with excellent camera and display",
    features: [
      "Exynos 1380",
      "8GB RAM + 128GB storage",
      "6.4-inch Super AMOLED display",
      "5000mAh battery with 25W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 430,
    colors: ["Awesome Lime", "Awesome Graphite", "Awesome Violet"]
  },
  {
    id: "samsung-galaxy-m34",
    name: "Samsung Galaxy M34 5G",
    brand: "Samsung",
    category: "smartphone",
    price: 16999,
    originalPrice: 20999,
    discount: 19,
    description: "Monster battery phone with smooth performance",
    features: [
      "Exynos 1280",
      "6GB RAM + 128GB storage",
      "6.5-inch Super AMOLED display",
      "6000mAh battery with 25W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 640,
    colors: ["Midnight Blue", "Prism Silver", "Waterfall Blue"]
  },
  {
    id: "realme-c53",
    name: "Realme C53",
    brand: "Realme",
    category: "smartphone",
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    description: "Budget champion with premium design",
    features: [
      "Unisoc T612",
      "6GB RAM + 64GB storage",
      "6.74-inch display",
      "5000mAh battery with 18W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2,
    reviewCount: 760,
    colors: ["Champion Gold", "Mighty Black"]
  },
  {
    id: "realme-narzo-60-pro",
    name: "Realme Narzo 60 Pro",
    brand: "Realme",
    category: "smartphone",
    price: 23999,
    originalPrice: 29999,
    discount: 20,
    description: "Performance-focused phone with premium vegan leather design",
    features: [
      "MediaTek Dimensity 7050 5G",
      "8GB RAM + 128GB storage",
      "6.7-inch curved AMOLED display",
      "5000mAh battery with 67W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 285,
    colors: ["Mars Orange", "Cosmic Black"]
  },
  {
    id: "oppo-a78",
    name: "OPPO A78 5G",
    brand: "OPPO",
    category: "smartphone",
    price: 18999,
    originalPrice: 21999,
    discount: 14,
    description: "Stylish mid-range phone with fast charging",
    features: [
      "MediaTek Dimensity 700",
      "8GB RAM + 128GB storage",
      "6.56-inch HD+ display",
      "5000mAh battery with 33W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.1,
    reviewCount: 195,
    colors: ["Glowing Black", "Glowing Blue"]
  },
  {
    id: "oppo-a18",
    name: "OPPO A18",
    brand: "OPPO",
    category: "smartphone",
    price: 9999,
    originalPrice: 11999,
    discount: 17,
    description: "Entry-level phone with dual speakers",
    features: [
      "MediaTek Helio G85",
      "4GB RAM + 64GB storage",
      "6.56-inch HD+ display",
      "5000mAh battery"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.0,
    reviewCount: 124,
    colors: ["Glowing Black", "Glowing Blue"]
  },
  {
    id: "asus-zenfone-9",
    name: "ASUS Zenfone 9",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 59999,
    originalPrice: 69999,
    discount: 14,
    description: "Compact flagship with excellent performance",
    features: [
      "Snapdragon 8+ Gen 1",
      "8GB RAM + 128GB storage",
      "5.9-inch AMOLED display",
      "4300mAh battery with 30W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 180,
    colors: ["Midnight Black", "Starry Blue", "Sunset Red"]
  },
  {
    id: "tecno-camon-20-premier",
    name: "Tecno Camon 20 Premier 5G",
    brand: "Tecno",
    category: "smartphone",
    price: 27999,
    originalPrice: 32999,
    discount: 15,
    description: "Camera-focused phone with unique design",
    features: [
      "MediaTek Dimensity 8050",
      "8GB RAM + 512GB storage",
      "6.67-inch curved AMOLED display",
      "5000mAh battery with 45W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2,
    reviewCount: 95,
    colors: ["Serenity Blue", "Predawn Black"]
  },
  {
    id: "tecno-spark-10",
    name: "Tecno Spark 10 5G",
    brand: "Tecno",
    category: "smartphone",
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    description: "Budget 5G phone with large display",
    features: [
      "MediaTek Dimensity 6020",
      "8GB RAM + 128GB storage",
      "6.6-inch display",
      "5000mAh battery with 18W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.0,
    reviewCount: 156,
    colors: ["Meta Blue", "Starry Black"]
  },
  {
    id: "samsung-galaxy-z-fold5",
    name: "Samsung Galaxy Z Fold5",
    brand: "Samsung",
    category: "smartphone",
    price: 154999,
    originalPrice: 164999,
    discount: 6,
    description: "Premium foldable flagship with S-Pen support",
    features: [
      "Snapdragon 8 Gen 2 for Galaxy",
      "12GB RAM + 256GB storage",
      "7.6-inch main display, 6.2-inch cover display",
      "4400mAh battery with 25W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 120,
    colors: ["Icy Blue", "Phantom Black", "Cream"]
  },

  // Earbuds
  {
    id: "boat-airdopes-141",
    name: "boAt Airdopes 141",
    brand: "boAt",
    category: "earbuds",
    price: 1499,
    originalPrice: 4490,
    discount: 67,
    description: "True Wireless Earbuds with 42H Playtime and ENx™ Tech",
    features: [
      "42 hours total playtime",
      "ENx™ Technology",
      "BEAST™ Mode for low latency",
      "IPX4 water resistance",
      "Type-C charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 3456,
    colors: ["Bold Black", "Pure White", "Cyan Bliss", "Red Heat"]
  },
  {
    id: "boat-airdopes-161",
    name: "boAt Airdopes 161",
    brand: "boAt",
    category: "earbuds",
    price: 1099,
    originalPrice: 2490,
    discount: 56,
    description: "True Wireless Earbuds with ASAP™ Charge",
    features: [
      "40 hours total playtime",
      "ASAP™ Charge (10 min = 90 min playback)",
      "IWP™ Technology",
      "IPX5 water resistance",
      "Type-C charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2,
    reviewCount: 2987,
    colors: ["Pearl White", "Pebble Black", "Spirit Blue"]
  },
  {
    id: "jbl-tune-235nc",
    name: "JBL Tune 235NC TWS",
    brand: "JBL",
    category: "earbuds",
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    description: "True Wireless Active Noise Cancelling Earbuds",
    features: [
      "Active Noise Cancellation",
      "40 hours battery life with ANC off",
      "JBL Pure Bass Sound",
      "4-mic technology for calls",
      "Smart Ambient & TalkThru technology"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 1243,
    colors: ["Black", "White"]
  },
  {
    id: "jbl-wave-200tws",
    name: "JBL Wave 200TWS",
    brand: "JBL",
    category: "earbuds",
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    description: "True Wireless Earbuds with Deep Bass",
    features: [
      "JBL Deep Bass Sound",
      "20 hours total playtime",
      "Dual Connect",
      "Voice Assistant compatible",
      "Ergonomic fit"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 870,
    colors: ["Black", "Blue", "White"]
  },
  {
    id: "realme-buds-air-5",
    name: "Realme Buds Air 5",
    brand: "Realme",
    category: "earbuds",
    price: 3699,
    originalPrice: 4999,
    discount: 26,
    description: "50dB Active Noise Cancellation, 12.4mm Dynamic Bass Boost Driver",
    features: [
      "50dB Active Noise Cancellation",
      "12.4mm Dynamic Bass Boost Driver",
      "Dual device connection",
      "Up to 38 hours total playtime",
      "10 mins charge = 7 hours playback"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 560,
    colors: ["Deep Blue", "White"]
  },
  {
    id: "realme-buds-t300",
    name: "Realme Buds T300",
    brand: "Realme",
    category: "earbuds",
    price: 2299,
    originalPrice: 3299,
    discount: 30,
    description: "True Wireless Earbuds with 12.4mm Dynamic Bass Boost Driver",
    features: [
      "12.4mm Dynamic Bass Boost Driver",
      "Active Noise Cancellation up to 30dB",
      "Up to 40 hours total playtime",
      "10 minutes charge = 6 hours playback",
      "IP55 water & dust resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.1,
    reviewCount: 432,
    colors: ["Stylish Black", "Youth White"]
  },
  {
    id: "airpods-pro-2nd-gen",
    name: "Apple AirPods Pro (2nd generation)",
    brand: "Apple",
    category: "earbuds",
    price: 24900,
    originalPrice: 26900,
    discount: 7,
    description: "Premium true wireless earbuds with advanced active noise cancellation",
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "Adaptive EQ",
      "Spatial Audio with dynamic head tracking",
      "Up to 30 hours of listening time",
      "MagSafe Charging Case with speaker & lanyard loop"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 890,
    colors: ["White"]
  },
  {
    id: "airpods-3rd-gen",
    name: "Apple AirPods (3rd generation)",
    brand: "Apple",
    category: "earbuds",
    price: 19900,
    description: "Wireless earbuds with spatial audio",
    features: [
      "Spatial Audio with dynamic head tracking",
      "Adaptive EQ",
      "Force sensor controls",
      "Up to 30 hours total listening time",
      "Water and sweat resistant"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 765,
    colors: ["White"]
  },
  {
    id: "boat-airdopes-200-plus",
    name: "boAt Airdopes 200+",
    brand: "boAt",
    category: "earbuds",
    price: 1799,
    originalPrice: 5990,
    discount: 70,
    description: "True Wireless Earbuds with INR Control & 100 Hours Playback",
    features: [
      "100 hours total playtime",
      "Quad Mics with ENx™ Technology",
      "BEAST™ Mode (50ms Low Latency)",
      "ASAP™ Charge (10 mins = 3 hours)",
      "IN-R Control"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 1289,
    colors: ["Active Black", "Calm White"]
  },
  {
    id: "jbl-tune-130nc",
    name: "JBL Tune 130NC",
    brand: "JBL",
    category: "earbuds",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    description: "True Wireless In-Ear Noise Cancelling Earbuds",
    features: [
      "Active Noise Cancellation with Smart Ambient",
      "JBL Pure Bass Sound",
      "Up to 40 hours battery life",
      "4-mic technology for perfect calls",
      "IPX4 water resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 678,
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "realme-buds-q2",
    name: "Realme Buds Q2",
    brand: "Realme",
    category: "earbuds",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    description: "Active Noise Cancellation, 88ms Super Low Latency",
    features: [
      "Active Noise Cancellation up to 25dB",
      "88ms Super Low Latency",
      "10mm Bass Boost Driver",
      "20 hours total playback",
      "IPX5 water resistance"
    ],
    image: "/placeholder.svg",
    inStock: false,
    rating: 4.2,
    reviewCount: 345,
    colors: ["Black", "Blue"]
  },
  {
    id: "nothing-ear-2",
    name: "Nothing Ear (2)",
    brand: "Nothing",
    category: "earbuds",
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    description: "True Wireless Earbuds with Hi-Res Audio & Smart ANC",
    features: [
      "Hi-Res Audio Certified",
      "Smart ANC with Adaptive Mode",
      "Custom EQ with Sound Profile",
      "Dual Connection",
      "Up to 36 hours playback"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 320,
    colors: ["White", "Black"]
  },
  {
    id: "samsung-galaxy-buds-pro-2",
    name: "Samsung Galaxy Buds2 Pro",
    brand: "Samsung",
    category: "earbuds",
    price: 17990,
    originalPrice: 19990,
    discount: 10,
    description: "Premium earbuds with intelligent ANC & Hi-Fi Sound",
    features: [
      "Intelligent Active Noise Cancellation",
      "24bit Hi-Fi Sound",
      "360 Audio with Direct Multi-Channel",
      "IPX7 Water Resistant",
      "Up to 30 hours playback"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 420,
    colors: ["Bora Purple", "Graphite", "White"]
  },
  {
    id: "oneplus-nord-buds-2",
    name: "OnePlus Nord Buds 2",
    brand: "OnePlus",
    category: "earbuds",
    price: 2999,
    originalPrice: 3299,
    discount: 9,
    description: "True Wireless Earbuds with Active Noise Cancellation",
    features: [
      "Active Noise Cancellation up to 25dB",
      "BassWave™ Enhancement",
      "12.4mm Titanium Drivers",
      "Up to 36 hours playback",
      "IP55 water & dust resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 560,
    colors: ["Thunder Gray", "Lightning White"]
  }
];

export const getProductsByCategory = (category: "smartphone" | "earbuds") => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string) => {
  return products.filter(product => product.brand === brand);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (limit: number = 4) => {
  // Return a mix of smartphones and earbuds
  const smartphones = getProductsByCategory("smartphone").slice(0, limit / 2);
  const earbuds = getProductsByCategory("earbuds").slice(0, limit / 2);
  return [...smartphones, ...earbuds];
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
