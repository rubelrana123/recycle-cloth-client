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
       <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>


      {
        buyers &&
        buyers?.map((buyer, i) => {
          return (


         <tr >
        <th>{i + 1}</th>
        <td>{buyer.product_name}</td>
        <td> {buyer?.email}</td>
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
  );
 
};

export default AllBuyer;