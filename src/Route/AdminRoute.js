import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
 
 

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
 
  const [isAdmin, adminLoading] = UseAdmin(user?.email);
  console.log("admin", isAdmin);
  const location = useLocation();
 
    if(loading || adminLoading ) {
    return (
			 <div className="h-screen bg-white">
      <div className="flex justify-center items-center h-full">
        <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
      </div>
      </div>
		);
  }
   
  if( user  && isAdmin){
    return children;
  }
  else{
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
  }
 
};

export default AdminRoute;