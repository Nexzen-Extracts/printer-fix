 import { Link } from 'react-router-dom';
 import { Button } from '@/components/ui/button';
 import { ArrowRight } from 'lucide-react';
 import { getFeaturedProducts } from '@/data/products';
 import ProductCard from '@/components/shop/ProductCard';
 
 const FeaturedProducts = () => {
   const featuredProducts = getFeaturedProducts();
 
   return (
     <section className="py-16">
       <div className="container mx-auto px-4">
         <div className="flex justify-between items-center mb-12">
           <div>
             <h2 className="text-3xl font-bold text-foreground mb-2">Bestselling Products</h2>
             <p className="text-muted-foreground">Our most popular items loved by customers</p>
           </div>
           <Link to="/shop" className="hidden md:block">
             <Button variant="outline" className="group">
               View All
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
           </Link>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {featuredProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
 
         <div className="mt-8 text-center md:hidden">
           <Link to="/shop">
             <Button variant="outline" className="group">
               View All Products
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
           </Link>
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturedProducts;