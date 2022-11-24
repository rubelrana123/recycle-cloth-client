import React from 'react';
import img1 from '../../../asserts/bannerImage/Banner1.jpg';
import img2 from '../../../asserts/bannerImage/banner2.jpg';
import img3 from '../../../asserts/bannerImage/banner3.jpg';
 
 
 
import BannerItem from './BannerItem';
const Banner = () => {
  const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2,
        descripton : "Buy Your Best Products"
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3,
        descripton : "Decide what you want to sell"

    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1,
        descripton : "Find stores or suppliers for your products"

    },
    
 
]
  return (
    <div>
      <div className="carousel w-full  ">

        {
          bannerData.map(sliderInfo =>   <BannerItem key={sliderInfo.id} slide= {sliderInfo}></BannerItem> )
        }
      

   
   
   
   
</div>
    </div>
  );
};

export default Banner;