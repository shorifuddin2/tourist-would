import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useNav from '../../hooks/useNav';


const Nav = () => {
    const [user] = useAuthState(auth);

    const { navbar, navbarLogo } = useNav();

    return (
        <nav
            className={`border-gray-400 px-2 sm:px-8 py-2.5  fixed w-full bg-orange-400 top-0 z-50 transition-all ${
                navbar && "bg-lime-500 shadow-lg"
            }`}
        >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="" className="flex items-center">
                    {navbarLogo}
                </a>

                <div className=" w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium  active:text-red-600">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive ? `block  pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                       
                        <li>
                            <NavLink
                                to="checkout"
                                    className={({ isActive }) =>
                                    isActive ? `block  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                                >
                                Checkout
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? `block  pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                            >
                                Blogs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? `block pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            {user ? (
                                <button onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                    isActive ? `block  pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                                >
                                    Login
                                </NavLink>
                            )}
                        </li>
                        <li>{user?.email}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;