 import { useState, useMemo } from 'react';
 import { useSearchParams } from 'react-router-dom';
 import Layout from '@/components/layout/Layout';
 import ProductCard from '@/components/shop/ProductCard';
 import { products, categories, Product } from '@/data/products';
 import { Button } from '@/components/ui/button';
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
 import { Checkbox } from '@/components/ui/checkbox';
 import { Label } from '@/components/ui/label';
 import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
 import { Filter, X } from 'lucide-react';
 
 const ITEMS_PER_PAGE = 12;
 
const priceRanges = [
  { id: '0-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
  { id: '200-500', label: '$200 - $500', min: 200, max: 500 },
  { id: '500+', label: 'Over $500', min: 500, max: Infinity },
];

 
 const Shop = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [currentPage, setCurrentPage] = useState(1);
   const [sortBy, setSortBy] = useState('featured');
   const [selectedCategories, setSelectedCategories] = useState<string[]>(
     searchParams.get('category') ? [searchParams.get('category')!] : []
   );
   const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
 
   // Filter and sort products
   const filteredProducts = useMemo(() => {
     let result = [...products];
 
     // Filter by category
     if (selectedCategories.length > 0) {
       result = result.filter(p => selectedCategories.includes(p.category));
     }
 
     // Filter by price range
     if (selectedPriceRanges.length > 0) {
       result = result.filter(p => {
         return selectedPriceRanges.some(rangeId => {
           const range = priceRanges.find(r => r.id === rangeId);
           return range && p.price >= range.min && p.price < range.max;
         });
       });
     }
 
     // Sort
     switch (sortBy) {
       case 'price-low':
         result.sort((a, b) => a.price - b.price);
         break;
       case 'price-high':
         result.sort((a, b) => b.price - a.price);
         break;
       case 'newest':
         result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
         break;
       case 'rating':
         result.sort((a, b) => b.rating - a.rating);
         break;
       default:
         result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
     }
 
     return result;
   }, [selectedCategories, selectedPriceRanges, sortBy]);
 
   // Pagination
   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
   const paginatedProducts = filteredProducts.slice(
     (currentPage - 1) * ITEMS_PER_PAGE,
     currentPage * ITEMS_PER_PAGE
   );
 
   const handleCategoryChange = (categoryId: string, checked: boolean) => {
     setCurrentPage(1);
     if (checked) {
       setSelectedCategories(prev => [...prev, categoryId]);
     } else {
       setSelectedCategories(prev => prev.filter(c => c !== categoryId));
     }
   };
 
   const handlePriceChange = (priceId: string, checked: boolean) => {
     setCurrentPage(1);
     if (checked) {
       setSelectedPriceRanges(prev => [...prev, priceId]);
     } else {
       setSelectedPriceRanges(prev => prev.filter(p => p !== priceId));
     }
   };
 
   const clearFilters = () => {
     setSelectedCategories([]);
     setSelectedPriceRanges([]);
     setSearchParams({});
     setCurrentPage(1);
   };
 
   const FilterContent = () => (
     <div className="space-y-6">
       {/* Categories */}
       <div>
         <h3 className="font-semibold text-foreground mb-4">Categories</h3>
         <div className="space-y-3">
           {categories.map(category => (
             <div key={category.id} className="flex items-center space-x-2">
               <Checkbox
                 id={`cat-${category.id}`}
                 checked={selectedCategories.includes(category.id)}
                 onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
               />
               <Label htmlFor={`cat-${category.id}`} className="text-sm font-normal cursor-pointer">
                 {category.name} ({category.count})
               </Label>
             </div>
           ))}
         </div>
       </div>
 
       {/* Price Range */}
       <div>
         <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
         <div className="space-y-3">
           {priceRanges.map(range => (
             <div key={range.id} className="flex items-center space-x-2">
               <Checkbox
                 id={`price-${range.id}`}
                 checked={selectedPriceRanges.includes(range.id)}
                 onCheckedChange={(checked) => handlePriceChange(range.id, checked as boolean)}
               />
               <Label htmlFor={`price-${range.id}`} className="text-sm font-normal cursor-pointer">
                 {range.label}
               </Label>
             </div>
           ))}
         </div>
       </div>
 
       {/* Clear Filters */}
       {(selectedCategories.length > 0 || selectedPriceRanges.length > 0) && (
         <Button variant="outline" className="w-full" onClick={clearFilters}>
           <X className="mr-2 h-4 w-4" />
           Clear All Filters
         </Button>
       )}
     </div>
   );
 
   return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
         {/* Header */}
         <div className="mb-8">
           <h1 className="text-3xl font-bold text-foreground mb-2">Shop All Products</h1>
           <p className="text-muted-foreground">
             Showing {filteredProducts.length} products
           </p>
         </div>
 
         <div className="flex gap-8">
           {/* Desktop Sidebar */}
           <aside className="hidden lg:block w-64 flex-shrink-0">
             <div className="sticky top-24 bg-card rounded-lg border p-6">
               <h2 className="font-semibold text-lg mb-6">Filters</h2>
               <FilterContent />
             </div>
           </aside>
 
           {/* Main Content */}
           <div className="flex-1">
             {/* Toolbar */}
             <div className="flex items-center justify-between mb-6 gap-4">
               {/* Mobile Filter Button */}
               <Sheet>
                 <SheetTrigger asChild>
                   <Button variant="outline" className="lg:hidden">
                     <Filter className="mr-2 h-4 w-4" />
                     Filters
                   </Button>
                 </SheetTrigger>
                 <SheetContent side="left">
                   <SheetHeader>
                     <SheetTitle>Filters</SheetTitle>
                   </SheetHeader>
                   <div className="mt-6">
                     <FilterContent />
                   </div>
                 </SheetContent>
               </Sheet>
 
               {/* Sort */}
               <div className="flex items-center gap-2 ml-auto">
                 <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                 <Select value={sortBy} onValueChange={setSortBy}>
                   <SelectTrigger className="w-40">
                     <SelectValue />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="featured">Featured</SelectItem>
                     <SelectItem value="price-low">Price: Low to High</SelectItem>
                     <SelectItem value="price-high">Price: High to Low</SelectItem>
                     <SelectItem value="newest">Newest</SelectItem>
                     <SelectItem value="rating">Highest Rated</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
             </div>
 
             {/* Products Grid */}
             {paginatedProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {paginatedProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-12">
                 <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                 <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
               </div>
             )}
 
             {/* Pagination */}
             {totalPages > 1 && (
               <div className="flex justify-center gap-2 mt-8">
                 <Button
                   variant="outline"
                   disabled={currentPage === 1}
                   onClick={() => setCurrentPage(p => p - 1)}
                 >
                   Previous
                 </Button>
                 {[...Array(totalPages)].map((_, i) => (
                   <Button
                     key={i}
                     variant={currentPage === i + 1 ? 'default' : 'outline'}
                     onClick={() => setCurrentPage(i + 1)}
                   >
                     {i + 1}
                   </Button>
                 ))}
                 <Button
                   variant="outline"
                   disabled={currentPage === totalPages}
                   onClick={() => setCurrentPage(p => p + 1)}
                 >
                   Next
                 </Button>
               </div>
             )}
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Shop;