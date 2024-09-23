import Hero from './pages/Hero';
import Features from './pages/Features';
import Works from './pages/Works';
import Banner from './pages/Banner';
import Layout from './components/layout/Layout';

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Works />
      <Banner />
    </Layout>
  );
};

export default LandingPage;
