import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar';

const Main = () => {
    const location=useLocation()
    
    const islogin=location.pathname.includes('login') ||
    location.pathname.includes('signUp')
    return (
        <div>
           {islogin || <Navbar></Navbar>}
            <Outlet></Outlet>
           {islogin|| <Footer></Footer>}
        </div>
    );
};

export default Main;