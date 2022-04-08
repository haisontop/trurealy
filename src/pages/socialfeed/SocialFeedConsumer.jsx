import React from 'react';
import Socialcotop from '../../components/Socialfeeds/consumer/SocialCoTop';
import Layout from './../../components/Layout'

const Socialfeedconsumer = () => {
    return (
        <div>
            <Layout>
                    <div className='container mx-auto'>
                       <Socialcotop />
                    </div>
            </Layout>
        </div>
    );
}

export default Socialfeedconsumer;
