import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useDynamicTitle';

const ReviewForm = () => {
    useTitle('Provide Review-')
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const service = useLoaderData();
    const { _id, title } = service;

    const handleReview = event => {
        event.preventDefault();
        const reviewTime = new Date().getTime();
        const form = event.target;
        const name = form.name.value;
        const photo = form.image.value;
        const email = form.email.value;
        const rating = form.ratings.value;
        const reviewDetails = form.reviewDetails.value;

        // console.log(name,image,email,ratings,reviewDetails)

        const review = {
            service: _id,
            name,
            email,
            photo,
            rating,
            reviewDetails,
            reviewTime
        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            toast.success('Review Added Successfully')
            form.reset();
            navigate('/services');
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='mb-10'>
            <h2 className='text-center font-semibold text-xl italic underline underline-offset-4 mb-7
            '>Provide Your Precious Review on <span className='text-primary'>{title}</span> Please!!!</h2>
            <div>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block font-semibold  ml-5 sm:ml-5 md:ml-0">Your Name</label>
                            <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" defaultValue={user?.displayName} required />
                        </div>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Provide Photo URL</label>
                            <input name="image" type="text" placeholder="Image URL" className="input input-bordered w-full" defaultValue={user?.photoURL} required />
                        </div>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Email Address</label>
                            <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                        </div>
                        <div>
                            <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Rating Value Out of 5</label>
                            <input name="ratings" type="text" placeholder="Provide Rating Value" className="input input-bordered w-2/3" required />
                        </div>
                    </div>
                    <textarea name="reviewDetails" className="textarea textarea-bordered h-32 w-1/3 mt-6" placeholder="Review comment here" required></textarea>
                    <br />
                    <input className='btn btn-outline btn-primary' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;