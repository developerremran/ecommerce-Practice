import { toFormData } from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
// import useCart from '../../CustomHook/useCart';



const image_hosting_Token = import.meta.env.VITE_Image_Token;
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [cart, refetch] = useCart()
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_Token}`;

    const onSubmit = data => {
        console.log(data);
        const fromData = new FormData();
        fromData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes);
            })
        // fetch('http://localhost:5000/products', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {

        //             Swal.fire({
        //                 position: 'top-center',
        //                 icon: 'success',
        //                 title: `User Deleted Success`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })

    };
    return (
        <div>
            <h2 className='text-6xl font-bold text-center mt-16 mb-5'>Please Add New Item  </h2>
            <hr />

            <>
                <div className="  bg-base-200 p-10">
                    <div className="  lg:flex-row-reverse">

                        <div className="  w-[800px] mx-auto shadow-2xl bg-base-100 p-10">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex justify-between'>

                                    <div>
                                        <label className='text-xl font-bold'> Item Name  </label>
                                        <input type="text"
                                            {...register("itemName", { required: true })}
                                            placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                        {errors.name?.type === 'required' && <p className='text-red-700' role="alert">You name is required</p>}

                                    </div>

                                    <div>

                                        <label className='text-xl font-bold'> Item Category  </label>
                                        <input type="text"
                                            {...register("itemCategory", { required: true })}
                                            placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    </div>


                                </div>
                                <br />
                                <div className='flex justify-between'>
                                    <div>
                                        <label className='text-xl font-bold'> Item Price  </label>
                                        <input type="text"
                                            {...register("itemPrice", { required: true })}
                                            placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    </div>

                                    <div>

                                        <label className='text-xl font-bold'> Item Description  </label>
                                        <textarea type="text"
                                            {...register("description", { required: true })}
                                            placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    </div>


                                </div> <br />
                                <div className='flex justify-between'>
                                    <div>
                                        <label className='text-xl font-bold'> Rating </label>
                                        <input type="text"
                                            {...register("rating", { required: true })}
                                            placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

                                    </div>
                                    <div>
                                        <label className='text-xl font-bold'> Item Image </label> <br />
                                        <input type="file"
                                            {...register("image", { required: true })}
                                            placeholder="Type here" className="input w-full max-w-xs" />

                                    </div>

                                </div>
                                <br /><br />
                                <div className='flex justify-center'>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default AddItem;