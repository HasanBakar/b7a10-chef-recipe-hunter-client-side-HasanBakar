import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-10    lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Indulge in Epicurean Discoveries:
            <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400" >Chef Tracker</span> - Unearthing Exceptional Chefs
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Chef Tracker is a vibrant platform that seeks out and celebrates exceptional culinary talent. With a passion for gastronomy, we meticulously search for hidden gems and remarkable chefs from around Bangladesh. Our mission is to showcase their unique skills and creations, providing a platform for these culinary masters to shine. Join us on an exciting journey of flavor and discovery as we uncover the extraordinary and push the boundaries of the culinary world. With Chef Tracker, prepare to embark on an exhilarating exploration of the finest cuisine and the talented individuals behind it.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">       
            <NavLink to="/register">
                <button type="button" className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Get Registered
            </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-[625px]"
          src="https://i.ibb.co/Xj8wZPq/food-Banner.png"
          alt=""
        />
      </div>
    </div>

    );
};

export default Home;