import React from 'react';
import KitchenImage from '../public/new-arrival-products/kitchen.webp'
import ChairImage from '../public/new-arrival-products/chair.webp'
import SofaImage from '../public/new-arrival-products/sofa.webp'
import TableImage from '../public/new-arrival-products/dining-table.webp'
import Product from '../components/Products/Product';

const Shop2 = () => {
    const products = [
        {
            id: 1,
            name: 'Kitchen',
            image: KitchenImage,
            priceAfterDiscount: '$100.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 2,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: '$200.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 3,
            name: 'Sofa',
            image: SofaImage,
            priceAfterDiscount: '$200.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 4,
            name: 'Table',
            image: TableImage,
            priceAfterDiscount: '$300.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 5,
            name: 'Sofa',
            image: SofaImage,
            priceAfterDiscount: '$200.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 6,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: '$200.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 7,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: '$200.00',
            rating: 5,
            originalPrice: '$500'
        },
        {
            id: 8,
            name: 'Kitchen',
            image: KitchenImage,
            priceAfterDiscount: '$100.00',
            rating: 5,
            originalPrice: '$500'
        },
    ]
    return (
        <div className='max-w-[1240px] mx-auto'>
            <div className="grid md:grid-cols-4 my-9 pb-10">
                <div className="hidden col-span-1 mr-2 mb-6 md:flex flex-col ">
                    <div className='shadow-md rounded-b-md px-2 py-3'>
                        <h1 className='font-bold uppercase text-xl mb-4'>Categories</h1>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">Kitchen</label>
                            </div>
                            <span>20</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">Office</label>
                            </div>
                            <span>50</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">Chairs</label>
                            </div>
                            <span>80</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">Sofa</label>
                            </div>
                            <span>40</span>
                        </div>
                    </div>
                   
                    <div className='shadow-md px-2 py-3 rounded-b-md'>
                        <h1 className='font-bold uppercase text-xl mb-4'>Brands</h1>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">Lorem</label>
                            </div>
                            <span>20</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">lorem</label>
                            </div>
                            <span>50</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">lorem</label>
                            </div>
                            <span>80</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-500 px-3 py-1'>
                            <div className='flex space-x-2'>
                                <input className='text-white border-0 accent-cyan-500 w-5 rounded-xl' type="checkbox" name="" id="" />
                                <label className='text-lg' htmlFor="">lorem</label>
                            </div>
                            <span>40</span>
                        </div>
                    </div>

                    <div className='shadow-md rounded-b-md px-2 py-3'>
                        <h1 className='font-bold uppercase text-xl mb-4'>Sizes</h1>
                        
                        <div className="flex justify-evenly mx-2">
                            <div className='flex items-center justify-center w-10 h-9 border border-gray-300 rounded-md my-3 capitalize text-lg'>Lg</div>
                            <div className='bg-cyan-500 text-white flex items-center justify-center w-10 h-9 border border-gray-300 rounded-md my-3 capitalize text-lg'>xl</div>
                            <div className='flex items-center justify-center w-10 h-9 border border-gray-300 rounded-md my-3 capitalize text-lg'>md</div>
                        </div>
                    </div>

                    <div className='shadow-md rounded-b-md px-2 py-3'>
                        <h1 className='font-bold uppercase text-xl mb-4'>colors</h1>
                        <div className="flex justify-evenly mx-2">
                            <div className='w-6 h-6 bg-black rounded-md my-3'></div>
                            <div className='outline outline-cyan-500 outline-offset-2 w-6 h-6 bg-red-500 rounded-md my-3'></div>
                            <div className='w-6 h-6 bg-rose-600 rounded-md my-3'></div>
                        </div>
                        
                    </div>
                   
                </div>
                <div className="col-span-3">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-3">
                        {products.map(product =>
                            <Product key={product.id} product={product} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop2;
