import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review, handleReviewDelete, getReview }) => {
    const { _id, name, photo, service, rating, reviewDetails } = review;
    const [reviewService, setReviewService] = useState({});


    useEffect(() => {
        fetch(`https://assignment-11-server-eosin.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => {
                setReviewService(data);
            })
    }, [service]);
    

    return (
        <div className="flex flex-col md:w-3/4 mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:text-gray-100 border my-5">
            <div className='flex justify-between'>
                <div className="flex items-center space-x-4">
                    <img alt="" src={photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <p className="text-sm font-semibold">{name}</p>
                </div>
                <p className='flex items-center font-semibold'><FaStar className='text-warning mr-1' />{rating}</p>
            </div>
            <p className="dark:text-gray-400 text-xl font-semibold"><span className='text-xl mr-2 underline underline-offset-4 text-info'>Service Name: </span> {reviewService.title}</p>

            <p className="dark:text-gray-400"><span className='text-xl mr-2 underline underline-offset-4 text-info'>Your Comment: </span> {reviewDetails}</p>

            <hr />
            <div className='flex justify-between'>
                <label onClick={()=>getReview(review)} htmlFor="my-modal-6" className="btn bg-green-500 border-0">Update</label>

                <button onClick={() => handleReviewDelete(_id)} className="btn bg-red-500 border-0">Delete</button>
            </div>
        </div>
    );
};





export default ReviewCard;