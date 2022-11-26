import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';

const CategoryCard = ({product, setEachProduct}) => {
  console.log("object", product);
 
  return (
    <div>
      <div className="card w-full bg-red-50 shadow-xl">
  <figure><img src={product?.image} className="w-full  bg-white  rounded-md h-72" alt="products" /></figure>
 <div className='flex gap-1 pl-2'>
      <h2>Date : {product.published_date}</h2>
      <h2 className='ml-2'>Location : {product.location}</h2>
      
  </div>
  <div className="px-2">
     <h2 className="card-title ">
       {product.product_name} 
      <div className="badge badge-base">{product.product_condition}</div>

       </h2>

      
       <div>
          <p>Used : {product.year_used}</p>

       </div>
    <div className="card-actions justify-end">
      
       <label
       onClick={() => setEachProduct(product)}
        htmlFor="booking-modal" 
        className="btn btn-primary rounded-md text-white"
     >Book Now</label> 
      {/* <button className='bg-primary py-3 px-2 rounded-sm text-white'>Book Now</button> */}
    </div>
  </div>
</div>

     </div>
  );
};

export default CategoryCard;