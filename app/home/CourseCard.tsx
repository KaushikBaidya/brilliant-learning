import React from 'react';
import Image from 'next/image';
import { IoClipboardOutline } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Course = {
	id: number;
	courseTitle: string;
	author: string;
	category: string;
	price: number;
	lessons: number;
	enrolled_students: number;
	image: string;
	ratings: number;
	numberOfReviews: number;
};

type Props = {
	course: Course;
};

const CourseCard: React.FC<Props> = ({ course }) => {
	const renderStars = (rating: number) => {
		const filledStars = Math.floor(rating);
		const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
		const emptyStars = 5 - filledStars - halfStar;

		const stars = [];
		for (let i = 0; i < filledStars; i++) {
			stars.push(<AiFillStar key={i} />);
		}
		if (halfStar === 1) {
			stars.push(<AiFillStar key={filledStars} />);
		}
		for (let i = 0; i < emptyStars; i++) {
			stars.push(<AiOutlineStar key={filledStars + halfStar + i} />);
		}
		return stars;
	};

	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden relative'>
			<div className='relative h-32 lg:h-56'>
				<Image
					src={course.image}
					alt={course.courseTitle}
					fill={true}
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className='bg-purple-700 w-20 h-20 rounded-full hidden lg:flex items-center justify-center absolute right-5 top-44'>
				<p className='text-white text-2xl font-bold number'>${course.price}</p>
			</div>
			<div className='py-5 lg:py-10 px-2 lg:px-6 flex flex-col lg:flex-row lg:items-center gap-2 text-xs lg:text-base'>
				<p className='text-gray-600 uppercase font-semibold'>
					{course.category}
				</p>
				<div className='text-gray-600 hidden lg:block'>
					<BsDot size={25} />
				</div>
				<p className='text-gray-600'>{course.author}</p>
			</div>
			<div className='px-2 lg:px-6'>
				<h3 className='text-sm lg:text-xl font-semibold mb-2'>
					{course.courseTitle}
				</h3>
			</div>
			<div className='p-2 lg:p-6'>
				<div className='flex flex-col lg:flex-row lg:items-center text-yellow-500 text-sm lg:text-xl'>
					<div className='flex'>{renderStars(course.ratings)}</div>
					<span className='font-semibold lg:ml-2 number'>{course.ratings}</span>
					<p className='number text-gray-500 lg:ml-2'>
						({course.numberOfReviews} Reviews )
					</p>
				</div>
			</div>
			<div className='p-2 lg:px-6 lg:py-4 border-t-2'>
				<div className='flex flex-col lg:flex-row justify-between lg:items-center'>
					<p className='text-gray-600 flex items-center gap-1'>
						<span>
							<IoClipboardOutline />
						</span>
						<span className='number'>{course.lessons}</span> lessons
					</p>
					<p className='text-gray-600 flex items-center gap-1'>
						<span>
							<HiOutlineUserGroup />
						</span>
						<span className='number'>{course.enrolled_students}</span> students
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
