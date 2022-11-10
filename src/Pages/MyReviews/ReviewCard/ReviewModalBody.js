import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const ReviewModalBody = ({ handleReviewUpdate, review, reviewService }) => {

    const { _id, name, photo, rating, reviewDetails } = review;
    // console.log(_id)
    const [updateReview, setUpdateReview] = useState(review);

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...updateReview };
        newReview[field] = value;
        setUpdateReview(newReview);
    }

    return <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="modal-action mt-[-10px]">
                    <label htmlFor="my-modal-6" ><FaTimesCircle className='text-3xl text-red-500 hover:text-warning' /></label>
                </div>
                <h3 className="font-bold text-lg text-green-500">Edit Your {reviewService.title} Review</h3>
                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Your Name</label>
                            <input onBlur={handleInputChange} name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" defaultValue={name} required />
                        </div>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Provide Photo URL</label>
                            <input onBlur={handleInputChange} name="image" type="text" placeholder="Image URL" className="input  input-bordered w-full" defaultValue={photo} required />
                        </div>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Rating Value Out of 5</label>
                            <input onBlur={handleInputChange} name="rating" type="text" placeholder="Provide Rating Value" className="input input-bordered w-5/6" defaultValue={rating} required />
                        </div>
                    </div>
                    <textarea onBlur={handleInputChange} name="reviewDetails" className="textarea textarea-bordered h-30 w-1/3 mt-6" placeholder="Review comment here" defaultValue={reviewDetails} required></textarea>
                    <br />
                    <input onClick={() => handleReviewUpdate(updateReview, setUpdateReview)} className='modal-action btn btn-outline btn-primary' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    </div>
};

export default ReviewModalBody;