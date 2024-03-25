import React from 'react';
import Image from 'next/image';
import HeroImage from '@/assets/Online-learning-cuate.png';
import FaceOne from '@/assets/faceone.png';
import FaceTwo from '@/assets/facetwo.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LiaCertificateSolid } from 'react-icons/lia';
type Props = {};

const AboutUs = (props: Props) => {
	return (
		<section className='lg:w-10/12 2xl:max-w-screen-xl mx-auto h-full'>
			<div className='grid grid-cols-1 lg:grid-cols-5 mt-16'>
				<div className='flex flex-col justify-center gap-y-10 col-span-2'>
					<div className='flex items-center gap-5'>
						<div className='w-10 h-10 bg-[#6366F1] text-white flex items-center justify-center rounded-full'>
							<LiaCertificateSolid size={25} />
						</div>
						<h3 className='text-xl font-medium'>Guarnted and certified</h3>
					</div>
					<h1 className='text-6xl font-bold text-gray-800 '>
						Online learning wherever and whenever.
					</h1>
					<div className=''>
						<button className='bg-violet-600 rounded-full py-4 px-6 text-white'>
							<p className='flex items-center justify-center gap-4 text-lg'>
								Learn more <AiOutlineArrowRight size={25} />
							</p>
						</button>
					</div>
					<div className='w-3/4 flex items-center justify-between my-10'>
						<div className='flex items-center relative'>
							<Image
								className='w-20 h-20 rounded-full border-8 border-purple-200'
								src={FaceOne}
								alt='instrutor'
							/>
							<Image
								className='w-16 h-16 rounded-full border-8 border-purple-200 absolute left-16'
								src={FaceTwo}
								alt='instrutor'
							/>
						</div>
						<div>
							<p className='text-lg'>
								Online courses from{' '}
								<span className='font-bold border-gray-700 border-b-2'>
									exparts.
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-3 grid grid-cols-2'>
					<div className='w-full h-full flex flex-col items-center justify-evenly pl-5'>
						<div className='w-48 relative'>
							<p className='number text-[100px] text-purple-100 font-extrabold absolute -top-[5rem] -left-8 -z-10'>
								01
							</p>
							<h3 className='text-lg font-semibold my-2'>Flexible schedule</h3>
							<p className='text-sm'>
								We provide personalized support to our students every step of
								the way, offering mentorship.
							</p>
							<hr className='w-16 h-1 bg-purple-600 my-4' />
						</div>
						<div className='w-48 relative'>
							<p className='number text-[100px] text-purple-100 font-extrabold absolute -top-[5rem] -left-8 -z-10'>
								03
							</p>
							<h3 className='text-lg font-semibold my-2'>Expert Instructor</h3>
							<p className='text-sm'>
								We provide personalized support to our students every step of
								the way, offering mentorship.
							</p>
							<hr className='w-16 h-1 bg-purple-600 my-4' />
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<div className='w-48 relative'>
							<p className='number text-[100px] text-purple-100 font-extrabold absolute -top-[5rem] -left-8 -z-10'>
								02
							</p>
							<h3 className='text-lg font-semibold my-2'>Pocket friendly</h3>
							<p className='text-sm'>
								We provide personalized support to our students every step of
								the way, offering mentorship.
							</p>
							<hr className='w-16 h-1 bg-purple-600 my-4' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
