import React from 'react';
import { useLoaderData } from 'react-router-dom';
 
import CategoryCard from '../CategoryCard/CategoryCard';
 

const EachCategory = () => {
  const products = useLoaderData();
  console.log("hello",products);
  return (

   <div>
     <div className='grid grid-cols-3 '>
       
      {
        products?.map(product => {
          return <CategoryCard key={product._id} product={product} ></CategoryCard>
        })
      }
      
    </div>
   </div>
  );
};

export default EachCategory;