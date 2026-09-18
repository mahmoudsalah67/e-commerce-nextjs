import React from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { getCart } from '@/_services/cart.services'
import { cartResponseType, ItemType } from '../_interfaces/cart.types'
import Link from 'next/link'
import RemoveItemBtn from './Removeitembtn'
import ChangecountBtn from './ChangecountBtn'
  export default async function Cart() {
  async function getUserCart(): Promise<cartResponseType> {
    const res = await getCart()
    return res
  }

  const cartData = await getUserCart()
  const numOfCartItems = cartData?.numOfCartItems || 0
  const products = cartData?.products || []
  const totalCartPrice = cartData?.totalCartPrice || 0

  // حالة السلة الفارغة
  if (numOfCartItems === 0) {
    return (
      <div className="container  mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-300">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full font-bold text-lg">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      {/* Header */}
      <div className="mt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Shopping Cart
        </h1>
        <p className="text-slate-500 mt-2 text-base md:text-lg">
          You have <span className="font-bold text-green-600">{numOfCartItems}</span> items in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Products List - Flex-based for 100% Responsiveness (No horizontal scrollbars) */}
        <div className="lg:col-span-8 space-y-4">
          {products?.map((item: ItemType) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-slate-200"
            >
              {/* Product Info & Image */}
              <div className="flex items-center gap-4 flex-1 min-w-0 w-full sm:w-auto">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                  <Image
                    src={item.product?.imageCover || '/placeholder.png'}
                    alt={item.product?.title || 'Product Image'}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate hover:text-green-600 transition-colors cursor-pointer">
                    {item.product?.title || 'Product Title'}
                  </h3>
                  {item.product?.category?.name && (
                    <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-md w-fit font-medium">
                      {item.product.category.name}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 sm:hidden mt-0.5">
                    Price: <strong className="text-slate-700">{item.price} LE</strong>
                  </span>
                </div>
              </div>

              {/* Controls Wrapper */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                {/* Price (Hidden on mobile inside wrapper, shown above) */}
                <div className="hidden sm:block text-right min-w-[80px]">
                  <span className="font-black text-slate-800 text-base">{item.price}</span>
                  <span className="text-xs text-slate-500 ml-1">LE</span>
                </div>

               {/* Quantity Control */}
<div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-200">
  {/* زر النقصان */}
  <ChangecountBtn id={item.product.id} newCount={item.count - 1} />

  <Input
    type="number"
    readOnly
    className="w-8 sm:w-10 h-7 text-center text-xs sm:text-sm font-bold p-0 border-0 bg-transparent focus-visible:ring-0 shadow-none"
    value={item.count}
  />

  {/* زر الزيادة */}
  <ChangecountBtn isincremnt id={item.product.id} newCount={item.count + 1} />
</div>

                {/* Delete Button */}
              <RemoveItemBtn id={item.product.id} />
              </div>

            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-24">
            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-slate-300 text-sm">
                <span>Subtotal ({numOfCartItems} items)</span>
                <span className="font-semibold text-white">{totalCartPrice} LE</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 text-sm">
                <span>Shipping</span>
                <span className="text-green-400 font-medium text-xs">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-base font-medium text-slate-300">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-white block leading-none">{totalCartPrice}</span>
                  <span className="text-xs text-slate-400 mt-1 block">LE</span>
                </div>
              </div>
            </div>

       <Link href="/payment" className="w-full">
            <Button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white h-12 sm:h-14 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 group transition-all">
              Proceed to Checkout
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
       </Link>
          </div>
        </div>

      </div>
    </div>
  )
}