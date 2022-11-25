import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../components/Spinner';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrder = () => {
  const {user} = useContext(AuthContext);

    const {data : orders =[], isLoading} = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/booking?email=${user?.email}`
      
      // {
      //    headers : {
      //           authorization : `bearer ${localStorage.getItem('token')}`
      //         }   }

      ).then(res =>
        res.json()
      )
  })
 console.log("order", orders);
  if(isLoading) {
    return <Spinner></Spinner>
  }

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
        orders.map((order, i) => {
          return (


         <tr >
        <th>{i + 1}</th>
        <td>{order.product_name}</td>
        <td>200</td>
        <td>
           
            <button
       
         className='btn btn-xs bg-secondary'>Approve</button> </td>
        <td> <button 
       
        className='btn btn-xs bg-red-400'>Delete</button> </td>
         
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

export default MyOrder;