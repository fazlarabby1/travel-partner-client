import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
            
        ]
    }
])