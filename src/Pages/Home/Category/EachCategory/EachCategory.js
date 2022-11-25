import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';
 
import CategoryCard from '../CategoryCard/CategoryCard';
 

const EachCategory = () => {
  const [eachProduct, setEachProduct] = useState(null);
  const products = useLoaderData();
  console.log("hello",products);
  return (

   <div>
     <div className='grid grid-cols-3 '>
       
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