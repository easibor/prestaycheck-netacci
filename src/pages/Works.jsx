import { motion } from 'framer-motion';
import { stepsData } from '../config/stepsData';

const Works = () => {
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
      id='how-it-works'
      className='py-20 bg-gray-50'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-12'>
          How PreStayCheck Works
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {stepsData?.map((step, index) => (
            <div key={index} className='bg-white p-8 rounded-lg shadow-sm'>
              <div className='text-2xl font-bold text-blue-600 mb-4'>
                {step.step}
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                {step.title}
              </h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
