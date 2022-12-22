import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner';

const AllBuyer = () => {

   
    const {data : buyers, refetch, isLoading} = useQuery ({
    queryKey : ["buyers"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('https://recycle-cloth-server.vercel.app/user?role=Buyer', {
       headers : {
        authorization : `bearer ${localStorage.getItem('token')}`
      },
     });
     
      const data = res.json();
      return data;
        
      } catch (error) {
        console.log(error);
        
      }

     }

  }) 
   console.log(buyers);

    if(isLoading) {
      return <Spinner></Spinner>
    } 

 const handleDelete = id => {
  
            const proceed = window.confirm('Are you sure, you want to make admin this Seller');
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


  return (
     <div>
             <h1 className='text-4xl py-3 text-start'>All Buyer</h1>

       <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
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
        <td> {buyer?.email}</td>
        <td> 
          <button onClick={() => handleDelete(buyer?._id)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>

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

export default AllBuyer;