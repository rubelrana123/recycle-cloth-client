import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  ArrowRight, 
  Store, 
  Calendar, 
  BadgeCheck, 
  DollarSign, 
  AlertTriangle, 
  MapPin, 
  User, 
  Clock
} from 'lucide-react';

const CategoryCard = ({product, setEachProduct}) => {
  
  const handleReported = (id) => {
    fetch(`https://recycle-cloth-server.vercel.app/product/report/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Report submitted successfully', { duration: 2000 });
      });
  }; 

  return (
    <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col max-w-sm">
        {/* Image container with overlay on hover */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={product?.image} 
            alt={product?.product_name || "Product"} 
            className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-105" 
          />
          
          {/* Condition badge */}
          <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-md z-20">
            {product.product_condition}
          </div>
        </div>
        
        {/* Card content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
              {product.product_name}
            </h2>
            
            {/* Report button */}
            <button 
              onClick={() => handleReported(product._id)} 
              className="text-red-500 hover:text-red-600 flex items-center text-xs transition-colors duration-200"
            >
              <AlertTriangle size={14} className="mr-1" />
              Report
            </button>
          </div>
          
          {/* Pricing section with better styling */}
          <div className="mb-3 bg-gray-50 rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center text-gray-500">
                <DollarSign size={14} className="mr-1" />
                <span className="text-xs">Original Price</span>
              </div>
              <span className="text-gray-500 line-through text-sm">${product?.original_price}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-emerald-600">
                <DollarSign size={14} className="mr-1" />
                <span className="font-medium text-sm">Sale Price</span>
              </div>
              <span className="text-emerald-600 font-bold">${product?.resale_price}</span>
            </div>
          </div>
          
          {/* Product details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-700">
              <MapPin size={14} className="mr-2 text-emerald-600 flex-shrink-0" />
              <span className="text-xs">{product?.location}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Clock size={14} className="mr-2 text-emerald-600 flex-shrink-0" />
              <span className="text-xs">Used for {product.year_used} {parseInt(product.year_used) === 1 ? 'year' : 'years'}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Calendar size={14} className="mr-2 text-emerald-600 flex-shrink-0" />
              <span className="text-xs">Posted on {product.published_date}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <User size={14} className="mr-2 text-emerald-600 flex-shrink-0" />
              <span className="text-xs">Seller: {product.seller_name}</span>
              {product?.verify && (
                <BadgeCheck size={14} className="ml-1 text-blue-600" />
              )}
            </div>
          </div>
          
          {/* Action button */}
          <div className="mt-auto">
            <label
              onClick={() => setEachProduct(product)}
              htmlFor="booking-modal" 
              className="w-full btn bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer shadow-md text-sm"
            >
              Book Now
              <ArrowRight size={14} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;