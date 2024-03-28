import Image from 'next/image';
import HeroImage from '@/assets/Webinar-pana.png';

const Hero = () => {
	return (
		<main
			className={`bg-[url('../assets/white.png')] bg-cover w-full lg:h-full`}
		>
			<div className='h-full w-full pt-20 flex items-center justify-center'>
				<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center px-5 lg:px-0'>
					<div className='lg:w-2/3 flex items-center'>
						<div className='text-center md:text-left mb-5'>
							<p className='text-sm lg:text-lg py-2 lg:py-5'>
								Best online courses avaiable
							</p>
							<h1 className='text-3xl lg:text-[3.5rem] leading-snug text-[#0F172A] font-bold'>
								Best online training classes.
							</h1>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<Image src={HeroImage} alt='hero section image' width={400} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
