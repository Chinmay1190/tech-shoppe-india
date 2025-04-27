
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Card className="product-card overflow-hidden h-full flex flex-col group hover:border-primary transition-colors duration-300">
      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {product.discount && product.discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-destructive">
              {product.discount}% OFF
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="outline" className="text-md py-1.5">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>
        
        <CardHeader className="p-4 pb-0 flex-grow">
          <div className="text-xs uppercase font-medium text-muted-foreground">
            {product.brand}
          </div>
          <h3 className="font-medium text-base line-clamp-2 mt-1">
            {product.name}
          </h3>
          <div className="flex items-center mt-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary mr-1" />
            <span>{product.rating}</span>
            <span className="text-muted-foreground ml-1">
              ({product.reviewCount} reviews)
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 pt-2">
          <div className="flex items-baseline">
            <div className="price-tag">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="ml-2 text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            variant="default" 
            className="w-full" 
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
