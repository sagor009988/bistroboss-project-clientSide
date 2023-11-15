import {  useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const OrderFoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location=useLocation()
  const [,refetch]=useCart()
  const axiositem=useAxios()
  const { user } = useAuth();
  const { image, recipe, name, price, _id } = item || {};
  const handleAddtoCart = () => {
    if (user && user.email) {
      const cartItem={
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      axiositem.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          // add refetch to auto update value of add to cart
          refetch()
        }
      })
    } 
    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Do you want to login to add cart ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Go login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "wellcome to login Page",
            text: "Now login the page",
            icon: "success",
          });
          navigate("/login",{state:{from:location}});
        }
      });
      
    }
  };
  return (
    <div>
      <div className="card card-compact mr-4 mb-5 gap-5 bg-base-100 shadow-xl">
        <figure>
          <img className="relative h-64 w-full " src={image} />
        </figure>
        <p className="bg-black right-0 p-1 text-white absolute">
          price ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions w-full">
            <button
              onClick={ handleAddtoCart}
              className="btn btn-outline border-b-4 border-0 border-b-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
