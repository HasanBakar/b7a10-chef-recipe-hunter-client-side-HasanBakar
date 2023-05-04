import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import ChefCard from './../../ChefCard/ChefCard';

const Home = () => {
  const chefs = useLoaderData()
  // console.log(chefs)
    return (
    <>
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-10    lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-start">
            Indulge in Epicurean Discoveries:
            <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400" >Chef Tracker</span> - Unearthing Exceptional Chefs
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-start">
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
    <h1 className="text-center text-2xl uppercase font-extrabold">Our Top Chefs</h1>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <div className="grid md:grid-cols-3 gap-4">
      {
        chefs.map(cf => <ChefCard
        key={cf.id}
        chef={cf}
        ></ChefCard>)
      }
    </div>


 <h1 className="text-center text-2xl mt-8 uppercase font-extrabold">Chef's competition Time Line</h1>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
					<h3 className="text-3xl uppercase font-semibold">Take part then</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">you win or learning</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Registration start </h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">🎈12 December in every year🎈</time>
						<p className="mt-3">Embrace the heat of the kitchen, for within its flames lies the crucible of culinary greatness. Let the sizzle of your skills and the aroma of your passion ignite a fierce determination. In the realm of chef's competition, rise above the rest, unleash your creativity, and showcase the true artistry of your craft.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Registration dateline</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">🎈15 march in year🎈</time>
						<p className="mt-3">With each plate you present, let your talent shine, leaving a lasting impression on the taste buds and hearts of all who experience your culinary masterpieces. Remember, in the arena of chefs, it is not just a competition; it is a celebration of gastronomic excellence. So, bring forth your finest flavors, push the boundaries, and leave an indelible mark on the culinary world.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Final Event</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">26 March in every year🎈🎀🎈</time>
						<p className="mt-3">The journey may be intense, but the rewards are the sweetest when you give it your all. Let the thrill of the competition propel you forward, and may your passion fuel your victory!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* FAQ section start */}
    <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">what is chefTracker?</summary>
				<div className="px-4 pb-4">
					<p>ChefTracker is a web platform designed to track and monitor the activities of professional chefs. It provides tools and features to manage kitchen operations, track inventory, streamline recipe creation and costing, and monitor staff performance. The platform aims to enhance efficiency and productivity in culinary establishments by providing real-time insights and analytics for restaurant owners and chefs.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is Activity summary of chefTracker?</summary>
				<div className="px-4 pb-4">
					<p>As of my knowledge cutoff in September 2022, I'm not familiar with a specific website called "ChefTracker" and its current activities. It's possible that the website was developed or updated after that time. Without further information or context, I'm unable to provide an activity summary for ChefTracker. If you have any additional details or questions, please let me know, and I'll do my best to assist you.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">If you want to join us?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>If ChefTracker is a website and you're inviting me to join, I'm an AI language model and I don't have the ability to join websites or participate in online platforms. However, I'm here to help answer any questions or provide information you may need about ChefTracker or any other topic. Just let me know how I can assist you!</p>
				</div>
			</details>
		</div>
	</div>
</div>

    </>
    );
};

export default Home;