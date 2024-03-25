import React from 'react';

type Props = {};

const Banner = (props: Props) => {
	return (
		<div className="lg:bg-[url('../assets/bgimage.png')] bg-cover w-full lg:h-full bg-center bg-no-repeat">
			<h1 className='text-center text-4xl font-extrabold py-24'>
				Online Learning whearever and whenever
			</h1>
		</div>
	);
};

export default Banner;
