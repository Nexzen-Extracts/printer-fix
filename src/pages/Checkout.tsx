 import { useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import Layout from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 import { Separator } from '@/components/ui/separator';
 import { useCart } from '@/context/CartContext';
 import { formatPrice } from '@/data/products';
 import { CreditCard, Lock, CheckCircle } from 'lucide-react';
 
 const Checkout = () => {
   const { items, total, clearCart } = useCart();
   const navigate = useNavigate();
   const [isProcessing, setIsProcessing] = useState(false);
   const [orderPlaced, setOrderPlaced] = useState(false);
   const [orderId] = useState(() => `PF${Date.now().toString().slice(-8)}`);
 
   const shipping = total >= 2000 ? 0 : 150;
   const tax = Math.round(total * 0.18);
   const grandTotal = total + shipping + tax;
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setIsProcessing(true);
     
     // Simulate order processing
     setTimeout(() => {
       setIsProcessing(false);
       setOrderPlaced(true);
       clearCart();
     }, 2000);
   };
 
   if (items.length === 0 && !orderPlaced) {
     navigate('/cart');
     return null;
   }
 
   if (orderPlaced) {
     return (
       <Layout>
         <div className="container mx-auto px-4 py-16 text-center max-w-lg">
           <div className="mb-8">
             <CheckCircle className="h-20 w-20 mx-auto text-success mb-6" />
             <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h1>
             <p className="text-muted-foreground mb-2">
               Thank you for your order. Your order ID is:
             </p>
             <p className="text-xl font-mono font-bold text-primary mb-6">{orderId}</p>
             <p className="text-sm text-muted-foreground mb-8">
               We've sent a confirmation email with your order details.
               You can expect delivery within 3-5 business days.
             </p>
           </div>
           <div className="space-y-3">
             <Link to="/shop" className="block">
               <Button size="lg" className="w-full">Continue Shopping</Button>
             </Link>
             <Link to="/" className="block">
               <Button variant="outline" size="lg" className="w-full">Back to Home</Button>
             </Link>
           </div>
         </div>
       </Layout>
     );
   }
 
   return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>
 
         <form onSubmit={handleSubmit}>
           <div className="grid lg:grid-cols-3 gap-8">
             {/* Checkout Form */}
             <div className="lg:col-span-2 space-y-6">
               {/* Shipping Information */}
               <Card>
                 <CardHeader>
                   <CardTitle>Shipping Information</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="grid sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <Label htmlFor="firstName">First Name *</Label>
                       <Input id="firstName" required />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="lastName">Last Name *</Label>
                       <Input id="lastName" required />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">Email *</Label>
                     <Input id="email" type="email" required />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="phone">Phone Number *</Label>
                     <Input id="phone" type="tel" required />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="address">Address *</Label>
                     <Input id="address" required />
                   </div>
                   <div className="grid sm:grid-cols-3 gap-4">
                     <div className="space-y-2">
                       <Label htmlFor="city">City *</Label>
                       <Input id="city" required />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="state">State *</Label>
                       <Input id="state" required />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="pincode">PIN Code *</Label>
                       <Input id="pincode" required />
                     </div>
                   </div>
                 </CardContent>
               </Card>
 
               {/* Payment Information */}
               <Card>
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2">
                     <CreditCard className="h-5 w-5" />
                     Payment Information
                   </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <Label htmlFor="cardNumber">Card Number *</Label>
                     <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                     <div className="col-span-2 space-y-2">
                       <Label htmlFor="expiry">Expiry Date *</Label>
                       <Input id="expiry" placeholder="MM/YY" required />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="cvv">CVV *</Label>
                       <Input id="cvv" placeholder="123" required />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="cardName">Name on Card *</Label>
                     <Input id="cardName" required />
                   </div>
                   <p className="text-xs text-muted-foreground flex items-center gap-1">
                     <Lock className="h-3 w-3" />
                     Your payment information is secure and encrypted
                   </p>
                 </CardContent>
               </Card>
             </div>
 
             {/* Order Summary */}
             <div className="lg:col-span-1">
               <Card className="sticky top-24">
                 <CardHeader>
                   <CardTitle>Order Summary</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   {/* Items */}
                   <div className="space-y-3 max-h-60 overflow-auto">
                     {items.map(item => (
                       <div key={item.id} className="flex gap-3">
                         <div className="w-12 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
                           <img
                             src={item.image}
                             alt={item.name}
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <div className="flex-1 min-w-0">
                           <p className="text-sm font-medium truncate">{item.name}</p>
                           <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                         </div>
                         <p className="text-sm font-medium">
                           {formatPrice(item.price * item.quantity)}
                         </p>
                       </div>
                     ))}
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
 
                   <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                     {isProcessing ? 'Processing...' : `Place Order • ${formatPrice(grandTotal)}`}
                   </Button>
 
                   <p className="text-xs text-center text-muted-foreground">
                     By placing this order, you agree to our{' '}
                     <Link to="/terms-conditions" className="text-primary hover:underline">Terms</Link>
                     {' '}and{' '}
                     <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                   </p>
                 </CardContent>
               </Card>
             </div>
           </div>
         </form>
       </div>
     </Layout>
   );
 };
 
 export default Checkout;