import { lazy, Suspense } from "react";
import ProductCard from "../_Components/ProductCard/page";
import { getallproduct } from "@/_services/product.services";
import Categoriesslider from "../_Components/Categories.slider/Categoriesslider";
import { Grid, Layers } from "lucide-react";

export default async function CategoryPage() {
  const alldata = await getallproduct();

  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl mt-16">
      
      {/* 1. Header مخصص لصفحة الكاتيجوري بدلاً من الـ Homeslider */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white mb-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-4 border border-white/10">
            <Layers className="w-3.5 h-3.5" /> All Categories & Products
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Explore Our Categories
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Discover our curated collection of items organized by category. Find exactly what you need with ease.
          </p>
        </div>

        {/* أيقونة جمالية بالخلفية */}
        <Grid className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />
      </div>

      {/* 2. عرض الـ Categoriesslider بأسلوب مستمر للتصفح السريع */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-slate-800">Top Categories</h2>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-10">
              <i className="fa-solid fa-spinner fa-spin fa-2x text-emerald-600"></i>
            </div>
          }
        >
          <Categoriesslider />
        </Suspense>
      </div>

      {/* 3. شبكة المنتجات (Products Grid) */}
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-slate-800 mb-6">Category Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alldata?.map((product) => (
            <ProductCard key={product.id || (product as any)._id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}