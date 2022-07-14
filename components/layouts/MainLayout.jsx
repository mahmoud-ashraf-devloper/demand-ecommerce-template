import React from 'react';
import TopHeader from '../Header/TopHeader';
import SecondHeader from '../Header/SecondHeader';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div >
            <TopHeader />
            <SecondHeader />
            <div className=''>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
