import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import HomeImage from '../../public/main-section.jpg'
import Features from '../Features';

const HomeSection = () => {
    return (
        <div className='relative w-full pb-3'>
            <Image  className='blur-sm' src={HomeImage} alt='/' />
            <div className='bg-cyan-800  absolute inset-0 opacity-40'></div>
            <div className='absolute inset-0 text-white'>
                <div className='max-w-[1240px] mx-auto md:h-3/4 h-full flex items-center'>
                    <div className='px-4'>
                        <h1 className='md:text-8xl text-3xl font-bold md:font-semibold'>
                            <Typewriter
                                options={{
                                    strings: ['Best Collection For Home Decoration <span style="color: #06b6d4"> With Demand</span>'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className=' md:py-10 md:my-4 my-2 md:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores ipsum, eaque dolores assumenda accusantium.</p>
                        <button className='md:w-52 md:py-4 text-xl hover:bg-cyan-400 py-1'>Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeSection;
