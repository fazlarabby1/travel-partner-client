import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useDynamicTitle';
import ReviewCard from './ReviewCard/ReviewCard';

const MyReviews = () => {
    useTitle('My Reviews-')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const [oldReview, setOldReview] = useState({});
    const [updateReview, setUpdateReview] = useState(oldReview);
    // console.log(oldReview);



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email]);

    const handleReviewDelete = id => {

        const confirm = window.confirm("Are You Sure?");
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        toast.success('Review Deleted Successfully')
                    }
                    const remainingReview = reviews.filter(review => review._id !== id);
                    setReviews(remainingReview);
                })
        }
    }

    const getReview = (newReview) => {
        setOldReview(newReview);
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...updateReview };
        newReview[field] = value;
        setUpdateReview(newReview);
    }

    const handleReviewUpdate = event => {
        // event.preventDefault();

        fetch(`http://localhost:5000/reviews/${oldReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Review Updated Successfully');
                }
            })
    };


    return (
        <div className='mb-10'>
            <h2 className='text-2xl text-center italic underline underline-offset-4'>Your Total Reviews: {reviews.length}</h2>
            {
                (reviews.length > 0) ?
                    <div>
                        {
                            reviews.sort((a,b)=> a.reviewTime < b.reviewTime ? 1 : -1).map(review => <ReviewCard
                                key={review._id} review={review} getReview={getReview} handleReviewDelete={handleReviewDelete}
                            >
                            </ReviewCard>)

                        }
                    </div>
                    :
                    <div className='text-center mt-36 mb-44'>
                        <p className='text-xl text-warning font-semibold'>You Do Not Any Reviews</p>
                        <p>Visit <Link className='underline text-blue-700 text-2xl' to='/services'>Services</Link> To Add Reviews</p>
                    </div>
            }
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action mt-[-10px]">
                        <label htmlFor="my-modal-6" ><FaTimesCircle className='text-3xl text-red-500 hover:text-warning' /></label>
                    </div>
                    <h3 className="font-bold text-lg text-green-500">Edit Your Review</h3>
                    <form onSubmit={handleReviewUpdate}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Rating Value Out of 5</label>
                                <input onChange={handleInputChange} name="rating" type="text" placeholder="Provide Rating Value" className="input input-bordered w-5/6" defaultValue={oldReview.rating} required />
                            </div>
                        </div>
                        <textarea onChange={handleInputChange} name="reviewDetails" className="textarea textarea-bordered h-30 w-1/3 mt-6" placeholder="Review comment here" defaultValue={oldReview.reviewDetails} required></textarea>
                        <br />
                        <input className='modal-action btn btn-outline btn-primary' type="submit" value="Submit Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;