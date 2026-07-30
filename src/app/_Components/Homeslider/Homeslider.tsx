import React from 'react'
 
import img1 from '../../../assets/images/slider-image-1.jpeg';
import img2 from '../../../assets/images/slider-image-2.jpeg';
import img3 from '../../../assets/images/slider-image-3.jpeg';
import blog1 from '../../../assets/images/blog-img-1.jpeg';
import blog2 from '../../../assets/images/blog-img-2.jpeg';
import MySwiper from '../myswiper/MySwiper';
 function Homeslider() {
  return (
    <>
    <div className="px-15 mt-20  grid grid-cols-12" >
<div className="col-span-8">
   <MySwiper imglist={[img1.src, img2.src, img3.src]}  />
</div>

<div className="col-span-4">
   <img src={blog1.src} alt="blog 1"  className="w-full h-[200px]"/>
   <img src={blog2.src} alt="blog 2" className="w-full h-[200px]" />
</div>
      
      </div>
    
    </>
  )
}

export default Homeslider