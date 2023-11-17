import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import Sections from "../../Components/Section/Sections";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(data);
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
                    <td><FaUsers></FaUsers></td>
                    <th>
                      <button className="btn btn-ghost btn-lg text-rose-600"><FaTrash></FaTrash></button>
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
