import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import AddService from '../../Pages/AddService/AddService';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home';
import LogIn from '../../Pages/Login/LogIn';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import ReviewForm from '../../Pages/ReviewForm/ReviewForm';
import ServiceDetailCard from '../../Pages/ServiceDetailCard/ServiceDetailCard';
import Services from '../../Pages/Services/Services';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch("https://assignment-11-server-eosin.vercel.app/services3"),
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch("https://assignment-11-server-eosin.vercel.app/services"),
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-eosin.vercel.app/services/${params.id}`),
                element: <ServiceDetailCard></ServiceDetailCard>
            },
            {
                path: '/provideReview/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-eosin.vercel.app/services/${params.id}`),
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
])