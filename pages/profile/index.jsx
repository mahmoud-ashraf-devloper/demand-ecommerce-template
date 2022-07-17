import React from 'react';
import Image from 'next/image';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { MdOutlineManageAccounts } from 'react-icons/md';

import AvatarImage from '../../public/avatar/avatar.webp';
import Link from 'next/link';
const Index = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-screen'>
            <div className='h-20'>

            </div>
            <div className='grid grid-cols-4 py-6'>
                <div className="col-span-1 flex flex-col fixed">
                    <div className="flex items-center space-x-3 border-b-2 border-gray-200">
                        <div className='w-16 h-16 rounded-full'>
                            <Image src={AvatarImage} alt='/' />
                        </div>
                        <div className='flex flex-col'>
                            <span >Hello,</span>
                            <h1 className='font-bold  text-lg'>Mahmoud Ashraf</h1>
                        </div>
                    </div>
                    <div className='my-3 flex flex-col space-y-2 pb-3 border-b-2 border-gray-200'>
                        <h1 className=' text-lg font-bold cursor-pointer pl-2 flex items-center'><MdOutlineManageAccounts className='w-6 h-6 mr-2 text-cyan-500' /> Manage Account</h1>
                        <div className='pl-4 text-lg flex flex-col'>
                            <Link href='/'>
                                <span className='cursor-pointer'>Profile Information</span>
                            </Link>
                            <Link href='/'>
                                <span className='cursor-pointer'>Manage Address</span>
                            </Link>
                            <Link href='/'>
                                <span className='cursor-pointer'>Change Password</span>
                            </Link>
                        </div>
                    </div>
                    <div className='my-3 flex flex-col space-y-2 pb-3 border-b-2 border-gray-200'>
                        <h1 className=' text-lg font-bold cursor-pointer pl-2 flex items-center'><HiOutlineShoppingBag className='w-6 h-6 mr-2 text-cyan-500' /> Order History</h1>
                        <div className='pl-4 text-lg flex flex-col'>
                            <Link href='/'>
                                <span className='cursor-pointer'>My Returns</span>
                            </Link>
                            <Link href='/'>
                                <span className='cursor-pointer'>My Reviews</span>
                            </Link>
                            <Link href='/'>
                                <span className='cursor-pointer'>My Collection</span>
                            </Link>
                        </div>
                    </div>

                    <div className='my-3 flex flex-col space-y-2 pb-3 border-b-2 border-gray-200'>
                        <h1 className=' text-lg font-bold cursor-pointer pl-2 flex items-center'> <MdOutlinePayment className='w-6 h-6 mr-2 text-cyan-500' /> Payment Methods</h1>
                        <div className='pl-4 text-lg flex flex-col'>
                            <Link href='/'>
                                <span className='cursor-pointer'>Voucher</span>
                            </Link>

                        </div>
                    </div>
                    <div className='my-3 flex flex-col space-y-2 pb-3 border-b-2 border-gray-200'>
                        <h1 className=' text-lg font-bold cursor-pointer pl-2 flex items-center'><AiOutlineHeart className='w-6 h-6 mr-2 text-cyan-500' /> My Wishlist</h1>
                    </div>
                    <div className='my-3 flex flex-col space-y-2 pb-3 border-b-2 border-gray-200'>
                        <Link href='/'>
                            <span className='flex text-lg font-bold cursor-pointer pl-2 items-center'><BiLogOut className='w-6 text-cyan-500 h-6 mr-2' /> Logout</span>
                        </Link>
                    </div>

                </div>
                <div className="col-span-3">

                </div>
            </div>
        </div>
    );
}

export default Index;
