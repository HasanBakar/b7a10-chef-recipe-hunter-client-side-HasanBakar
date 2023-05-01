import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar font-semibold bg-blue-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <NavLink to="/" className="my-3">Home</NavLink>
                     <NavLink to="blog" className="my-3">Blog</NavLink>
                     <NavLink to="/feedback" className="my-3">Feedback</NavLink>
                </ul>
                </div>
                <NavLink className="btn btn-ghost normal-case text-xl">ChefTracker</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/" className="mx-3">Home</NavLink>
                    <NavLink to="blog" className="mx-3">Blog</NavLink>
                    <NavLink to="/feedback" className="mx-3">Feedback</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="/login" className="pr-4">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;