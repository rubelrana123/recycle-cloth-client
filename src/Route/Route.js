import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import SignUp from '../Pages/Shared/Signup/Signup';
import Login from '../Pages/Shared/Login/Login';
import DashboardLayout from '../Layout/DashBoardLayout/DashboardLayout';
import MyOrder from '../Pages/Dashboard/MyOrder/MyOrder';
import AddProduct from '../Pages/Dashboard/AddProduct/AddProduct';
import Blog from '../Pages/Blog/Blog';
import EachCategory from '../Pages/Home/Category/EachCategory/EachCategory';
import AllSeller from '../Pages/Dashboard/AllSeller/AllSeller';
import AllBuyer from '../Pages/Dashboard/AllBuyer/AllBuyer';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import MyProduct from '../Pages/Dashboard/MyProduct/MyProduct';
 
 export  const router = createBrowserRouter([ 
  { path: "/", element : <Main></Main>, errorElement : <ErrorPage/>, children : [
     { path : "/", element : <Home></Home>},
   { path : "/signup", element : <SignUp></SignUp>},
   { path : "/login", element : <Login></Login>},
   { path : "/blog", element : <PrivateRoute><Blog></Blog></PrivateRoute>},
   { path : "/category/:id", loader :async ({params}) => await fetch(`http://localhost:5000/category/${params.id}`), element : <PrivateRoute>< EachCategory></ EachCategory></PrivateRoute>},
    
 ]},
 {
  path : "/dashboard", element : <DashboardLayout></DashboardLayout>, errorElement : <ErrorPage/> , children : [
    {path : "/dashboard", element : <MyOrder></MyOrder>},
    {path : "/dashboard/myproduct", element : <MyProduct></MyProduct> },
    {path : "/dashboard/addproduct", element : <AddProduct></AddProduct> },
    {path : "/dashboard/allseller", element : <AdminRoute><AllSeller></AllSeller></AdminRoute> },
    {path : "/dashboard/allbuyer", element : <AdminRoute><AllBuyer></AllBuyer></AdminRoute> }
  ]
 }
 ])