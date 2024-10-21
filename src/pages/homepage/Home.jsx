import Hero from './Hero';
import Features from './Features';
import Works from './Works';
import Banner from './Banner';
import Layout from './../../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Works />
      <Banner />
    </Layout>
  );
};

export default Home;
