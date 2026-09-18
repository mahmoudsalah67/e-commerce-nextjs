import React from 'react'
import MySwiper from '../myswiper/MySwiper';
import { getallcategories } from '@/_services/Categories.services';

export default async function Categoriesslider() {
  const categories = await getallcategories();

  return (
    <div className='px-4 md:px-12 mt-10'>
      <h2 className="text-xl font-bold mb-4 text-slate-800">Shop Popular Categories</h2>
      <MySwiper 
        imglist={categories?.map((category: { image: string }) => category.image) || []} 
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
          1280: { slidesPerView: 6, spaceBetween: 15 },
        }}
      />
    </div>
  )
}