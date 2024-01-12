import React from 'react';
import Image from 'next/image';
const Banner = ({children}: {children: React.ReactNode}) => {
	return (
		<div className='relative w-full h-96 md:h-[600px]'>
			<Image
				alt='Barbara Manquilef Abogada'
				src='/fondo-edit-asm.jpg'
				width={1600}
				height={800}
				className='hidden sm:block absolute w-full h-[600px] object-cover object-top'
				loading='lazy'
			/>
			<Image
				alt='Barbara Manquilef Abogada'
				src='/fondo-edit-asm.jpg'
				width={900}
				height={500}
				className='sm:hidden w-full h-96 object-cover'
				loading='lazy'
			/>
			<div className='absolute inset-0 flex flex-col items-center justify-center mb-32 md:mb-64'>
				{children}
			</div>
		</div>
	);
};

export default Banner;
