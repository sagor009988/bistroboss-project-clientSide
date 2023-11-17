import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GoogleSignIn = () => {
    const navigate=useNavigate()
    const {google}=useAuth()
    const axiosPublic=useAxiosPublic()
    const handleGoogleSignIn =()=>{
        google()
        .then(res=>{
            
            const userInfo={
                name:res.user.displayName,
                email:res.user.email
            }
            
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <button
            onClick={handleGoogleSignIn}
            className="btn text-blue-600 btn-outline text-lg w-full"
          >
            <FaGoogle className='text-4xl text-green-600'></FaGoogle>
            G<span className='font-bold text-red-600'>OO</span>gle
          </button>
        </div>
    );
};

export default GoogleSignIn;