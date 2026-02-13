 import { Link } from 'react-router-dom';
 import { Card, CardContent, CardFooter } from '@/components/ui/card';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { ShoppingCart, Star } from 'lucide-react';
 import { Product, formatPrice } from '@/data/products';
 import { getProductImage } from '@/data/productImages';
 import { useCart } from '@/context/CartContext';
 import { useToast } from '@/hooks/use-toast';
 
 interface ProductCardProps {
   product: Product;
 }
 
 const ProductCard = ({ product }: ProductCardProps) => {
   const { addItem } = useCart();
   const { toast } = useToast();
 
   const handleAddToCart = (e: React.MouseEvent) => {
     e.preventDefault();
     e.stopPropagation();
     addItem({
       id: product.id,
       name: product.name,
       price: product.price,
       image: getProductImage(product.id),
     });
     toast({
       title: "Added to cart",
       description: `${product.name} has been added to your cart.`,
     });
   };
 
   return (
     <Link to={`/product/${product.slug}`}>
       <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
         <div className="relative aspect-square overflow-hidden bg-muted">
           <img
             src={getProductImage(product.id)}
             alt={product.name}
             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
           />
           {/* Badges */}
           <div className="absolute top-2 left-2 flex flex-col gap-1">
             {product.isNew && (
               <Badge className="bg-primary">New</Badge>
             )}
             {product.isBestseller && (
               <Badge className="bg-success">Bestseller</Badge>
             )}
             {product.originalPrice && (
               <Badge variant="destructive">
                 {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
               </Badge>
             )}
           </div>
         </div>
 
         <CardContent className="p-4">
           <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
             {product.name}
           </h3>
           
           {/* Rating */}
           <div className="flex items-center gap-1 mb-2">
             <div className="flex items-center">
               {[...Array(5)].map((_, i) => (
                 <Star
                   key={i}
                   className={`h-4 w-4 ${
                     i < Math.floor(product.rating)
                       ? 'text-yellow-400 fill-yellow-400'
                       : 'text-muted-foreground'
                   }`}
                 />
               ))}
             </div>
             <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
           </div>
 
           {/* Price */}
           <div className="flex items-baseline gap-2">
             <span className="text-lg font-bold text-primary">
               {formatPrice(product.price)}
             </span>
             {product.originalPrice && (
               <span className="text-sm text-muted-foreground line-through">
                 {formatPrice(product.originalPrice)}
               </span>
             )}
           </div>
         </CardContent>
 
         <CardFooter className="p-4 pt-0">
           <Button
             className="w-full"
             onClick={handleAddToCart}
             disabled={!product.inStock}
           >
             <ShoppingCart className="mr-2 h-4 w-4" />
             {product.inStock ? 'Add to Cart' : 'Out of Stock'}
           </Button>
         </CardFooter>
       </Card>
     </Link>
   );
 };
 
 export default ProductCard;