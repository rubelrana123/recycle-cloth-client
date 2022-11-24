import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Spinner from "../../../components/Spinner"
const SignUp = () => {
  const { register, formState: { errors },  handleSubmit } = useForm();
  const {createUser, googleSignin, loading,setLoading} = useContext(AuthContext);
     const onSubmit = data =>{
       console.log(data)
          console.log(data)

        const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=6713f4ae42449c9bcbad8ca71691a54e`;

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(imageData =>{ 
        console.log(imageData);
        createUser(data.email, data.password)
          .then(result => { 
            console.log(result);
          }).catch(error => {
            console.log("line 27 signup", error)
             setLoading(false)
          })


       }) 
     }


        const handleGoogleSignin = () =>{
		googleSignin()
			.then((result) => {
	
				const user = result.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				
				 console.log(errorMessage);
				// ...
			});
      
    
    }
   
    if(loading) {
      return <Spinner/>
    }

  return (
    <div>
          <div className={`p-12 `}>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl border-white">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
 <form onSubmit={handleSubmit(onSubmit)}>
 
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name",  {required: true})}  type="text"  placeholder="Type Name" className="input input-bordered" />
              {errors.email && <p className='text-red-400'>{errors.name?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",  {required: "Email is required"})}  type="email"  placeholder="Type Email" className="input input-bordered" />
              {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Account Type</span>
          </label>
     <select  {...register("accountType")} className="select  select-ghost border-1 input-bordered w-full  ">
           <option selected>Buyer</option>
     
               <option >Seller</option>
     
      </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo </span>
          </label>
          <input {...register("image")}  type="file"   className="input input-bordered" />
              {errors.image && <p className='text-red-400'>{errors.image?.message}</p>}
        </div>
                <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", {required : "Password is required" , minLength : {value : 6, message : "please Provide 6 character or longer"} , pattern  : { value : /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,message : "Please provide at least one uppercase letter, one lowercase letter, one number and one special character:"}})}  type="password"  placeholder="********" className="input input-bordered" />
              {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}

        </div>


   
        
      <input type="submit" className='btn my-3  w-full bg-secondary text-white' value="Sign Up" />
 
    
     
    </form>
      	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Signup  with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center border-2 border-primary bg-primary  ">
		<button onClick={handleGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 text-white h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
 
	 
	</div> 


 
</div>
    </div>
    </div>
  );
};

export default SignUp;