import React from 'react'
import { Producttype } from '../../_interfaces/Products'
import Link from 'next/link'
import Image from 'next/image'
import AddProductbtn from '../Addproductbtn/AddProductbtn'
import { Star, Eye } from 'lucide-react'

export default function ProductCard({ product }: { product: Producttype }) {
  // حساب نسبة الخصم إن وجد
  const discountPercentage = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : null;

  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Badges & Image Section */}
      <div>
        <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-50 mb-4">
          {/* Discount Badge */}
          {discountPercentage && (
            <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              -{discountPercentage}%
            </span>
          )}

          {/* Category Badge */}
          {product.category?.name && (
            <span className="absolute top-2 right-2 z-10 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
              {product.category.name}
            </span>
          )}

         {/* Product Image Wrapper */}
<div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-50 mb-4 flex items-center justify-center">
  <Image
    src={product.imageCover}
    alt={product.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
  />
</div>
        </div>

        {/* Title & Rating */}
        <div className="space-y-1 mb-3">
          <div className="flex justify-between items-start gap-2">
            <h2 className="font-semibold text-slate-800 text-base line-clamp-1 group-hover:text-green-600 transition-colors">
              {product.title.split(' ', 3).join(' ')}
            </h2>
            
            {/* Rating */}
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md text-xs font-bold text-amber-700 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.ratingsAverage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price & Actions Section */}
      <div className="pt-2 border-t border-slate-50 mt-auto">
        {/* Price Display */}
        <div className="mb-4">
          <span className="text-xs text-slate-400 block mb-0.5">Price</span>
          <div className="flex items-baseline gap-2">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-lg font-bold text-slate-900">
                  {product.priceAfterDiscount} LE
                </span>
                <span className="text-sm font-medium text-slate-400 line-through">
                  {product.price} LE
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-slate-900">
                {product.price} LE
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* View Details Button */}
          <Link 
            href={`/productdetails/${product.id}`} 
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-2.5 px-3 rounded-xl transition-colors"
          >
            <Eye className="w-4 h-4 text-slate-500" />
            <span>Details</span>
          </Link>

          {/* Add to Cart Component */}
          <div className="flex-1">
            <AddProductbtn id={product?.id} />
          </div>
        </div>
      </div>
    </div>
  )
}