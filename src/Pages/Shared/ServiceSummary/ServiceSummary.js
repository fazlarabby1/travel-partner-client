import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ServiceSummary = ({ service }) => {
    const { _id, title, image, ratings, details, price } = service;
    // console.log(_id, title, image, ratings, details, price)
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-4 border rounded">
            <figure><img className='rounded' src={image} alt="Shoes" style={{ height: "220px" }} /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='text-sky-600'>Title:</span> {title}</h2>
                <p>{details.length > 100 ? details.slice(0, 100) + '.....'
                    : details}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-xl text-red-500 font-semibold'>Price: ${price}</p>
                    <p className='flex justify-end text-xl items-center'><span className='text-warning mr-1'><FaStar/></span>{ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSummary;