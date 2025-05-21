import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SmallSpinner from '../../../components/SmallSpinner';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
const Category = () => {
   const [hoveredCategory, setHoveredCategory] = useState(null);
const { data: categories, isLoading } = useQuery({
  queryKey: ["category"],
  queryFn: async () => {
    try {
      const res = await fetch('https://recycle-cloth-server.vercel.app/category');
      const data = await res?.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
});

   console.log("categoties", categories) 
   if(isLoading) {
    return <SmallSpinner></SmallSpinner>
   }

//   //id
// : 
// "03"
// img
// : 
// "https://i.ibb.co/RvYpfvP/jacket.png"
// name
// : 
// "Jacket"
// _id
// : 
// "6380e42a216f9a3e3d836bab"  



  return (
   <section className="pt-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover sustainable fashion in our curated collection of pre-loved clothing categories
          </p>
        </div>

        {/* Responsive grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category) => (
            <div 
              key={category._id}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <div className="relative h-64 w-full">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent z-10 transition-opacity duration-300 ${
                      hoveredCategory === category.id ? 'opacity-90' : 'opacity-70'
                    }`}
                  ></div>
                  <img 
                    src={category.img} 
                    alt={category.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                   
                    <span className="inline-block mt-2 text-emerald-300">{category.count} items</span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    hoveredCategory === category.id ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <button className="bg-emerald-500 hover:bg-emerald-600 p-3 rounded-full text-white transition-colors duration-200">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <a href={`/category/${category.id}`} className="absolute inset-0 z-30" aria-label={`Browse ${category.name}`}></a>
            </div>
          ))}
        </div>  
        

      </div>
    </section>
  );
};

export default Category;


