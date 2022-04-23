import React from 'react'
import Video from "../../../assets/image/video.png"
import Layout from '../../../layouts/Layout';

export default function thankyouSecond() {
    return (
        <div className='thankyou-bg'>
        <Layout>
        <div className='agentpage_section'>
            <div className='container-fluid agentbody'>
                <div className='agentfooter'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='thankyou'>
                                <h2>All signed up and ready to go!</h2>
                                <p className='mb-3'><b>WE ARE EXCITED TO HAVE YOU AS A VALUE MEMBER OF OUR TRU FAMILY. <br />OUR CAREER ADVISOR WILL BE IN CONTACT SHORTLY.</b></p>
                                <p>A receipt will be sent to your inbox as well as the Onboarding Welcome Email explaining your next steps. Please keep a look out and check you spam folder in case you don’t see it in your inbox. Thank you!</p>
                                <div className='row'>
                                    <div className='col-md-4 mb-3'>
                                            <img src={Video} />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                            <img src={Video} />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                            <img src={Video} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </div>
    )
}
