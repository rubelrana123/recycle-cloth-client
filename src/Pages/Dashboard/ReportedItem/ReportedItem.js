import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/SmallSpinner';
const axios = require('axios');
const ReportedItem = () => {
 
    const {data : reporteditems = [], refetch, isLoading} = useQuery({
    queryKey : ["reporteditems"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('https://recycle-cloth-server.vercel.app/product/report', {
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

   const handleDelete = id => {
    console.log(id);
    fetch(`https://recycle-cloth-server.vercel.app/product/${id}`, {
      method: 'DELETE',
      headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
      }  
    })
    .then(res => res.json())  
    .then(data => {
      refetch();
      toast.success("Delete Product Successfully")
        console.log(data);
    })
  }

  if(isLoading) {
    return <SmallSpinner></SmallSpinner>
  }

  return (
    <div>
         <div>
       <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Seller Name</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>


      {
        reporteditems &&
        reporteditems?.map((reporteditem, i) => {
          return (


         <tr >
        <th>{i + 1}</th>
        <td>
                     <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask    w-12 h-12">
                <img src= {reporteditem?.image} alt="  Tailwind CSS Component" />
              </div>
            </div>
       
          </div>
        </td>
        <td>{reporteditem?.product_name}</td>
        <td> {reporteditem?.seller_email}</td>
        <td> 
          <button onClick={() => handleDelete(reporteditem._id)}  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>

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
    </div>
  );
};

export default ReportedItem;