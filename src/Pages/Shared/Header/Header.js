import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Header = () => {
    const navItems = <>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost underline underline-offset-4' : 'btn btn-ghost'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost underline underline-offset-4' : 'btn btn-ghost'} to='/services'>Services</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost underline underline-offset-4' : 'btn btn-ghost'} to='/blogs'>Blog</NavLink>
    </>
    return (
        <div className="navbar text-white h-30 py-6 mb-8 bg-sky-700 shadow-2xl rounded-t-none rounded px-5">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img alt="" src={logo} width="80" height="24" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><button className="btn btn-outline btn-warning">Log In</button></Link>
            </div>
        </div>
    );
};

export default Header;