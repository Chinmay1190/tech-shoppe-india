
import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IndianRupee } from 'lucide-react';

const DealsPage = () => {
  const dealsProducts = products.filter(product => product.discount && product.discount > 0);
  const topDeals = dealsProducts.filter(product => product.discount && product.discount >= 20);
  const budgetDeals = dealsProducts.filter(product => product.price < 10000);
  const premiumDeals = dealsProducts.filter(product => product.price >= 10000 && product.discount);
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Deals & Offers</h1>

      {/* Featured Deals */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Today's Special Deals</h2>
            <p className="max-w-md mb-6">
              Limited time offers with massive discounts on our best-selling products. Don't miss out!
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="text-5xl md:text-7xl font-bold">
              <span className="flex items-center">
                <IndianRupee className="h-8 w-8 md:h-12 md:w-12" />
                <span>999</span>
              </span>
              <div className="text-lg font-normal mt-2">& onwards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="all">All Deals</TabsTrigger>
          <TabsTrigger value="top">Top Deals (20%+ Off)</TabsTrigger>
          <TabsTrigger value="budget">Budget Deals (Under ₹10,000)</TabsTrigger>
          <TabsTrigger value="premium">Premium Deals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <ProductGrid products={dealsProducts} isLoading={isLoading} />
        </TabsContent>
        
        <TabsContent value="top">
          <ProductGrid products={topDeals} isLoading={isLoading} />
        </TabsContent>
        
        <TabsContent value="budget">
          <ProductGrid products={budgetDeals} isLoading={isLoading} />
        </TabsContent>
        
        <TabsContent value="premium">
          <ProductGrid products={premiumDeals} isLoading={isLoading} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DealsPage;
