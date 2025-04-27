
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { getProductById, formatPrice, getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductGrid from '@/components/ProductGrid';
import { IndianRupee, Minus, Plus, ShoppingBag, ShoppingCart, Star, Truck } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = getFeaturedProducts(4);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if (product?.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [product]);
  
  useEffect(() => {
    if (!isLoading && !product) {
      navigate('/not-found');
    }
  }, [isLoading, product, navigate]);
  
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="pt-4">
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg border"
          />
          {product.discount && product.discount > 0 && (
            <Badge className="absolute top-4 right-4 bg-destructive">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">
              {product.reviewCount} Reviews
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">
              Brand: <span className="font-medium">{product.brand}</span>
            </span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.discount && product.discount > 0 && (
              <Badge variant="outline" className="text-destructive">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Colors</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    className="rounded-md"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleDecreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleIncreaseQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className="flex gap-4 mb-8">
            <Button 
              className="flex-1"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              disabled={!product.inStock}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Buy Now
            </Button>
          </div>
          
          {/* Availability & Delivery */}
          <Card className="bg-accent/50 border-0">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm">Cash on Delivery available</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm">Free delivery on orders above ₹999</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="features">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="specifications" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-accent/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">General</h3>
                <dl className="space-y-1">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Brand</dt>
                    <dd>{product.brand}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Model</dt>
                    <dd>{product.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="capitalize">{product.category}</dd>
                  </div>
                </dl>
              </div>
              {product.category === "smartphone" && (
                <>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Display</h3>
                    <dl className="space-y-1">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Type</dt>
                        <dd>AMOLED</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Resolution</dt>
                        <dd>Full HD+</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Battery</h3>
                    <dl className="space-y-1">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Capacity</dt>
                        <dd>5000 mAh</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Fast Charging</dt>
                        <dd>Yes</dd>
                      </div>
                    </dl>
                  </div>
                </>
              )}
              {product.category === "earbuds" && (
                <>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Audio</h3>
                    <dl className="space-y-1">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Type</dt>
                        <dd>TWS (True Wireless)</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Driver Size</dt>
                        <dd>10mm Dynamic</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Battery</h3>
                    <dl className="space-y-1">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Battery Life</dt>
                        <dd>Up to 30 hours</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Fast Charging</dt>
                        <dd>Yes</dd>
                      </div>
                    </dl>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <Button>Write a Review</Button>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center p-4 bg-accent/30 rounded-lg">
                <span className="text-4xl font-bold">{product.rating}</span>
                <div className="flex items-center mt-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      className={`h-4 w-4 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm mt-1">{product.reviewCount} reviews</span>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => {
                    const percentage = Math.floor(Math.random() * 100);
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-2">{rating}</span>
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm">{percentage}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-6">
              {[
                { name: "Rahul Sharma", rating: 5, date: "2 weeks ago", review: "Amazing product, great value for money. The battery life is exceptional and the performance is top-notch." },
                { name: "Priya Singh", rating: 4, date: "1 month ago", review: "Really good product overall. The sound quality is excellent, although I wish the battery lasted a bit longer." },
                { name: "Amit Patel", rating: 5, date: "2 months ago", review: "Absolutely love this product! Fast delivery and excellent customer service." }
              ].map((review, index) => (
                <div key={index} className="border-b pb-6 last:border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star 
                            key={star}
                            className={`h-3 w-3 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="mt-2 text-sm">{review.review}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
