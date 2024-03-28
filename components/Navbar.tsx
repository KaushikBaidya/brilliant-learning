'use client';

import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioLogo from '@/assets/logo.png';
import { BiPhoneCall } from 'react-icons/bi';

const Navbar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [bgColor, setBgColor] = useState<boolean>(false);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 70) {
				setBgColor(true);
			} else {
				setBgColor(false);
			}
		};
		window.addEventListener('scroll', changeColor);
		return () => window.removeEventListener('scroll', changeColor);
	}, []);

	return (
		<nav
			className={
				'fixed w-full text-sm text-white z-50 ' +
				(bgColor
					? 'bg-gray-800 backdrop-blur-sm shadow-sm transition duration-200 ease-in'
					: 'bg-[#1e2a44] backdrop-blur-sm lg:bg-violet-700 ')
			}
		>
			<div className='lg:w-11/12 2xl:max-w-screen-2xl mx-auto flex flex-wrap items-center justify-around z-50 py-2'>
				<div className='w-full flex flex-grow-0 justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<Image
							className='w-48'
							src={PortfolioLogo}
							alt='logo'
							width={200}
							height={50}
						/>
					</Link>
					<button
						className='text-blue-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars size={25} className='mr-3' />
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center py-3 ' +
						(navbarOpen ? 'flex' : 'hidden')
					}
				>
					<div className='flex flex-col lg:flex-row list-none lg:ml-auto uppercase'>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/'>Home</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/about'>About</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/courses'>Courses</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/instructors'>Instructors</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/testimonial'>Testimonial</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Link href='/blogs'>Blogs</Link>
						</div>
						<div
							className='px-4 border-transparent border-b-4 hover:border-blue-300 py-2 font-normal cursor-pointer'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							Contact
						</div>
					</div>
				</div>
				<div className='hidden lg:flex flex-grow justify-end items-center'>
					<p className='number flex items-center gap-2'>
						<BiPhoneCall size={25} />
						<span> +225 034 525 232</span>
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
