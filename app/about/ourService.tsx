import React from 'react';
import { TfiWorld } from 'react-icons/tfi';

type Props = {};

const OurService = (props: Props) => {
	return (
		<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto'>
			<div className='flex items-center gap-5'>
				<div className='w-10 h-10 bg-[#6366F1] text-white flex items-center justify-center rounded-full'>
					<TfiWorld size={25} />
				</div>
				<h3 className='text-xl font-medium'>Know about classes</h3>
			</div>
			<div className='w-full grid grid-cols-2 py-10'>
				<h1 className='text-5xl font-bold'>
					Delivering top-quality courses to our students
				</h1>
				<div className='text-lg font-medium'>
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
