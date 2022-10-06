import axios from "axios";
import Massagee from "../Model/Message-Statuas";

class AuthApi{
  
  API_KEY="AIzaSyCDg36qzGdHC4MW9o4fMdpfSWpLcjYN0e4";
  login=async(email,password)=>{
    try {
      let response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
      {email:email,
      password:password,
      returnSecureToken:true,
      },
      {
        headers:{
          "Content-Type": "application/json",
        },
      }
      );
      console.log(response);
     let result= new Massagee("login sucessfull",true);
     result.token=response.data.idToken;
     console.log(result);
     return result;
    } catch (error) {
     console.log(error.response);
     return new Massagee(error.response.data.error.message,false);
    }
  };
  //register
  register=async(email,password)=>{
    try {
      let response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
      {email:email,
      password:password,
      returnSecureToken:true,
      },
      {
        headers:{
          "Content-Type": "application/json",
        },
      }
      );
     let result= new Massagee("Register sucessfull",true);
     result.token=response.data.idToken;
     console.log(result);
     return result;
    } catch (error) {
      return new Massagee(error.response.data.error.message,false);
    }
    
  }; 
}
export default AuthApi;