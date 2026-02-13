 import { Link } from 'react-router-dom';
 import { Card, CardContent } from '@/components/ui/card';
 import { categories } from '@/data/products';
 import { getCategoryImage } from '@/data/productImages';
 
 const Categories = () => {
   return (
     <section className="py-16 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Find everything you need for your printing requirements. From printers to supplies, we've got you covered.
           </p>
         </div>
 
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {categories.map((category) => (
             <Link key={category.id} to={`/shop?category=${category.id}`}>
               <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                 <div className="aspect-[4/3] overflow-hidden">
                   <img
                     src={getCategoryImage(category.id)}
                     alt={category.name}
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                   />
                 </div>
                 <CardContent className="p-4 text-center">
                   <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                     {category.name}
                   </h3>
                   <p className="text-sm text-muted-foreground">{category.count} Products</p>
                 </CardContent>
               </Card>
             </Link>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Categories;