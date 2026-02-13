 import { useState } from 'react';
 import Layout from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 import { Label } from '@/components/ui/label';
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 import { useToast } from '@/hooks/use-toast';
 import { EMAILJS_CONFIG, isEmailJSConfigured } from '@/config/emailjs';
 import emailjs from '@emailjs/browser';
 import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
 
 const Contact = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     subject: '',
     message: '',
   });
   const { toast } = useToast();
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData(prev => ({
       ...prev,
       [e.target.id]: e.target.value,
     }));
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
 
     if (!isEmailJSConfigured()) {
       toast({
         title: "EmailJS not configured",
         description: "Please configure EmailJS credentials in src/config/emailjs.ts",
         variant: "destructive",
       });
       return;
     }
 
     setIsSubmitting(true);
 
     try {
       await emailjs.send(
         EMAILJS_CONFIG.SERVICE_ID,
         EMAILJS_CONFIG.TEMPLATE_ID,
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message,
         },
         EMAILJS_CONFIG.PUBLIC_KEY
       );
 
       toast({
         title: "Message sent!",
         description: "Thank you for contacting us. We'll get back to you soon.",
       });
 
       setFormData({ name: '', email: '', subject: '', message: '' });
     } catch (error) {
       toast({
         title: "Failed to send message",
         description: "Please try again later or contact us directly.",
         variant: "destructive",
       });
     } finally {
       setIsSubmitting(false);
     }
   };
 
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         {/* Header */}
         <div className="text-center mb-12">
           <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have questions about our products or need assistance? 
             We're here to help. Reach out to us and we'll respond as soon as possible.
           </p>
         </div>
 
         <div className="grid lg:grid-cols-3 gap-8">
           {/* Contact Form */}
           <div className="lg:col-span-2">
             <Card>
               <CardHeader>
                 <CardTitle>Send us a Message</CardTitle>
               </CardHeader>
               <CardContent>
                 {!isEmailJSConfigured() && (
                   <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 flex items-start gap-3">
                     <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                     <div>
                       <p className="font-medium text-destructive">EmailJS Not Configured</p>
                       <p className="text-sm text-muted-foreground mt-1">
                         To enable the contact form, please update the EmailJS credentials in{' '}
                         <code className="bg-muted px-1 rounded">src/config/emailjs.ts</code>
                       </p>
                     </div>
                   </div>
                 )}
 
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <Label htmlFor="name">Your Name *</Label>
                       <Input
                         id="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                       />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="email">Email Address *</Label>
                       <Input
                         id="email"
                         type="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                       />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="subject">Subject *</Label>
                     <Input
                       id="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       required
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="message">Message *</Label>
                     <Textarea
                       id="message"
                       rows={6}
                       value={formData.message}
                       onChange={handleChange}
                       required
                     />
                   </div>
                   <Button type="submit" size="lg" disabled={isSubmitting}>
                     <Send className="mr-2 h-4 w-4" />
                     {isSubmitting ? 'Sending...' : 'Send Message'}
                   </Button>
                 </form>
               </CardContent>
             </Card>
           </div>
 
           {/* Contact Info */}
           <div className="space-y-6">
             <Card>
               <CardContent className="pt-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <MapPin className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground">Address</h3>
                     <p className="text-muted-foreground text-sm mt-1">
                      20503 Khole Springs Lane,<br/> Cypress, TX, 77433
                     </p>
                   </div>
                 </div>
               </CardContent>
             </Card>
 
             <Card>
               <CardContent className="pt-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Phone className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground">Phone</h3>
                     <p className="text-muted-foreground text-sm mt-1">
                       +1-877-496-7174<br />
                      
                     </p>
                   </div>
                 </div>
               </CardContent>
             </Card>
 
             <Card>
               <CardContent className="pt-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Mail className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground">Email</h3>
                     <p className="text-muted-foreground text-sm mt-1">
                       info@printerfix.shop
                      
                     </p>
                   </div>
                 </div>
               </CardContent>
             </Card>
 
             <Card>
               <CardContent className="pt-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Clock className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground">Business Hours</h3>
                     <p className="text-muted-foreground text-sm mt-1">
                       Monday - Friday: 9:00 AM - 6:00 PM<br />
                       Saturday: 10:00 AM - 4:00 PM<br />
                       Sunday: Closed
                     </p>
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Contact;