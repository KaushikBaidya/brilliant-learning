import React from 'react';
import Image from 'next/image';
import HeroImage from '@/assets/Online-learning-cuate.png';
import { AiOutlineLike, AiOutlineYoutube } from 'react-icons/ai';
type Props = {};

const HomeHero = (props: Props) => {
	return (
		<main className='lg:w-10/12 2xl:max-w-screen-xl mx-auto h-full pt-28'>
			<div className='grid grid-cols-1 lg:grid-cols-2 py-10'>
				<div className='flex flex-col justify-center gap-10'>
					<h1 className='text-[60px] leading-normal font-bold text-gray-800 mt-16'>
						World&lsquo;s Best online platform for education
					</h1>
					<h2 className='text-lg text-gray-600'>
						We provide personalized support to our students every step of the
						way, offering mentorship, guidance, and feedback to help them
						achieve their learning goals.
					</h2>
					<div className='flex gap-4'>
						<button className='bg-violet-600 rounded-full py-4 px-6 text-white'>
							<p className='flex items-center justify-center gap-4 text-lg'>
								<AiOutlineLike /> Get started
							</p>
						</button>
						<button className='border border-violet-600 rounded-full py-4 px-6 text-violet-600'>
							<p className='flex items-center justify-center gap-4 text-lg'>
								<AiOutlineYoutube /> How it works
							</p>
						</button>
					</div>
					<div className='flex gap-10 my-10'>
						<div>
							<h2 className='text-3xl font-semibold my-2 text-gray-800 number'>
								250+
							</h2>
							<hr className='bg-violet-600 w-36 h-1' />
							<h3 className='text-xl font-medium my-2 text-gray-600'>Tutors</h3>
						</div>
						<div>
							<h2 className='text-3xl font-semibold my-2 text-gray-800 number'>
								8250+
							</h2>
							<hr className='bg-violet-600 w-36 h-1' />
							<h3 className='text-xl font-medium my-2 text-gray-600'>
								Students
							</h3>
						</div>
						<div>
							<h2 className='text-3xl font-semibold my-2 text-gray-800 number'>
								150+
							</h2>
							<hr className='bg-violet-600 w-36 h-1' />
							<h3 className='text-xl font-medium my-2 text-gray-600'>
								Courses
							</h3>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<Image src={HeroImage} alt='hero section image' width={650} />
				</div>
			</div>
		</main>
	);
};

export default HomeHero;
