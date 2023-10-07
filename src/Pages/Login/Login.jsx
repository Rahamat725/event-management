import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center font-semibold">Please Login</h2>

               
               <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto ">
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
                        
                             <button className="btn btn-primary">Login</button>
                             
                   
                    </div>
                </form>
                <p className="text-center">Do not have an account?
                <Link className="text- to-blue-600 font-bold" to="/register"> Register</Link></p>
               </div>
            
        </div>
    );
};

export default Login;