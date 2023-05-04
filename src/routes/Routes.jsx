import { createBrowserRouter } from "react-router-dom";
import Home from './../components/pages/Home/Home';
import MainLayout from './../Layouts/MainLayout/MainLayout';
import Blog from './../components/pages/Blog/Blog';
import Feedback from './../components/pages/Feedback/Feedback';
import Login from './../components/pages/Login/Login';
import Register from './../components/pages/Register/Register';
import ErrorPage from './../components/ErrorPage/ErrorPage';
import ViewRecipe from './../components/pages/ViewRecipe/ViewRecipe';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("https://b7a10-chef-recipe-hunter-server-side-hasan-bakar.vercel.app/chefs")
            },
            {
                path:"/:id",
                element:<PrivateRoute><ViewRecipe></ViewRecipe> </PrivateRoute>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog> </PrivateRoute>
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
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;