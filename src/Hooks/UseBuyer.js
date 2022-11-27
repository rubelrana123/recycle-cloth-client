import React, { useEffect, useState } from 'react';

const UseSeller = (email) => {
  const [isBuyer, setBuyer] = useState(false);
  const [buyerLoading, setBuyerLoading] = useState(true);
 useEffect(() => {
      if(email) {
         fetch(`http://localhost:5000/users/buyer/${email}`).then(res => res.json()).then(data => {
          console.log("check admin", data?.isBuyer);
          setBuyer(data?.isBuyer);
         setBuyerLoading(false);
        })
      }
 }, [email])
 return [isBuyer,buyerLoading];
};

export default UseSeller;