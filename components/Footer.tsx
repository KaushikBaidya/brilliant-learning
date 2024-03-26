import Image from 'next/image';
import React from 'react';
import PortfolioLogo from '@/assets/logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { AiOutlineLike, AiOutlineSend } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[url('../assets/bg-footer.png')] bg-cover w-full lg:h-full bg-center bg-no-repeat text-gray-400">
			<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto relative'>
				<div className='absolute -top-14 w-full'>
					<div className='bg-yellow-400 text-[#0C203D] flex flex-col lg:flex-row items-center justify-center mx-10 py-5 md:py-10 rounded-lg gap-2 md:gap-5'>
						<h3 className='text-lg md:text-3xl font-semibold text-center lg:text-left'>
							Admission us open for next batch
						</h3>
						<div>
							<button className='bg-[#0C203D] text-white text-sm p-4 rounded-full flex items-center justify-center gap-2'>
								<span> Get strated now</span> <AiOutlineLike size={25} />
							</button>
						</div>
						<p className='number text-[#0C203D] text-sm flex items-center lg:text-lg'>
							<span className='mr-2'>
								<FiPhoneCall />
							</span>
							<span className='font-semibold '>+22 016 247 67207</span>
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-4 content-center pt-36 pb-10 border-b gap-y-5'>
					<div className=''>
						<div className='w-full lg:w-64 flex flex-col items-center justify-center lg:items-start pb-4'>
							<Image src={PortfolioLogo} alt='logo' width={150} height={100} />
							<h3 className='my-4 text-xs lg:text-lg text-center lg:text-left'>
								We are providing high qulaity courses for about 10 years.
							</h3>
						</div>
						<div className='flex items-center justify-center lg:justify-start gap-2'>
							<FaFacebookSquare className='hover:text-blue-500' size={30} />
							<FaInstagram className='hover:text-[#CA4EC7]' size={30} />
							<FaXTwitter className='hover:text-white' size={30} />
							<FaYoutube className='hover:text-red-600' size={30} />
						</div>
					</div>
					<div>
						<div className='text-white pb-4'>
							<h3 className='text-base lg:text-xl text-center lg:text-left'>
								Popular courses
							</h3>
						</div>
						<div className='h-fit text-sm lg:text-lg flex flex-col items-center lg:items-start gap-3'>
							<p>Development</p>
							<p>Design</p>
							<p>Business</p>
							<p>Marketing</p>
						</div>
					</div>
					<div>
						<div className='text-white pb-4'>
							<h3 className='text-base md:text-xl text-center lg:text-left'>
								Need help?
							</h3>
						</div>
						<div className='h-fit md:text-lg flex flex-col gap-3 text-sm text-center lg:text-left'>
							<p>Call us directly</p>
							<p className='number text-white'>
								<span className='font-semibold '>+22 016 247 67207</span>
								<span className='uppercase bg-orange-400 text-sm p-2 rounded-full ml-2'>
									free
								</span>
							</p>
							<p>Need Support?</p>
							<p className='text-white border-b-2 w-fit mx-auto lg:mx-0'>
								support@brilliant.xo
							</p>
						</div>
					</div>
					<div>
						<div className='text-white my-4 lg:my-0 lg:pb-4'>
							<h3 className='text-lg lg:text-2xl font-bold text-center lg:text-left'>
								Subscribe our newsletter
							</h3>
						</div>
						<div className='h-fit text-lg bg-[#132641] flex justify-between lg:justify-start gap-3 border  py-2 lg:py-4 mx-5 lg:mx-0 px-2 rounded'>
							<input className='bg-transparent text-white' type='text' />
							<button className='flex items-center space-x-2 gap-2 text-sm'>
								Submit <AiOutlineSend />
							</button>
						</div>
						<div className='flex items-center justify-center lg:justify-start gap-5 py-4 text-sm lg:text-xl'>
							<FaHandshake size={30} />
							<p className=''>Protecting your privacy.</p>
						</div>
					</div>
				</div>
				<div className='py-10 flex flex-col md:flex-row items-center justify-between text-sm md:text-base'>
					<div className='flex items-center gap-4'>
						<p>Home</p>
						<p>About</p>
						<p>Courses</p>
						<p>Instructors</p>
						<p>Blogs</p>
					</div>
					<div>
						<p>&copy; Copyright {currentYear}, All Rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
