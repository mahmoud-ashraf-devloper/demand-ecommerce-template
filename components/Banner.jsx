import Image from 'next/image';
import React from 'react';
import BannerImage from '../public/banner/banner.jpg'
const Banner = () => {
    return (
        <div className='max-w-[1240px] mx-auto shadow-lg overflow-hidden'>

            <div className="relative " >
                <Image className='' src={BannerImage} alt='/' />
                <div className="absolute inset-0 w-1/2 rounded-tr-[250px] -top-3 md:-left-52 left-0 bg-white "></div>
                <div className='absolute inset-0 w-1/2 uppercase font-bold'>
                    <div className='md:px-4 px-2 py-2 flex flex-col h-full justify-center text-slate-600'>
                        <span className='text-sm'>Online Exclusive</span>
                        <span className='md:text-6xl text-xl font-bold text-cyan-500 py-1 md:my-2'>15% Off</span>
                        <span className='md:pt-3 hidden md:block text-sm'>Accent Chairs,</span>
                        <span className='md:pb-3 hidden md:block text-sm'>Benches & Ottomans</span>
                        <button className='md:rounded-none w-24 md:w-36 py-1 px-2 font-semibold rounded-md'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
