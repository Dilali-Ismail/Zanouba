import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

// Component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
            <CustomCursor />
            <ScrollToTop />
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
