import { getspecifiedproduct } from "_/src/_services/product.services"

  

type Productdetailsprops = {
   params: Promise<{ id: string }>
}
export default async function productdetails({params}:Productdetailsprops){
  
  const product = await getspecifiedproduct((await params).id)


  return (
   <div className="mt-10 md:mt-19 grid grid-cols-1 md:  grid-cols-12 gap-6 p-4 px-4 sm:px-8 md:px-16 lg:px-24 items-center justify-between">
  
   <div className="col-span-1 md:col-span-4 flex justify-center">
    <img 
      src={product?.imageCover} 
      alt={product?.title} 
      className="w-full max-w-sm md:max-w-full h-auto rounded-lg object-cover" 
    />
  </div>

   <div className="col-span-1 md:col-span-8 space-y-3">
    <h1 className="text-2xl md:text-3xl font-bold">{product?.title}</h1>
    
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      {product?.description}
    </p>
    
    <p className="text-lg font-medium">
      Price: {product?.priceAfterDiscount ? (
        <>
          <span className="line-through text-red-700 me-2">${product?.price}</span>
          <span className="font-bold text-green-600">${product?.priceAfterDiscount}</span> 
        </>
      ) : (
        <span className="font-bold">${product?.price}</span>
      )}
    </p>

    <p className="text-base md:text-lg font-semibold">
      Category: <span className="font-normal text-gray-700">{product?.category?.name}</span>
    </p>
    
    <p className="text-base md:text-lg font-semibold">
      Brand: <span className="font-normal text-gray-700">{product?.brand?.name}</span>
    </p>
    
    <p className="text-base md:text-lg font-semibold flex items-center gap-1">
      Ratings: <span>{product?.ratingsAverage}</span>
      <i className="fa-solid fa-star text-yellow-400"></i>
    </p>
  </div>

</div>
  )
}
