import React from 'react';
import KitchenImage from '../public/new-arrival-products/kitchen.webp'
import ChairImage from '../public/new-arrival-products/chair.webp'
import SofaImage from '../public/new-arrival-products/sofa.webp'
import TableImage from '../public/new-arrival-products/dining-table.webp'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { GiBeachBag } from 'react-icons/gi';

const NewArrival = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-4xl font-bold'>Top New Arrival</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-6 py-8 px-3'>
                <div className='w-90'>
                    <div className='h-60 overflow-hidden mb-3'>
                        <Image className='' src={KitchenImage} alt='/' />
                    </div>
                    <h1 className='text-lg font-bold'>Kitchen</h1>
                    <div className='flex space-x-4 my-2 text-cyan-500 font-bold'>
                        <span className=''>$16.00</span>
                        <span className='text-gray-400 line-through'>$20.00</span>
                    </div>
                    <div className="flex mb-4">
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-gray-500' />
                    </div>
                    <button className='w-full py-2 flex items-center justify-center'>Add To Card <GiBeachBag className='ml-3 w-6 h-6' /></button>
                </div>
                <div className='w-90'>
                    <div className='h-60 overflow-hidden mb-3'>
                        <Image className='' src={ChairImage} alt='/' />
                    </div>
                    <h1 className='text-lg font-bold'>title</h1>
                    <div className='flex space-x-4 my-2 text-cyan-500 font-bold'>
                        <span className=''>$16.00</span>
                        <span className='text-gray-400 line-through'>$20.00</span>
                    </div>
                    <div className="flex mb-4">
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-gray-500' />
                    </div>
                    <button className='w-full py-2 flex items-center justify-center'>Add To Card <GiBeachBag className='ml-3 w-6 h-6' /></button>
                </div>
                <div className='w-90'>
                    <div className='h-60 overflow-hidden mb-3'>
                        <Image className='' src={SofaImage} alt='/' />
                    </div>
                    <h1 className='text-lg font-bold'>Sofa</h1>
                    <div className='flex space-x-4 my-2 text-cyan-500 font-bold'>
                        <span className=''>$16.00</span>
                        <span className='text-gray-400 line-through'>$20.00</span>
                    </div>
                    <div className="flex mb-4">
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-gray-500' />
                    </div>
                    <button className='w-full py-2 flex items-center justify-center'>Add To Card <GiBeachBag className='ml-3 w-6 h-6' /></button>
                </div>
                <div className='w-90'>
                    <div className='h-60 overflow-hidden mb-3'>
                        <Image className='' src={TableImage} alt='/' />
                    </div>
                    <h1 className='text-lg font-bold'>Table</h1>
                    <div className='flex space-x-4 my-2 text-cyan-500 font-bold'>
                        <span className=''>$16.00</span>
                        <span className='text-gray-400 line-through'>$20.00</span>
                    </div>
                    <div className="flex mb-4">
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-gray-500' />
                    </div>
                    <button className='w-full py-2 flex items-center justify-center'>Add To Card <GiBeachBag className='ml-3 w-6 h-6' /></button>
                </div>
            </div>
        </div>
    );
}

export default NewArrival;
