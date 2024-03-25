import React, { useState } from 'react';
import Image from 'next/image';
import Success from '@/assets/Success.gif';
import { LuLightbulb } from 'react-icons/lu';

const WhyUs: React.FC = () => {
	const [isFirstHovered, setIsFirstHovered] = useState<boolean>(true);
	const [isSecondHovered, setIsSecondHovered] = useState<boolean>(false);
	const [isThirdHovered, setIsThirdHovered] = useState<boolean>(false);

	return (
		<main id='home' className='w-full lg:h-[50rem]'>
			<div className='h-full w-full pb-10 flex items-center justify-center'>
				<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center'>
					<div className='flex items-center justify-center'>
						<Image src={Success} alt='hero section image' width={500} />
					</div>
					<div className='flex items-center'>
						<div className='text-center md:text-left'>
							<div className='flex items-center gap-5'>
								<div className='w-10 h-10 bg-[#b163f1] text-white flex items-center justify-center rounded-full'>
									<LuLightbulb size={25} />
								</div>
								<h3 className='text-xl font-medium'>Why you choose us?</h3>
							</div>
							<h1 className='text-5xl lg:text-6xl text-[#0F172A] font-extrabold my-5'>
								Teaching makes you productive
							</h1>
							<div className='pt-5'>
								<div
									className={`bg-white shadow-lg rounded-lg my-5 p-6 transition duration-1000 ease-in-out transform`}
								>
									<h2 className='text-xl font-semibold mb-4'>
										Our interactive platform offers diverse courses
									</h2>
									<p className={`${isFirstHovered ? 'block' : 'hidden'}`}>
										We provide personalized support, mentorship, and feedback to
										empower students to achieve their learning goals and succeed
										in their endeavors.
									</p>
								</div>
								<div
									className={`bg-white shadow-lg rounded-lg my-5 p-6 transition duration-1000 ease-in-out transform`}
									onMouseEnter={() => {
										setIsSecondHovered(true);
										setIsFirstHovered(false);
									}}
									onMouseLeave={() => {
										setIsSecondHovered(false);
										setIsFirstHovered(true);
									}}
								>
									<h2 className='text-xl font-semibold mb-4'>
										Our interactive platform offers diverse courses
									</h2>
									<p className={`${isSecondHovered ? 'block' : 'hidden'}`}>
										We provide personalized support, mentorship, and feedback to
										empower students to achieve their learning goals and succeed
										in their endeavors.
									</p>
								</div>
								<div
									className={`bg-white shadow-lg rounded-lg my-5 p-6 transition duration-1000 ease-in-out transform`}
									onMouseEnter={() => {
										setIsThirdHovered(true);
										setIsFirstHovered(false);
									}}
									onMouseLeave={() => {
										setIsThirdHovered(false);
										setIsFirstHovered(true);
									}}
								>
									<h2 className='text-xl font-semibold mb-4'>
										Our interactive platform offers diverse courses
									</h2>
									<p className={`${isThirdHovered ? 'block' : 'hidden'}`}>
										We provide personalized support, mentorship, and feedback to
										empower students to achieve their learning goals and succeed
										in their endeavors.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default WhyUs;
