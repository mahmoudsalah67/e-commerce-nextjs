import { Button } from "@/components/ui/button"
import { getspecifiedproduct } from "@/src/_services/product.services"
import AddProductbtn from "../../_Components/Addproductbtn/AddProductbtn"

type Productdetailsprops = {
   params: Promise<{ id: string }>
}

export default async function productdetails({ params }: Productdetailsprops) {
  // 1. فك الـ params وجلب بيانات المنتج أولاً
  const { id } = await params;
  const product = await getspecifiedproduct(id);

  // 2. التحقق من وجود المنتج بعد جلب البيانات
  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
   <div className="mt-10 md:mt-19 grid grid-cols-1 md:grid-cols-12 gap-6 p-4 px-4 sm:px-8 md:px-16 lg:px-24 items-center justify-between">
  
   <div className="col-span-1 md:col-span-4 flex justify-center">
    <img 
      src={product?.imageCover} 
      alt={product?.title} 
      className="w-full max-w-sm md:max-w-full h-auto rounded-lg object-cover" 
    />
  </div>

   <div className="col-span-1 md:col-span-8 space-y-3">
    <h1 className="text-7xl   font-bold">{product?.title}</h1>
    
    <p className="text-gray-600 text-3xl leading-relaxed">
      {product?.description}
    </p>
    
    <p className="  text-4xl font-semibold">price: $ {product.priceAfterDiscount ? 
        <>
        <span className='line-through text-red-700 me-2'>{product.price}</span>
         
        <span >{product.priceAfterDiscount}</span> 
        </>
        : <span>{product.price}</span>}</p>

    <p className="  text-4xl font-semibold">
     <span className="font-bold text-green-600">{product?.category?.name}</span>
    </p>
    
    <p className="  text-4xl font-semibold">
      Brand: <span className="font-normal text-gray-700">{product?.brand?.name}</span>
    </p>
    
    <p className="  text-4xl font-semibold flex items-center gap-1">
      Ratings: <span>{product?.ratingsAverage}</span>
      <i className="fa-solid fa-star text-yellow-400"></i>
    </p>

 
    <AddProductbtn  id={product?.id} /> 
 
  </div>

</div>
  )
}