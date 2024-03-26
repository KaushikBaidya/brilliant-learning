import React, { useState } from 'react';
import CourseCard from './CourseCard';
import data from '@/data/data';

type Props = {};

const PopularCourses: React.FC<Props> = () => {
	const [filteredData, setFilteredData] = useState(data);

	const filterCourses = (category: string) => {
		if (category === 'All') {
			setFilteredData(data);
		} else {
			const filteredCourses = data.filter(
				(course) => course.category === category
			);
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
				<div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-6 px-5 lg:px-0 pb-20'>
					{filteredData.map((course, index) => (
						<CourseCard key={index} course={course} />
					))}
				</div>
				<div className='text-center'>
					<p className='text-xl'>
						<span>We help you find the perfect tutor. </span>
						<span className='border-gray-800 border-b-2 font-semibold'>
							Explone all the courses.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default PopularCourses;
