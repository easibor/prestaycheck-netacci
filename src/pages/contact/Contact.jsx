/* eslint-disable react/prop-types */
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../../components/layout/Layout';

const ContactMethod = ({ icon, title, content, link, content2 }) => (
  <div className='flex items-start p-4 bg-white rounded-lg shadow-md'>
    {React.createElement(icon, {
      className: 'w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0',
    })}
    <div>
      <h3 className='text-lg font-semibold text-gray-800 mb-1'>{title}</h3>
      {link ? (
        <a href={link} className='text-blue-600 hover:underline'>
          {content}
        </a>
      ) : (
        <>
          <p className='text-gray-600 mb-2'>{content}</p>
          {content2 && <p className='text-gray-600 mb-2'>{content2}</p>}
        </>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600'>
              We&apos;re here to help. Reach out to us through any of the
              following methods.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <ContactMethod
              icon={Mail}
              title='Email'
              content='info@prestaycheck.ca'
              link='mailto:info@prestaycheck.ca'
            />
            <ContactMethod
              icon={Phone}
              title='Phone'
              content='+1 (289)-885-7879'
              link='tel:+12898857879'
            />
            <ContactMethod
              icon={MapPin}
              title='Address'
              content='73 Water Street North, Suite 300 Cambridge, ON N1R 7L6'
              content2='22 June Callwood Way,
              Brantford, Ontario
              N3T 0T7'
            />
            {/* <ContactMethod
              icon={Clock}
              title='Business Hours'
              content='Monday - Friday: 9AM - 5PM'
            /> */}
          </div>

          {/* <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Visit Us
            </h2>
            <div className='w-full h-64 bg-gray-300 rounded-md overflow-hidden mb-6'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='Map'
                className='w-full h-full object-cover'
              />
            </div>
            <p className='text-gray-600 mb-4'>
              We&apos;re located in the heart of downtown. Our office is easily
              accessible by public transportation and has ample parking for
              visitors.
            </p>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
