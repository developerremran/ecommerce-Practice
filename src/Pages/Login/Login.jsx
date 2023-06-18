import React, { useContext } from 'react';
import { useForm, } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {oldUser} = useContext(AuthContext)
  
    const location = useLocation()
    const navigate= useNavigate()
    const from = location.state?.from?.pathname || '/';

    //   const onSubmit: SubmitHandler= (data) => console.log(data)

    const onSubmit = data => {
        console.log(data)
        oldUser(data.email, data.password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            if(user){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'You are Login SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, {replace: true})  
            }
        } )
        .catch(error => console.log(error))
    };


    
 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)} className="form-control">




                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    placeholder=" Enter Your email" className="input input-bordered w-full" />
                                {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your email</p>}

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", { required: true })}
                                    placeholder="password" className="input input-bordered" />


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;