import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner"
const AllSeller = () => {

    const {data : sellers, refetch, isLoading} = useQuery ({
    queryKey : ["sellers"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('https://recycle-cloth-server.vercel.app/user?role=Seller', {
       headers : {
        authorization : `bearer ${localStorage.getItem('token')}`
      },
     }
     );

     
      const data = res.json();
      return data;
        
      } catch (error) {
        console.log(error);
        
      }

     }

  }) 
 
 const handleDelete = id => {
             const proceed = window.confirm('Are you sure, you want to Delete this Seller');
        if(proceed){ 
              fetch(`https://recycle-cloth-server.vercel.app/user/${id}`, {
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
    
  }

  const handleMakeAdmin = id => {

        const proceed = window.confirm('Are you sure, you want to make admin this Seller');
        if(proceed){ 
          fetch(`https://recycle-cloth-server.vercel.app/user/admin/${id}`, {
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
       
    }

  const handleMakeVerify =  (email) => {

            const proceed = window.confirm('Are you sure, you want to make Verify this Seller');
        if(proceed){  

     fetch(`https://recycle-cloth-server.vercel.app/user/verify/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Make Verify Confirmed', { autoClose: 500 })
                refetch()
            })


        }
 



  }

 if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div className='m-6'>
             <h1 className='text-4xl py-3 text-start'>All Seller</h1>

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
        <th>Delete</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>


      {
        sellers &&
        sellers?.map((seller, i) => {
          return (


         <tr key={sellers._id}>
        <th>{i + 1}</th>
        <td>{seller.name}</td>
        <td>{seller?.email}</td>
        <td>
          
          { seller.verify ? 
          
          <button onClick={() => handleMakeVerify(seller?.email)}  className="text-success">Veried</button>
             :
               <button onClick={() => handleMakeVerify(seller?.email)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Verify</button>
          }
         </td>
        <td> 
             <button onClick={() => handleDelete(seller?._id)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>
          
           </td>
          <td>{seller?.role !== 'Admin' && <button onClick={() => handleMakeAdmin(seller?._id)} className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Make Admin</button>}</td>
          

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