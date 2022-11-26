import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

   
    const {data : buyers, refetch, isLoading} = useQuery ({
    queryKey : ["buyers"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('http://localhost:5000/user?role=Buyer');
     
      const data = res.json();
      return data;
        
      } catch (error) {
        console.log(error);
        
      }

     }

  }) 
   console.log(buyers);


  return (
    <div>
      <h1>All Buyer</h1>
    </div>
  );
};

export default AllBuyer;