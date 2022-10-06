import { useContext, useRef } from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Context/Auth';
import AuthApi from '../Controler/Control';
import Social from './SocialMedia';

export const RegisterTap = () => {
  let Context = useContext(Auth);
  let Navigate = useNavigate();
  let ControlAPI=new AuthApi();
  //Ref
  let EmailRef=useRef();
  let PasswordRef=useRef();
  let RepeatPasswordRef=useRef();
  //Method
  let OnSubmit =async (event) => {
    event.preventDefault();
   if (Cheak()) {
    await OnSubmitHandle();
   }
  };
  let Cheak=()=>{
 if (EmailRef.current.value!=''&& PasswordRef.current.value!='' && RepeatPasswordRef.current.value!='') {
  if (PasswordRef.current.value==RepeatPasswordRef.current.value) {
    return true
  }
    alert("كلمة السر غير متطابقة ")
    return false
 }
 alert("Enter Email and password")
 return false;
  }
  let OnSubmitHandle= async()=>{
    let result=await ControlAPI.register(EmailRef.current.value,PasswordRef.current.value);
    console.log(result);
    alert(result.Message);
    if (result.status) {
      Context.Updatelogin(true);
      Context.UpdataToken(result.token)
      Navigate('/Dashborad/Tasks');
    } else{
     console.log("faild" )
    }
  }
  return (
    <Fragment>
      <form onSubmit={OnSubmit}>
        <div className="text-center mb-3">
          <h4 className="mb-4 mt-5">Register in Momen Task System with</h4>
          <Social />
        </div>

        <h4 className="mb-4 mt-5 text-center">or:</h4>
  

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            ref={EmailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
            ref={PasswordRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
            ref={RepeatPasswordRef}
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label
            className="form-check-label"
            htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-main btn-block mb-3">
          Sign in
        </button>
      </form>
      {/* <div>
   <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerUsername"
            className="form-control"
            placeholder="Username"
          />
        </div> 
      </div> */}
    </Fragment>
  );
};
