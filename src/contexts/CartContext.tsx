
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/data/products';
import { toast } from '@/hooks/use-toast';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (items: CartItem[]): { totalItems: number; totalAmount: number } => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return { totalItems, totalAmount };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        
        const totals = calculateTotals(updatedItems);
        return {
          ...state,
          items: updatedItems,
          ...totals,
        };
      } else {
        // New item, add to cart
        const newItem = { ...action.payload, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        const totals = calculateTotals(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          ...totals,
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const totals = calculateTotals(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        ...totals,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      
      const totals = calculateTotals(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        ...totals,
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage if available
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart) as CartState;
          return parsedCart;
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error);
          return initialState;
        }
      }
    }
    return initialState;
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
