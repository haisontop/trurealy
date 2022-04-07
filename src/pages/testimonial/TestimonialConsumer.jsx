import React from 'react';
import Layout from '../../components/Layout';
import Testimonialcobanner from '../../components/testimonial/TestimonialCoBanner';

const Testimonialconsumer = () => {
    return (
        <Layout>
            <div className='container mx-auto'>
                <Testimonialcobanner />
            </div>
        </Layout>
    );
}

export default Testimonialconsumer;
