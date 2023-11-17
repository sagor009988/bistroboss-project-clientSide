import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleSignIn from "../../Components/GoogleSignIn";


const SignUp = () => {
  const axiosPublic=useAxiosPublic()
  const navigate=useNavigate()
    const {createUser,updateProfileInfo,logOut}=useContext(AuthContext)
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
      const onSubmit= (data) =>{
        createUser(data.email,data.password)
        .then(result=>{
          updateProfileInfo(data.name,data.photoUrl)
            .then(()=>{
              // create user data send to data base

              const userinfo={
                name:data.name,
                email:data.email
              }
              axiosPublic.post('/users',userinfo)
              .then(res=>{
                if(res.data.insertedId){
                  console.log('users');
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SignUp successFull",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                }
              })
              
              
           
            })
            .catch(error=>console.log(error.message))
           
            
        })
        .catch(reeor=>alert(reeor.message))}
  


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",{ required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                  
                />
                 {errors.name && <span className="text-xl text-red-600">This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("photoUrl",{ required: true })}
                  placeholder="Photo Url"
                  className="input input-bordered"
                  
                />
                 {errors.photoUrl && <span className="text-xl text-red-600">photo Url is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email",{ required: true })}
                  placeholder="email"
                  className="input input-bordered"
                 
                />
                {errors.email && <span className="text-xl text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
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

              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <p>
                Have an account ?please
                <Link
                  to="/"
                  className="text-2xl font-semibold text-blue-700"
                >
                  login
                </Link>
              </p>
              <div className="divider divide-black">OR</div>
              
            </form>
            <div className="pb-6 px-6">
            <GoogleSignIn></GoogleSignIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
