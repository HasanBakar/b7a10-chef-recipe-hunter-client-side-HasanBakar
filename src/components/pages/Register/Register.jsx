import React from 'react';
import { updateProfile } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';



const Register = () => {
	const {createUser,ShowError, setShowError,} = useContext(AuthContext);

	const handleRegister = event =>{
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword= form.confirm.value;

		if(password !== confirmPassword){
					<p className="text-center" >Password do not matched!</p>
				}

		// console.log(name, photo, email, password, confirmPassword)

		createUser(email, password)
			.then(result =>{
			const u = result.user;	
			form.reset();
			})
			.catch(error => {
			setShowError(error.message)
			})


	}

    return (
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto">
			

	<h1 className="text-3xl font-bold text-center">Please Registration</h1>
			
				
					<p className="text-center text-2xl text-red-500" >{ShowError}</p>
				
			

			<form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">

				<div className="space-y-1 text-sm">

					<label htmlFor="name" className="block text-xl dark:text-gray-400">Your name</label>

					<input type="text" name="name" placeholder="Your name" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="photo" className="block text-xl dark:text-gray-400">Your Photo url</label>

					<input type="text" name="photo" placeholder="Your Photo url" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="Email" className="block text-xl dark:text-gray-400">Email Address</label>

					<input type="email" name="email" placeholder="Email Address" className="w-full input input-bordered input-warning px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="password" className="block text-xl dark:text-gray-400">Create A Password</label>

					<input type="password" name="password" id="password" placeholder="Create A Password" className="w-full px-4 py-3 input input-bordered input-warning rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

				</div>

				<div className="space-y-1 text-sm">

					<label htmlFor="password" className="block text-xl dark:text-gray-400">Confirm your password</label>

					<input type="password" name="confirm" placeholder="Confirm your password" className="w-full px-4 py-3 input input-bordered input-warning rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />

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