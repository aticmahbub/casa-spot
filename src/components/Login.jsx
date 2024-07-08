import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const [success, setSuccess] =useState('')
    const [registerError, setRegisterError] =useState('')
    const [showPassword, setShowPassword] = useState(false)

    const loginSuccessfulToast = () => {
        toast.success("Successfully logged in");
    }
    const loginErrorToast = () => {
        toast.error("Invalid username or password");
    }



    const { signInUser } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const onSubmit = (data) => {
        const { email, password } = data;


        
        signInUser(email, password)
        .then((result) => {
            if(result.user){

                loginSuccessfulToast()
                    navigate(from)
                }
            })
            .catch(error =>{
                console.error(error)
                setRegisterError(error.message)
                return loginErrorToast()
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                            <input type={showPassword ? "text" : "password"} placeholder="password"
                                className="input input-bordered"
                                name="password"
                                {...register("password")} required />
                            <span className="absolute top-5 left-2/4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword?
                                    <FaEyeSlash />
                                    :<FaEye />

                                    
                                }

                            </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <Link to="/register">
                                <button className="btn btn-primary">Register</button>
                            </Link>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    {
                        registerError && <p>{registerError}</p>
                    }
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;