import { useContext, useRef } from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Context/Auth';
import AuthApi from '../Controler/Control';
import Social from './SocialMedia';

export const LoginTap = () => {
  let Context = useContext(Auth);
  let ControlAPI=new AuthApi();
  let Navigate = useNavigate();
 //Ref
 let EmailRef=useRef();
 let PasswordRef=useRef();
  let OnSubmit =async (event) => {
    event.preventDefault();
     if (check()) {
      await ONSubmitHandle();
     }
  };
  let check=()=>{
    if (EmailRef.current.value!=''&& PasswordRef.current.value!='') {
      return true
    }
    alert("Enter the password and Emil alrady existe")
    return false
  }
  let ONSubmitHandle=async()=>{
    let result= await ControlAPI.login(EmailRef.current.value,PasswordRef.current.value);
    alert(result.Message);
    if (result.status) {
      console.log("login-in");
    Context.Updatelogin(true);
    Context.UpdataToken(result.token)
    Navigate('/Dashborad/Tasks');
    } else{
      console.log("failed");
    }
  }
  return (
    <Fragment>
      <form onSubmit={OnSubmit}>
        <div className="text-center mb-3">
          <h4 className="mb-4 mt-5">Login To Momen Task System With</h4>
          <Social />
        </div>

        <h4 className="mb-5 mt-2 text-center">or</h4>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            placeholder="Email or username"
            ref={EmailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Password"
            ref={PasswordRef}
          />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
              />
              <label
                className="form-check-label"
                htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-main btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </Fragment>
  );
};
