import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import BlogCard from './BlogCard';
import blogData from '@/data/blogData';
import { AiOutlineLike, AiOutlineMail } from 'react-icons/ai';

type Props = {};

const Blogs = (props: Props) => {
	return (
		<section className='w-full bg-gray-100'>
			<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto h-full pb-20'>
				<div className='flex items-center justify-between py-20'>
					<div>
						<h2 className='text-4xl font-semibold'>Latest articles</h2>
					</div>
					<div className='border-2 border-gray-100 hover:border-b-2 hover:border-b-purple-500 w-fit'>
						<p className='flex items-center gap-3 font-semibold'>
							<span>Expore all articles</span>
							<span>
								<GoArrowRight size={20} />
							</span>
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20'>
					{blogData.map((data) => (
						<BlogCard key={data.id} blog={data} />
					))}
				</div>
				<div className='flex flex-wrap items-center justify-center gap-10 pb-20'>
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
						<span>Keep in touch. </span>
						<span className='border-b-2 border-gray-800 font-semibold'>
							Like us on Facebook
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
