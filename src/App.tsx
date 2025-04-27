
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import SmartphonesPage from "./pages/SmartphonesPage";
import EarbudsPage from "./pages/EarbudsPage";
import DealsPage from "./pages/DealsPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/smartphones" element={<SmartphonesPage />} />
                  <Route path="/earbuds" element={<EarbudsPage />} />
                  <Route path="/deals" element={<DealsPage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/payment-success" element={<CheckoutSuccess />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
