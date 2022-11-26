import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const {data : sellers, refetch, isLoading} = useQuery ({
    queryKey : ["sellers"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('http://localhost:5000/user?role=Seller');
     
      const data = res.json();
      return data;
        
      } catch (error) {
        console.log(error);
        
      }

     }

  }) 
   console.log(sellers);
  return (
    <div className='m-6'>
      <h1 className='text-4xl font-semibold'> All Seller</h1>
    </div>
  );
};

export default AllSeller;