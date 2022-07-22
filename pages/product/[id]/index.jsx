import { useRouter } from 'next/router';

import React, { useState } from 'react';
import KitchenImage from '../../../public/new-arrival-products/kitchen.webp'
import ChairImage from '../../../public/new-arrival-products/chair.webp'
import TableImage from '../../../public/new-arrival-products/dining-table.webp'
import { AiFillStar } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import Image from 'next/image';
import RecommendedForYou from './../../../components/RecommendedForYou';
const Index = () => {
    const router = useRouter()

    const { id } = router.query

    const product = {
        id: 1,
        name: 'Kitchen',
        images: [
            KitchenImage,
            TableImage,
            ChairImage,
        ],
        priceAfterDiscount: 100.00,
        rating: 5,
        originalPrice: 500
    }

    const [imageInDisplay, setImageInDisplay] = useState(product.images[0])

    return (
        <div className="max-w-[1240px] mx-auto px-3">
            <div className='grid md:grid-cols-6 min-h-fit py-6'>

                <div className='col-span-2 flex flex-col '>
                    <h1 className='font-semibold text-3xl '>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                    <span className='text-sm'>Category: <span>apple</span></span>

                    <div className="flex h-20 items-center ml-0">
                        <span className="font-bold uppercase pr-3">reviews: </span>
                        <AiFillStar className='w-6 h-6 text-yellow-300' />
                        <AiFillStar className='w-6 h-6 text-yellow-300' />
                        <AiFillStar className='w-6 h-6 text-yellow-300' />
                        <AiFillStar className='w-6 h-6 text-yellow-300' />
                        <AiFillStar className='w-6 h-6 text-gray-500' />
                    </div>

                    <div className="flex text-3xl my-3 justify-between">
                        <div className='flex space-x-2'>
                            <span className='font-bold'>$720</span>
                            <span className='line-through text-gray-400 italic'>$1200</span>
                        </div>
                        <span className='p-2 bg-yellow-300 rounded-lg text-lg'>24%</span>
                    </div>

                    <div className='flex flex-col my-6'>
                    <button className='flex items-center justify-center my-4'>Add To Cart <BsFillCartPlusFill className='ml-2 w-6 h-6' /></button>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed facere quas laboriosam suscipit ratione possimus perferendis, quaerat aliquam officiis porro.</p>
                    </div>
                </div>
                
                <div className='col-span-4 flex justify-center'>
                    <div className="md:w-2/3 md:h-[400px]  shadow-md relative" >
                        <Image className='rounded-lg h-[400px] absolute inset-0' src={imageInDisplay} alt='/' />
                        <div className='flex flex-col space-y-3 absolute inset-0  w-16 h-full right-0 bg-cyan-100 px-2 py-4 rounded-b-md opacity-60 hover:opacity-70 hover:transition hover:duration-300 hover:ease-in-out'>
                            {product.images.map((image, index) => {
                                return (
                                    <div onClick={() => setImageInDisplay(image)} key={index} className='hover:scale-110 rounded-full overflow-hidden hover:transition hover:duration-500 hover:ease-in hover:outline hover:-outline-offset-2 hover:outline-cyan-300'>
                                        <Image src={image} alt='/' />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mt-16'>
            <RecommendedForYou />
            </div>
        </div>
    );
}

export default Index;
