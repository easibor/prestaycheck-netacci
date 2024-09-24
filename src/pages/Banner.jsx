import { motion } from 'framer-motion';

const Banner = () => {
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
      className='bg-blue-600'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-3xl font-extrabold text-white sm:text-4xl relative'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className='block'>Ready to secure your property?</span>
          <span className='block'>Start using PreStayCheck today.</span>
        </motion.h2>
        <p className='mt-4 text-lg leading-6 text-blue-100'>
          Join thousands of property hosts who trust PreStayCheck to protect
          their investments.
        </p>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSdOlrW0ii9IGDRnCOXSQ8Kkie9j1spjTBnHiIrCOKp5jxPHSA/viewform'
          target='_blank'
          className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 sm:w-auto'
        >
          Join the waitlist
        </a>
      </div>
    </motion.div>
  );
};

export default Banner;
