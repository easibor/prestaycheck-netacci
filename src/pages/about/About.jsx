/* eslint-disable react/prop-types */

import Layout from '../../components/layout/Layout';

import { Users, Target, Award } from 'lucide-react';

// const TeamMember = ({ name, role, image }) => (
//   <div className='flex flex-col items-center'>
//     <img
//       src={image}
//       alt={name}
//       className='w-32 h-32 rounded-full mb-4 object-cover'
//     />
//     <h3 className='text-xl font-semibold text-gray-800'>{name}</h3>
//     <p className='text-gray-600'>{role}</p>
//   </div>
// );

const About = () => {
  // const teamMembers = [
  //   {
  //     name: 'Jane Doe',
  //     role: 'CEO & Founder',
  //     image: '/api/placeholder/150/150',
  //   },
  //   { name: 'John Smith', role: 'CTO', image: '/api/placeholder/150/150' },
  //   {
  //     name: 'Emily Brown',
  //     role: 'Lead Designer',
  //     image: '/api/placeholder/150/150',
  //   },
  // ];

  return (
    <Layout>
      <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Us</h1>
            <p className='text-xl text-gray-600'>
              Discover our story, mission, and the team behind our success.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
              Our Story
            </h2>
            <p className='text-gray-600 mb-4'>
              Founded in 2020, our company was born out of a passion for
              innovation and a desire to make a difference. We&apos;ve grown
              from a small startup to a dynamic team of professionals, all
              united by our commitment to excellence.
            </p>
            <p className='text-gray-600'>
              Today, we continue to push boundaries and explore new horizons,
              always with our clients&apos; needs at the heart of everything we
              do.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
              <Users className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                Our Team
              </h3>
              <p className='text-gray-600'>
                A diverse group of passionate individuals working together to
                bring ideas to life.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
              <Target className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                Our Mission
              </h3>
              <p className='text-gray-600'>
                To empower businesses with innovative solutions that drive
                growth and success.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
              <Award className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                Our Values
              </h3>
              <p className='text-gray-600'>
                Integrity, innovation, and customer-centricity guide everything
                we do.
              </p>
            </div>
          </div>

          {/* <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
              Meet Our Team
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
