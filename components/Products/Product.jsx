import React from 'react';
import KitchenImage from '../../public/new-arrival-products/kitchen.webp'
import ChairImage from '../../public/new-arrival-products/chair.webp'
import SofaImage from '../../public/new-arrival-products/sofa.webp'
import TableImage from '../../public/new-arrival-products/dining-table.webp'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { GiBeachBag } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
const Product = ({ product }) => {

    const dispatch = useDispatch();
    return (
        <div className='w-90 group'>

            <div className='h-60 overflow-hidden mb-3 relative group'>
                <div className="group-hover:absolute opacity-40 inset-0 bg-slate-400 z-10"></div>
                <div className="group-hover:absolute hidden z-20 group-hover:flex justify-center items-center h-full w-full">
                    <AiOutlineHeart className='w-9 cursor-pointer h-9 mr-2 bg-cyan-500 rounded-full p-1 text-white'/>
                    <BiSearch className='w-9 cursor-pointer h-9 bg-cyan-500 rounded-full p-1 text-white'/>
                </div>
                <Image className='' src={product.image} alt='/' />
            </div>
            <h1 className='text-lg font-bold'>{product.name}</h1>
            <div className='flex space-x-4 my-2 text-cyan-500 font-bold'>
                <span className=''>{product.priceAfterDiscount}</span>
                <span className='text-gray-400 line-through'>{product.originalPrice}</span>
            </div>
            <div className="flex mb-4">
                <AiFillStar className='text-yellow-500' />
                <AiFillStar className='text-yellow-500' />
                <AiFillStar className='text-yellow-500' />
                <AiFillStar className='text-yellow-500' />
                <AiFillStar className='text-gray-500' />
            </div>
            <button onClick={()=> dispatch(addItem({...product, quantity: 1}))} className='w-full py-2 flex items-center justify-center'>Add To Card <GiBeachBag className='ml-3 w-6 h-6' /></button>
        </div>
    );
}

export default Product;
