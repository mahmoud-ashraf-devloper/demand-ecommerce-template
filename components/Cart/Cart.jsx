import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io'

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/slices/cartUiSlice';
import CartItem from './CartItem';
import Link  from 'next/link';

const Cart = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    console.log(cart);
    return (
        <div className="relative z-[100]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

            <div onClick={()=>dispatch(toggleCart())} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col  bg-slate-50 shadow-xl">
                                <div className="flex items-start justify-between px-6 py-8">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="-m-2 p-4 text-cyan-400 hover:bg-transparent hover:text-cyan-500">
                                            <span className="sr-only">Close panel</span>
                                            <IoIosCloseCircle onClick={()=>dispatch(toggleCart())} className="h-8 w-8 " />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                
                                                {cart.items.length === 0 ? <div className="text-center bg-gray-200">Add To Cart To Proceed To Checkout</div> : null}
                                                {cart.items.map(item => <CartItem key={item.id} item={item} />)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${cart.totalPrice}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 mt-6">
                                        <Link href="/" >Checkout</Link>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or <button onClick={()=> dispatch(toggleCart())} type="button" className="font-medium hover:bg-transparent text-cyan-600 hover:text-cyan-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;
