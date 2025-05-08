import React, { useContext } from 'react';
import toast from 'react-hot-toast';
 import logo from "../../../asserts/Logo/Logo (2).png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
 

const Navbar = () => {
  const {user, signout} = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("username", user, user?.displayName);
  const handleLogOut = () => {
    signout().then( () => {
      navigate("/")
      toast.success("Logout Successfully", {autoClose : 200});
      localStorage.removeItem("token");
    })

  }
  const menuItem = <>
          <li><Link to="/">Home</Link></li>
           <li><Link to="/blog" >Blog</Link></li>
      
        { 
        user?.uid ? <>    
           <li><Link to="/dashboard">DashBoard</Link></li>
           <li><Link onClick={handleLogOut} >Logout</Link></li>
            
            
					   
             <div className="avatar  m-3 items-center flex">
              <div className="w-8 h-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL}  alt="profile" />
            </div>
         </div> 
         </>
          :  
        <li><Link to="/login">Login</Link></li>
        }
  </>
  return (
    <div className="navbar bg-base-100 px-5 shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItem}
      </ul>
    </div>
    <div className='flex items-center'>
      <img src={logo} className="lg:h-10 lg:w-10  h-8" alt="" />
    <Link to="/" className=" normal-case lg:text-xl  text-sm">Recycle Cloth</Link>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
     
    </ul>
  </div>
        <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
</div>
  );
};

export default Navbar;