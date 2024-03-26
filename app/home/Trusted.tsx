import React from 'react';
import { LiaCertificateSolid } from 'react-icons/lia';
import Google from '@/assets/Google.png';
import Play from '@/assets/GooglePlay.png';
import Youtube from '@/assets/YouTube.png';
import Linkedin from '@/assets/LinkedIn.png';
import Figma from '@/assets/Figma.png';
import Image from 'next/image';
import CardTestimonyCarousel from './CardTestimonyCarousel';

type Props = {};

const Trusted = (props: Props) => {
	return (
		<section className="bg-[url('../assets/bgk.png')] bg-cover w-full lg:h-full bg-center bg-no-repeat mt-10 border-b-8 border-yellow-300">
			<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto text-white'>
				<div className='grid grid-cols-1 md:grid-cols-6 content-center pt-20 px-5 lg:px-0'>
					<div className='flex flex-col justify-center gap-y-10 col-span-2'>
						<div className='flex items-center gap-5'>
							<div className='w-6 lg:w-10 h-6 lg:h-10 bg-violet-500 text-white flex items-center justify-center rounded-full p-1'>
								<LiaCertificateSolid size={25} />
							</div>
							<h3 className='text-sm lg:text-xl font-medium'>
								Guarnted and certified
							</h3>
						</div>
						<h1 className='text-center lg:text-start text-3xl lg:text-6xl font-bold text-white lg:pt-5'>
							Trusted by genius people
						</h1>
						<p className='text-gray-400'>
							we strive to empower students with the knowledge and skills they
							need to succeed in today&lsquo;s fast-paced world.
						</p>
						<div className='flex items-center justify-center text-gray-100'>
							<p className='text-3xl lg:text-6xl number font-bold pr-5 border-r-2'>
								95%
							</p>
							<p className='text-sm lg:text-lg pl-4'>
								students complete course successfullly
							</p>
						</div>
					</div>
					<div className='col-span-1'></div>
					<div className='col-span-3 py-5 lg:py-0'>
						<CardTestimonyCarousel />
					</div>
				</div>

				<div className='flex items-center justify-center gap-x-10 py-24'>
					<Image src={Google} alt='' width={70} />
					<Image src={Play} alt='' width={70} />
					<Image src={Linkedin} alt='' width={70} />
					<Image src={Youtube} alt='' width={70} />
					<Image src={Figma} alt='' width={70} />
				</div>
			</div>
		</section>
	);
};

export default Trusted;
