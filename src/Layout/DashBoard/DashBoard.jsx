import {
  FaAd,
  FaAddressBook,
  FaCalendar,
  FaContao,
  FaHome,
  FaList,
  FaMoneyBill,
  FaPhone,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaStreetView,
  FaUsers,
  FaUtensilSpoon,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const DashBoard = () => {
  // TODO=get isAdmin value from the data base
  const isAdmin = true;

  const [cart] = useCart();
  return (
    <div className="flex">
      <div className=" w-1/5 min-h-full bg-orange-400 mt-8">
        <h1 className="text-center text-xl my-8">
          <span className="text-4xl font-serif font-semibold ">
            Bistro Boss
          </span>{" "}
          <br /> Restaurant
        </h1>
        <ul className="menu p-4 gap-5">
          {isAdmin ? (
            <>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink className="bg-red-500" to="/dashBoard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink className="bg-red-500" to="/dashBoard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/managebookings">
                  <FaAddressBook></FaAddressBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/allUsers">
                  <FaUsers></FaUsers> All users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>

              <li>
                <NavLink className="bg-red-500" to="/dashBoard/reserVation">
                  <FaCalendar></FaCalendar> ReserVation
                </NavLink>
              </li>

              <li>
                <NavLink className="bg-red-500" to="/dashBoard/pament">
                  <FaMoneyBill></FaMoneyBill> PayMent History
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart : ({cart?.length})
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/review">
                  <FaStreetView></FaStreetView> ADD Review
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-red-500" to="/dashBoard/booking">
                  <FaAd></FaAd> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider">OR</div>
          <li>
            <NavLink className="bg-red-500" to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-red-500" to="/menu">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-red-500" to="/order">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-red-500" to="/order">
              <FaPhone></FaPhone> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 border-2 m-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
