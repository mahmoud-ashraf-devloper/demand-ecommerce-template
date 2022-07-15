import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='max-w-[1240px] min-h-[400px] place-content-center md:mx-auto grid gap-6 mx-3 md:grid-cols-2 lg:grid-cols-6 md:px-3 my-10'>
            <div className='col-span-2 flex flex-col items-center my-4 md:items-start md:my-0'>
                <h1 className='text-5xl font-bold uppercase'>De<span className='italic text-cyan-500'>mand</span></h1>
                <p className='my-10 text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iure neque minus similique expedita quos nostrum animi, voluptatum quisquam perferendis!</p>
                
                <div className='flex space-x-4'>
                    <BsFacebook className='w-6 h-6  hover:text-cyan-800' />
                    <BsInstagram className='w-6 h-6  hover:text-cyan-800' />
                    <BsTwitter className='w-6 h-6  hover:text-cyan-800' />
                    <BsLinkedin className='w-6 h-6  hover:text-cyan-800' />
                </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-4">
                <h2 className='text-md font-bold uppercase'>Solutions</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Marketing</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Analytics</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Commerce</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Insights</h2>
            </div>
            <div className="col-span-1 flex flex-col space-y-4">
                <h2 className='text-md font-bold uppercase'>Support</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Marketing</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Analytics</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Commerce</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Insights</h2>
            </div>
            <div className="col-span-1 flex flex-col space-y-4">
                <h2 className='text-md font-bold uppercase'>Company</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Marketing</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Analytics</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Commerce</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Insights</h2>
            </div>
            <div className="col-span-1 flex flex-col space-y-4">
                <h2 className='text-md font-bold uppercase'>Legal</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Marketing</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Analytics</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Commerce</h2>
                <h2 className='text-sm text-slate-500 font-bold '>Insights</h2>
            </div>
        </div>
    );
}

export default Footer;
