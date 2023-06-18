import React from 'react';



const Blog = () => {
    return (
        <div className='mainContainer grid grid-cols-3 gap-10'>
            <div>
                <div className="card w-full glass">
                    <figure><img className='w-full h-[400px]' src='https://i.ibb.co/gmjqmM0/photo-1514432324607-a09d9b4aefdd.jpg' alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>

                    </div>


                </div>
                
            </div>
            {/* two */}
            <div className="card w-full glass">
                <figure><img className='w-full h-[400px]' src="https://i.ibb.co/ctWGzPm/lovepik-business-man-with-thumbs-up-png-image-400280241-wh1200.png" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>

                </div>
            </div>
            {/* two */}
            <div className="card w-full glass">
                <figure><img className='w-full h-[400px]' src="https://i.ibb.co/gmjqmM0/photo-1514432324607-a09d9b4aefdd.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>

                </div>
            </div>
            {/* two */}
        </div>
    );
};

export default Blog;