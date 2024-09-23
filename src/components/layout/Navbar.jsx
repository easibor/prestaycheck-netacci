import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/loggo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20 items-center'>
          <div className=''>
            <Logo className='w-[150px]' />
          </div>
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#features'
              className='text-gray-600 hover:text-blue-600 font-medium'
            >
              Features
            </a>
            <a
              href='#how-it-works'
              className='text-gray-600 hover:text-blue-600 font-medium'
            >
              How It Works
            </a>
            <button className='px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
              Join waitlist
            </button>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-600 focus:outline-none'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#features'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium'
            >
              Features
            </a>
            <a
              href='#how-it-works'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium'
            >
              How It Works
            </a>
            <button className='mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
              Join waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
