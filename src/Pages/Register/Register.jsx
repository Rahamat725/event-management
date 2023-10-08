import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
  const {createUser, loginWithGoogle} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        setMessage('');
        console.log(name,photo,email,password);
        if(password.length<6){
        //    return setMessage('password should be 6 characters');
         return toast.error('password should be 6 characters !!')
        }else if(!(/[A-Z]/).test(password)){
        //    return setMessage('password should be one upper case');
          return toast.error('password should be one upper case !!')
        }else if(!/[@#$%^&+=*()_\-!]/.test(password)){
            return toast.error('Password should be one special character!!');
        }
        createUser(email,password)
        .then(res => {
            console.log('user created', res.user);
            // setMessage('User created successfully!')
             toast.success('User created successfully!', );
            navigate('/login')
        })
        .catch(err => {
            console.error(err.message);
            return toast.error(err.message);
        })
    }

    const handleWithGoogle = () => {
        loginWithGoogle()
        .then(res => {
            toast.success('Sign In Successfully !!');
            navigate(location?.state ? location.state : '/')
        })
        .catch()
    }
    return (
        <div>
            <Navbar></Navbar>
               <div>
                <h2 className="text-2xl text-center font-semibold">Please Register</h2>
                <div className="text-center">  <button onClick={handleWithGoogle} className="btn btn-success"> Login With Google</button></div>
               
               <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center">Already have an account?
                <Link className="text- to-blue-600 font-bold" to="/login"> Login</Link></p>
               </div>
               {/* {message && <p className=" text-center text-xl text-green-600">{message}</p>} */}
               {/* <ToastContainer
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
               /> */}
        </div>
    );
};

export default Register;