
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
