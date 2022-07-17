import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiBeachBag } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import Link from 'next/link';
import { toggleCart } from '../../store/slices/cartUiSlice';
import { useDispatch, useSelector } from 'react-redux';


const TopHeader = () => {

    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.items.length);
    return (
        <div className='w-full fixed z-30 bg-white shadow-md'>
            <div className='max-w-[1240px] mx-auto flex justify-between  h-20 items-center '>
                <div className='md:text-5xl text-3xl font-bold uppercase'>De<span className='italic text-cyan-500'>mand</span></div>
                <div className='hidden md:block'>
                    <input placeholder=' Search' className='focus:outline-none rounded-l-md px-6 py-[10px] border-y-2 border-l-2 border-gray-200' type="text" />
                    <button className='rounded-l-none'>Search</button>
                </div>
                <div className=' mx-3 flex space-x-2 cursor-pointer'>
                    <div className='relative'>
                        <AiOutlineHeart className='w-8 h-8  hover:text-cyan-800' />
                        <span className='bg-red-600 rounded-full text-white absolute -top-2 -right-2 flex justify-center items-center h-5 w-5'>6</span>
                    </div>
                    <div className='relative'>
                        <GiBeachBag onClick={() => dispatch(toggleCart())} className='w-8 h-8  hover:text-cyan-800' />
                        <span className='bg-red-600 rounded-full text-white absolute -top-2 -right-2 flex justify-center items-center h-5 w-5'>{totalQuantity}</span>
                    </div>
                    <Link href='/profile'>
                        <div>
                            <MdPersonOutline className='w-8 h-8  hover:text-cyan-800' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
