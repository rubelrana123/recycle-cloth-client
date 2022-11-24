import React from 'react';

const MyOrder = () => {
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
     
         <tr >
        <th>1</th>
        <td>shirt</td>
        <td>200</td>
        <td>
           
            <button
       
         className='btn btn-xs bg-secondary'>Approve</button> </td>
        <td> <button 
       
        className='btn btn-xs bg-red-400'>Delete</button> </td>
         
      </tr>
      
     
 

 
    </tbody>
  </table>
</div>
    </div>
    </div>
  );
};

export default MyOrder;