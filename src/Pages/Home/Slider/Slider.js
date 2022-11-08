import React from 'react';
import img1 from '../../../assets/images/city.jpg';
import img2 from '../../../assets/images/fountain.jpg';
import img3 from '../../../assets/images/sea-beach.jpg';
import img4 from '../../../assets/images/sky.jpg';
import SliderItem from '../SliderItem/SliderItem';

const sliderData = [
    {
        img: img1,
        prv: 4,
        id: 1,
        nxt: 2
    },
    {
        img: img2,
        prv: 1,
        id: 2,
        nxt: 3
    },
    {
        img: img3,
        prv: 2,
        id: 3,
        nxt: 4
    },
    {
        img: img4,
        prv: 3,
        id: 4,
        nxt: 1
    },
]
const Slider = () => {
    return (
        <div className="carousel w-full h-[600px] py-10">
            {
                sliderData.map(item => <SliderItem key={item.id} item={item}></SliderItem>)
            }
        </div>
    );
};

export default Slider;