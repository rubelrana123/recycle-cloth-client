import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';

const CategoryCard = ({product}) => {
  console.log("object", product);
 
  return (
    <div>
      <div className="card w-96 bg-gray-300 shadow-xl">
  <figure><img src={product?.image} className="h-40 w-40" alt="products" /></figure>
  <div className="card-body">
       <div className='flex justify-between'>
            <h2 className="card-title">
      {product.product_name}
      <div className="badge badge-secondary">{product.product_condition}</div>
    </h2>
     <div className='flex gap-5'>
      <h2>Publiseh Date : {product.published_date}</h2>
      <h2>Location : {product.location}</h2>
      
     </div>
       </div>
       <div>
          <p>Used : {product.year_used}</p>

       </div>
    <div className="card-actions justify-end">
       <label htmlFor="booking-modal" className="btn btn-primary text-white"
     >Book Now</label>
      {/* <button className='bg-primary py-3 px-2 rounded-sm text-white'>Book Now</button> */}
    </div>
  </div>
</div>

     </div>
  );
};

export default CategoryCard;