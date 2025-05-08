import { useState } from 'react';
import { Truck, RefreshCw, Shield, Clock, Award, Tag, FileText, Package } from 'lucide-react';

  function ShopingInfo() {
    return (
      <section className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-emerald-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Truck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
            </div>
            <p className="text-gray-600">
              Enjoy free shipping on all orders over $50. We use eco-friendly packaging for all deliveries.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-emerald-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <RefreshCw className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">30-Day Returns</h3>
            </div>
            <p className="text-gray-600">
              Not satisfied? Return your items within 30 days for a full refund. No questions asked.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Quality Guaranteed</h3>
            </div>
            <p className="text-gray-600">
              Every item is carefully inspected to ensure it meets our high-quality standards before shipping.
            </p>
          </div>
        </div>
      </section>


    )
   
 
}
export default ShopingInfo;