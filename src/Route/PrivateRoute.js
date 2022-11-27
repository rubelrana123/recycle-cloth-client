import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpinner from '../components/SmallSpinner';
import { AuthContext } from '../Contexts/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
    //  const [admin, adminLoading] = UseAdmin(user?.email);
 
   
   
  if( user && user?.uid){
    return children;
  }
   if(loading) {
    return <SmallSpinner></SmallSpinner>
  }
  
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
  
 
};

export default PrivateRoute;