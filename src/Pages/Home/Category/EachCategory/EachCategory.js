import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';
 
import CategoryCard from '../CategoryCard/CategoryCard';
 

const EachCategory = () => {
  const [eachProduct, setEachProduct] = useState(null);
  const products = useLoaderData();
  // console.log("hello",products);
  return (

   <div className='lg:mx-12 md:mx-10 mx-6 my-12  mt-8'>
     <div className='grid md:grid-cols-1-2 grid-cols-1 lg:grid-cols-3 gap-8 '>
       
      {
        products?.map(product => {
          return <CategoryCard key={product._id}
          setEachProduct={setEachProduct}
          product={product} ></CategoryCard>
        })
      }
      
    </div>
    {
      eachProduct &&
      <BookingModal setEachProduct={setEachProduct} eachProduct={eachProduct}></BookingModal>}
   </div>
  );
};

export default EachCategory;