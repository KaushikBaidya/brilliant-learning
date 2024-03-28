import React from 'react';
import ErrorImage from '@/assets/errorpage.gif';
import Image from 'next/image';

type Props = {};

const NotFound = (props: Props) => {
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<Image src={ErrorImage} alt='404 - page not found' />
		</div>
	);
};

export default NotFound;
