import { createBrowserRouter } from "react-router-dom";
import Home from './../components/pages/Home/Home';
import MainLayout from './../Layouts/MainLayout/MainLayout';
import Blog from './../components/pages/Blog/Blog';
import Feedback from './../components/pages/Feedback/Feedback';
import Login from './../components/pages/Login/Login';
import Register from './../components/pages/Register/Register';


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/feedback",
                element:<Feedback></Feedback>

            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router;