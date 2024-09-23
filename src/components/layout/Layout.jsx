/* eslint-disable react/prop-types */

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans flex flex-col'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
