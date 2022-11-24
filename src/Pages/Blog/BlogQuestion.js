import React, { useState } from 'react';
import {ChevronDoubleDownIcon , ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
const BlogQuestion = ({info}) => {
   const {question , answer } = info;
   const [open , setOpen] = useState(true);
  return (
		<div className='flex align-center justify-center flex-col'>
			<div onClick={() => setOpen(!open)} className='flex justify-between p-5 w-auto bg-blue-300 w-full border'>
				<h1>{question}</h1>
				<div  className='h-6 w-6 text-blue-500'>
          {
            open ? <ChevronDoubleDownIcon/> : <ChevronDoubleUpIcon/>
          }
				</div>
			</div>
      <div className={open ? 'hidden' : 'block , bg-blue' }>
        <h1>{answer}</h1>
      </div>
		</div>
	);
};

export default BlogQuestion;