import { Twitter, Instagram } from 'lucide-react';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Company
            </h3>
            <ul className='mt-4 space-y-4'>
              <li>
                <a
                  href={ROUTES.about}
                  className='text-base text-gray-300 hover:text-white'
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href='#'
                  className='text-base text-gray-300 hover:text-white'
                >
                  Careers
                </a>
              </li> */}
              <li>
                <a
                  href={ROUTES.contact}
                  className='text-base text-gray-300 hover:text-white'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Product
            </h3>
            <ul className='mt-4 space-y-4'>
              <li>
                <a
                  href={ROUTES.features}
                  className='text-base text-gray-300 hover:text-white'
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href='#'
                  className='text-base text-gray-300 hover:text-white'
                >
                  Pricing
                </a>
              </li> */}
              <li>
                <a
                  href={ROUTES.faq}
                  className='text-base text-gray-300 hover:text-white'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Resources
            </h3>
            <ul className='mt-4 space-y-4'>
              <li>
                <a
                  href={ROUTES.privacy}
                  className='text-base text-gray-300 hover:text-white'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.terms}
                  className='text-base text-gray-300 hover:text-white'
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Follow Us
            </h3>
            <div className='flex space-x-6 mt-4'>
              {/* <a href='#' className='text-gray-400 hover:text-white'>
                <Facebook size={24} />
              </a> */}
              <a
                href='https://twitter.com/prestaycheck'
                className='text-gray-400 hover:text-white'
              >
                <Twitter size={24} />
              </a>
              <a
                href='https://instagram.com/prestaycheck'
                className='text-gray-400 hover:text-white'
              >
                <Instagram size={24} />
              </a>
              {/* <a href='#' className='text-gray-400 hover:text-white'>
                <Linkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-center'>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
          Copyright &copy; 2025 | Adblabla Technologies Incorporated
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
