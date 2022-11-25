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
 
 export  const router = createBrowserRouter([ 
  { path: "/", element : <Main></Main>, errorElement : <ErrorPage/>, children : [
     { path : "/", element : <Home></Home>},
   { path : "/signup", element : <SignUp></SignUp>},
   { path : "/login", element : <Login></Login>},
   { path : "/blog", element : <Blog></Blog>},
   { path : "/category/:id", loader :async ({params}) => await fetch(`http://localhost:5000/category/${params.id}`), element : < EachCategory></ EachCategory>},
    
 ]},
 {
  path : "/dashboard", element : <DashboardLayout></DashboardLayout>, errorElement : <ErrorPage/> , children : [
    {path : "/dashboard", element : <MyOrder></MyOrder>},
    {path : "/dashboard/myproduct", element : <MyOrder></MyOrder> },
    {path : "/dashboard/addproduct", element : <AddProduct></AddProduct> },
  ]
 }
 ])