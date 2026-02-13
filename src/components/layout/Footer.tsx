 import { Link } from 'react-router-dom';
 import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
 
 const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-foreground text-background">
       {/* Main footer */}
       <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Company info */}
           <div>
             <div className="flex items-center gap-2 mb-4">
               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                 <span className="text-primary-foreground font-bold text-lg">PF</span>
               </div>
               <div>
                 <span className="font-bold text-xl">Printer Fix</span>
               </div>
             </div>
             <p className="text-sm text-muted-foreground mb-4">
  Your one-stop online store for printers, ink, toner, and essential printing supplies—simple, secure, and reliable.
</p>

             <div className="flex gap-4">
               <a href="#" className="hover:text-primary transition-colors">
                 <Facebook className="h-5 w-5" />
               </a>
               <a href="#" className="hover:text-primary transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>
               <a href="#" className="hover:text-primary transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="hover:text-primary transition-colors">
                 <Linkedin className="h-5 w-5" />
               </a>
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
             <ul className="space-y-2 text-sm">
               <li>
                 <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                   Shop All Products
                 </Link>
               </li>
               <li>
                 <Link to="/shop?category=printers" className="text-muted-foreground hover:text-primary transition-colors">
                   Printers
                 </Link>
               </li>
               <li>
                 <Link to="/shop?category=ink-toner" className="text-muted-foreground hover:text-primary transition-colors">
                   Ink & Toner
                 </Link>
               </li>
               <li>
                 <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                   About Us
                 </Link>
               </li>
               <li>
                 <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                   Contact Us
                 </Link>
               </li>
             </ul>
           </div>
 
           {/* Policies */}
           <div>
             <h3 className="font-semibold text-lg mb-4">Policies</h3>
             <ul className="space-y-2 text-sm">
               <li>
                 <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                   Privacy Policy
                 </Link>
               </li>
               <li>
                 <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                   Terms & Conditions
                 </Link>
               </li>
               <li>
                 <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
                   Refund & Returns
                 </Link>
               </li>
               <li>
                 <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                   Disclaimer
                 </Link>
               </li>
               <li>
                 <Link to="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors">
                   Shipping Policy
                 </Link>
               </li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                 <span className="text-muted-foreground">
                   20503 Khole Springs Lane, Cypress, TX, 77433
                 </span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                 <span className="text-muted-foreground">+1-877-496-7174</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                 <span className="text-muted-foreground">info@printerfix.shop</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
 
       {/* Bottom bar */}
       <div className="border-t border-muted-foreground/20">
         <div className="container mx-auto px-4 py-4">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
             <p>© {currentYear} Printer Fix. All rights reserved.</p>
             <p>printerfix.shop</p>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;