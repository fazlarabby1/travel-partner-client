import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Loading from '../../Shared/Loading/Loading';

const BestReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(bestReviews);

    useEffect(() => {
        fetch('https://assignment-11-server-eosin.vercel.app/reviewsB')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className='my-10'>
            <h2 className='underline underline-offset-4 text-center text-2xl italic font-semibold mb-10'>What Our Customers Say</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    loading && 
                    <div className='flex justify-center'>
                        <Loading />
                    </div>
                }
                {
                    reviews.map(review =>
                        <div key={review._id}>
                            <div className="flex flex-col mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-lg border">
                                <div className='flex justify-between'>
                                    <div className="flex items-center space-x-4">
                                        <img alt="" src={review?.photo} className="object-cover w-12 h-12 rounded-full shadow" />
                                        <p className="text-sm font-semibold">{review?.name}</p>
                                    </div>
                                    <p className='flex items-center font-semibold'><FaStar className='text-warning mr-1' />{review?.rating}</p>
                                </div>

                                <p><span className='text-xl mr-2 underline underline-offset-4 text-info'>Comment: </span> {review?.reviewDetails}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestReviews;