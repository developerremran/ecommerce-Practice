/* eslint-disable react/prop-types */
import React from 'react';
import { FaHeart, } from 'react-icons/fa';
import useContextProvider from '../../CustomHook/useContextProvider';


const Card = ({ product }) => {

    const {user} = useContextProvider()
    const { name, price, image, description, category, rating, _id, } = product;

    const itemAdd = (_id) => {
        const itemInfo = { name, price, image, category, email :user.email  }
        // console.log(itemInfo);
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(itemInfo)
        })
        .then(res => res.json())
        .then(data =>{

            if(data.insertedId){
                alert('item added')
            }
            console.log(data);
        })
        .catch(error => console.log(error))


    }

    return (
        <div className='mt-10 relative'>
            <div className="card w-full bg-base-100 shadow-xl border ">

                <p className='text-3xl absolute right-0 pt-3 pr-2 '><FaHeart></FaHeart></p>
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl w-full h-[300px]" />
                </figure>
                <div className="card-body ">

                    <h2 className="font-bold text-2xl ">Name : {name}</h2>
                    <p ><span className='font-bold'>Price</span>  : ${price}</p>
                    <p ><span className='font-bold'>Category</span>  : {category}</p>

                    <p>{description}</p>


                    <p>{rating}</p>
                    <div className="card-actions flex justify-center">
                        <button onClick={() => itemAdd(_id)} className="btn bg-[#FFF8DC] border-2">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;