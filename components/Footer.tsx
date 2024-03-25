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
		<footer className="lg:bg-[url('../assets/bg-footer.png')] bg-cover w-full lg:h-full bg-center bg-no-repeat text-gray-400">
			<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto relative'>
				<div className='absolute -top-14 w-full'>
					<div className='bg-yellow-400 text-[#0C203D] flex items-center justify-center py-10 rounded-lg gap-5'>
						<h3 className='text-3xl font-semibold'>
							Admission us open for next batch
						</h3>
						<div>
							<button className='bg-[#0C203D] text-white p-4 rounded-full flex items-center justify-center gap-2'>
								<span> Get strated now</span> <AiOutlineLike size={25} />
							</button>
						</div>
						<p className='number text-[#0C203D] flex items-center text-lg'>
							<span className='mr-2'>
								<FiPhoneCall />
							</span>
							<span className='font-semibold '>+22 016 247 67207</span>
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-4 content-center pt-36 pb-10 border-b'>
					<div className=''>
						<div className='w-64 pb-4'>
							<Image src={PortfolioLogo} alt='logo' width={150} height={100} />
							<h3 className='my-4 text-lg'>
								We are providing high qulaity courses for about 10 years.
							</h3>
						</div>
						<div className='flex items-center gap-2'>
							<FaFacebookSquare className='hover:text-blue-500' size={30} />
							<FaInstagram className='hover:text-[#CA4EC7]' size={30} />
							<FaXTwitter className='hover:text-white' size={30} />
							<FaYoutube className='hover:text-red-600' size={30} />
						</div>
					</div>
					<div>
						<div className='text-white pb-4'>
							<h3 className='text-xl'>Popular courses</h3>
						</div>
						<div className='h-fit text-lg flex flex-col gap-3'>
							<p>Development</p>
							<p>Design</p>
							<p>Business</p>
							<p>Marketing</p>
						</div>
					</div>
					<div>
						<div className='text-white pb-4'>
							<h3 className='text-xl'>Need help?</h3>
						</div>
						<div className='h-fit text-lg flex flex-col gap-3'>
							<p>Call us directly</p>
							<p className='number text-white'>
								<span className='font-semibold '>+22 016 247 67207</span>
								<span className='uppercase bg-orange-400 text-sm p-2 rounded-full ml-2'>
									free
								</span>
							</p>
							<p>Need Support?</p>
							<p className='text-white border-b-2 w-fit'>
								support@brilliant.xo
							</p>
						</div>
					</div>
					<div>
						<div className='text-white pb-4'>
							<h3 className='text-2xl font-bold'>Subscribe our newsletter</h3>
						</div>
						<div className='h-fit text-lg bg-[#132641] flex gap-3 border py-4 px-2 rounded'>
							<input className='bg-transparent text-white' type='text' />
							<button className='flex items-center space-x-2 gap-2'>
								Submit <AiOutlineSend />
							</button>
						</div>
						<div className='flex items-center gap-5 py-4'>
							<FaHandshake size={35} />
							<p className='text-xl'>Protecting your privacy.</p>
						</div>
					</div>
				</div>
				<div className='py-10 flex items-center justify-between'>
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
