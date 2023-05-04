import React from 'react';

const ViewRecipe = () => {
    return (
        <div className="container mx-auto">
            <div className="grid justify-center align-bottom mb-14 h-48 w-full bg-gray-700">
                <img alt="profile" src="https://i.ibb.co/c2Fvfbb/Chef-5.png" className="object-cover mt-9 rounded-full h-40 w-40 "/>
                <h1 className="font-extrabold text-center uppercase text-4xl mb-8">Chefs Name</h1>
            </div>
            <hr className="my-8 bg-gray-300 border-orange-400 py-3 h-2 dark:bg-gray-700"/>
            <p>
                Rukhsana Begum is a chef whose culinary prowess and heartfelt approach to cooking have made her a standout figure in the culinary world. With a rich heritage rooted in traditional flavors and techniques, Rukhsana has masterfully infused her cultural background into her culinary creations, creating a unique and delightful fusion of flavors. Her dishes are a reflection of her deep understanding and appreciation for the ingredients she works with, as she expertly combines spices, herbs, and aromatics to create harmonious and mouthwatering experiences for her diners. Rukhsana's passion for cooking goes beyond just the art of preparing meals; she seeks to connect with people through her food, sharing stories, memories, and traditions with every dish she serves. Her warm and welcoming nature shines through in her interactions with guests, as she takes pleasure in introducing them to the authentic flavors of her heritage. Rukhsana Begum is not only a talented chef but also a cultural ambassador, using food as a means to bridge gaps, foster understanding, and create moments of joy and connection for those who have the pleasure of savoring her culinary creations.
            </p>
            <h2 className="text-center uppercase mt-5 mb-2 font-semibold text-xl underline" >List of famous Recipes</h2>


            
<div className="container max-w-4xl px-4 mx-auto sm:px-8">
    <div className="py-8">
        
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 text-sm text-left text-gray-800 font-medium uppercase bg-white border-b border-gray-200">
                                    Recipe name
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-medium uppercase text-left text-gray-800 bg-white border-b border-gray-200">
                                    Recipe Type
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-medium text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Ratings
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-medium text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    status
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Admin
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        12/09/2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Marcus coco
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Designer
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        01/10/2012
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Ecric marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Developer
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        02/10/2018
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Julien Huger
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        User
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        23/09/2010
                                    </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

            

            
        </div>
    );
};

export default ViewRecipe;