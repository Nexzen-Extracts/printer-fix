 import Layout from '@/components/layout/Layout';
 import { Card, CardContent } from '@/components/ui/card';
 import { Users, Award, Target, Heart } from 'lucide-react';
 
 const stats = [
   { label: 'Years in Business', value: '2+' },
   { label: 'Happy Customers', value: '800+' },
   { label: 'Products Delivered', value: '2000+' },
   { label: 'Cities Served', value: '5+' },
 ];
 
 const values = [
   {
     icon: Award,
     title: 'Quality First',
     description: 'We source only genuine products from authorized distributors. Every item we sell is backed by manufacturer warranty and our personal guarantee of quality.',
   },
   {
     icon: Users,
     title: 'Customer Focus',
     description: 'Our customers are at the heart of everything we do. We listen to your needs, provide honest recommendations, and stand behind every purchase.',
   },
   {
     icon: Target,
     title: 'Reliability',
     description: 'When you order from Printer Fix, you can count on timely delivery and products that work as promised. We understand that your printing needs can\'t wait.',
   },
   {
     icon: Heart,
     title: 'Integrity',
     description: 'We believe in transparent pricing, honest product descriptions, and fair business practices. No hidden fees, no surprises.',
   },
 ];
 
 const About = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         {/* Hero Section */}
         <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-foreground mb-6">About Printer Fix</h1>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             We're a team of printing enthusiasts dedicated to helping homes and businesses 
             find the right printing solutions at fair prices.
           </p>
         </div>
 
         {/* Our Story */}
       <section className="mb-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
    <div className="prose prose-lg text-muted-foreground space-y-4">
      <p>
        Printer Fix was built with a clear goal: to make purchasing printers and
        printing supplies simple, reliable, and convenient for customers who
        value quality and authenticity.
      </p>
      <p>
        What began as a focused online initiative has grown into a dependable
        eCommerce destination for printers, ink, toner, paper, and essential
        accessories—serving both individual users and businesses through a
        streamlined online experience.
      </p>
      <p>
        We understand how important dependable printing is in daily operations.
        Unexpected ink shortages or low-quality supplies can disrupt work and
        increase costs. That’s why we prioritize products that meet consistent
        performance and reliability standards.
      </p>
      <p>
        Every product offered on Printer Fix is carefully reviewed before being
        listed. We work with trusted suppliers and distribution partners to
        ensure customers receive genuine products with clear information,
        transparent policies, and dependable service.
      </p>
    </div>
  </div>
</section>

 
         {/* Stats */}
         <section className="mb-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
               <Card key={index} className="text-center">
                 <CardContent className="pt-6">
                   <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                   <p className="text-sm text-muted-foreground">{stat.label}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section>
 
         {/* Our Values */}
         <section className="mb-16">
           <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {values.map((value, index) => (
               <Card key={index}>
                 <CardContent className="pt-6">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <value.icon className="h-6 w-6 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                       <p className="text-muted-foreground text-sm leading-relaxed">
                         {value.description}
                       </p>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section>
 
         {/* Mission */}
         <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
    To be a trusted destination for printing solutions by providing genuine
    products, transparent guidance, and reliable service that helps customers
    print with confidence across the United States.
  </p>
</section>

       </div>
     </Layout>
   );
 };
 
 export default About;