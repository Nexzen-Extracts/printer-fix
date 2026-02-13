 import Layout from '@/components/layout/Layout';
 
 const ShippingPolicy = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-foreground mb-8">Shipping Policy</h1>
           <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>
         <div className="prose prose-lg text-muted-foreground space-y-8">
  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      Shipping Policy
    </h2>
    <p>
      Thank you for shopping with Printer Fix. This Shipping Policy explains how
      we process, ship, and deliver orders placed on printerfix.shop (“the
      Site”). Our goal is to ensure your products reach you safely and on time.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      1. Order Processing Time
    </h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Orders are typically processed within 1–2 business days after payment confirmation</li>
      <li>Orders placed on weekends or public holidays are processed on the next business day</li>
      <li>
        In rare cases such as high order volumes, backorders, or inventory delays,
        processing times may be extended
      </li>
      <li>
        Once processed, you will receive a confirmation email with tracking details
      </li>
    </ul>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      2. Shipping Locations
    </h2>
    <p>
      Printer Fix currently ships within the United States and Canada. Certain
      remote or rural locations may experience longer delivery times or limited
      carrier availability.
    </p>
    <p>
      At this time, we do not offer international shipping outside these regions.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      3. Shipping Methods & Delivery Time
    </h2>
    <p>
      We partner with trusted national and regional carriers to ensure reliable
      delivery. Estimated delivery times are as follows:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Standard Shipping: 3–7 business days</li>
      <li>Expedited Shipping: 2–4 business days</li>
      <li>Priority Shipping: 1–2 business days (available in select regions)</li>
    </ul>
    <p className="mt-4">
      Delivery times may vary based on location, order size, weather conditions,
      or carrier delays beyond our control.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      4. Shipping Charges
    </h2>
    <p>
      Shipping costs are calculated at checkout based on delivery location,
      package weight, package size, and selected shipping method.
    </p>
    <p>
      Occasionally, free or discounted shipping promotions may apply as advertised
      on our website or through email campaigns.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      5. Order Tracking
    </h2>
    <p>
      Once your order has shipped, you will receive a shipment confirmation email
      containing:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Tracking number</li>
      <li>Carrier name</li>
      <li>Estimated delivery date</li>
    </ul>
    <p className="mt-4">
      You can track your order directly through the carrier’s website using the
      provided tracking number.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      6. Incorrect Address or Delivery Issues
    </h2>
    <p>
      Please ensure your shipping address is accurate before placing your order.
      Printer Fix is not responsible for packages lost or misdelivered due to
      incorrect or incomplete address details.
    </p>
    <p>
      If a package is returned due to an address issue, re-shipping may be
      arranged once the correct address is confirmed. Additional shipping charges
      may apply.
    </p>
    <p>
      If a shipment is marked as delivered but not received, contact us promptly
      at info@printerfix.shop.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      7. Damaged or Missing Items
    </h2>
    <p>
      If your order arrives damaged or with missing items, notify us within
      48 hours of delivery and provide clear photos of the packaging and product.
    </p>
    <p>
      Our support team will review the case and arrange a replacement or refund
      based on eligibility.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      8. Customs, Duties & Taxes (Canada Orders)
    </h2>
    <p>
      Orders shipped to Canada may be subject to customs duties, taxes, or import
      fees depending on provincial regulations. These charges are the customer’s
      responsibility and are not included in product or shipping prices.
    </p>
    <p>
      We recommend contacting your local customs office for more information
      prior to placing an order.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      9. Delays & Exceptions
    </h2>
    <p>
      Printer Fix is not responsible for delays caused by weather conditions,
      natural disasters, carrier service disruptions, or customs clearance
      delays. We strive to keep customers informed if delays occur.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      10. Order Cancellations After Shipment
    </h2>
    <p>
      Once an order has been shipped, it cannot be canceled. Customers may still
      request a return in accordance with our Return & Refund Policy after
      delivery.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-foreground mb-4">
      11. Contact Us
    </h2>
    <p>
      If you have any shipping-related questions or need help tracking your
      order, please contact us:
    </p>
    <p className="mt-2">
                 Email: info@printerfix.shop<br />
                 Phone: +1-877-496-7174<br />
                 Address: 20503 Khole Springs Lane, Cypress, TX, 77433
               </p>
  </section>
</div>


         </div>
       </div>
     </Layout>
   );
 };
 
 export default ShippingPolicy;