
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/data/products';

const Navbar = () => {
  const { totalItems, totalAmount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center font-bold text-xl text-primary">
            <span className="hidden sm:inline">Tech</span>
            <span>Shoppe</span>
            <span className="text-primary ml-1 font-normal text-sm hidden md:inline">India</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/smartphones" className="text-foreground/80 hover:text-foreground transition-colors">
              Smartphones
            </Link>
            <Link to="/earbuds" className="text-foreground/80 hover:text-foreground transition-colors">
              Earbuds
            </Link>
            <Link to="/deals" className="text-foreground/80 hover:text-foreground transition-colors">
              Deals
            </Link>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search size={20} />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/smartphones" className="text-lg hover:text-primary transition-colors">
                    Smartphones
                  </Link>
                  <Link to="/earbuds" className="text-lg hover:text-primary transition-colors">
                    Earbuds
                  </Link>
                  <Link to="/deals" className="text-lg hover:text-primary transition-colors">
                    Deals
                  </Link>
                  <div className="pt-4 border-t">
                    <Link to="/cart" className="flex items-center justify-between">
                      <span className="text-lg">Cart</span>
                      <Badge variant="outline">{totalItems} items | {formatPrice(totalAmount)}</Badge>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
