'use client';
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import HomeHero from './home/HomeHero';
import AboutUs from './home/AboutUs';
import PopularCourses from './home/PopularCourses';
import PremiumExperience from './home/PremiumExperience';
import Trusted from './home/Trusted';
import Banner from './home/Banner';
import Blogs from './home/Blogs';

const Home = () => {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;
			const halfwayPoint = window.innerHeight / 2;
			setShowBackToTop(scrollY > halfwayPoint);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main>
			<HomeHero />
			{/* <AboutUs />
			<PopularCourses />
			<PremiumExperience />
			<Banner />
			<Trusted />
			<Blogs /> */}
			{showBackToTop && (
				<button
					onClick={scrollToTop}
					className='fixed bottom-4 right-6 bg-blue-500 border-2 border-blue-500 hover:bg-gray-900 hover:border-blue-500 text-white p-2 rounded-full'
				>
					<MdKeyboardDoubleArrowUp size={25} />
				</button>
			)}
		</main>
	);
};

export default Home;
