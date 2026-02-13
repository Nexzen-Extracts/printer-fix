 // Product Images - Easy to replace
 // Import all product images here and export them for use throughout the app
 
 // PRINTERS
 import compactOfficePrinter from '@/assets/images/products/compact-office-printer.jpg';
 import highSpeedMonoPrinter from '@/assets/images/products/high-speed-mono-printer.jpg';
 import wirelessHomePrinter from '@/assets/images/products/wireless-home-printer.jpg';
 import colorInkjetAllInOne from '@/assets/images/products/color-inkjet-all-in-one.jpg';
 import laserMultifunctionPrinter from '@/assets/images/products/laser-multifunction-printer.jpg';
 import photoprinterPro from '@/assets/images/products/photo-printer-pro.jpg';
 import portableMiniPrinter from '@/assets/images/products/portable-mini-printer.jpg';
 import enterpriseWorkgroupPrinter from '@/assets/images/products/enterprise-workgroup-printer.jpg';
 
 // INK & TONER
 import premiumInkCartridgeSet from '@/assets/images/products/premium-ink-cartridge-set.jpg';
 import highYieldBlackToner from '@/assets/images/products/high-yield-black-toner.jpg';
 import colorTonerPack from '@/assets/images/products/color-toner-pack.jpg';
 import economyInkRefillKit from '@/assets/images/products/economy-ink-refill-kit.jpg';
 import compatibleCartridgeBundle from '@/assets/images/products/compatible-cartridge-bundle.jpg';
 
 // PAPER
 import premiumCopyPaper from '@/assets/images/products/premium-copy-paper.jpg';
 import photoPaperGlossy from '@/assets/images/products/photo-paper-glossy.jpg';
 import multiPurposeA4Paper from '@/assets/images/products/multi-purpose-a4-paper.jpg';
 import heavyCardstockBundle from '@/assets/images/products/heavy-cardstock-bundle.jpg';
 
 // ACCESSORIES
 import usbPrinterCable from '@/assets/images/products/usb-printer-cable.jpg';
 import wirelessPrintAdapter from '@/assets/images/products/wireless-print-adapter.jpg';
 import printerDustCover from '@/assets/images/products/printer-dust-cover.jpg';
 
 // CATEGORIES
 import categoryPrinters from '@/assets/images/categories/printers.jpg';
 import categoryInkToner from '@/assets/images/categories/ink-toner.jpg';
 import categoryPaper from '@/assets/images/categories/paper.jpg';
 import categoryAccessories from '@/assets/images/categories/accessories.jpg';
 
 // HOME
 import heroBanner from '@/assets/images/home/hero-banner.jpg';
 
 // Product image mapping by product ID
 export const productImages: Record<string, string> = {
   // Printers
   'printer-001': compactOfficePrinter,
   'printer-002': highSpeedMonoPrinter,
   'printer-003': wirelessHomePrinter,
   'printer-004': colorInkjetAllInOne,
   'printer-005': laserMultifunctionPrinter,
   'printer-006': photoprinterPro,
   'printer-007': portableMiniPrinter,
   'printer-008': enterpriseWorkgroupPrinter,
   
   // Ink & Toner
   'ink-001': premiumInkCartridgeSet,
   'ink-002': highYieldBlackToner,
   'ink-003': colorTonerPack,
   'ink-004': economyInkRefillKit,
   'ink-005': compatibleCartridgeBundle,
   
   // Paper
   'paper-001': premiumCopyPaper,
   'paper-002': photoPaperGlossy,
   'paper-003': multiPurposeA4Paper,
   'paper-004': heavyCardstockBundle,
   
   // Accessories
   'acc-001': usbPrinterCable,
   'acc-002': wirelessPrintAdapter,
   'acc-003': printerDustCover,
 };
 
 // Category images
 export const categoryImages: Record<string, string> = {
   'printers': categoryPrinters,
   'ink-toner': categoryInkToner,
   'paper': categoryPaper,
   'accessories': categoryAccessories,
 };
 
 // Home page images
 export const homeImages = {
   heroBanner,
 };
 
 // Helper to get product image
 export const getProductImage = (productId: string): string => {
   return productImages[productId] || compactOfficePrinter;
 };
 
 // Helper to get category image
 export const getCategoryImage = (categoryId: string): string => {
   return categoryImages[categoryId] || categoryPrinters;
 };