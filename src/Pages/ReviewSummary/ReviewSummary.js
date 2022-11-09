import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSummary = ({ review }) => {
    const { name, photo, rating, reviewDetails } = review;

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:text-gray-100 border mb-5">
            <div className='flex justify-between'>
                <div className="flex space-x-4">
                    <img alt="" src={photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">{name}</p>
                        <span className="text-xs dark:text-gray-400">4 hours ago</span>
                    </div>
                </div>
                <p className='flex items-center font-semibold'><FaStar className='text-warning mr-1' />{rating}</p>
            </div>
            <hr />
                <p className="text-sm dark:text-gray-400">{reviewDetails}</p>
        </div>
    );
};

export default ReviewSummary;