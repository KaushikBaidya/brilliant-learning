import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import ImageOne from '@/assets/studentone.png';
import ImageTwo from '@/assets/studenttwo.png';
import Image3 from '@/assets/student3.png';

type Props = {};

const CardTestimonyCarousel = (props: Props) => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>
				<div className='embla__slide'>
					<div className='w-full bg-white rounded-md grid grid-cols-2'>
						<div className='rounded-tl-md rounded-bl-md overflow-hidden'>
							<Image
								src={ImageOne}
								alt='Testimonial Image'
								width={400}
								height={500}
							/>
						</div>
						<div className='flex flex-col items-center justify-center px-5 gap-4 text-gray-700'>
							<div className='text-center'>
								<h3 className='text-lg lg:text-2xl font-bold'>Jean Doe</h3>
								<p className='text-sm lg:text-base'>Software Engineer</p>
							</div>
							<p className='text-xs lg:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
				<div className='embla__slide'>
					<div className='w-full bg-white rounded-md grid grid-cols-2'>
						<div className='rounded-tl-md rounded-bl-md overflow-hidden'>
							<Image
								src={ImageTwo}
								alt='Testimonial Image'
								width={400}
								height={500}
							/>
						</div>
						<div className='flex flex-col items-center justify-center px-5 gap-4 text-gray-700'>
							<div className='text-center'>
								<h3 className='text-lg lg:text-2xl font-bold'>Elisa Herphy</h3>
								<p className='text-sm lg:text-base'>Business Analist</p>
							</div>
							<p className='text-xs lg:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
				<div className='embla__slide'>
					<div className='w-full bg-white rounded-md grid grid-cols-2'>
						<div className='rounded-tl-md rounded-bl-md overflow-hidden'>
							<Image
								src={Image3}
								alt='Testimonial Image'
								width={400}
								height={500}
							/>
						</div>
						<div className='flex flex-col items-center justify-center px-5 gap-4 text-gray-700'>
							<div className='text-center'>
								<h3 className='text-lg lg:text-2xl font-bold'>Jeany Lee</h3>
								<p className='text-sm lg:text-base'>Graphic Designer</p>
							</div>
							<p className='text-xs lg:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardTestimonyCarousel;
