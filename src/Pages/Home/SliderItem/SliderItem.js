import React from 'react';
import { Link } from 'react-router-dom';
import './SliderItem.css';

const SliderItem = ({item}) => {
    const {id, img, nxt, prv} = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slider-image w-full'>
                <img alt='' src={img} className="w-full h-full rounded-xl object-inherit" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-64 xl:left-96 top-1/4">
                <h1 className='text-6xl text-white font-bold'>
                    Best 
                    Travel 
                    Partner
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 md:w-2/5 lg:left-64 xl:left-96 top-1/2">
                <p className='text-white text-xl'>
                    We help you to create your best memories. Choose the place you dreamed about and let us help you to make your dreams come true.
                </p>
            </div>
            <div className="mt-10 absolute flex justify-center transform -translate-y-1/2 md:w-2/5 lg:left-64 xl:left-96 top-80">
            <Link to='/services'><button className="btn btn-outline btn-warning">See Services</button></Link>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 bottom-0">
                <a href={`#slide${prv}`} className="btn btn-circle bg-red-500 mr-5">❮</a>
                <a href={`#slide${nxt}`} className="btn btn-circle bg-amber-300">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;