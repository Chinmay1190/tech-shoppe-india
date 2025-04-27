
import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const SmartphonesPage = () => {
  const allSmartphones = getProductsByCategory('smartphone');
  const [filteredProducts, setFilteredProducts] = useState(allSmartphones);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const brands = [...new Set(allSmartphones.map(product => product.brand))];
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let filtered = allSmartphones;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, selectedBrands, allSmartphones]);
  
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 200000]);
    setSelectedBrands([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Smartphones</h1>
      
      {/* Mobile Filter Button */}
      <div className="flex gap-2 md:hidden mb-4">
        <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filter Smartphones</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="pt-4 px-2">
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={200000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Brands</Label>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`mobile-brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <label 
                        htmlFor={`mobile-brand-${brand}`}
                        className="ml-2 text-sm"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <SheetFooter className="flex flex-row gap-2 sm:space-x-0">
              <Button variant="outline" onClick={handleClearFilters} className="flex-1">
                Clear Filters
              </Button>
              <Button className="flex-1" onClick={() => setFilterOpen(false)}>
                Apply
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search smartphones..."
            className="pl-10"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-1 top-1 h-8 w-8 p-0" 
              onClick={() => setSearchQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Desktop Filters */}
        <div className="hidden md:block w-64 space-y-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Filters</h3>
            <Button 
              variant="link" 
              className="p-0 h-auto text-muted-foreground" 
              onClick={handleClearFilters}
            >
              Clear filters
            </Button>
          </div>
          
          <div className="space-y-2">
            <Label>Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search smartphones..."
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1 h-8 w-8 p-0" 
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Price Range</Label>
            <div className="pt-4 px-2">
              <Slider
                defaultValue={priceRange}
                min={0}
                max={200000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Brands</Label>
            <div className="space-y-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center">
                  <Checkbox 
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <label 
                    htmlFor={`brand-${brand}`}
                    className="ml-2 text-sm"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">
              {filteredProducts.length} products
            </span>
            <select className="px-3 py-2 border rounded-md text-sm">
              <option value="popularity">Sort by: Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
          
          <ProductGrid products={filteredProducts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default SmartphonesPage;
