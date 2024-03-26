import React from 'react';
import Image from 'next/image';
import Learning from '@/assets/Learning-bro.png';
import Idea from '@/assets/Learning-amico.png';
import Certify from '@/assets/Certification-bro.png';
import OnlineClass from '@/assets/Online-learning-bro.png';

type Props = {};

const ServiceOptions = (props: Props) => {
	return (
		<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto px-5 lg:px-0'>
			<div className='flex flex-wrap items-center justify-center py-10'>
				<div className='lg:border-r-2 lg:border-b-2 '>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-5 px-10 pb-10'>
						<Image src={Learning} alt='' width={150} />
						<h3 className='text-lg font-semibold'>Skiled instrutors</h3>
						<p>Best online platform for professional courses</p>
					</div>
					<div className='text-center py-3 border-t-2 hidden lg:block'>
						<p className='uppercase font-semibold'>Student Enrolled</p>
					</div>
				</div>
				<div className='lg:border-r-2 lg:border-b-2 '>
					<div className='w-72 flex flex-col items-center justify-center text-center gap-y-5 px-10 pb-10'>
						<Image src={Idea} alt='' width={150} />
						<h3 className='text-lg font-semibold'>Eductor helps</h3>
						<p>Best online platform for professional courses</p>
					</div>
					<div className='text-center py-3 border-t-2 hidden lg:block'>
						<p className='uppercase font-semibold'>Student Enrolled</p>
					</div>
				</div>
				<div className='lg:border-r-2 lg:border-b-2 '>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-5 px-10 pb-10'>
						<Image src={Certify} alt='' width={150} />
						<h3 className='text-lg font-semibold'>Get certificate</h3>
						<p>Best online platform for professional courses</p>
					</div>
					<div className='text-center py-3 border-t-2 hidden lg:block'>
						<p className='uppercase font-semibold'>Student Enrolled</p>
					</div>
				</div>
				<div className='lg:border-b-2'>
					<div className='w-72 flex flex-col items-center justify-center  text-center gap-y-5 px-10 pb-10'>
						<Image src={OnlineClass} alt='' width={150} />
						<h3 className='text-lg font-semibold'>Online classes</h3>
						<p>Best online platform for professional courses</p>
					</div>
					<div className='text-center py-3 border-t-2 hidden lg:block'>
						<p className='uppercase font-semibold'>Student Enrolled</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceOptions;
