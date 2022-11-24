import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { router } from './Route/Route';

function App() {
  return (
    <div className="">
          <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
