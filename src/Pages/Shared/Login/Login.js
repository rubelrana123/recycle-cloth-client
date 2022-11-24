 
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
 
 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
 

const Login = () => {
	const {user, signin, googleSignin,forgetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
	const [userEmail, setUserEmail] = useState('');
	const location = useLocation();
		const navigate = useNavigate();
		const from = location?.state?.from.pathname || "/"
    const { register, formState: { errors },  handleSubmit } = useForm();
    const [data, setData] = useState("");
	  const [loginUserEmail, setloginUserEmail] = useState("");

	//   const [token] = UserToken(loginUserEmail);
	// 	console.log( "email, token",  loginUserEmail,token );
	//   if(token) {
	// 	navigate(from, {replace : true})
      
	// }
    const onSubmit = data =>{
			 console.log(data)
			 signin(data.email, data.password).then((userCredential) => {
    const user = userCredential.user;
		setloginUserEmail(user?.email)
    console.log(user);
		// toast.success("Login Successfully..")
	 
		setError("")
  
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
		


  });

		};
   
 

	const handleGoogleSignin = () =>{
		googleSignin()
			.then((result) => {
	
				const user = result.user;
				setloginUserEmail(user?.email)
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
 
	const handleBlurEmail = (e) =>{
		const email = e.target.value;
		// console.log("email got ",email);
		setUserEmail(email);
	}
	const handleForgetPassword = () =>{

		forgetPassword(userEmail).then(() => {
      //  toast.success("  Password reset email sent!", {autoClose : 200})
        // .. 
        })
      .catch((error) => {
       
        const errorMessage = error.message;
				console.log(errorMessage);
        // ..
      });
	}
  
  return (
    <div className={`p-12 `}>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl border-white">
	<h1 className="text-2xl font-bold text-center">Login</h1>
 <form onSubmit={handleSubmit(onSubmit)}>
       {/* <label className="label">Name</label>
      <input {...register("firstName")}  type="text"  className="input w-full " placeholder="First name" /> */}
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",  {required: "Email is required"})} onBlur={handleBlurEmail}  type="email"  placeholder="Type Email" className="input input-bordered" />
              {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", {required : "Password is required" , minLength : {value : 6, message : "please Provide 6 character or longer"}})}  type="password"  placeholder="********" className="input input-bordered" />
              {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}

        </div>
				{error && <p>{error}</p>}
         <Link className='' onBlur={handleForgetPassword}>Forget password</Link>
      <input type="submit" className='btn my-3  w-full bg-secondary' />
        <div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">New to Doctors Portal??
		<Link to="/register" className="underline text-primary">create an account</Link>
	</p> 
        </div>
    
     
    </form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
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
  );
};

export default Login;