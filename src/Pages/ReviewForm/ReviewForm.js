import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewForm = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, title, image, ratings, details, price } = service;

    return (
        <div className='mb-10'>
            <h2 className='text-center font-semibold text-xl italic underline underline-offset-4 mb-7
            '>Provide Your Precious Review on <span className='text-primary'>{title}</span> Please!!!</h2>
            <div>
                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="fullName" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name="image" type="text" placeholder="Image URL" className="input  input-bordered w-full" required />
                        <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly />
                        <input name="ratings" type="text" placeholder="Provide Rating Value" className="input input-bordered w-2/3" required />
                    </div>
                    <textarea name="reviewDetails" className="textarea textarea-bordered h-32 w-1/3 mt-6" placeholder="Review details here" required></textarea>
                    <br />
                    <input className='btn btn-outline btn-primary' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;