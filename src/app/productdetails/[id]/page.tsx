import { getspecifiedproduct } from "@/_services/product.services";
import AddProductbtn from "../../_Components/Addproductbtn/AddProductbtn";
import Image from "next/image";
import { Star, Tag, Award } from "lucide-react";

type Productdetailsprops = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Productdetailsprops) {
  const { id } = await params;
  const product = await getspecifiedproduct(id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h2>
        <p className="text-slate-500">The product you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  // حساب نسبة الخصم إن وجد
  const discountPercentage = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : null;

  // الحصول على الـ ID المضبوط
  const productId = product?.id || (product as any)?._id;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
        
        {/* Product Image Wrapper */}
        <div className="col-span-1 md:col-span-5 flex justify-center">
          <div className="relative w-full h-[350px] md:h-[450px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-4 flex items-center justify-center">
            {discountPercentage && (
              <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                -{discountPercentage}% OFF
              </span>
            )}
            <Image
              src={product?.imageCover}
              alt={product?.title || "Product Image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-4 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-span-1 md:col-span-7 space-y-6">
          
          {/* Category, Brand & Rating */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              {product?.category?.name && (
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                  <Tag className="w-3.5 h-3.5" />
                  {product.category.name}
                </span>
              )}
              {product?.brand?.name && (
                <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                  <Award className="w-3.5 h-3.5" />
                  {product.brand.name}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 text-amber-800 text-sm font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{product?.ratingsAverage}</span>
              {product?.ratingsQuantity && (
                <span className="text-xs text-amber-600 font-normal">({product.ratingsQuantity})</span>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {product?.title}
          </h1>

          {/* Price Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 inline-block w-full sm:w-auto">
            <span className="text-xs text-slate-500 font-medium block mb-1">Price</span>
            <div className="flex items-baseline gap-3">
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-3xl font-black text-slate-900">
                    {product.priceAfterDiscount} LE
                  </span>
                  <span className="text-lg font-semibold text-slate-400 line-through">
                    {product.price} LE
                  </span>
                </>
              ) : (
                <span className="text-3xl font-black text-slate-900">
                  {product.price} LE
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Overview</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {product?.description}
            </p>
          </div>

          {/* Add to Cart Container */}
          <div className="pt-4 border-t border-slate-100">
            <div className="w-full sm:w-1/2">
<AddProductbtn id={product?.id || (product as any)?._id} />            </div>
          </div>

        </div>

      </div>
    </div>
  );
}