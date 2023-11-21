import React from "react";
import Sections from "../../../Components/Section/Sections";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menus,,refetch] = useMenu();
  const axiosSecure=useAxios()
  const handleDeleteItem=(item)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res=await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data);
            if(res.data.deletedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} is deleted successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }
      });
  }
  return (
    <div>
      <Sections
        subHeading="----Hurry Up----"
        heading="Manage all items"
      ></Sections>
      <h2 className="text-4xl my-4 font-bold">Total Items : {menus.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menus?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                <Link to={`/dashBoard/updateItem/${item._id}`}>
                <button  className="btn btn-success bg-orange-400"><FaEdit className="text-2xl text-white"></FaEdit> 
                      </button>
                </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
