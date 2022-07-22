import React from 'react';

import { MdOutlineEditNote } from 'react-icons/md';

import SideBar from './../../components/SideBar';
import ProfileLayout from './../../components/layouts/ProfileLayout';
const Index = () => {
    return (
        <ProfileLayout>
            <div className="span-1 rounded-md shadow-md md:h-52">
                <div className='flex justify-between px-2 py-2 items-center'>
                    <h1 className='font-bold uppercase'>Personal Information</h1>
                    <MdOutlineEditNote className='w-7 h-7 cursor-pointer text-cyan-500 hover:text-cyan-600' />
                </div>
                <div className="px-3 flex flex-col space-y-2">
                    <h1>Mahmoud Ashraf</h1>
                    <span>Mahmoud.a.developer@gmail.com</span>
                    <p>+201154557909</p>
                </div>
            </div>
            <div className="span-1 rounded-md shadow-md md:h-52">
                <div className='flex justify-between px-2 py-2 items-center'>
                    <h1 className='font-bold uppercase'>Shopping Adress</h1>
                    <MdOutlineEditNote className='w-7 h-7 cursor-pointer text-cyan-500 hover:text-cyan-600' />
                </div>
                <div className="px-3 flex flex-col space-y-2">
                    <h1>Mahmoud Ashraf</h1>
                    <span>Mahmoud.a.developer@gmail.com</span>
                    <p>+201154557909</p>
                </div>
            </div>
            <div className="span-1 rounded-md shadow-md md:h-52">
                <div className='flex justify-between px-2 py-2 items-center'>
                    <h1 className='font-bold uppercase'>Billing</h1>
                    <MdOutlineEditNote className='w-7 h-7 cursor-pointer text-cyan-500 hover:text-cyan-600' />
                </div>
                <div className="px-3 flex flex-col space-y-2">
                    <h1>Mahmoud Ashraf</h1>
                    <span>Mahmoud.a.developer@gmail.com</span>
                    <p>+201154557909</p>
                </div>
            </div>
        </ProfileLayout>
    );
}

export default Index;
