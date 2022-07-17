import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, decreaseQuantity, increaseQuantity } from '../../store/slices/cartSlice';
import Link from 'next/link';
import {BsFillTrashFill} from 'react-icons/bs';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        return dispatch(removeItem({ id: item.id, price: item.price }));
    }
    const increase = () => {
        return dispatch(increaseQuantity({ id: item.id }));
    }
    const decrease = () => {
        if (item.quantity > 1) {
            return dispatch(decreaseQuantity({ id: item.id }));
        }
        return removeFromCart();
    }

    console.log(item);

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className=''>
                            <Link href='/product'><span>{item.name}</span></Link>
                        </h3>
                        <p className="ml-4">{item.priceAfterDiscount}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="flex flex-col items-center justify-between text-sm">
                    <p className="text-gray-500 text-center">Qty {item.quantity}</p>
                    <div className='flex justify-between my-3'>
                        <div className='mr-3 flex space-x-2'>
                            <button onClick={increase} className='px-4 py-1 bg-cyan-500 rounded-l-lg shadow-xl hover:bg-cyan-400 hover:text-white font-bold'>+</button>
                            <button onClick={decrease} className='px-4 py-1 bg-cyan-500 rounded-r-lg shadow-xl hover:bg-cyan-400 hover:text-white font-bold'>-</button>
                        </div>
                        <div className="flex justify-center">
                            <button type="button" className="font-medium text-red-600 hover:text-red-500 p-0 hover:bg-inherit" onClick={removeFromCart}><BsFillTrashFill className='w-7 h-7'/></button>
                        </div>
                    </div>

                </div>
            </div>
        </li>

    );
}

export default CartItem;
