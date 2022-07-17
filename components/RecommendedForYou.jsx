import React from 'react';
import KitchenImage from '../public/new-arrival-products/kitchen.webp'
import ChairImage from '../public/new-arrival-products/chair.webp'
import SofaImage from '../public/new-arrival-products/sofa.webp'
import TableImage from '../public/new-arrival-products/dining-table.webp'
import Product from './Products/Product';

const RecommendedForYou = () => {
    const products = [
        {
            id: 1,
            name: 'Kitchen',
            image: KitchenImage,
            priceAfterDiscount: 100.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 2,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: 200.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 3,
            name: 'Sofa',
            image: SofaImage,
            priceAfterDiscount: 200.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 4,
            name: 'Table',
            image: TableImage,
            priceAfterDiscount: 300.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 5,
            name: 'Sofa',
            image: SofaImage,
            priceAfterDiscount: 200.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 6,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: 200.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 7,
            name: 'Chair',
            image: ChairImage,
            priceAfterDiscount: 200.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
        {
            id: 8,
            name: 'Kitchen',
            image: KitchenImage,
            priceAfterDiscount: 100.00,
            category: 'category',
            rating: 5,
            originalPrice: 500
        },
    ]
    return (
        <div className='max-w-[1240px] mx-auto py-8'>
            <h1 className='md:text-4xl text-2xl font-bold'>Recommended For You</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-6 py-8 px-3'>
                {products.map(product =>
                    <Product key={product.id} product={product} />
                )}
            </div>
        </div>
    );
}

export default RecommendedForYou;
