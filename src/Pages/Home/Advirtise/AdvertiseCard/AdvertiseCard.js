import { ArrowRightIcon, BuildingStorefrontIcon, CalendarIcon, CheckBadgeIcon, CurrencyBangladeshiIcon, ExclamationTriangleIcon, MapPinIcon, StarIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';

const CategoryCard = ({product, setEachProduct}) => {
  console.log("object", product);
 
  return (
    <div>
      <div className="card w-96 bg-red-50 shadow-xl"> 
            <figure><img src={product?.image} alt="product" className="w-full object-fill  h-72  bg-white  rounded-md " /></figure>
 
  <div className="px-2">
       <div className='flex justify-between'>
        <h2 className="card-title ">
       {product.product_name} 
      <div className="badge badge-base">{product.product_condition}</div>

       </h2>
       <h2 className='text-error flex gap-2 items-center'> <ExclamationTriangleIcon className='h-4 w-4'></ExclamationTriangleIcon><span className='text-sm'>Report to Admin</span></h2>
       </div>

      
       <div>
           
          <p className='flex gap-2 items-center'><CurrencyBangladeshiIcon className='h-5'></CurrencyBangladeshiIcon> <span>Original Price : {product?.original_price
           } BDT</span></p>
          <p className='flex gap-2 items-center'><CurrencyBangladeshiIcon className='h-5'></CurrencyBangladeshiIcon> <span>Original Price : {product?.resale_price
           } BDT</span></p>
           <h2 className='flex gap-2 items-center'> <MapPinIcon className='h-5'></MapPinIcon> Location : {product?.location}</h2>
          <p className='flex gap-2 items-center'><BuildingStorefrontIcon className='h-5'></BuildingStorefrontIcon> <span>Used Year : {product.year_used}</span></p>
         <h2 className='flex gap-2 items-center'><CalendarIcon className='h-5'></CalendarIcon> <span>Post Date : {product.published_date}</span></h2>
          <p className='flex'>
            <UserIcon className='h-5'></UserIcon>
            <p>Seller : {product.seller_name}</p>
            {
              !product?.verify &&
              <CheckBadgeIcon className='h-5 text-blue-600'></CheckBadgeIcon>
            }
          </p>

       </div>
    <div className="card-actions justify-start">
      
       <label
       onClick={() => setEachProduct(product)}
        htmlFor="booking-modal" 
        className="btn btn-primary rounded-md text-white"
     >Book Now</label> 
      
    </div>
  </div>
</div>

     </div>
  );
};

export default CategoryCard;