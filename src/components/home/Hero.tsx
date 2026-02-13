 import { Link } from 'react-router-dom';
 import { Button } from '@/components/ui/button';
 import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react';
 import { homeImages } from '@/data/productImages';
 
 const Hero = () => {
   return (
     <section className="relative overflow-hidden">
       {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
         <img
           src={homeImages.heroBanner}
           alt="Office workspace with printers"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
         <div className="max-w-2xl">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
             Reliable Printing Solutions for Homes & Businesses
           </h1>
           <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
             Quality printers, genuine supplies, and expert support. 
             Get everything you need to keep your printing running smoothly.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <Link to="/shop">
               <Button size="lg" className="w-full sm:w-auto group">
                 Shop Now
                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
               </Button>
             </Link>
             <Link to="/contact">
               <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/10 border-background/30 text-background hover:bg-background/20">
                 Contact Us
               </Button>
             </Link>
           </div>
 
           {/* Trust Badges */}
           <div className="flex flex-wrap gap-6">
             <div className="flex items-center gap-2 text-background/90">
               <Truck className="h-5 w-5 text-primary" />
               <span className="text-sm">Free Shipping Over $2,000</span>
             </div>
             <div className="flex items-center gap-2 text-background/90">
               <Shield className="h-5 w-5 text-primary" />
               <span className="text-sm">Secure Checkout</span>
             </div>
             <div className="flex items-center gap-2 text-background/90">
               <Headphones className="h-5 w-5 text-primary" />
               <span className="text-sm">Expert Support</span>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;