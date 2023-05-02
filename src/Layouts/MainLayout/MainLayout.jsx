import React from 'react';
import Navbar from './../../components/pages/Shared/Navbar/Navbar';
import Home from './../../components/pages/Home/Home';
import { Outlet } from "react-router-dom";
import Footer from './../../components/pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
        <Navbar></Navbar>
         <Outlet></Outlet> 
         <Footer></Footer>  
        </div>
    );
};

export default MainLayout;