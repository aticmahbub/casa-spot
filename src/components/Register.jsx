import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";



const Register = () => {
    const errorToast = () => {
        toast.error("Your password must have an uppercase letter and a lowercase letter and at least 6 characters.");
    }
    const successToast = () => {
        toast.success("Registration successfully completed");
    }

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState()
    const { createUser, updateUserProfile } = useAuth('');
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;
        setRegisterError('')
        setSuccess('')

        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            return errorToast()
        }
        else {
            successToast()
        }


        createUser(email, password, image)
            .then(() => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        setSuccess()
                        navigate(from)



                    })
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)

            })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Register</title>
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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required
                                {...register("fullName")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required
                                {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="URL" className="input input-bordered" name="imgUrl" required {...register("image")} />
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

                            <button className="btn btn-primary">Register</button>
                            <Link to="/login">
                                <button className="btn btn-primary">Login</button>
                            </Link>

                        </div>
                    </form>

                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Register;