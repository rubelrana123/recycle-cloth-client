import React, { useEffect, useState } from 'react';

const UseSeller = (email) => {
  const [isSeller, setSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);
 useEffect(() => {
      if(email) {
         fetch(`http://localhost:5000/user/seller/${email}`).then(res => res.json()).then(data => {
          console.log("check Seller", data?.isSeller);
          setSeller(data?.isSeller);
         setSellerLoading(false);
        })
      }
 }, [email])
 return [isSeller,sellerLoading];
};

export default UseSeller;