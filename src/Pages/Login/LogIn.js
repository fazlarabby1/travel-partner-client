import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }

    return (
        <div>
            <div className="md:w-1/2 mx-auto p-4 rounded-md shadow-2xl sm:p-8 bg-sky-800 text-gray-100 mb-10">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-70 text-black focus:border-violet-400" required/>
                        </div>
                        <div className="space-y-2">
                                <label className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black focus:border-violet-400" required/>
                        </div>
                        <Link href="#" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                    </div>
                    <div className='flex justify-center'>
                        <button className="w-1/2 px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Log in</button>
                    </div>
                </form>
                <p className="text-center font-semibold text-xl text-white mt-5">Don't have account?
                    <Link to="/signUp" className="btn btn-link text-info"> Sign up here</Link>
                </p>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;