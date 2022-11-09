import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }
        , [user?.email])

    return (
        <div className='mb-10'>
            <h2 className='text-2xl text-center italic underline underline-offset-4'>Your Total Reviews</h2>
            <div>{
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
            </div>
        </div>
    );
};

export default MyReviews;