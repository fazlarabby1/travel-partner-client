import React, { useEffect, useState } from 'react';
import { FaStar, FaTimesCircle } from 'react-icons/fa';

const ReviewCard = ({ review, handleReviewDelete }) => {
    const { _id, name, photo, email, service, rating, reviewDetails } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => {
                setReviewService(data);
            })
    }, [service]);

    // const handleReviewUpdateChange = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const photo = form.image.value;
    //     const rating = form.ratings.value;
    //     const reviewDetails = form.reviewDetails.value;

    //     setUpdatedReview(service, name, email, photo, service, rating, reviewDetails);
    // }

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
                <label htmlFor="my-modal-6" className="btn bg-green-500 border-0">Update</label>

                <button onClick={() => handleReviewDelete(_id)} className="btn bg-red-500 border-0">Delete</button>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="modal-action mt-[-10px]">
                            <label htmlFor="my-modal-6" ><FaTimesCircle className='text-3xl text-red-500 hover:text-warning' /></label>
                        </div>
                        <h3 className="font-bold text-lg text-green-500">Edit Your Review</h3>
                        <form>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <div>
                                    <label className="block font-semibold  ml-5 sm:ml-5 md:ml-0">Your Name</label>
                                    <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" defaultValue={name} required />
                                </div>
                                <div>
                                    <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Provide Photo URL</label>
                                    <input name="image" type="text" placeholder="Image URL" className="input  input-bordered w-full" defaultValue={photo} required />
                                </div>
                                <div>
                                    <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Rating Value Out of 5</label>
                                    <input name="ratings" type="text" placeholder="Provide Rating Value" className="input input-bordered w-2/3" required />
                                </div>
                            </div>
                            <textarea name="reviewDetails" className="textarea textarea-bordered h-30 w-1/3 mt-6" placeholder="Review comment here" required></textarea>
                            <br />
                            <input className='modal-action btn btn-outline btn-primary' type="submit" value="Submit Review" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default ReviewCard;