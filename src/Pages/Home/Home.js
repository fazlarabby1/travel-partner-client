import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useDynamicTitle';
import ServiceSummary from '../Shared/ServiceSummary/ServiceSummary';
import BestReviews from './BestReviews/BestReviews';
import Slider from './Slider/Slider';
import SuccessfulEvents from './SuccessfullEvents/SuccessfulEvents';

const Home = () => {
    useTitle('')
    const services = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className='grid gap-6 grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 mb-10 md:ml-5 sm:ml-0 md:mr-2 sm:mr-0 lg:ml-0 lg:mr-0'>
                {
                    services.map(service => <ServiceSummary key={service._id} service={service}></ServiceSummary>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <Link to="/services" className='btn btn-outline btn-info'>See All Services</Link>
            </div>
            <SuccessfulEvents></SuccessfulEvents>
            <div>
                <BestReviews></BestReviews>
            </div>
        </div>
    );
};

export default Home;