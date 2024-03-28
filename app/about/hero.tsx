import Image from 'next/image';
import HeroImage from '@/assets/Learning-cuate.png';

const Hero = () => {
	return (
		<main
			className={`bg-[url('../assets/white.png')] bg-cover w-full lg:h-full`}
		>
			<div className='h-full w-full pt-20 flex items-center justify-center'>
				<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center px-5 lg:px-0'>
					<div className='flex items-center'>
						<div className='text-center md:text-left mb-5'>
							<h1 className='text-3xl lg:text-[3rem] leading-snug text-[#0F172A] font-bold'>
								Unlock Your Potential with Unlimited Learning Possibilities
							</h1>
							<h3 className='my-10 text-[#666666] text-sm lg:text-lg'>
								Our interactive platform offers diverse courses tailored to
								different skill levels and interests. We provide personalized
								support, mentorship, and feedback to empower students to achieve
								their learning goals and succeed in their endeavors.
							</h3>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<Image src={HeroImage} alt='hero section image' width={500} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
