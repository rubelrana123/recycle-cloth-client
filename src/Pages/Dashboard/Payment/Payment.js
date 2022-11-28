import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
 
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import CheckoutForm from './CheckoutForm';
 

const Payment = () => {
  const stripePromise = loadStripe('pk_test_51M6XMyFP01giCZcaiHo2Sf0k5J2nvnmVB9SjDNPzpI4y0ZYDOnNo7brmzFSP9M0hcuL3BQbcprQIvZmhRftSzOUJ00oyxAlOwQ');
  const data = useLoaderData();
  console.log(data);
//  const navigation = useNavigation();

  // if(navigation.state === 'loading') {
  //   return <Loading></Loading>
  // }
  console.log(data);
  return (
    <div>
      <p className='text-4xl font-semibold'>Payment for {data?.product_name}</p>
      <p>  </p>
      <div className='  mt-8'>
      <Elements  stripe={stripePromise}> 
      <CheckoutForm booking = {data} />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;