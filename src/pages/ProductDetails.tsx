 import { useState } from 'react';
 import { useParams, Link } from 'react-router-dom';
 import Layout from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { Card, CardContent } from '@/components/ui/card';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import { ShoppingCart, Minus, Plus, Star, ChevronLeft, Check, Truck, Shield, RefreshCw } from 'lucide-react';
 import { getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products';
 import { getProductImage } from '@/data/productImages';
 import { useCart } from '@/context/CartContext';
 import { useToast } from '@/hooks/use-toast';
 import ProductCard from '@/components/shop/ProductCard';
 
 const ProductDetails = () => {
   const { slug } = useParams<{ slug: string }>();
   const product = getProductBySlug(slug || '');
   const [quantity, setQuantity] = useState(1);
   const { addItem } = useCart();
   const { toast } = useToast();
 
   if (!product) {
     return (
       <Layout>
         <div className="container mx-auto px-4 py-16 text-center">
           <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
           <Link to="/shop">
             <Button>
               <ChevronLeft className="mr-2 h-4 w-4" />
               Back to Shop
             </Button>
           </Link>
         </div>
       </Layout>
     );
   }
 
   const relatedProducts = getRelatedProducts(product.id, product.category);
 
   const handleAddToCart = () => {
     for (let i = 0; i < quantity; i++) {
       addItem({
         id: product.id,
         name: product.name,
         price: product.price,
         image: getProductImage(product.id),
       });
     }
     toast({
       title: "Added to cart",
       description: `${quantity} × ${product.name} has been added to your cart.`,
     });
   };
 
   return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
         {/* Breadcrumb */}
         <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
           <Link to="/" className="hover:text-primary">Home</Link>
           <span>/</span>
           <Link to="/shop" className="hover:text-primary">Shop</Link>
           <span>/</span>
           <span className="text-foreground">{product.name}</span>
         </nav>
 
         {/* Product Section */}
         <div className="grid lg:grid-cols-2 gap-12 mb-16">
           {/* Image */}
           <div className="space-y-4">
             <div className="aspect-square overflow-hidden rounded-lg bg-muted">
               <img
                 src={getProductImage(product.id)}
                 alt={product.name}
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
 
           {/* Details */}
           <div className="space-y-6">
             {/* Badges */}
             <div className="flex gap-2">
               {product.isNew && <Badge className="bg-primary">New</Badge>}
               {product.isBestseller && <Badge className="bg-success">Bestseller</Badge>}
               {product.inStock ? (
                 <Badge variant="outline" className="text-success border-success">In Stock</Badge>
               ) : (
                 <Badge variant="destructive">Out of Stock</Badge>
               )}
             </div>
 
             {/* Title */}
             <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
 
             {/* Rating */}
             <div className="flex items-center gap-2">
               <div className="flex items-center">
                 {[...Array(5)].map((_, i) => (
                   <Star
                     key={i}
                     className={`h-5 w-5 ${
                       i < Math.floor(product.rating)
                         ? 'text-yellow-400 fill-yellow-400'
                         : 'text-muted-foreground'
                     }`}
                   />
                 ))}
               </div>
               <span className="text-sm text-muted-foreground">
                 {product.rating} ({product.reviewCount} reviews)
               </span>
             </div>
 
             {/* Price */}
             <div className="flex items-baseline gap-3">
               <span className="text-3xl font-bold text-primary">
                 {formatPrice(product.price)}
               </span>
               {product.originalPrice && (
                 <>
                   <span className="text-xl text-muted-foreground line-through">
                     {formatPrice(product.originalPrice)}
                   </span>
                   <Badge variant="destructive">
                     Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                   </Badge>
                 </>
               )}
             </div>
 
             {/* Description */}
             <p className="text-muted-foreground leading-relaxed">
               {product.description}
             </p>
 
             {/* Quantity & Add to Cart */}
             <div className="flex items-center gap-4">
               <div className="flex items-center border rounded-md">
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setQuantity(q => Math.max(1, q - 1))}
                   disabled={quantity <= 1}
                 >
                   <Minus className="h-4 w-4" />
                 </Button>
                 <span className="w-12 text-center font-medium">{quantity}</span>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setQuantity(q => Math.min(product.stockCount, q + 1))}
                   disabled={quantity >= product.stockCount}
                 >
                   <Plus className="h-4 w-4" />
                 </Button>
               </div>
               <Button
                 size="lg"
                 className="flex-1"
                 onClick={handleAddToCart}
                 disabled={!product.inStock}
               >
                 <ShoppingCart className="mr-2 h-5 w-5" />
                 Add to Cart
               </Button>
             </div>
 
             {/* Stock info */}
             {product.inStock && product.stockCount < 10 && (
               <p className="text-sm text-destructive">
                 Only {product.stockCount} left in stock - order soon!
               </p>
             )}
 
             {/* Trust badges */}
             <div className="grid grid-cols-3 gap-4 pt-6 border-t">
               <div className="text-center">
                 <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                 <p className="text-xs text-muted-foreground">Free Shipping</p>
               </div>
               <div className="text-center">
                 <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                 <p className="text-xs text-muted-foreground">Warranty</p>
               </div>
               <div className="text-center">
                 <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                 <p className="text-xs text-muted-foreground">30-Day Returns</p>
               </div>
             </div>
           </div>
         </div>
 
         {/* Tabs */}
         <Tabs defaultValue="features" className="mb-16">
           <TabsList>
             <TabsTrigger value="features">Features</TabsTrigger>
             <TabsTrigger value="description">Description</TabsTrigger>
           </TabsList>
           <TabsContent value="features" className="pt-6">
             <Card>
               <CardContent className="pt-6">
                 <ul className="space-y-3">
                   {product.features.map((feature, index) => (
                     <li key={index} className="flex items-start gap-3">
                       <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
           </TabsContent>
           <TabsContent value="description" className="pt-6">
             <Card>
               <CardContent className="pt-6">
                 <p className="text-muted-foreground leading-relaxed">
                   {product.description}
                 </p>
               </CardContent>
             </Card>
           </TabsContent>
         </Tabs>
 
         {/* Related Products */}
         {relatedProducts.length > 0 && (
           <section>
             <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {relatedProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </div>
           </section>
         )}
       </div>
     </Layout>
   );
 };
 
 export default ProductDetails;