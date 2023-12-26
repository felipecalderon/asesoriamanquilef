import React from 'react';
import Image from 'next/image';
import Titulo from "@/components/titulo";
import { Ephesis } from 'next/font/google';
const fuente = Ephesis({ subsets: ["latin"], weight: '400' })
const Banner = () => {
	return (
		<div className='relative w-full h-96 md:h-[600px]'>
			<Image
				alt='Barbara Manquilef Abogada'
				src='/fondo-1.jpg'
				width={1600}
				height={800}
				className='hidden sm:block absolute w-full h-auto'
				loading='lazy'
			/>
			<Image
				alt='Barbara Manquilef Abogada'
				src='/fondo-1.jpg'
				width={900}
				height={500}
				className='sm:hidden w-full h-96 object-cover'
				loading='lazy'
			/>
			<div className='absolute inset-0 flex flex-col items-center justify-center mb-52 md:mb-64'>
                <Titulo message="Asesoría Jurídica"/>
                <Titulo fuente={fuente} message="Manquilef"/>
			</div>
		</div>
	);
};

export default Banner;
