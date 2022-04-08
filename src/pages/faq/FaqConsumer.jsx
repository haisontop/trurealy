import React, { useState } from 'react';
import Layout from '../../components/Layout';
import faq from '../../constants/FAQ_MOCK_DATA';
import Faqconsumercard from './FaqConsumerCard';

const Faqconsumer = () => {
    return (
        <div>
            <Layout>
            <div className='position-relative'>
               <div className='container mx-auto px-5'>
                  <div className='text-center fw-light my-5'>
                      <h1 className='fw-normal' style={{fontSize:"50px"}}>HERE FOR HELP? HERE TO ANSWER.</h1>
                      <hr className='mx-auto' style={{height: "3px", width: "86%"}} />
                  </div>
                  <div className='pb-3'>
                      {
                          faq.map(faq => <Faqconsumercard title={faq.tittle} discription={faq.discription} />)
                      }
                  </div>
               </div>
               <div className='fq-co-desing' />
               <div className='fq-co-desing-2' />
            </div>
            </Layout>
        </div>
    );
}

export default Faqconsumer;
