import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
  const data = useLoaderData();
  console.log("payment data",data);
  return (
    <div>
      <h1>Hello Admin</h1>
    </div>
  );
};

export default Payment;