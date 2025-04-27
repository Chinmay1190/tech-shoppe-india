
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/data/products';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="product-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="product-card">
            <Skeleton className="aspect-square w-full" />
            <div className="p-4">
              <Skeleton className="h-4 w-1/3 my-2" />
              <Skeleton className="h-6 w-full my-2" />
              <Skeleton className="h-4 w-1/4 my-2" />
              <Skeleton className="h-6 w-1/2 my-2" />
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="product-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
