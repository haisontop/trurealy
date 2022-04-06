import React from 'react';
import Banner from '../../components/home/Banner';
import FeaturedIn  from '../../components/home/FeaturedIn';
import {JoinUs} from '../../components/home/JoinUs/JoinUs'
import Layout from '../../components/Layout';

const Home = () => {
    return (
        <Layout>
           <div>
          <Banner />
          <div className="mt-4">
            <FeaturedIn />
          </div>
          <JoinUs />
        </div>
        </Layout>
    );
}

export default Home;
