import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

   if(loading){
    return <div className='flex justify-center my-20 md:my-52'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-700"></div></div>
   }

   if(user){
    return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;