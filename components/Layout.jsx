import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path as necessary

const Layout = () => {
  const location = useLocation();

  // Define the routes that should not display the Navbar
  const noNavbarRoutes = ['/login', '/signup'];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
