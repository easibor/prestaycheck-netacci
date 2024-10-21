import { motion } from 'framer-motion';
import { ROUTES } from '../../utils/routes';
const Hero = () => {
  return (
    <div className='bg-gray-50 flex-grow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
        <div className='text-center'>
          <motion.h1
            className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl relative'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className='block mb-2'>Protect Your Property</span>
            <span className='block text-blue-600 relative'>
              Secure Your Business
              <span className='absolute left-0 top-full w-full text-gray-300 transform -scale-y-100 origin-top opacity-30'>
                Secure Your Business
              </span>
            </span>
          </motion.h1>
          <p className='mt-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-10 md:text-xl md:max-w-3xl'>
            PreStayCheck helps Airbnb hosts and property managers document and
            verify items before and after guest check-ins. Never worry about
            missing items again.
          </p>
          <div className='mt-10 sm:flex sm:justify-center'>
            <div className='rounded-full shadow'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSdOlrW0ii9IGDRnCOXSQ8Kkie9j1spjTBnHiIrCOKp5jxPHSA/viewform'
                target='_blank'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
              >
                Join the waitlist
              </a>
            </div>
            <div className='mt-3 rounded-full shadow sm:mt-0 sm:ml-3'>
              <a
                href={ROUTES.faq}
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
