import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { FaMoneyCheckAlt } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="bg-white py-6">
            <div className='max-w-[1240px] md:py-10 mx-auto grid md:grid-cols-3 gap-8 px-2'>
                <div className='hover:shadow-md hover:shadow-cyan-300 border-2 rounded-lg border-cyan-400 flex h-40 items-center  px-4'>
                    <FaShippingFast className='text-cyan-400 w-16 h-16' />
                    <div className='pl-6'>
                        <h1 className='font-bold uppercase'>free <span className='text-cyan-400'>Shipping</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quidem!</p>
                    </div>
                </div>
                <div className='hover:shadow-md hover:shadow-cyan-300 border-2 rounded-lg border-cyan-400 flex h-40 items-center  px-4'>
                    <FaMoneyCheckAlt className='text-cyan-400  w-16 h-16' />
                    <div className='pl-6'>
                        <h1 className='font-bold uppercase'>Money <span className='text-cyan-400'>Returns</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quidem!</p>
                    </div>
                </div>
                <div className='hover:shadow-md hover:shadow-cyan-300 border-2 rounded-lg border-cyan-400 flex h-40 items-center px-4'>
                    <BiSupport className='text-cyan-400 w-16 h-16' />
                    <div className='pl-6'>
                        <h1 className='font-bold uppercase'>24/7 <span className='text-cyan-400'>Support</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quidem!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
