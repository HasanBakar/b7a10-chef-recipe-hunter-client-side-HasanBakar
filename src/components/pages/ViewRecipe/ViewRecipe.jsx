import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const ViewRecipe = () => {
    const chef = useLoaderData();
    console.log(chef)
     const {numbers_of_views, about_chef,Years_of_experience, Numbers_of_recipes, Likes, Chef_Picture,Chef_Name } = chef;
    return (
        <div className="container mx-auto">
            <div className="grid justify-center align-bottom mb-14 h-48 w-full bg-gray-700">
                <img alt="profile" src={Chef_Picture} className="object-cover mt-9 rounded-full h-40 w-40 "/>
                <h1 className="font-extrabold text-center uppercase text-4xl mb-8">{Chef_Name}</h1>
            </div>
            <hr className="my-8 bg-gray-300 border-orange-400 py-3 h-2 dark:bg-gray-700"/>
            <p>
            {about_chef}
            </p>
            <h2 className="text-center uppercase mt-5 mb-2 font-semibold text-xl underline" >In total view chef's popularity</h2>


            
<div className="container max-w-4xl px-4 mx-auto sm:px-8">
    <div className="py-8">
        
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                
                                <th scope="col" className="px-5 py-3 text-sm font-medium uppercase text-left text-gray-800 bg-white border-b border-gray-200">
                                    Number of recipes
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-medium text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Experience
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm text-left text-gray-800 font-medium uppercase bg-white border-b border-gray-200">
                                    Likes
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm text-left text-gray-800 font-medium uppercase bg-white border-b border-gray-200">
                                    Views
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {Numbers_of_recipes}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {Years_of_experience} years
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {Likes}
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {numbers_of_views}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

            <div className="mb-10 text-center md:mb-16 lg:mb-20">       
            <NavLink to="/">
                <button type="button" className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Back to Home
            </button>
            </NavLink>
          </div>   
        </div>
    );
};

export default ViewRecipe;