import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useDynamicTitle';
import Loading from '../Shared/Loading/Loading';
import ServiceSummary from '../Shared/ServiceSummary/ServiceSummary';

const Services = () => {
    useTitle('Services-')
    const services = useLoaderData();

    return (
        <div>
            <h2 className='text-center text-3xl italic underline underline-offset-4 mb-7'>Our Services</h2>
            <div className='grid gap-6 grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 mb-10 md:ml-5 sm:ml-0 md:mr-2 sm:mr-0 lg:ml-0 lg:mr-0'>
                {
                    services ?
                        services.map(service => <ServiceSummary key={service._id} service={service}></ServiceSummary>)
                        :
                        <Loading />
                }
            </div>
        </div>
    );
};

export default Services;