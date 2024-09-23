import { motion } from 'framer-motion';
import { featuresData } from '../config/featuresData';

const Features = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <motion.div
      id='features'
      className='py-20 bg-white'
      initial='hidden'
      animate='visible'
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base text-blue-600 font-semibold tracking-wide uppercase'>
            Features
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need to manage your property
          </p>
        </div>

        <div className='mt-20'>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-3'>
            {featuresData?.map((feature, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600'>
                  <feature.icon className='h-8 w-8' />
                </div>
                <h3 className='mt-6 text-xl font-medium text-gray-900'>
                  {feature.title}
                </h3>
                <p className='mt-2 text-base text-gray-500 text-center'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
