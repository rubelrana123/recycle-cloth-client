import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SmallSpinner from '../../../components/SmallSpinner';
import { Link } from 'react-router-dom';

const Category = () => {
 
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

   console.log(categories) 
   if(isLoading) {
    return <SmallSpinner></SmallSpinner>
   }

  return (
    <div className='mt-12'>
      <h1 className='px-12 text-4xl  my-10 font-semibold'>Select Your Category</h1>
     
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-14 md:mx-8 mx-6 text-white mb-12 '>

        {
          categories?.map(category => {
             return (
               <Link key={category._id} to= {`category/${category.id}`} >
                  
                  <div className='flex rounded-lg gap-4 flex-row  border-2 justify-between card text-white  md:card-side shadow-xl hover:border-blue-500   bg-gradient-to-r from-primary to-secondary'>
        <div className='w-1/2  flex justify-center'>
            <figure>
                <img src={category?.img} alt="Shirt" className='lg:h-24 md:h-24 h-30  lg:w-full' />
            </figure>
        </div>
        <div className=' w-1/2 items-center mx-auto flex ' >
          
          <p className='text-4xl py-2 font-bold'>{category?.name}</p>
          
        </div>
      </div>
               
               </Link>
             )
     


        })
         }

       
    </div>
    </div>
  );
};

export default Category;


