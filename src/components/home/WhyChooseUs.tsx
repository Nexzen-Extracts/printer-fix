 import { Truck, Award, Headphones, RefreshCw } from 'lucide-react';
 import { Card, CardContent } from '@/components/ui/card';
 
 const benefits = [
   {
     icon: Truck,
     title: 'Fast Delivery',
     description: 'Free shipping on orders over $2,000. Delivery within 3-5 business days across Texas.',
   },
   {
     icon: Award,
     title: 'Quality Products',
     description: 'All products are genuine and come with manufacturer warranty for peace of mind.',
   },
   {
     icon: Headphones,
     title: 'Expert Support',
     description: 'Our team is available to help you choose the right products for your needs.',
   },
   {
     icon: RefreshCw,
     title: 'Easy Returns',
     description: '30-day hassle-free return policy. No questions asked if you\'re not satisfied.',
   },
 ];
 
 const WhyChooseUs = () => {
   return (
     <section className="py-16 bg-primary/5">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Printer Fix?</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             We're committed to providing the best printing solutions with exceptional service
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {benefits.map((benefit, index) => (
             <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
               <CardContent className="pt-8 pb-6 px-6">
                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                   <benefit.icon className="h-8 w-8 text-primary" />
                 </div>
                 <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                 <p className="text-sm text-muted-foreground">{benefit.description}</p>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default WhyChooseUs;