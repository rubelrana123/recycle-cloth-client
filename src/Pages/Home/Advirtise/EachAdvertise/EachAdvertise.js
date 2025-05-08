import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
 
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import BookingModal from '../BokkingModal/BookingModal';
 
 
 
 

const EachAdvertise = ({products, refetch, isLoading}) => {
  const [eachProduct, setEachProduct] = useState(null);

   console.log(products);
  return (
       <div className='py-8 lg:mx-16  md:mx-10 mx-6' >
    <div className='text-start'>
      
      <h2 className="text-4xl  my-10 font-semibold">Our Advertise Product</h2>
 
    </div>
     <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  lg:gap-8 gap-4'>
      {
         products?.map(product => {
          return <AdvertiseCard key={product._id}
          setEachProduct={setEachProduct}
          product={product} ></AdvertiseCard>
        })
      }
    </div>


    {
      eachProduct &&
      <BookingModal setEachProduct={setEachProduct} eachProduct={eachProduct}></BookingModal>}

   </div>


 
  );
};

export default EachAdvertise;