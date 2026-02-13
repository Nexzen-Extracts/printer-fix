 import { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
 import { useCart } from '@/context/CartContext';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { itemCount } = useCart();
   const location = useLocation();
 
   const navLinks = [
     { path: '/', label: 'Home' },
     { path: '/shop', label: 'Shop' },
     { path: '/about', label: 'About' },
     { path: '/contact', label: 'Contact' },
   ];
 
   const isActive = (path: string) => location.pathname === path;
 
   return (
     <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
       {/* Top bar */}
       <div className="bg-primary text-primary-foreground py-2">
         <div className="container mx-auto px-4 flex justify-between items-center text-sm">
           <div className="flex items-center gap-2">
             <Phone className="h-3 w-3" />
             <span>+1-877-496-7174</span>
           </div>
           <div className="hidden sm:block">
             Free shipping on orders over $2,000
           </div>
         </div>
       </div>
 
       {/* Main header */}
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <Link to="/" className="flex items-center gap-2">
             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
               <span className="text-primary-foreground font-bold text-lg">PF</span>
             </div>
             <div className="hidden sm:block">
               <span className="font-bold text-xl text-foreground">Printer Fix</span>
               <span className="block text-xs text-muted-foreground">Your Printing Partner</span>
             </div>
           </Link>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navLinks.map(link => (
               <Link
                 key={link.path}
                 to={link.path}
                 className={`text-sm font-medium transition-colors hover:text-primary ${
                   isActive(link.path) ? 'text-primary' : 'text-foreground'
                 }`}
               >
                 {link.label}
               </Link>
             ))}
           </nav>
 
           {/* Actions */}
           <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="hidden md:flex">
               <Search className="h-5 w-5" />
             </Button>
 
             <Link to="/cart" className="relative">
               <Button variant="ghost" size="icon">
                 <ShoppingCart className="h-5 w-5" />
               </Button>
               {itemCount > 0 && (
                 <Badge
                   className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                   variant="default"
                 >
                   {itemCount}
                 </Badge>
               )}
             </Link>
 
             {/* Mobile menu button */}
             <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
             </Button>
           </div>
         </div>
 
         {/* Mobile Navigation */}
         {isMenuOpen && (
           <nav className="md:hidden py-4 border-t border-border animate-fade-in">
             <div className="flex flex-col gap-4">
               {navLinks.map(link => (
                 <Link
                   key={link.path}
                   to={link.path}
                   className={`text-sm font-medium transition-colors hover:text-primary ${
                     isActive(link.path) ? 'text-primary' : 'text-foreground'
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {link.label}
                 </Link>
               ))}
             </div>
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;