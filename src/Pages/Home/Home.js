import { useQuery } from '@tanstack/react-query';
import React from 'react';
import EachAdvertise from './Advirtise/EachAdvertise/EachAdvertise';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import DisCount from './Discount/DisCount';
 

const Home = () => {
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
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        {
         products.length > 0 &&
        <EachAdvertise products={products} refetch={refetch} isLoading={isLoading}></EachAdvertise>
        }
        <DisCount></DisCount>
    </div>
  );
};

export default Home;