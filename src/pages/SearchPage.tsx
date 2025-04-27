
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState(initialQuery ? 
    products.filter(product => 
      product.name.toLowerCase().includes(initialQuery.toLowerCase()) || 
      product.brand.toLowerCase().includes(initialQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(initialQuery.toLowerCase())
    ) : 
    []
  );
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (searchQuery) {
        const results = products.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already handled in the useEffect
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>
      
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for smartphones, earbuds, brands..."
            className="pl-10 py-6"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button 
              type="button"
              variant="ghost" 
              size="sm" 
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0" 
              onClick={() => setSearchQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </form>
      </div>
      
      <div className="mb-4">
        {searchQuery && (
          <div className="text-muted-foreground">
            {isLoading ? (
              'Searching...'
            ) : (
              <>
                {searchResults.length === 0 ? (
                  'No results found'
                ) : (
                  `Found ${searchResults.length} results for "${searchQuery}"`
                )}
              </>
            )}
          </div>
        )}
      </div>
      
      {searchQuery ? (
        <ProductGrid products={searchResults} isLoading={isLoading} />
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-medium mb-2">Enter a search term</h2>
          <p className="text-muted-foreground">
            Type in the search box to find products by name, brand, or description
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
