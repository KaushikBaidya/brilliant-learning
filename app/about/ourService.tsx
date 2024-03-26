import React from 'react';
import { TfiWorld } from 'react-icons/tfi';

type Props = {};

const OurService = (props: Props) => {
	return (
		<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto px-5 lg:px-0'>
			<div className='flex items-center gap-5'>
				<div className='w-6 lg:w-10 h-6 lg:h-10 bg-[#6366F1] text-white flex items-center justify-center rounded-full p-1'>
					<TfiWorld size={25} />
				</div>
				<h3 className='text-sm lg:text-xl font-medium'>Know about classes</h3>
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2  py-5 lg:py-10'>
				<h1 className='text-3xl lg:text-5xl font-bold text-gray-800 '>
					Delivering top-quality courses to our students
				</h1>
				<div className='text-sm lg:text-lg font-medium'>
					<p>
						We provide personalized support to our students every step of the
						way
					</p>
					<p>
						We are offering mentorship, guidance, and feedback to help them
						achieve their learning goals.
					</p>
					<p>we strive to empower students with the knowledge and skills</p>
				</div>
			</div>
		</div>
	);
};

export default OurService;
