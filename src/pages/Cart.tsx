 import { Link } from 'react-router-dom';
 import Layout from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
 import { Input } from '@/components/ui/input';
 import { Separator } from '@/components/ui/separator';
 import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
 import { useCart } from '@/context/CartContext';
 import { formatPrice } from '@/data/products';
 
 const Cart = () => {
   const { items, total, updateQuantity, removeItem, clearCart } = useCart();
 
   const shipping = total >= 2000 ? 0 : 150;
   const tax = Math.round(total * 0.18);
   const grandTotal = total + shipping + tax;
 
   if (items.length === 0) {
     return (
       <Layout>
         <div className="container mx-auto px-4 py-16 text-center">
           <div className="max-w-md mx-auto">
             <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
             <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
             <p className="text-muted-foreground mb-8">
               Looks like you haven't added any items to your cart yet.
             </p>
             <Link to="/shop">
               <Button size="lg">
                 Start Shopping
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </Link>
           </div>
         </div>
       </Layout>
     );
   }
 
   return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>
 
         <div className="grid lg:grid-cols-3 gap-8">
           {/* Cart Items */}
           <div className="lg:col-span-2 space-y-4">
             {items.map(item => (
               <Card key={item.id}>
                 <CardContent className="p-4">
                   <div className="flex gap-4">
                     {/* Image */}
                     <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                       <img
                         src={item.image}
                         alt={item.name}
                         className="w-full h-full object-cover"
                       />
                     </div>
 
                     {/* Details */}
                     <div className="flex-1">
                       <Link to={`/product/${item.id}`} className="hover:text-primary">
                         <h3 className="font-semibold text-foreground">{item.name}</h3>
                       </Link>
                       <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
 
                       {/* Quantity Controls */}
                       <div className="flex items-center justify-between mt-4">
                         <div className="flex items-center border rounded-md">
                           <Button
                             variant="ghost"
                             size="icon"
                             className="h-8 w-8"
                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
                           >
                             <Minus className="h-3 w-3" />
                           </Button>
                           <span className="w-8 text-center text-sm">{item.quantity}</span>
                           <Button
                             variant="ghost"
                             size="icon"
                             className="h-8 w-8"
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                           >
                             <Plus className="h-3 w-3" />
                           </Button>
                         </div>
                         <Button
                           variant="ghost"
                           size="icon"
                           className="text-destructive hover:text-destructive"
                           onClick={() => removeItem(item.id)}
                         >
                           <Trash2 className="h-4 w-4" />
                         </Button>
                       </div>
                     </div>
 
                     {/* Item Total */}
                     <div className="hidden sm:block text-right">
                       <p className="font-bold text-foreground">
                         {formatPrice(item.price * item.quantity)}
                       </p>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             ))}
 
             {/* Actions */}
             <div className="flex justify-between">
               <Link to="/shop">
                 <Button variant="outline">Continue Shopping</Button>
               </Link>
               <Button variant="outline" onClick={clearCart}>
                 Clear Cart
               </Button>
             </div>
           </div>
 
           {/* Order Summary */}
           <div className="lg:col-span-1">
             <Card className="sticky top-24">
               <CardHeader>
                 <CardTitle>Order Summary</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 {/* Promo Code */}
                 <div className="flex gap-2">
                   <Input placeholder="Promo code" />
                   <Button variant="outline">Apply</Button>
                 </div>
 
                 <Separator />
 
                 {/* Totals */}
                 <div className="space-y-2 text-sm">
  <div className="flex justify-between">
    <span className="text-muted-foreground">Subtotal</span>
    <span className="font-medium">{formatPrice(total)}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-muted-foreground">Shipping</span>
    <span className="font-medium">
      {shipping === 0 ? 'FREE' : formatPrice(shipping)}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-muted-foreground">Sales Tax</span>
    <span className="font-medium">{formatPrice(tax)}</span>
  </div>
</div>

 
                 <Separator />
 
                 <div className="flex justify-between text-lg font-bold">
                   <span>Total</span>
                   <span className="text-primary">{formatPrice(grandTotal)}</span>
                 </div>
 
                 {shipping === 0 && (
                   <p className="text-xs text-success text-center">
                     🎉 You qualify for free shipping!
                   </p>
                 )}
               </CardContent>
               <CardFooter>
                 <Link to="/checkout" className="w-full">
                   <Button size="lg" className="w-full">
                     Proceed to Checkout
                     <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                 </Link>
               </CardFooter>
             </Card>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Cart;