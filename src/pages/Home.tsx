
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts, getProductsByCategory } from '@/data/products';
import { IndianRupee, Headphones, Smartphone, Gift, Truck, CreditCard } from 'lucide-react';

const featuredProducts = getFeaturedProducts(8);
const newSmartphones = getProductsByCategory('smartphone').slice(0, 4);
const topEarbuds = getProductsByCategory('earbuds').slice(0, 4);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 px-4 md:py-20 relative bg-gradient-to-br from-primary/90 to-primary">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20 mb-4">
              New Arrivals
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Premium Tech Products
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Explore the latest smartphones and earbuds from top brands at incredible prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/smartphones">Shop Smartphones</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
                <Link to="/earbuds">Shop Earbuds</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/placeholder.svg" 
              alt="Latest smartphones and earbuds" 
              className="mx-auto max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <IndianRupee className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-medium mb-1">Best Prices</h3>
              <p className="text-sm text-muted-foreground">Competitive prices on all products</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Truck className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-medium mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick delivery across India</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Gift className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-medium mb-1">Special Offers</h3>
              <p className="text-sm text-muted-foreground">Regular deals and discounts</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <CreditCard className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-medium mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure payment methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/deals" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Shop By Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/smartphones" className="relative group">
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-[16/9] bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center relative">
                  <Smartphone className="text-white h-16 w-16 absolute" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Smartphones</h3>
                    <p>Latest models from top brands</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/earbuds" className="relative group">
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-[16/9] bg-gradient-to-r from-primary/60 to-primary/80 flex items-center justify-center relative">
                  <Headphones className="text-white h-16 w-16 absolute" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Earbuds</h3>
                    <p>Premium audio experience</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">New Smartphones</h2>
            <Link to="/smartphones" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <ProductGrid products={newSmartphones} />
        </div>
      </section>

      {/* Top Earbuds */}
      <section className="py-12 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Top Earbuds</h2>
            <Link to="/earbuds" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <ProductGrid products={topEarbuds} />
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Shop By Brand
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {["Samsung", "Realme", "OPPO", "ASUS ROG", "Tecno", "boAt", "JBL", "Apple", "Nothing", "OnePlus"].map((brand, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex items-center justify-center p-6 hover:bg-accent transition-colors rounded-lg">
                      <h3 className="text-xl font-medium">{brand}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Special Offers Just For You
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter and get exclusive deals and updates on the latest products.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="bg-accent overflow-hidden py-3 px-4">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 inline-block">📱 Free shipping on all orders above ₹999!</span>
          <span className="mx-4 inline-block">🎧 Buy 1 Get 1 Free on selected earbuds!</span>
          <span className="mx-4 inline-block">💰 Use code TECH10 for 10% off on your first order!</span>
          <span className="mx-4 inline-block">🔥 Limited time offers on premium smartphones!</span>
          <span className="mx-4 inline-block">📱 Free shipping on all orders above ₹999!</span>
          <span className="mx-4 inline-block">🎧 Buy 1 Get 1 Free on selected earbuds!</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
