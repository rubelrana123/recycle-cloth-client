import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider.js';
import UseAdmin from '../../Hooks/UseAdmin.js';
import UseSeller from '../../Hooks/UseSeller.js';
 
 import Navbar from "../../Pages/Shared/Navbar/Navbar.js"
 

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  return (
    <div>
      <Navbar/>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    <Outlet></Outlet>
 
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link to= "/dashboard">My Orders</Link></li>
       {
        isSeller &&  
          <>
           <li><Link to ="/dashboard/addproduct">Add Product</Link></li>
         <li><Link to ="/dashboard/myproduct">My Product</Link></li>
          </>

        
       }
        


         {
          isAdmin && 
          <>
           <li><Link to ="/dashboard/allseller">All Seller</Link></li>
           <li><Link to ="/dashboard/allbuyer">All Buyer</Link></li>
           <li><Link to ="/dashboard/reporteditem">Reported Item</Link></li>
          
          </>
         }    
        
          
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;