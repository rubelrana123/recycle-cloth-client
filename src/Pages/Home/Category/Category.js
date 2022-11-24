import React from 'react';
import shirt from "../../../asserts/categoryImage/shirt.png";
import jaket from "../../../asserts/categoryImage/jacket.png";
import pants from "../../../asserts/categoryImage/pants.png";

const Category = () => {
  return (
    <div className='mt-12'>
      <h1 className='px-12 font-bold text-4xl'>Select Your Category</h1>
     
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-14 md:mx-8 mx-6 text-white mb-12 '>
      <div className='flex rounded-lg gap-4 flex-row  justify-between card text-white  md:card-side shadow-xl     bg-gradient-to-r from-primary to-secondary'>
        <div className='w-1/2  flex justify-center'>
            <figure>
                <img src={shirt} alt="Shirt" className='lg:h-24 md:h-24 h-30  lg:w-full' />
            </figure>
        </div>
        <div className=' w-1/2 items-center mx-auto flex ' >
          
          <p className='text-4xl py-2 font-bold'>Shirt</p>
          
        </div>
      </div>
      <div className='flex rounded-lg gap-4 flex-row  justify-between card text-white  md:card-side shadow-xl      bg-gradient-to-r from-primary to-secondary'>
        <div className='w-1/2  flex justify-center'>
            <figure>
                <img src={jaket} alt="Jacket" className='h-24 w-full' />
            </figure>
        </div>
        <div className=' w-1/2 items-center flex ' >
          
          <p className='text-4xl font-bold'>Jacket</p>
          
        </div>
      </div>
      <div className='flex rounded-lg gap-4 flex-row  justify-between card text-white  md:card-side shadow-xl       bg-gradient-to-r from-primary to-secondary'>
        <div className='w-1/2  flex justify-center'>
            <figure>
                <img src={pants} alt="pants" className='h-24 w-full' />
            </figure>
        </div>
        <div className=' w-1/2 items-center flex ' >
          
          <p className='text-4xl font-bold'>Jeans</p>
          
        </div>
      </div>
       
    </div>
    </div>
  );
};

export default Category;