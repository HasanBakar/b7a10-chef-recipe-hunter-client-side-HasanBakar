import React from 'react';
import { NavLink } from "react-router-dom";
const Register = () => {
    return (
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto">

			<h1 className="text-3xl font-bold text-center">Please Registration</h1>

			<form className="space-y-6 ng-untouched ng-pristine ng-valid">

				<div className="space-y-1 text-sm">

					<label htmlFor="name" className="block text-xl dark:text-gray-400">Your name</label>

					<input type="text" name="name" id="email" placeholder="Your name" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="photo" className="block text-xl dark:text-gray-400">Your Photo url</label>

					<input type="text" name="photo" id="photo" placeholder="Your Photo url" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="Email" className="block text-xl dark:text-gray-400">Email Address</label>

					<input type="email" name="email" id="Email" placeholder="Email Address" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="password" className="block text-xl dark:text-gray-400">Create A Password</label>

					<input type="password" name="password" id="password" placeholder="Create A Password" className="w-full px-4 py-3 input input-bordered input-warning rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="password" className="block text-xl dark:text-gray-400">Confirm your password</label>

					<input type="password" name="confirm" id="password" placeholder="Confirm your password" className="w-full px-4 py-3 input input-bordered input-warning rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<button type="submit" className="block px-4 py-3 text-center rounded-lg  text-gray-900 bg-orange-400">Register</button>

			</form>

			<p className="text-sm text-center sm:px-6 dark:text-gray-400">Already have an account?
			<NavLink rel="noopener noreferrer" to="/login" className="underline text-orange-400"> Please Login</NavLink>
			</p>
		</div>
    );
};

export default Register;