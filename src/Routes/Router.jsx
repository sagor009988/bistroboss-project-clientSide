import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrder from "../Pages/MyOrder/MyOrder";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<OrderFood></OrderFood>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/myOrder',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            }
        ]
    },
    {
        path:'dashBoard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'/dashBoard/cart',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>
            },
            //
            {
                path:'/dashBoard/allUsers',
                element:<AllUsers></AllUsers>
            } 

        ]
    }
])
export default router