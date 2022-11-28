import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
 
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
 
// const stripePromise = loadStripe('pk_test_51M6XMyFP01giCZcaiHo2Sf0k5J2nvnmVB9SjDNPzpI4y0ZYDOnNo7brmzFSP9M0hcuL3BQbcprQIvZmhRftSzOUJ00oyxAlOwQ');
const CheckoutForm = ({booking}) => {
  console.log(booking);
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCartError] = useState("");
    const [success, setSuccess] = useState("");
    const [transtitionId, setTranstitionId] = useState("");
    const [isprocessing, setProcessing] = useState(false);
   const stripe = useStripe();
  const elements = useElements();
 const {resale_price,seller_email, seller_name, _id} = booking;
  console.log(success, transtitionId);
    useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
        authorization : `bearer ${localStorage.getItem('token')}`
        },
      body: JSON.stringify({resale_price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));  
  }, [resale_price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
     if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      toast.error(error.message)
  };
  setProcessing(true);
const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: seller_name,
        email : seller_email
      },
    },
  },
);
if(confirmError) {
  console.log(confirmError);
  setCartError(confirmError.message);
  toast.error(confirmError?.message);
  // setProcessing(false);
  setSuccess(" ")
  return;
}
console.log(paymentIntent.status);
if(paymentIntent.status === "succeeded") {
  console.log(paymentIntent);
    // setSuccess ("Your Payment SuccessFully !!");
    // setTranstitionId(paymentIntent?.id);
  // setProcessing(false);
       
     const payment = {
                resale_price,
                transactionId: paymentIntent.id,
                seller_email,
                bookingId: _id
            }
            console.log(payment);
            
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                         setSuccess ("Your Payment SuccessFully !!");
                           setTranstitionId(paymentIntent?.id);
                    }
                })

        }
 setProcessing(false)

}
// if(isprocessing) {
//   return <Loading></Loading>
// }
  return (
    <div>
           <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-primary border-2' disabled={!stripe || !clientSecret || isprocessing  }>
        Pay
      </button>
    </form>
 
      { cardError &&
        <p>{cardError}</p>

      }
 
 {
         success &&
      <>
      <p className='text-black'>{success}</p>
      <p className='text-black'> Payment Transtition Id : {transtitionId}</p>
      
      </>
    } 
    
    </div>

  );
};

export default CheckoutForm;
