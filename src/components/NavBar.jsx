import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./FirebaseProvider";
import { useState } from "react";


const NavBar = () => {
    const { logout, user } = useContext(AuthContext)

    const [hidden, setHidden] = useState(true);

    console.log(user);
    const navLinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user-profile">User Profile</NavLink></li>
            <li><NavLink to="/update-profile">Update Profile</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>

        </>
    return (


        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {/* <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Casa Spot</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="  avatar">
                                <div className="w-10 rounded-full">
                                    <img className="container-hover" onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)} alt="Profile Image" src={user?.photoURL} />
                                </div>
                            </div>
                            {
                                hidden ? null : <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li className="">
                                        <a className="justify-between">
                                            {user?.email}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    {/* <li><a>Settings</a></li>
                                 <li><a>Logout</a></li> */}
                                </ul>
                            }
                            <button onClick={logout} className="btn btn-accent">Logout</button>
                        </div>
                    }
                            {
                                !user &&
                                <Link to="/login">
                                <button className="btn btn-accent">Login</button>
                            </Link>
                            }


                </div>
            </div>

        </div>
    );
};

export default NavBar;