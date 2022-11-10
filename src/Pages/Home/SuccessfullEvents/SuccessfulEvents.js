import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import tour1 from '../../../assets/images/Tour/tour1.jpg';
import tour2 from '../../../assets/images/Tour/tour2.jpg';
import tour3 from '../../../assets/images/Tour/tour3.jpg';
import tour4 from '../../../assets/images/Tour/tour4.jpg';
import tour5 from '../../../assets/images/Tour/tour5.jpg';
import tour6 from '../../../assets/images/Tour/tour6.jpeg';
import tour7 from '../../../assets/images/Tour/tour7.jpeg';
import tour8 from '../../../assets/images/Tour/tour8.jpg';

const SuccessfulEvents = () => {
    return (
        <div className='mb-7 shadow-xl'>
            <h2 className='underline underline-offset-4 text-center text-2xl italic font-semibold mb-10'>Some Successful Event Photos</h2>
            <PhotoProvider>
                <div className='grid grid-cols-2 md:grid-cols-4 md:gap-3 gap-2'>
                    <PhotoView src={tour1}>
                        <img className='rounded h-64' src={tour1} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour2}>
                        <img className='rounded h-64' src={tour2} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour3}>
                        <img className='rounded h-64' src={tour3} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour4}>
                        <img className='rounded h-64' src={tour4} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour5}>
                        <img className='rounded h-64' src={tour5} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour6}>
                        <img className='rounded h-64' src={tour6} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour7}>
                        <img className='rounded h-64' src={tour7} alt="Shoes" />
                    </PhotoView>
                    <PhotoView src={tour8}>
                        <img className='rounded h-64' src={tour8} alt="Shoes" />
                    </PhotoView>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default SuccessfulEvents;