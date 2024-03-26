import Image from 'next/image';
import Success from '@/assets/Success.gif';
import { LuLightbulb } from 'react-icons/lu';
import { GiNotebook } from 'react-icons/gi';

const PremiumExperience: React.FC = () => {
	return (
		<main className='w-full mt-20'>
			<div className='h-full w-full pb-5 flex items-center justify-center'>
				<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center'>
					<div className='flex items-center justify-center'>
						<Image src={Success} alt='hero section image' width={500} />
					</div>
					<div className='flex items-center px-5 lg:px-0'>
						<div className='md:text-left'>
							<div className='flex lg:items-center gap-5'>
								<div className='w-6 lg:w-10 h-6 lg:h-10 bg-violet-500 text-white flex items-center justify-center rounded-full p-1'>
									<LuLightbulb size={25} />
								</div>
								<h3 className='text-sm lg:text-xl font-medium'>
									Premium learning experience
								</h3>
							</div>
							<h1 className='text-center lg:text-start text-3xl lg:text-6xl font-bold text-gray-800 pt-5'>
								Providing amazing learning courses.
							</h1>
							<div className='pt-5'>
								<div className='lg:w-4/5 my-5 p-6 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg relative'>
									<div className='w-3/4'>
										<h2 className='text-xl font-semibold mb-4'>
											Our interactive platform offers diverse courses
										</h2>
										<p>
											We provide personalized support, mentorship, and feedback
											to empower students to achieve their learning goals and
											succeed in their endeavors.
										</p>
									</div>
									<div className='text-gray-300 absolute top-12 right-8'>
										<GiNotebook size={100} />
									</div>
								</div>

								<div className='px-6 py-4'>
									<h2 className='text-xl font-semibold mb-4'>
										Connect with our effective methods
									</h2>
								</div>
								<div className='px-6'>
									<h2 className='text-xl font-semibold mb-4'>
										Increase your learning skills
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PremiumExperience;
