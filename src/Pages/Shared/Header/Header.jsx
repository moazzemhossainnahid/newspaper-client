import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full container sticky top-0 z-50'>
            <div className="navbar bg-base-100 z-50 sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Lifestyle
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white gap-2">
                                    <li><NavLink to="/fashion">Fashion</NavLink></li>
                                    <li><NavLink to="/fitness">Fitness</NavLink></li>
                                    <li><NavLink to="/photography">Photography</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/food">Food</NavLink></li>
                            <li><NavLink to="/videos">Videos</NavLink></li>
                            <li><NavLink to="/features">Features</NavLink></li>

                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-sm w-40 mx-auto input-bordered" />
                            </div>

                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src="https://themes.zozothemes.com/newser/wp-content/themes/newser/images/sticky-logo.png" alt="" className="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-2 menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to="/lifestyle">
                                Lyfestyle
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            <ul className="p-2 bg-white gap-2 z-50">
                                <li><NavLink to="/fashion">Fashion</NavLink></li>
                                <li><NavLink to="/fitness">Fitness</NavLink></li>
                                <li><NavLink to="/photography">Photography</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/food">Food</NavLink></li>
                        <li><NavLink to="/videos">Videos</NavLink></li>
                        <li><NavLink to="/features">Features</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;