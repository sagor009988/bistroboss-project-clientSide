import React from "react";
import Sections from "../../../Components/Section/Sections";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {
  const axiosuse = useAxios();
  const [data,refetch] = useCart();
  const totalPrice = data?.reduce((money, item) => money + item.price, 0);
  const totalPriceFixed = parseInt(totalPrice);
  console.log(totalPriceFixed);

  const handleDelete = (id) => {
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
        axiosuse.delete(`/carts/${id}`).then((res) => {
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
  };

  return (
    <section>
      <Sections subHeading="---My Cart---" heading="WANNA ADD MORE?"></Sections>
      <div className="flex justify-evenly">
        <h2 className="text-4xl font-medium text-orange-600">
          {data ? <>Total toders:{data.length}</> : <>Total Orders :0</>}{" "}
        </h2>
        <h2 className="text-4xl font-medium text-orange-600">
          {data ? <>Total Price:{totalPriceFixed}</> : <>Total Price :0</>}{" "}
        </h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
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
                <td>
                  {item.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">{item._id}</span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
