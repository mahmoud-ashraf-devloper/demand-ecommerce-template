import Link from 'next/link';
import React from 'react';

const SecondHeader = () => {
    return (
        <header className='bg-cyan-500 min-w-full '>
            <div className='h-20'></div>
            <div className='max-w-[1240px] mx-auto flex justify-between h-12 items-center'>
                <ul className='flex'>
                    <li className='md:px-5 px-1 whitespace-nowrap text-sm md:text-lg  text-white flex h-12 items-center hover:bg-cyan-800'>
                        <Link href='/' alt='/'>Home</Link>
                    </li>
                    <li className='md:px-5 px-1 whitespace-nowrap text-sm md:text-lg  text-white flex h-12 items-center hover:bg-cyan-800'>
                        <Link href='/' alt='/'>Shop</Link>
                    </li>
                    <li className='md:px-5 px-1 whitespace-nowrap text-sm md:text-lg  text-white flex h-12 items-center hover:bg-cyan-800'>
                        <Link href='/shop-2' alt='/'>Shop 2</Link>
                    </li>
                    <li className='md:px-5 px-1 whitespace-nowrap text-sm md:text-lg  text-white flex h-12 items-center hover:bg-cyan-800'>
                        <Link href='/' alt='/'>About</Link>
                    </li>
                    <li className='md:px-5 px-1 whitespace-nowrap text-sm md:text-lg  text-white flex h-12 items-center hover:bg-cyan-800'>
                        <Link href='/' alt='/'>Contact Us</Link>
                    </li>
                </ul>
                <div className='mx-3 whitespace-nowrap'>
                    <button className='md:text-lg text-sm bg-inherit text-white p-0 hover:bg-inherit  '><Link href='/login' alt='/'>Login</Link></button>
                    <span className='md:text-lg text-sm text-white mx-1 '>/</span>
                    <button className='md:text-lg text-sm bg-inherit text-white p-0 hover:bg-inherit  '><Link href='/register' alt='/'>Register</Link></button>
                </div>
            </div>
        </header>
    );
}

export default SecondHeader;
