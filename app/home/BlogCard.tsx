import React from 'react';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';

type Blog = {
	id: number;
	blogTitle: string;
	author: string;
	likes: number;
	description: string;
	image: string;
};

type Props = {
	blog: Blog;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
	// Function to truncate the description to 150 characters
	const truncateDescription = (text: string, maxLength: number) => {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + '...';
		} else {
			return text;
		}
	};

	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
			<div className='flex items-center justify-between p-5'>
				<p className='text-gray-700'>{blog.author}</p>
				<div className='flex items-center'>
					<BsHeartFill className='h-5 w-5 fill-current text-red-500 mr-1' />
					<span className='text-gray-600 number  font-semibold'>
						{blog.likes}
					</span>
				</div>
			</div>
			<div className='relative h-56'>
				<Image
					src={blog.image}
					alt={blog.blogTitle}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='p-6'>
				<h3 className='text-gray-800 font-semibold text-xl mb-2'>
					{blog.blogTitle}
				</h3>
				<p className='text-gray-600 mb-4'>
					{truncateDescription(blog.description, 150)}
				</p>
				{/* <div className='flex items-center justify-between'>
					<p className='text-gray-700'>By {blog.author}</p>
					<div className='flex items-center'>
						<BsHeartFill className='h-5 w-5 fill-current text-gray-500 mr-1' />
						<span className='text-gray-600'>{blog.likes} Likes</span>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default BlogCard;
