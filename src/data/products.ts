export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: 'printers' | 'ink-toner' | 'paper' | 'accessories';
  description: string;
  features: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  images: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // PRINTERS
  {
    id: 'printer-001',
    name: 'Compact Office Printer',
    slug: 'compact-office-printer',
    price: 159,
    originalPrice: 199,
    category: 'printers',
    description:
      'A reliable compact printer perfect for small offices and home use. Features fast printing speeds and excellent text quality.',
    features: [
      'Print speed: 22 pages per minute',
      'Automatic duplex printing',
      'USB and Wi-Fi connectivity',
      '250-sheet paper tray',
      'Mobile printing support',
    ],
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockCount: 45,
    images: [],
    isBestseller: true,
  },
  {
    id: 'printer-002',
    name: 'High-Speed Mono Printer',
    slug: 'high-speed-mono-printer',
    price: 399,
    category: 'printers',
    description:
      'Professional-grade monochrome laser printer designed for high-volume printing with exceptional speed and reliability.',
    features: [
      'Print speed: 40 pages per minute',
      'First page out in 5.5 seconds',
      'Ethernet and USB connectivity',
      '500-sheet paper capacity',
      'Heavy-duty monthly cycle',
    ],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockCount: 23,
    images: [],
  },
  {
    id: 'printer-003',
    name: 'Wireless Home Printer',
    slug: 'wireless-home-printer',
    price: 99,
    originalPrice: 129,
    category: 'printers',
    description:
      'Easy-to-use wireless inkjet printer ideal for home users. Print photos and documents directly from your smartphone.',
    features: [
      'Wireless and mobile printing',
      'Print, scan, and copy',
      'Borderless photo printing',
      'Quiet mode operation',
      'Easy smartphone setup',
    ],
    rating: 4.3,
    reviewCount: 256,
    inStock: true,
    stockCount: 78,
    images: [],
    isNew: true,
  },
  {
    id: 'printer-004',
    name: 'Color Inkjet All-in-One',
    slug: 'color-inkjet-all-in-one',
    price: 199,
    category: 'printers',
    description:
      'Versatile all-in-one color printer with print, scan, copy, and fax capabilities. Perfect for home offices.',
    features: [
      'Print, scan, copy, and fax',
      'Automatic document feeder',
      '2.7" color touchscreen',
      'Two-sided printing',
      'Individual ink cartridges',
    ],
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    stockCount: 34,
    images: [],
  },
  {
    id: 'printer-005',
    name: 'Laser Multifunction Printer',
    slug: 'laser-multifunction-printer',
    price: 649,
    originalPrice: 749,
    category: 'printers',
    description:
      'Enterprise-grade color laser multifunction printer with advanced security features and cloud connectivity.',
    features: [
      'Color laser technology',
      'Print, scan, copy, fax',
      'Advanced security features',
      'Cloud printing support',
      '50-page document feeder',
    ],
    rating: 4.8,
    reviewCount: 72,
    inStock: true,
    stockCount: 12,
    images: [],
    isBestseller: true,
  },
  {
    id: 'printer-006',
    name: 'Photo Printer Pro',
    slug: 'photo-printer-pro',
    price: 299,
    category: 'printers',
    description:
      'Professional photo printer with 6-color ink system for stunning photo quality.',
    features: [
      '6-color ink system',
      'Up to 4800 x 1200 dpi',
      'Borderless printing up to A4',
      'Direct disc printing',
      'PictBridge compatible',
    ],
    rating: 4.6,
    reviewCount: 94,
    inStock: true,
    stockCount: 19,
    images: [],
  },
  {
    id: 'printer-007',
    name: 'Portable Mini Printer',
    slug: 'portable-mini-printer',
    price: 79,
    category: 'printers',
    description:
      'Compact and lightweight portable printer perfect for on-the-go professionals.',
    features: [
      'Ultra-compact design',
      'Battery powered option',
      'Bluetooth connectivity',
      'Thermal printing technology',
      'Lightweight: 480g only',
    ],
    rating: 4.2,
    reviewCount: 183,
    inStock: true,
    stockCount: 56,
    images: [],
    isNew: true,
  },
  {
    id: 'printer-008',
    name: 'Enterprise Workgroup Printer',
    slug: 'enterprise-workgroup-printer',
    price: 999,
    category: 'printers',
    description:
      'High-capacity workgroup printer designed for demanding business environments.',
    features: [
      'Print speed: 55 pages per minute',
      '1200 x 1200 dpi resolution',
      'Multiple paper trays',
      'Advanced job management',
      'Remote fleet management',
    ],
    rating: 4.9,
    reviewCount: 41,
    inStock: true,
    stockCount: 8,
    images: [],
  },

  // INK & TONER
  {
    id: 'ink-001',
    name: 'Premium Ink Cartridge Set',
    slug: 'premium-ink-cartridge-set',
    price: 49,
    originalPrice: 59,
    category: 'ink-toner',
    description:
      'Complete set of high-quality ink cartridges including black, cyan, magenta, and yellow.',
    features: [
      '4-color cartridge set (CMYK)',
      'High page yield',
      'Fade-resistant inks',
      'Easy installation',
      'Compatible with 50+ printer models',
    ],
    rating: 4.4,
    reviewCount: 312,
    inStock: true,
    stockCount: 156,
    images: [],
    isBestseller: true,
  },
  {
    id: 'ink-002',
    name: 'High-Yield Black Toner',
    slug: 'high-yield-black-toner',
    price: 89,
    category: 'ink-toner',
    description:
      'Extra high-yield black toner cartridge for laser printers.',
    features: [
      '10,000 page yield',
      'Premium toner formula',
      'Consistent print quality',
      'No smudging or fading',
      'Environmentally friendly',
    ],
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    stockCount: 89,
    images: [],
  },
  {
    id: 'ink-003',
    name: 'Color Toner Pack',
    slug: 'color-toner-pack',
    price: 129,
    originalPrice: 149,
    category: 'ink-toner',
    description:
      'Complete color toner set for color laser printers.',
    features: [
      '4-color toner set',
      '5,000 pages per color',
      'Vibrant color output',
      'OEM-quality performance',
      'Easy cartridge replacement',
    ],
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    stockCount: 42,
    images: [],
  },
  {
    id: 'ink-004',
    name: 'Economy Ink Refill Kit',
    slug: 'economy-ink-refill-kit',
    price: 19,
    category: 'ink-toner',
    description:
      'Cost-effective ink refill kit for inkjet cartridges.',
    features: [
      '4 color ink bottles',
      'Refill syringes included',
      'Step-by-step instructions',
      'Saves up to 70% on ink costs',
      'Works with most cartridges',
    ],
    rating: 4.1,
    reviewCount: 423,
    inStock: true,
    stockCount: 234,
    images: [],
  },
  {
    id: 'ink-005',
    name: 'Compatible Cartridge Bundle',
    slug: 'compatible-cartridge-bundle',
    price: 39,
    category: 'ink-toner',
    description:
      'Value bundle of compatible ink cartridges.',
    features: [
      '6 cartridges included',
      '2 black + 4 color',
      'Compatible with major printers',
      'ISO certified quality',
      '100% satisfaction guarantee',
    ],
    rating: 4.3,
    reviewCount: 567,
    inStock: true,
    stockCount: 178,
    images: [],
    isNew: true,
  },

  // PAPER
  {
    id: 'paper-001',
    name: 'Premium Copy Paper (500 sheets)',
    slug: 'premium-copy-paper-500',
    price: 9,
    category: 'paper',
    description:
      'High-quality multipurpose copy paper perfect for everyday printing.',
    features: [
      '500 sheets per ream',
      '80 GSM weight',
      'Brightness: 96',
      'Acid-free',
      'Works with all printers',
    ],
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    stockCount: 456,
    images: [],
    isBestseller: true,
  },
  {
    id: 'paper-002',
    name: 'Photo Paper Glossy Pack',
    slug: 'photo-paper-glossy-pack',
    price: 14,
    originalPrice: 19,
    category: 'paper',
    description:
      'Professional glossy photo paper for stunning photo prints.',
    features: [
      '50 sheets per pack',
      '260 GSM premium weight',
      'Instant-dry coating',
      'Water-resistant',
      'Scratch-resistant surface',
    ],
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    stockCount: 123,
    images: [],
  },
  {
    id: 'paper-003',
    name: 'Multi-Purpose A4 Paper',
    slug: 'multi-purpose-a4-paper',
    price: 7,
    category: 'paper',
    description:
      'Economical A4 paper suitable for high-volume printing.',
    features: [
      '500 sheets per ream',
      '70 GSM weight',
      'Jam-free performance',
      'FSC certified',
    ],
    rating: 4.4,
    reviewCount: 1567,
    inStock: true,
    stockCount: 789,
    images: [],
  },
  {
    id: 'paper-004',
    name: 'Heavy Cardstock Bundle',
    slug: 'heavy-cardstock-bundle',
    price: 24,
    category: 'paper',
    description:
      'Premium heavy cardstock for business cards and invitations.',
    features: [
      '100 sheets per pack',
      '250 GSM heavy weight',
      'Smooth finish',
      'Printable on both sides',
    ],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockCount: 67,
    images: [],
  },

  // ACCESSORIES
  {
    id: 'acc-001',
    name: 'USB Printer Cable',
    slug: 'usb-printer-cable',
    price: 9,
    category: 'accessories',
    description:
      'High-quality USB 2.0 printer cable for reliable connection.',
    features: [
      'USB Type A to B',
      '1.8 meter length',
      'Gold-plated connectors',
      'Universal compatibility',
    ],
    rating: 4.8,
    reviewCount: 678,
    inStock: true,
    stockCount: 345,
    images: [],
  },
  {
    id: 'acc-002',
    name: 'Wireless Print Adapter',
    slug: 'wireless-print-adapter',
    price: 39,
    originalPrice: 49,
    category: 'accessories',
    description:
      'Convert any USB printer to wireless printing.',
    features: [
      'Wi-Fi connectivity',
      'Mobile app control',
      'AirPrint compatible',
      'Plug-and-play setup',
    ],
    rating: 4.3,
    reviewCount: 234,
    inStock: true,
    stockCount: 56,
    images: [],
    isNew: true,
  },
  {
    id: 'acc-003',
    name: 'Printer Dust Cover',
    slug: 'printer-dust-cover',
    price: 14,
    category: 'accessories',
    description:
      'Protective dust cover to keep your printer clean.',
    features: [
      'Water-resistant material',
      'Universal fit',
      'Machine washable',
      'UV protection',
    ],
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
    stockCount: 234,
    images: [],
  },
];

// HELPERS
export const categories = [
  { id: 'printers', name: 'Printers', count: products.filter(p => p.category === 'printers').length },
  { id: 'ink-toner', name: 'Ink & Toner', count: products.filter(p => p.category === 'ink-toner').length },
  { id: 'paper', name: 'Paper', count: products.filter(p => p.category === 'paper').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find(p => p.slug === slug);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter(p => p.category === category);

export const getFeaturedProducts = (): Product[] =>
  products.filter(p => p.isBestseller).slice(0, 6);

export const getRelatedProducts = (productId: string, category: string): Product[] =>
  products.filter(p => p.category === category && p.id !== productId).slice(0, 4);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
