import React, { useContext } from 'react';
import { useForm, } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useContextProvider from '../../CustomHook/useContextProvider';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //   const onSubmit: SubmitHandler= (data) => console.log(data)

    const { newUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        newUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                const userInfo = { name: data.name, email: data.email }
                console.log(userInfo);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'You are Register SuccessFully',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                        navigate('/')
                    })
                console.log(user);
            })
            .catch(error => console.log(error))
    };
    const { user, googleUser } = useContextProvider()

    const googleUsers = () => {
        googleUser()
            .then((result) => {
               
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                   })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId)
                        navigate(from, { replace: true })


                    })
              
            }).catch((error) => {
                console.log(error);
         
            });

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)} className="form-control">


                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter Your Name" className="input input-bordered w-full" />
                                {errors.name?.type === 'required' && <p className='text-red-700' role="alert">You name is required</p>}


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
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </form>
                            <button className='btn btn-sm btn-error' onClick={googleUsers}>Google</button>
                            <h2>I have a Account <Link className='btn btn-secondary btn-sm' to='/login'>Login Now</Link></h2>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;