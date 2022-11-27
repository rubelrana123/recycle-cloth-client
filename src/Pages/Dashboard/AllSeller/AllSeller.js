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
           <div>
       <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>


      {
        sellers &&
        sellers?.map((seller, i) => {
          return (


         <tr >
        <th>{i + 1}</th>
        <td>{seller.name}</td>
        <td>{seller?.email}</td>
        <td>
         </td>
        <td>  </td>
         
      </tr>




          )
        })
      }
     

      
     
 

 
    </tbody>
  </table>
</div>
    </div>
    </div>

    </div>
  );
};

export default AllSeller;