import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="md:w-1/2 mx-auto p-4 rounded-md shadow-2xl sm:p-8 bg-sky-800 text-gray-100 mb-10">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={() => console.log('clicked')} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Full Name</label>
                            <input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-gray-70 text-black focus:border-violet-400" required/>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Photo URL</label>
                            <input type="text" name="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-70 text-black focus:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-70 text-black focus:border-violet-400" required/>
                        </div>
                        <div className="space-y-2">
                                <label className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black focus:border-violet-400" required/>
                        </div>
                    </div>
                    <p className="font-semibold text-xl text-white mt-5">Already have an account?
                    <Link to="/login" className="btn btn-link text-info"> Log In here</Link>
                </p>
                    <div className='flex justify-center'>
                        <button className="w-1/2 px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Un</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;