import React from 'react';
import SofaImage from '../public/sofa.webp'
import SofraImage from '../public/sofra.webp'
import BedImage from '../public/beds.jpg'
import OfficeImage from '../public/office.webp'
import LivingImage from '../public/living.webp'
import OutdImage from '../public/out.jpg'
import Image from 'next/image';
const Categories = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-4xl font-bold'>Categories</h1>
            <div className='grid md:grid-cols-3 gap-9 py-8 px-3'>
                <div className='relative group'>
                    <Image className='bg-contain ' src={SofaImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Sofa</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <Image className='bg-contain ' src={BedImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Beds</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <Image className='bg-contain ' src={LivingImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Living</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <Image className='bg-contain ' src={OfficeImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Office</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <Image className='bg-contain ' src={OutdImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Out</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <Image className='bg-contain ' src={SofraImage} alt='/' />
                    <div className='absolute inset-0 '>
                        <div className='hidden group-hover:flex group-hover:flex-col group-hover:h-full justify-center items-center'>
                            <div className='absolute inset-0 bg-cyan-400 opacity-30'></div>
                            <div className="relative">
                                <h2 className='text-5xl py-3 uppercase font-bold text-center text-white'>Sofra</h2>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Categories;
