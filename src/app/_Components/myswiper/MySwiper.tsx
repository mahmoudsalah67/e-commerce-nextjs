'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

interface MySwiperProps {
  imglist: string[];
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: { [width: number]: SwiperOptions };
}

export default function MySwiper({
  imglist,
  spaceBetween = 0,
  slidesPerView = 1,
  breakpoints
}: MySwiperProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        className="w-full rounded-lg overflow-hidden"
      >
        {imglist.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`slide-${index}`}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}