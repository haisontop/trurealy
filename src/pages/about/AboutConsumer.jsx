import React from 'react';
import { Container } from 'react-bootstrap';
import Aboutbanner from '../../components/about/AboutBanner';
import Aboutcofeturedind from '../../components/about/AboutCoFeturedInd';
import Aboutcoourmission from '../../components/about/AboutCOourMission';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

const Aboutconsumer = () => {
    return (
        <Layout>
            <Container className='px-0 mx-auto'>
                <Aboutbanner />
                <Aboutcoourmission />
                <Aboutcofeturedind />
            </Container>
        </Layout>
    );
}

export default Aboutconsumer;
