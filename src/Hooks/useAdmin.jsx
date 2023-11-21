import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user}=useAuth()
    // console.log(user?.email);
    const axiosSecure=useAxios()
    const {data:isAdmin,isLoading:isAdminLoding}=useQuery({
        queryKey:[user?.email,'isAdmin'],

        queryFn:async()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log(res.data);
            return res.data?.admin
        },
        enabled:user? true:false
        

    })
    return [isAdmin,isAdminLoding,user]
};

export default useAdmin;