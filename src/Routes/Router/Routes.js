import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/services3"),
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
        ]
    }
])