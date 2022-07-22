import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import HomeImage from '../../public/main-section.jpg'
import Features from '../Features';

const HomeSection = () => {
    return (
        <div className='relative w-full '>
            <Image  className='blur-sm' src={HomeImage} alt='/' />
            <div className='bg-cyan-800  absolute inset-0 opacity-40'></div>
            <div className='absolute inset-0 text-white'>
                <div className='max-w-[1240px] mx-auto md:h-3/4 h-full flex items-center'>
                    <div className='px-4'>
                        <h1 className='lg:text-8xl md:text-6xl text-2xl font-bold md:font-semibold'>
                            <Typewriter
                                options={{
                                    strings: ['Best Collection For Home Decoration <span style="color: #06b6d4"> With Demand</span>'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className=' lg:py-10 md:py-6 my-2 md:text-xl text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores ipsum, eaque dolores assumenda accusantium.</p>
                        <button className='lg:w-52 lg:py-4 md:py-2 uppercase text-xl bg-cyan-500 rounded-md font-bold hover:bg-cyan-400 py-[2px]'>Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeSection;
