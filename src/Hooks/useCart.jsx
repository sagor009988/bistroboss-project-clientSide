// import { useQuery } from "react-query";
// import useAxios from "./useAxios";
// import useAuth from "./useAuth";

import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";



// const useCart = () => {
//     const {user}=useAuth()
//     console.log(user);
//    const axios=useAxios()
//     const {data:cart=[],refetch,}=useQuery({
//         queryKey:['cart',user?.email],
//         queryFn:async()=>{
//             const res=await axios.get(`/cartsInfo?email=${user.email}`)
//             return res.data;
//         }
//     })
//     return [cart,refetch]
// };

// export default useCart;



const useCart = () => {
    const {user}=useAuth()
    const axioss=useAxios()
   const {data,refetch}=useQuery({
    queryKey:['cart',user?.email],
    queryFn:async()=>{
        const res=await axioss.get(`/cartsInfo?email=${user?.email}`)
        return res.data
    }
   })
   return [data,refetch]
};

export default useCart;