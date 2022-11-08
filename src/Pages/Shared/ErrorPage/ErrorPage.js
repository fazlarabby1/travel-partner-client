import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/images/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            {
                error &&
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={errorImg} alt="" style={{ width: '300px', marginTop: '120px' }} />
                    </div>
                    <p className='text-red-500 text-3xl font-semibold'>{error.status} : <span className='text-warning'>{error.statusText}</span></p>
                    <div className='mt-7'>
                        <Link to='/'>
                            <button className="btn btn-outline btn-success px-8">Go Home</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ErrorPage;