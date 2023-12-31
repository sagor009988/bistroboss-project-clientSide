import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";


const Navbar = () => {
  const [data]=useCart()
  
  const { user, logout } = useContext(AuthContext);
 
  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => console.log(error.message));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/myOrder"}>My Order</NavLink>
      </li>
      <li>
        <NavLink to={"/dashBoard/cart"}><FaShoppingCart /><p className="text-white bg-red-600 p-1 rounded-lg">{data?.length}</p></NavLink>
      </li>

      

      {user ? (
        <>
        <li>
          <p>{user.displayName}</p>
        </li>
          <li>
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className="" to={"/login"}>
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 opacity-75 bg-black text-white max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
