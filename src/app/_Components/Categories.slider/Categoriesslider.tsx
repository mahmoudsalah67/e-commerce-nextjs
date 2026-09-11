 import React from 'react'
import MySwiper from '../myswiper/MySwiper';
import { getallcategories } from '@/src/_services/Categories.services';

export default async function Categoriesslider() {

 const categories = await getallcategories();

  return (
    <div className='px-30 mt-20 '>

<MySwiper imglist={categories?.map((category) => 
category.image
 
) || []} slidesPerView={4} spaceBetween={10}/>

{categories?.map((category) => (
  <div key={category._id} className="text-center">
   </div>
))}
    </div>
  )
}
