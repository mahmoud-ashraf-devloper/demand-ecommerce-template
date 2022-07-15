import Image from 'next/image';
import React from 'react';
import BannerImage from '../public/banner/banner.jpg'
const Banner = () => {
    return (
        <div className='max-w-[1240px] mx-auto shadow-lg overflow-hidden'>

            <div className="relative " >
                <Image className='' src={BannerImage} alt='/' />
                <div className="absolute inset-0 w-1/2 rounded-tr-[250px] -top-3 md:-left-52 -left-10 bg-white "></div>
                <div className='absolute inset-0 w-1/2 uppercase font-bold'>
                    <div className='px-4 flex flex-col h-full justify-center'>
                        <span>Online Exclusive</span>
                        <span className='text-6xl font-bold text-cyan-500 my-2'>15% Off</span>
                        <span className='pt-3'>Accent Chairs,</span>
                        <span className='pb-3'>Benches & Ottomans</span>
                        <button className='rounded-none w-36'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Banner;
