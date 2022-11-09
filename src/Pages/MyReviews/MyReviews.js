import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
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
    }, [user?.email]);

    const handleReviewDelete = id =>{
       
        const confirm = window.confirm("Are You Sure?");
        if(confirm){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                
                if(data.deletedCount){
                    toast.success('Review Deleted Successfully')
                }
                const remainingReview = reviews.filter(review => review._id !== id);
                setReviews(remainingReview);
            })
        }
    }

    // const handleReviewUpdate = 

    return (
        <div className='mb-10'>
            <h2 className='text-2xl text-center italic underline underline-offset-4'>Your Total Reviews: {reviews.length}</h2>
            {
                (reviews.length > 0) ?
                    <div>
                        {
                            reviews.map(review => <ReviewCard key={review._id} review={review} handleReviewDelete={handleReviewDelete}></ReviewCard>)
                        }
                    </div>
                    :
                    <div className='text-center mt-36 mb-44'>
                        <p className='text-xl text-warning font-semibold'>You Do Not Any Reviews</p>
                        <p>Visit <Link className='underline text-blue-700 text-2xl' to='/services'>Services</Link> To Add Reviews</p>
                    </div>
            }
        </div>
    );
};

export default MyReviews;