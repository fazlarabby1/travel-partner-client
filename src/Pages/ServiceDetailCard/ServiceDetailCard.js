import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewSummary from '../ReviewSummary/ReviewSummary';

const ServiceDetailCard = () => {
    const service = useLoaderData();
    const { _id, title, image, ratings, details, price } = service;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div className='grid gap-5 md:grid-cols-2'>
            <div>
                <h1 className='text-center mb-7 text-3xl font-semibold italic underline underline-offset-4'>{title} Details</h1>
                <div className="card card-compact bg-base-100 shadow-xl p-4 border rounded mx-auto mb-10">
                    <figure><img className='rounded' style={{ height: '100%', width: '100%' }} src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='text-blue-600'>Title:</span> {title}</h2>
                        <p>{details}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl text-red-500 font-semibold'>Price: ${price}</p>
                            <p className='flex justify-end text-xl items-center'><span className='text-warning mr-1'><FaStar /></span>{ratings}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/services/${_id}`}><button onClick={() => toast.success('Successfully Added To Your Cart')} className="btn btn-primary">Add To Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center mb-7 text-3xl font-semibold italic underline underline-offset-4'>{title} Reviews</h1>
                <p className='text-center text-xl mb-8'>
                    To Provide Your Review
                    <Link to={`/provideReview/${_id}`}><button className='btn btn-active btn-link'>Click Here</button></Link>
                </p>
                <div>
                    {
                        reviews.sort((a,b)=> a.reviewTime < b.reviewTime ? 1 : -1).map(review => <ReviewSummary key={review._id} review={review}></ReviewSummary>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailCard;