import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    

    return (
        <div className='mb-10'>
            <h2 className='text-2xl text-center italic underline underline-offset-4'>Your Total Reviews</h2>
            <div className="overflow-x-auto w-full mt-7">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                Reviewer Name
                            </th>
                            <th>Service Name</th>
                            <th>Ratings</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;