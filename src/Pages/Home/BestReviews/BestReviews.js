import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const BestReviews = () => {
    const [reviews, setReviews] = useState([]);
    // console.log(bestReviews);

    useEffect(() => {
        fetch('http://localhost:5000/reviewsB')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
            <h2 className='underline underline-offset-4 text-center text-2xl italic font-semibold mb-10'>What Our Customers Say</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    reviews.map(review =>
                        <div key={review._id}>
                            <div className="flex flex-col mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:text-gray-100 border">
                                <div className='flex justify-between'>
                                    <div className="flex items-center space-x-4">
                                        <img alt="" src={review?.photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                        <p className="text-sm font-semibold">{review?.name}</p>
                                    </div>
                                    <p className='flex items-center font-semibold'><FaStar className='text-warning mr-1' />{review?.rating}</p>
                                </div>

                                <p className="dark:text-gray-400"><span className='text-xl mr-2 underline underline-offset-4 text-info'>Comment: </span> {review?.reviewDetails}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestReviews;