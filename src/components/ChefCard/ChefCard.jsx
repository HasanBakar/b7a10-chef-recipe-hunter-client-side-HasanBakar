import React from 'react';
import { Link } from "react-router-dom";

const ChefCard = ({chef}) => {
    // console.log(chef)
    const {Likes, Numbers_of_recipes, Years_of_experience, Chef_Name, Chef_Picture, id} = chef;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="h-44 w-44" src={Chef_Picture}  alt="Chef image"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {Chef_Name}
                <div className="badge badge-secondary">Best</div>
                </h2>
                <div>
                    <p>Experience: {Years_of_experience} years</p>
                    <p>Numbers of Recipes: {Numbers_of_recipes} </p>
                    <p>Likes: {Likes} </p>
                </div>
                <div className="card-actions justify-end">
                    <Link className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md">Favorite </Link>
                    <Link to={`/${id}`} className="py-3 px-4  bg-orange-800 hover:bg-orange-400 focus:bg-orange-300 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;