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
  // Smartphones - Latest Models
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphone",
    price: 134999,
    originalPrice: 149999,
    discount: 10,
    description: "Ultimate flagship with Galaxy AI and titanium frame",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 512GB storage",
      "6.8-inch QHD+ Dynamic AMOLED display",
      "5000mAh battery",
      "Galaxy AI features",
      "Titanium frame"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviewCount: 245,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"]
  },
  {
    id: "samsung-galaxy-s24-plus",
    name: "Samsung Galaxy S24+",
    brand: "Samsung",
    category: "smartphone",
    price: 99999,
    originalPrice: 109999,
    discount: 9,
    description: "Premium flagship with advanced AI capabilities",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 256GB storage",
      "6.7-inch QHD+ Dynamic AMOLED",
      "4900mAh battery",
      "Galaxy AI features"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 180,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"]
  },
  {
    id: "asus-rog-phone-9",
    name: "ASUS ROG Phone 9 Ultimate",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 129999,
    originalPrice: 149999,
    discount: 13,
    description: "The ultimate gaming smartphone with advanced cooling and performance",
    features: [
      "Snapdragon 8 Gen 3",
      "16GB RAM + 512GB storage",
      "6.78-inch 165Hz AMOLED display",
      "6500mAh dual battery with 75W HyperCharge",
      "AeroActive Cooler 9 included",
      "Advanced GameCool thermal system"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviewCount: 78,
    colors: ["Phantom Black", "Storm White", "Cyber Cyan"]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "smartphone",
    price: 69999,
    originalPrice: 74999,
    discount: 7,
    description: "Flagship killer with Hasselblad cameras",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 256GB storage",
      "6.82-inch LTPO AMOLED display",
      "5400mAh battery with 100W charging",
      "4th Gen Hasselblad Camera"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 320,
    colors: ["Flowy Emerald", "Silky Black"]
  },
  {
    id: "realme-12-pro-plus",
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    category: "smartphone",
    price: 29999,
    originalPrice: 34999,
    discount: 14,
    description: "Premium mid-ranger with periscope zoom",
    features: [
      "Snapdragon 7s Gen 2",
      "8GB RAM + 128GB storage",
      "6.7-inch curved AMOLED display",
      "5000mAh battery with 67W charging",
      "Periscope telephoto camera"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 156,
    colors: ["Submarine Blue", "Navigator Beige", "Explorer Red"]
  },
  {
    id: "oppo-find-x7-pro",
    name: "OPPO Find X7 Pro",
    brand: "OPPO",
    category: "smartphone",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    description: "Photography flagship with 1-inch sensor",
    features: [
      "Dimensity 9300",
      "16GB RAM + 512GB storage",
      "6.82-inch LTPO AMOLED display",
      "5000mAh battery with 100W charging",
      "Quad camera with 1-inch sensor"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 125,
    colors: ["Ocean Blue", "Desert Silver"]
  },
  {
    id: "tecno-phantom-v-flip",
    name: "Tecno Phantom V Flip",
    brand: "Tecno",
    category: "smartphone",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    description: "Affordable flip phone with premium design",
    features: [
      "Dimensity 8050",
      "8GB RAM + 256GB storage",
      "6.9-inch foldable AMOLED",
      "4000mAh battery with 45W charging",
      "Triple camera system"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 89,
    colors: ["Mystic Dawn", "Iconic Black"]
  },
  {
    id: "samsung-galaxy-a55",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    category: "smartphone",
    price: 39999,
    originalPrice: 44999,
    discount: 11,
    description: "Premium mid-range with flagship features",
    features: [
      "Exynos 1480",
      "8GB RAM + 256GB storage",
      "6.6-inch Super AMOLED display",
      "5000mAh battery",
      "IP67 water resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    colors: ["Awesome Blue", "Awesome Purple", "Awesome Black"]
  },
  {
    id: "realme-gt-5-pro",
    name: "Realme GT 5 Pro",
    brand: "Realme",
    category: "smartphone",
    price: 44999,
    originalPrice: 49999,
    discount: 10,
    description: "Flagship killer with periscope camera",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 256GB storage",
      "6.78-inch AMOLED display",
      "5400mAh battery with 100W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 167,
    colors: ["Racing Blue", "Flame Red", "Knight Black"]
  },
  {
    id: "oppo-reno-11-pro",
    name: "OPPO Reno 11 Pro",
    brand: "OPPO",
    category: "smartphone",
    price: 39999,
    originalPrice: 45999,
    discount: 13,
    description: "Premium design with flagship camera",
    features: [
      "Dimensity 8200",
      "12GB RAM + 256GB storage",
      "6.7-inch curved AMOLED display",
      "4600mAh battery with 80W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 198,
    colors: ["Pearl White", "Rock Grey"]
  },
  {
    id: "tecno-pova-6-pro",
    name: "Tecno Pova 6 Pro 5G",
    brand: "Tecno",
    category: "smartphone",
    price: 19999,
    originalPrice: 23999,
    discount: 17,
    description: "Budget gaming phone with RGB lights",
    features: [
      "Dimensity 6080",
      "8GB RAM + 256GB storage",
      "6.78-inch 120Hz display",
      "6000mAh battery with 68W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 245,
    colors: ["Comet Green", "Space Blue"]
  },
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    category: "smartphone",
    price: 79999,
    originalPrice: 84999,
    discount: 6,
    description: "Flagship with Snapdragon 8 Gen 3",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 256GB storage",
      "6.73-inch LTPO AMOLED display",
      "4880mAh battery with 120W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 140,
    colors: ["Black", "Silver", "Green"]
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "smartphone",
    price: 84999,
    originalPrice: 89999,
    discount: 5,
    description: "Flagship with Google AI",
    features: [
      "Google Tensor G3",
      "12GB RAM + 128GB storage",
      "6.7-inch LTPO OLED display",
      "5050mAh battery with 30W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 130,
    colors: ["Obsidian", "Porcelain", "Bay"]
  },
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    category: "smartphone",
    price: 74999,
    originalPrice: 79999,
    discount: 6,
    description: "Flagship with Zeiss camera",
    features: [
      "Dimensity 9300",
      "12GB RAM + 256GB storage",
      "6.78-inch AMOLED display",
      "5400mAh battery with 100W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 120,
    colors: ["Asteroid Black", "Meteorite Blue"]
  },
  {
    id: "nothing-phone-2",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "smartphone",
    price: 44999,
    originalPrice: 49999,
    discount: 10,
    description: "Unique design with Glyph Interface",
    features: [
      "Snapdragon 8+ Gen 1",
      "8GB RAM + 128GB storage",
      "6.7-inch OLED display",
      "4700mAh battery with 45W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 110,
    colors: ["White", "Dark Gray"]
  },
  {
    id: "motorola-edge-40-pro",
    name: "Motorola Edge 40 Pro",
    brand: "Motorola",
    category: "smartphone",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    description: "Flagship with Snapdragon 8 Gen 2",
    features: [
      "Snapdragon 8 Gen 2",
      "12GB RAM + 256GB storage",
      "6.67-inch OLED display",
      "4600mAh battery with 125W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 100,
    colors: ["Interstellar Black", "Lunar Blue"]
  },
  {
    id: "infinix-gt-10-pro",
    name: "Infinix GT 10 Pro",
    brand: "Infinix",
    category: "smartphone",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    description: "Gaming phone with Dimensity 8050",
    features: [
      "Dimensity 8050",
      "8GB RAM + 256GB storage",
      "6.67-inch AMOLED display",
      "5000mAh battery with 45W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 90,
    colors: ["Cyber Black", "Mirage Silver"]
  },
  {
    id: "iqoo-12",
    name: "iQOO 12",
    brand: "iQOO",
    category: "smartphone",
    price: 52999,
    originalPrice: 57999,
    discount: 9,
    description: "Flagship with Snapdragon 8 Gen 3",
    features: [
      "Snapdragon 8 Gen 3",
      "12GB RAM + 256GB storage",
      "6.78-inch AMOLED display",
      "5000mAh battery with 120W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.2,
    reviewCount: 80,
    colors: ["Alpha", "Legend"]
  },
  {
    id: "poco-x6-pro",
    name: "POCO X6 Pro",
    brand: "POCO",
    category: "smartphone",
    price: 29999,
    originalPrice: 34999,
    discount: 14,
    description: "Mid-range with Dimensity 8300-Ultra",
    features: [
      "Dimensity 8300-Ultra",
      "8GB RAM + 256GB storage",
      "6.67-inch AMOLED display",
      "5000mAh battery with 67W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.1,
    reviewCount: 70,
    colors: ["Black", "Yellow", "Blue"]
  },
  {
    id: "nokia-g400-5g",
    name: "Nokia G400 5G",
    brand: "Nokia",
    category: "smartphone",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    description: "Budget 5G phone with large display",
    features: [
      "Snapdragon 480+",
      "6GB RAM + 128GB storage",
      "6.6-inch 120Hz display",
      "5000mAh battery with 20W charging"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.0,
    reviewCount: 60,
    colors: ["Meteor Gray"]
  },

  // Earbuds - Latest Models
  {
    id: "airpods-pro-3rd-gen",
    name: "Apple AirPods Pro (3rd generation)",
    brand: "Apple",
    category: "earbuds",
    price: 26900,
    originalPrice: 29900,
    discount: 10,
    description: "Premium earbuds with advanced features",
    features: [
      "Adaptive Audio",
      "Personalized Spatial Audio",
      "Enhanced Active Noise Cancellation",
      "Up to 30 hours total battery life",
      "Conversation Awareness"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviewCount: 456,
    colors: ["White"]
  },
  {
    id: "samsung-galaxy-buds3-pro",
    name: "Samsung Galaxy Buds3 Pro",
    brand: "Samsung",
    category: "earbuds",
    price: 17999,
    originalPrice: 21999,
    discount: 18,
    description: "Premium earbuds with intelligent ANC",
    features: [
      "360 Audio with head tracking",
      "Enhanced ANC",
      "24-bit Hi-Fi sound",
      "IPX7 water resistance",
      "30 hours total battery"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 289,
    colors: ["Graphite", "White", "Purple"]
  },
  {
    id: "boat-airdopes-max",
    name: "boAt Airdopes Max",
    brand: "boAt",
    category: "earbuds",
    price: 2499,
    originalPrice: 7999,
    discount: 69,
    description: "Premium earbuds with spatial audio",
    features: [
      "50 hours playback",
      "Quad mic ENx™ tech",
      "13mm drivers",
      "BEAST™ Mode",
      "Spatial audio"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 3456,
    colors: ["Carbon Black", "Navy Blue", "Pearl White"]
  },
  {
    id: "oneplus-buds-3",
    name: "OnePlus Buds 3",
    brand: "OnePlus",
    category: "earbuds",
    price: 5499,
    originalPrice: 5999,
    discount: 8,
    description: "Premium earbuds with dual drivers",
    features: [
      "Dual dynamic drivers",
      "Active Noise Cancellation",
      "Spatial Audio",
      "Up to 44 hours playback",
      "IP55 water resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 278,
    colors: ["Metallic Gray", "Splendid Blue"]
  },
  {
    id: "realme-buds-air-6-pro",
    name: "Realme Buds Air 6 Pro",
    brand: "Realme",
    category: "earbuds",
    price: 4499,
    originalPrice: 4999,
    discount: 10,
    description: "Premium earbuds with LDAC codec",
    features: [
      "LDAC HD Audio",
      "50dB Active Noise Cancellation",
      "Spatial Audio Effect",
      "Up to 40 hours playback",
      "Dual Device Connection"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 267,
    colors: ["Titanium Black", "Crystal Silver"]
  },
  {
    id: "oppo-enco-air-4-pro",
    name: "OPPO Enco Air 4 Pro",
    brand: "OPPO",
    category: "earbuds",
    price: 3999,
    originalPrice: 4499,
    discount: 11,
    description: "Premium earbuds with noise cancellation",
    features: [
      "49dB Active Noise Cancellation",
      "LDAC HD Audio",
      "Spatial Audio",
      "Up to 44 hours playback",
      "Dual Device Connection"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 256,
    colors: ["Midnight Black", "Cloud White"]
  },
  {
    id: "nothing-ear-3",
    name: "Nothing Ear (3)",
    brand: "Nothing",
    category: "earbuds",
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    description: "Premium earbuds with unique design",
    features: [
      "Customizable Sound Profile",
      "Smart Active Noise Cancellation",
      "Dual Connection",
      "Up to 36 hours playback",
      "Clear Voice Technology"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 245,
    colors: ["White", "Black"]
  },
  {
    id: "jbl-tour-pro-2",
    name: "JBL Tour Pro 2",
    brand: "JBL",
    category: "earbuds",
    price: 19999,
    originalPrice: 22999,
    discount: 13,
    description: "Premium earbuds with smart charging case",
    features: [
      "Smart Charging Case with Touch Display",
      "Adaptive Noise Cancellation",
      "JBL Pro Sound",
      "Up to 40 hours playback",
      "Spatial Audio"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    colors: ["Black", "Champagne"]
  },
  {
    id: "sony-wf-1000xm5",
    name: "Sony WF-1000XM5",
    brand: "Sony",
    category: "earbuds",
    price: 24999,
    originalPrice: 26999,
    discount: 7,
    description: "Industry-leading noise cancellation",
    features: [
      "Industry-leading Noise Cancellation",
      "High-Resolution Audio Wireless",
      "Smart features and seamless experience",
      "Up to 24 hours of battery life",
      "Multipoint connection"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviewCount: 223,
    colors: ["Black", "Silver"]
  },
  {
    id: "technics-eaz-800",
    name: "Technics EAH-AZ800",
    brand: "Technics",
    category: "earbuds",
    price: 21999,
    originalPrice: 23999,
    discount: 8,
    description: "Premium earbuds with LDAC and multipoint",
    features: [
      "LDAC High-Resolution Audio",
      "Hybrid Noise Cancelling",
      "Multipoint Pairing",
      "JustMyVoice™ Technology",
      "Up to 24 hours of battery life"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviewCount: 212,
    colors: ["Black", "Silver"]
  },
  {
    id: "bose-quietcomfort-ultra",
    name: "Bose QuietComfort Ultra Earbuds",
    brand: "Bose",
    category: "earbuds",
    price: 27999,
    originalPrice: 29999,
    discount: 7,
    description: "Premium earbuds with immersive audio",
    features: [
      "Bose Immersive Audio",
      "CustomTune technology",
      "World-class noise cancellation",
      "Up to 24 hours of battery life",
      "Snapdragon Sound"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviewCount: 201,
    colors: ["Black", "White Smoke"]
  },
  {
    id: "google-pixel-buds-pro",
    name: "Google Pixel Buds Pro",
    brand: "Google",
    category: "earbuds",
    price: 19999,
    originalPrice: 21999,
    discount: 9,
    description: "Premium earbuds with Google Assistant",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Google Assistant",
      "Up to 31 hours of listening time",
      "Volume EQ"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.5,
    reviewCount: 190,
    colors: ["Charcoal", "Fog", "Lemongrass", "Coral"]
  },
  {
    id: "sennheiser-momentum-true-wireless-3",
    name: "Sennheiser Momentum True Wireless 3",
    brand: "Sennheiser",
    category: "earbuds",
    price: 22999,
    originalPrice: 24999,
    discount: 8,
    description: "Premium earbuds with adaptive ANC",
    features: [
      "Adaptive Noise Cancellation",
      "High-Fidelity Sound",
      "Customizable Touch Controls",
      "Up to 28 hours of battery life",
      "IPX4 splash resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviewCount: 180,
    colors: ["Black", "Graphite", "White"]
  },
  {
    id: "anker-soundcore-liberty-4",
    name: "Anker Soundcore Liberty 4",
    brand: "Anker",
    category: "earbuds",
    price: 14999,
    originalPrice: 16999,
    discount: 12,
    description: "Premium earbuds with ACAA 3.0",
    features: [
      "ACAA 3.0 Coaxial Acoustic System",
      "HearID Sound 2.0",
      "CloudComfort™ Ear Tips",
      "Up to 28 hours of playtime",
      "IPX5 water resistance"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.4,
    reviewCount: 170,
    colors: ["Black", "White"]
  },
  {
    id: "skullcandy-hesh-anc",
    name: "Skullcandy Hesh ANC",
    brand: "Skullcandy",
    category: "earbuds",
    price: 9999,
    originalPrice: 11999,
    discount: 17,
    description: "Noise cancelling headphones with comfort",
    features: [
      "Active Noise Cancellation",
      "Skullcandy Supreme Sound",
      "Up to 22 hours of battery life",
      "Rapid Charge",
      "Built-in Tile™ Finder"
    ],
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.3,
    reviewCount: 160,
    colors: ["Black", "White", "Moab Red"]
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
