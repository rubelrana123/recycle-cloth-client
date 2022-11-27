import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner"
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
 const handleDelete = id => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: 'DELETE',
      headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
      }  
    })
    .then(res => res.json()) // or res.json()
    .then(data => {
      refetch();
      toast.success("Delete User Successfully")
        console.log(data);
    })
  }

  const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/user/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Make Admin Confirmed', { autoClose: 500 })
                refetch()
            })

    }

 if(isLoading) {
    return <Spinner></Spinner>
  }

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
        <th>Verify</th>
        <th>Make Admin</th>
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
          
   <button  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Verify</button>
         </td>
        <td> 
             <button onClick={() => handleDelete(seller?._id)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>
          
           </td>
          <td>{seller?.role !== 'Admin' && <button onClick={() => handleMakeAdmin(seller?._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
          <td>{seller?.role === 'Admin' && <button  className="btn btn-xs">Admin</button>}</td>

        {/* <td> 
             <button onClick={() => handleMakeAdmin(seller?._id)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>
          
           </td> */}
         
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