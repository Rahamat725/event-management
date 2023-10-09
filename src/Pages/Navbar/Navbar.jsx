import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, LogOUt } = useContext(AuthContext);

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/galary'>Galary</NavLink></li>

    </>
    const handleSignOut = () => {
        LogOUt()
            .then(() => {
                toast.success('Log Out Successfully! ')
            })
    }

    return (
        <div>
            <div className="navbar  mb-10 mt-5  rounded-lg h-[70px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <div className=" normal-case text-xl items-center">
                        <img className="" src='https://i.ibb.co/H7WgCyq/logo3-removebg-preview.png' alt="logo" />
                        <p className="-mt-10 text-[#eab917] text-sm  text-center font-bold">Coporate Junction</p>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                <div className="">
                        {
                            user ? <p>{user.displayName}</p> : ""
                        }
                    </div>
                    <div className="w-10 rounded-full">
                        {/* <img src="https://i.ibb.co/mbPgrhZ/boy1.png" /> */}
                        <img src={user?.photoURL} />
                  
                    </div>
                    {
                        user ? <p className="cursor-pointer" onClick={handleSignOut}>Sign Out</p>
                            : <Link to="/login">LogIn</Link>
                    }
                 
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </div>
    );
};

export default Navbar;