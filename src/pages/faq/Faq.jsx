/* eslint-disable react/prop-types */

import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqData } from '../../config/faqData';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg'>
      <button
        className='flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-semibold text-gray-800'>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='py-4 px-6 bg-blue-50 text-gray-600'>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h1>
            <p className='text-xl text-gray-600'>
              Find answers to common questions about our services.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row items-start justify-between'>
            <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className='w-full lg:w-5/12 lg:sticky lg:top-8'>
              <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
                <div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <MessageCircle size={48} className='text-blue-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Still have questions?
                </h2>
                <p className='text-gray-600 mb-6'>
                  If you can&apos;t find the answer you&apos;re looking for,
                  please don&apos;t hesitate to reach out to our support team.
                </p>
                <button
                  onClick={() => navigate(ROUTES.contact)}
                  className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300'
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
