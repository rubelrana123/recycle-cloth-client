import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallSpinner from '../../../components/SmallSpinner';

const ReportedItem = () => {
 

          const {data : reporteditems, isLoading} = useQuery({
    queryKey : ["reporteditems"],
     queryFn : async () => { 
        
      try {
     const res = await fetch('http://localhost:5000/product/report', {
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
          <button  className="btn btn-ghost rounded-md  border-2  text-error   btn-md border-primary">Delete</button>

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