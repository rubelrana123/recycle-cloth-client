import { useEffect, useState } from "react";

    const UserToken= email => {
      console.log("useloken", email);
      const [token ,setToken] = useState("");
      useEffect (() => {
        if(email) {
          
          fetch(`http://localhost:5000/jwt?email=${email}`
     
          ).then(res => res.json()).then(data=>{
      if(data.accessToken) {
         
        console.log(data.accessToken);
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken);
      }  
       
    })
        }
      }, [email])
      return [token];
    }
    export default UserToken;