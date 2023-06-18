import React from 'react';


// image import 
import img1 from '../../../public/Banner/slider-3.jpg'
import img2 from '../../../public/Banner/slider-4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
             

                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={img2} className="w-full" />
                    <div className=" absolute  z-10 text-white w-full flex flex-col justify-center items-center text-center translate-y-64  mt-16">
                        <div> 
                            <h1 className="mb-5 text-4xl font-bold">New Arrival</h1>
                            <h1 className="mb-5 text-8xl font-bold">Final Sale</h1>
                            <p className="mb-5 w-[600px]">40% Of summer Vocation</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    
                </div>




            </div>
        </div>
    );
};

export default Banner;