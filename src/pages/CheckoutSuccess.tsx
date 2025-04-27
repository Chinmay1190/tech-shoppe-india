
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  
  useEffect(() => {
    // Clear the cart when reaching the success page
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been placed successfully and will be shipped soon.
        </p>
        <div className="bg-accent/30 p-6 rounded-lg mb-8">
          <h2 className="font-medium mb-2">Order Details</h2>
          <div className="flex justify-between mb-1">
            <span className="text-muted-foreground">Order Number:</span>
            <span>TEC{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link to="/">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link to="/orders">Track Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
