 
import Image from "next/image";
import { Producttype } from "./_interfaces/Products";
import { getallproduct } from "../_services/product.services";
import ProductCard from "./_Components/ProductCard/page";
import Homeslider from "./_Components/Homeslider/Homeslider";
// import Categoriesslider from "./_Components/Categories.slider/Categoriesslider";
import { lazy, Suspense } from "react";

const Categoriesslider = lazy(() =>import('./_Components/Categories.slider/Categoriesslider'))
export default async function Home() {
  const alldata = await getallproduct();

  return (
    <> 
    
    <Homeslider />

    <Suspense fallback={ 
        <div className=' flex items-center justify-center mt-50 '>

 <i className='fa-solid fa-spinner fa-spin fa-3x text-gray-500'></i>




    </div>
    }>
      <Categoriesslider />
    </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {alldata?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
 
 