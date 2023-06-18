import React from 'react';
import Header from '../ShearSection/Header/Header';
import Footer from '../ShearSection/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const HomePageLayout = () => {

    const location = useLocation()
    const deleteHeaderFooter = location.pathname.includes('login')
    const deleteHeaderFooter2 = location.pathname.includes('register')
    return (

        <div>
            {deleteHeaderFooter || deleteHeaderFooter2 || <Header></Header>}

            <Outlet></Outlet>

            {deleteHeaderFooter || deleteHeaderFooter2 || <Footer></Footer> }

        </div>
    );
};

export default HomePageLayout;