import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="px-4 py-24 mx-auto max-w-7xl">
                <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
                    <div>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400 uppercase">Error 404</p>
                    <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! The page you're looking for isn't here.</h1>
                    <p className="mb-5 text-base text-left text-gray-800 md:text-xl">You might have the wrong address, or the page may have moved.</p>
                    <NavLink to="/" className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-2">Back to homepage</NavLink>
                    <NavLink to="/feedback" className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-2">Feedback</NavLink>
                    </div>
                    <div>
                    <div className="w-full h-full py-48 bg-gray-200 rounded-lg">
                        <img src="https://i.ibb.co/QQH46SY/Error.webp" alt="" />
                    </div>
                    </div>
                </div>
        </div>

    );
};

export default ErrorPage;