import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import GoogleSignIn from '../../Components/GoogleSignIn';


const Login = () => {

  const location=useLocation()
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";
  console.log(from);

    const {loginUser}=useContext(AuthContext)
    const captchaRef=useRef(null)
    const [disable,setDisabled]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "login successFull",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error.messsage);
            
        })
        
    }
    const handleCaptcha=()=>{
        const value=captchaRef.current.value;
        console.log(value);
        if (validateCaptcha(value)==true) {
           setDisabled(false)
        }
   
        else {
            alert('Captcha Does Not Match');
        }
        value=''
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleCaptcha}
                type="ptext"
                ref={captchaRef}
                name="captcha"
                placeholder="Type The Text"
                className="input input-bordered"
                // required
                
              />
            
              
            </div>
           
            <div className="form-control mt-6">
              {/* toDO ANABEL CAPTCHA */}
              <button disabled={false} className="btn btn-primary">Login</button>
            </div>
         <p>New here?please <Link to="/signUp" className='text-2xl font-semibold text-blue-700'>Signup</Link></p>
         <div className="divider divide-black">OR</div>
         <GoogleSignIn></GoogleSignIn>
          </form>
         
        </div>
        
      </div>
    </div>
  );
};

export default Login;
