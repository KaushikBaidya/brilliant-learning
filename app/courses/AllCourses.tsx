import React, { useState } from 'react';
import CourseCard from './CourseCard';
import courseData from '@/data/courseData';

type Props = {};

const AllCourses: React.FC<Props> = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);
	const [filteredData, setFilteredData] = useState(
		courseData.slice(0, itemsPerPage)
	);

	const totalPages = Math.ceil(courseData.length / itemsPerPage);

	const handleClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		const startIndex = (pageNumber - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		setFilteredData(courseData.slice(startIndex, endIndex));
	};

	const filterCourses = (category: string) => {
		setCurrentPage(1);
		if (category === 'All') {
			setFilteredData(courseData.slice(0, itemsPerPage));
		} else {
			const filteredCourses = courseData
				.filter((course) => course.category === category)
				.slice(0, itemsPerPage);
			setFilteredData(filteredCourses);
		}
	};

	return (
		<section className='bg-purple-50'>
			<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto h-full pb-20'>
				<div className='flex flex-col lg:flex-row items-center gap-y-4 justify-between py-10 lg:py-20'>
					<div>
						<h2 className='text-2xl lg:text-4xl font-semibold'>
							Popular Courses
						</h2>
					</div>
					<div className='text-xs lg:text-base space-x-3 lg:space-x-10'>
						<button onClick={() => filterCourses('All')}>All</button>
						<button onClick={() => filterCourses('Development')}>
							Development
						</button>
						<button onClick={() => filterCourses('Business')}>Business</button>
						<button onClick={() => filterCourses('Design')}>Design</button>
						<button onClick={() => filterCourses('Marketing')}>
							Marketing
						</button>
					</div>
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-6 px-5 lg:px-0 pb-10 lg:pb-20'>
					{filteredData.map((course, index) => (
						<CourseCard key={index} course={course} />
					))}
				</div>
				<div className='flex justify-center space-x-4'>
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index}
							onClick={() => handleClick(index + 1)}
							className={`px-3 py-1 rounded ${
								currentPage === index + 1
									? 'bg-blue-500 text-white'
									: 'bg-gray-300 text-black'
							}`}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default AllCourses;
