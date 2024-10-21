/* eslint-disable react/prop-types */
import Layout from '../../components/layout/Layout';
import { Lock, Shield } from 'lucide-react';
import { privacyPolicyData } from '../../config/privacyPolicyData';

const PolicySection = ({ title, content, content2, content3 }) => (
  <div className='mb-8'>
    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>{title}</h2>
    <p className='text-gray-600 mb-4'>{content}</p>
    <p className='text-gray-600 mb-4'>{content2}</p>
    <p className='text-gray-600 mb-4'>{content3}</p>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Lock size={40} className='text-blue-600' />
            </div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Privacy Policy
            </h1>
            <p className='text-xl text-gray-600'>
              We respect your privacy and are committed to protecting your
              personal data.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            {privacyPolicyData.map((section, index) => (
              <PolicySection
                key={index}
                title={section.title}
                content={section.content}
                content2={section.content2}
                content3={section.content3}
              />
            ))}

            <div className='mt-12 pt-8 border-t border-gray-200'>
              <div className='flex items-center justify-center'>
                <Shield className='w-6 h-6 text-blue-600 mr-2' />
                <p className='text-sm text-gray-500'>
                  Last updated: October 20, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
