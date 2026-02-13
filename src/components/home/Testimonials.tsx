 import { Card, CardContent } from '@/components/ui/card';
 import { Star, Quote } from 'lucide-react';
 
const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Small Business Owner',
    location: 'Dallas, TX',
    rating: 5,
    comment:
      'Outstanding service and reliable products. The laser printer I ordered arrived on time and works perfectly. Their support team made the setup process quick and easy.',
  },
  {
    name: 'Jessica Miller',
    role: 'Creative Designer',
    location: 'Los Angeles, CA',
    rating: 5,
    comment:
      'I regularly purchase ink and toner from Printer Fix, and the quality has always been consistent. Fast shipping, fair pricing, and excellent customer service.',
  },
  {
    name: 'Daniel Thompson',
    role: 'IT Operations Manager',
    location: 'Chicago, IL',
    rating: 5,
    comment:
      'Printer Fix is our go-to supplier for office printing needs. Bulk ordering is simple, deliveries are prompt, and their account support team is extremely professional.',
  },
];


 
 const Testimonials = () => {
   return (
     <section className="py-16">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Don't just take our word for it - hear from some of our satisfied customers
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {testimonials.map((testimonial, index) => (
             <Card key={index} className="relative overflow-hidden">
               <CardContent className="pt-8 pb-6 px-6">
                 <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                 
                 {/* Rating */}
                 <div className="flex items-center gap-1 mb-4">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                   ))}
                 </div>
 
                 {/* Comment */}
                 <p className="text-muted-foreground mb-6 leading-relaxed">
                   "{testimonial.comment}"
                 </p>
 
                 {/* Author */}
                 <div>
                   <p className="font-semibold text-foreground">{testimonial.name}</p>
                   <p className="text-sm text-muted-foreground">
                     {testimonial.role} • {testimonial.location}
                   </p>
                 </div>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;