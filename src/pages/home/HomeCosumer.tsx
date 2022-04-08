import React from 'react';
import Layout from '../../components/Layout';
import ConsumerBanner from '../../components/home/ConsumerBanner';
import SmarterAgent from '../../components/home/SmarterAgent';
import Trastory from '../../components/home/trastory/Trastory';
import ConsumerMiddleBanner from '../../components/home/ConsumerMiddleBanner';
import ParfectAgent from '../../components/home/ParfectAgent';
import ConsumerBottom from '../../components/home/ConsumerBottom'
import { Container } from 'react-bootstrap';

const Homecosumer = () => {
    return (
        <Layout>
        <ConsumerBanner />
        <Container className="px-0">
          <SmarterAgent />
          <Trastory />
          <ConsumerMiddleBanner />
          <ParfectAgent />
          <ConsumerBottom />
        </Container>
      </Layout>
    );
}

export default Homecosumer;
