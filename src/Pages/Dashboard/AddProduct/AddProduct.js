import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {
	const {user} = useContext(AuthContext);
 const handleForm = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
	 console.log(form.name.value);
 
  const clothName =form.clothName.value;
 
  const originalPrice =form.originalPrice.value;
  const resalePrice =  form.resalePrice.value;
  const condition =form.condition.value;
  const category =  form.category.value;
  const name =form.name.value;
  const location =form.location.value;
   console.log(name,location , condition, clothName, category, originalPrice, resalePrice);





     const image = form.image.files[0];
		 console.log(image);
    const formData = new FormData();
    formData.append('image', image);
  const url = `https://api.imgbb.com/1/upload?key=6713f4ae42449c9bcbad8ca71691a54e`;

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(imageData =>{ 
        console.log(imageData);
             })
  }
  return (
    <div>
       
      <section className="p-6 bg-gray-100  text--50">
	<form  onSubmit={handleForm}  className="container flex flex-col mx-auto space-y-12   ">
	 <div onSubmit={handleForm}  className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
 
        	<div className="col-span-full sm:col-span-3">
					<label htmlFor="sellerName" className="text-sm">Seller Name</label>
					<input id="sellerName" type="text" name='name'  defaultValue={user?.displayName} disabled  placeholder="Name" className="w-full px-3  rounded-md h-12"  /> 
				</div>
				<div className="col-span-3">
					<label htmlFor="address" className="text-sm">Mobile Number</label>
					<input id="address" type="number" name='phoneNumber' placeholder="Seller mobile number" className="w-full px-3 rounded-md h-12"  />
				</div>
				<div className="col-span-3">
					<label htmlFor="address" className="text-sm">Location</label>
					<input id="address" type="text"  name='location' placeholder="Location"className="w-full rounded-md h-12 px-3"  />
				</div>

				<div className="col-span-full sm:col-span-3">
					<label htmlFor="productname" className="text-sm">Cloth name</label>
					<input id="Clothname" name='clothName' type="text" placeholder="Cloth name" className=" px-3 w-full rounded-md h-12 cursor-pointer" />
           
				</div>
				<div className="col-span-full   sm:col-span-3">
					         
              <label  className='block mb-2 text-sm'>
                Select Cloth Image:
              </label>
              <div htmlFor='image' className='border-dotted border-4 border-black'> 
              <input
               
                type='file'
                id='image'
                name='image'
                accept='image/*'
                // required
              />
              </div>
            
           
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ClothoriginalPrice" className="text-sm">Cloth Original Price</label>
					<input id="ClothoriginalPrice" name="originalPrice" type="text" placeholder="Cloth Original price"className="w-full px-3 rounded-md h-12"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ClotheresellPrice" className="text-sm">Cloth Resale Price</label>
					<input id="ClotheresellPrice" type="text" name='resalePrice' placeholder="Cloth  Resale price"className="w-full px-3 rounded-md h-12"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="Clothcondition"  className="text-sm">Cloth Condition</label>
					     <select name="condition" className="select  select-ghost border-1 input-bordered w-full  ">
           <option selected>Used</option>
     
               <option >New</option>
     
      </select>
           
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ClothPrice" className="text-sm">Cloth Category</label>
					      <select name='category' className="select  select-ghost border-1 input-bordered w-full  ">
           <option selected>shirt</option>
     
               <option >Jeans</option>
               <option >Jacket</option>
     
      </select>
				</div>
      
			 
			</div>
		 <button type="submit" className='w-full bg-primary py-3 rounded-sm ' > Add To Cart</button>
	
	</form>
</section>
    </div>
  );
};

export default AddProduct;