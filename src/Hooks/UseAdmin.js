import React, { useEffect, useState } from 'react';

const UseAdmin = (email) => {
  const [isAdmin, setAdmin] = useState(false);
  const [adminLoading, setadminLoading] = useState(true);
  console.log("admin email", email);
 useEffect(() => {
      if(email) {
         fetch(`https://recycle-cloth-server.vercel.app/user/admin/${email}`).then(res => res.json()).then(data => {
          console.log("check admin", data?.isAdmin);
          setAdmin(data?.isAdmin);
         setadminLoading(false);
         
        })
      }
 }, [email])
 return [isAdmin,adminLoading];
};

export default UseAdmin;