import React from 'react';
import NewArrivalProduct from './Products/NewArrivalProduct';

const NewArrival = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-4xl font-bold'>Top New Arrival</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 py-8 px-3'>
                <NewArrivalProduct />
            </div>
        </div>
    );
}

export default NewArrival;
