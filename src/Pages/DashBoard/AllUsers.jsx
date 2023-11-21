import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import Sections from "../../Components/Section/Sections";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
 
  const handleadmin=user=>{
    const {_id}=user
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        refetch()
        Swal.fire({
          title: `${user.name} is admin now`,
          text: "admin hasbenn createed.",
          icon: "success",
        });
      }
    })
  }

  const handleDelete=(user)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch()
            }
          });
        }
      });
  }

  return (
    <div className="x">
        <Sections subHeading="----How many----" heading="MANAGE ALL USERS"></Sections>
      <div className="flex justify-evenly ">
        <h1 className="text-4xl font-semibold">All Users</h1>
        <h1 className="text-4xl font-semibold">ToTal Users : {data?.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-orange-600 text-white">
            <tr>
              <th>
                Number
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                data?.map((user,index)=><tr key={user._id}>
                    <th>
                        {index+1}
                    </th>
                    
                    <td>
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      {user.role=="admin"? <p className="text-xl text-blue-600 uppercase font-bold">"admin"</p>:<button onClick={()=>handleadmin(user)} className="btn btn-success bg-orange-400"><FaUsers className="text-2xl text-white"></FaUsers>
                      </button>}
                      </td>
                    <th>
                      <button onClick={()=>handleDelete(user)} className="btn bg-red-600 btn-md btn-secondary "><FaTrash className="text-2xl text-white"></FaTrash></button>
                    </th>
                  </tr>)
            }
            
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
