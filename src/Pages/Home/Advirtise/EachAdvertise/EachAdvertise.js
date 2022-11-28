import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
 
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import BookingModal from '../BokkingModal/BookingModal';
 
 
 
 

const EachAdvertise = () => {
  const [eachProduct, setEachProduct] = useState(null);
      const {data : products =[],refetch, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`http://localhost:5000/advertise`,{
         headers : {
                authorization : `bearer ${localStorage.getItem('token')}`
              }   }

      ).then(res =>
        res.json()
      )
  })
   console.log(products);
  return (
       <div className='py-8' >
    <div className='text-center'>
      
      <h2 className="text-5xl my-10 font-semibold">Our Advertise Product</h2>
 
    </div>
     <div className='grid md:grid-cols-1-2 grid-cols-1 lg:grid-cols-3 gap-8'>
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