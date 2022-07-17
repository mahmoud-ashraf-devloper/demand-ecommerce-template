import React from 'react';
import TopHeader from '../Header/TopHeader';
import SecondHeader from '../Header/SecondHeader';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
    const showCart = useSelector(state => state.cartUi.showCart);
    return (
        <div >
            <TopHeader />
            <SecondHeader />
            { showCart ? <Cart /> : null }
            <div className=''>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
