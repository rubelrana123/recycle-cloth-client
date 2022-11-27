import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import UseSeller from '../Hooks/UseSeller';
 
 
 

const SellerRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
 
  const [isSeller, sellerLoading] = UseSeller(user?.email);
  console.log("admin", isSeller);
 
    if(loading || sellerLoading ) {
    return (
			 <div className="h-screen bg-white">
      <div className="flex justify-center items-center h-full">
        <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
      </div>
      </div>
		);
  }
   
  if( user  && isSeller){
    return children;
  }
  else{
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
  }
 
};

export default SellerRoute;