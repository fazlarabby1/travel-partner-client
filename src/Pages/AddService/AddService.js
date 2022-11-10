import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useDynamicTitle';

const AddService = () => {
    useTitle('Add Service-')
    const navigate = useNavigate();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.serviceName.value;
        const image = form.photo.value;
        const price = form.cost.value;
        const ratings = form.rating.value;
        const details = form.serviceDetail.value;

        const service = {
            title,
            image,
            price,
            ratings,
            details
        }

        fetch('https://assignment-11-server-eosin.vercel.app/services', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged)
                    toast.success('Service Added Successfully')
                form.reset();
                navigate('/services');
            })
            .catch(error => console.error(error))
    }

return (
    <div className='mb-10'>
        <h2 className='text-center text-2xl font-semibold underline underline-offset-4 mb-10'>Help Us By Adding A New Service</h2>
        <form onSubmit={handleAddService}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <label className="block font-semibold  ml-5 sm:ml-5 md:ml-0">Service Name</label>
                    <input name="serviceName" type="text" placeholder="Service Name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Service Photo URL</label>
                    <input name="photo" type="text" placeholder="Service Photo URL" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Service Cost</label>
                    <input name="cost" type="text" placeholder="Service Cost" className="input input-bordered w-full" required/>
                </div>
                <div>
                    <label className="block font-semibold ml-5 sm:ml-5 md:ml-0">Rating Value Out of 5</label>
                    <input name="rating" type="text" placeholder="Provide A Rating Value" className="input input-bordered w-2/3" required />
                </div>
            </div>
            <textarea name="serviceDetail" className="textarea textarea-bordered h-32 w-1/3 mt-6" placeholder="Service Details" required></textarea>
            <br />
            <input className='btn btn-outline btn-primary' type="submit" value="Submit Review" />
        </form>
    </div>
);
};

export default AddService;