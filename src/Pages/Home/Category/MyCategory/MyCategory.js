import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BokkingModal/BookingModal';
import EachCategory from '../EachCategory/EachCategory';

const MyCategory = () => {
   const products = useLoaderData();
    console.log("hello",products);
  return (
    <div>
         <EachCategory></EachCategory>
          

      
    </div>
  );
};

export default MyCategory;