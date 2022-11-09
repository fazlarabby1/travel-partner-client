import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetailCard = () => {
    const service = useLoaderData();
    const { _id, title, image, ratings, details, price } = service;
    const {user} = useContext(AuthContext);

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
                <p className='text-center text-xl'>
                    Want To Give Review?
                    <Link to={`/provideReview/${_id}`}><button className='btn btn-active btn-link'>Click Here</button></Link>
                </p>
            </div>
        </div>
    );
};

export default ServiceDetailCard;