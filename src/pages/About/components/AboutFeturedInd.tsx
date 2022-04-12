import React from 'react';
import { Container } from 'react-bootstrap';
import { FeaturedIn } from '../../../components/FeaturedIn';

const AboutFeturedind = () => {
    return (
        <div className='mt-4'>
           <FeaturedIn />
           <div className='row gx-5 container mx-auto my-5'>
               <div className='col-4'>

               </div>
               <div className='col-8 px-5'>
                     <p>
                     Experience matters. At TRU Realty, we approach every real estate transaction with unmatched insight, intelligence, and care. Our real estate agents are setting the standard for customer service in the current market.
                     </p>
                     <p>
                     When you work with a Tru Realty agent, you get a skilled advisor and the confidence that comes from having an outstanding real estate team on your side during the process of buying or selling your home. We measure our success by the satisfaction of our clients and the level of drive our real estate professionals bring to the table every day to be better for you!
                     </p>
               </div>
           </div>
        </div>
    );
}

export default AboutFeturedind;
