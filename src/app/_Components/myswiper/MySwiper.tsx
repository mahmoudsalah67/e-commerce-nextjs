'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
interface MySwiperProps {
  imglist: string[];
  spaceBetween?: number;
  slidesPerView?: number;
}

export default function MySwiper({
  imglist,
  spaceBetween = 0,
  slidesPerView = 1,
  

}: MySwiperProps) {
  return (
    <div className="">
      <Swiper modules={[Autoplay, Pagination, Navigation]}
       
        spaceBetween={spaceBetween} 
        slidesPerView={slidesPerView}
        autoplay={{
        delay: 1000, // الوقت بالمللي ثانية (هنا كل ثانيتين ونصف)
        disableOnInteraction: false, // يستمر في التقليب حتى لو المستخدم لمس السلايدر
      }}
        className=" "
        loop
         
       >
        {imglist.map((src, index) => (
          <SwiperSlide key={index} >
            <img 
              src={src} 
               className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}