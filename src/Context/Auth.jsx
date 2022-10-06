import React from "react";
import { useState } from "react";

export const Auth=React.createContext({
  loginin:false,
  Updatelogin:(status)=>{},
  token:"",
});

export const AuthHandle=(props)=>{
let[loginin,setlogin]=useState(JSON.parse(localStorage.getItem('login-in')));
let [token,SetToken]=useState(localStorage.getItem('token'))
let Updatelogin=(status)=>{
setlogin(status)
localStorage.setItem("login-in",status)
}
let UpdataToken=(token)=>{
SetToken(token);
localStorage.setItem("token",token)
}
return(
<Auth.Provider value={{
  loginin:loginin,
  Updatelogin:Updatelogin,
  token:token,
  UpdataToken:UpdataToken,
}}>
{props.children}
</Auth.Provider>
);
}