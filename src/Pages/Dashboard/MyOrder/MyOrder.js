import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrder = () => {
  const {user} = useContext(AuthContext);

    const {data : orders =[],refetch, isLoading} = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: () =>
      fetch(`https://recycle-cloth-server.vercel.app/booking?email=${user?.email}`,{
         headers : {
                authorization : `bearer ${localStorage.getItem('token')}`
              }   }

      ).then(res =>
        res.json()
      )
  })
 console.log("order", orders);

   const handleDelete = id => {
    console.log(id);
    fetch(`https://recycle-cloth-server.vercel.app/${id}`, {
      method: 'DELETE',
      headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
      }  
    })
    .then(res => res.json())
    .then(data => {
      refetch();
      toast.success("Delete User Successfully")
        console.log("deleteDAta", data);
    })
  }



  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
       <div>
        <h1 className='text-4xl py-3 text-start'>My Order</h1>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>


      {
        orders  &&
        orders?.map((order, i) => {
          return (


         <tr >
        <th>{i + 1}</th>
        <td>
           <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle  w-12 h-12">
                <img src= {order?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
       
          </div>
        </td>
        <td>{order.product_name}</td>
        <td>200</td>
        <td>
          {
            order?.price && !order?.paid &&
            <Link to={`/dashboard/payment/${order.product_id}`}>
            <button  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Pay</button>
            
            </Link>

          }
          {
            order?.price && order?.paid &&
            <button  className="btn   rounded-md  border-2 text-error">Paid</button>

          }
         
       </td>
        <td> 
             <button onClick={() => handleDelete(order?._id)} className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>
          
          
           </td>
         
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