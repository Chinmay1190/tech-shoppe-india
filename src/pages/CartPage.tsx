
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash, Plus, Minus, CreditCard } from 'lucide-react';

const CartPage = () => {
  const { items, totalItems, totalAmount, removeItem, updateQuantity, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <ShoppingCart className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart ({totalItems} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-32 w-full">
                    <Link to={`/product/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover aspect-square sm:aspect-auto"
                      />
                    </Link>
                  </div>
                  <CardContent className="flex-1 flex flex-col pt-6">
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-primary">
                          {item.name}
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        {item.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.originalPrice * item.quantity)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{totalAmount >= 999 ? 'Free' : formatPrice(99)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatPrice(totalAmount * 0.18)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(totalAmount + (totalAmount >= 999 ? 0 : 99) + totalAmount * 0.18)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button size="lg" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>
              <div className="text-xs text-muted-foreground text-center mt-2">
                By proceeding, you agree to our <Link to="/terms" className="underline">Terms of Service</Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-6 bg-accent/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">We Accept</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white px-2 py-1 rounded border">Visa</div>
              <div className="bg-white px-2 py-1 rounded border">MasterCard</div>
              <div className="bg-white px-2 py-1 rounded border">Rupay</div>
              <div className="bg-white px-2 py-1 rounded border">UPI</div>
              <div className="bg-white px-2 py-1 rounded border">COD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
