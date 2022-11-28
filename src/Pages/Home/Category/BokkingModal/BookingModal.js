import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

 
 

const BookingModal = ({eachProduct, setEachProduct}) => {
  const {user} = useContext(AuthContext);
  console.log("modal", user);
  console.log("modal product", eachProduct);
  // console.log(treatment.price);

  const handleForm = e => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email?.value;
    const name = form?.name?.value;
    const price =  form?.price?.value;
    const phone = form?.phone?.value;
    const location = form?.location?.value;
    const date = new Date().toLocaleString();
    // console.log(price, phone, email, name, date, location);
    const booking = {
      product_name : eachProduct?.product_name,
      product_id : eachProduct?._id,
     image : eachProduct.image,
      price : price,
      name : name,
      email : email,
      phone : phone,
      location :  location,
      date : date,
      paid : false
       
 
    }
    console.log(booking);
    fetch("https://recycle-cloth-server.vercel.app/booking", {
      method : 'POST',
      headers : {
        'content-type' : "application/json",
        authorization : `bearer ${localStorage.getItem('token')}`
      },
      body : JSON.stringify(booking)
    }).then(res => res.json()).then(data =>{ 
      if(data.acknowledged) {

        setEachProduct(null);
        
        // toast.success("succesfully booking")
        console.log(data)
      }
      else {
        // toast.error(data.message)
      }
    })
    console.log(booking);
  }
   return (
    <section>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold"> Product Name :  {eachProduct?.product_name}</h3>
    <form onSubmit={handleForm}   className='grid  grid-cols-1 gap-3 mt-6'>
      <input type="text" name="name"  defaultValue={user?.displayName} disabled  placeholder="Type Your Name" className="input input-bordered w-full " />
      <input type="text" name="email"  disabled  defaultValue={user?.email}  placeholder="Type Your Name" className="input input-bordered w-full " />
       
      <input type="name" name="price" disabled  defaultValue= {eachProduct?.resale_price}    className="input input-bordered w-full " />
    <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered w-full" required />
      <input type="number"  name="phone"   placeholder="Phone number +8801*********" className="input input-bordered w-full " required/>
      <input type="submit" placeholder="Type here" className="input input-bordered btn btn-accent w-full " />
    </form>
  </div>
</div>
    </section>
  );
};

export default BookingModal;