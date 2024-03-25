import React from 'react';
import Image from 'next/image';
import { AiOutlineLike, AiOutlineMail } from 'react-icons/ai';
import Google from '@/assets/Google.png';
import Play from '@/assets/GooglePlay.png';
import Trophy from '@/assets/Trophy.png';
import Youtube from '@/assets/YouTube.png';

type Props = {};

const Achievements = (props: Props) => {
	return (
		<main className='lg:w-10/12 2xl:max-w-screen-xl mx-auto pt-14 pb-28'>
			<div className='mb-5 text-center'>
				<h1 className='text-5xl font-semibold'>Great achievements</h1>
			</div>
			<div className='flex items-center justify-center py-10'>
				<div className='border-2 '>
					<p className='text-right p-4'>2017</p>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-10 px-10 pb-10'>
						<Image src={Google} alt='' width={100} />

						<p>Best online platform for professional courses</p>
					</div>
				</div>
				<div className='border-2 border-l-0'>
					<p className='text-right p-4'>2018</p>
					<div className='w-72 flex flex-col items-center justify-center text-center gap-y-10 px-10 pb-10'>
						<Image src={Play} alt='' width={100} />
						<p>Best online platform for professional courses</p>
					</div>
				</div>
				<div className='border-2 border-l-0'>
					<p className='text-right p-4'>2021</p>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-10 px-10 pb-10'>
						<Image src={Trophy} alt='' width={100} />

						<p>Best online platform for professional courses</p>
					</div>
				</div>
				<div className='border-2 border-l-0'>
					<p className='text-right p-4'>2023</p>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-10 px-10 pb-10'>
						<Image src={Youtube} alt='' width={100} />

						<p>Best online platform for professional courses</p>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap items-center justify-center gap-10 '>
				<p className='flex items-center justify-center gap-2'>
					<span>
						<AiOutlineMail size={20} />
					</span>
					<span>Looking for help? </span>
					<span className='border-b-2 border-gray-800 font-semibold'>
						Contact us today
					</span>
				</p>
				<p className='flex items-center justify-center gap-2'>
					<span>
						<AiOutlineLike size={20} />
					</span>
					<span>Keep in touch </span>
					<span className='border-b-2 border-gray-800 font-semibold'>
						Like us on Facebook
					</span>
				</p>
			</div>
		</main>
	);
};

export default Achievements;
