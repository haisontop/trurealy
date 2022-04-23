import React from 'react';
import Video from "../../../assets/image/video.png"
import Calender from "../../../assets/image/calender.png"

export default function thankYouPage() {
    return (
        <div className='container-fluid agentbody'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='thankyou'>
                        <h2>Thank you for your inquiry!</h2>
                        <p><b>YOU ARE ONE STEP CLOSER TO A NEW CAREER WITH TRU REALTY.<br />PLEASE CHOOSE A GOOD TIME TO JOIN A TRU Q&A SESSION WITH OUR CAREER ADVISOR.</b></p>
                        <div className='row justify-content-center'>
                            <div className='col-md-8 mb-3'>
                                <div className='text-center mb-5 pb-4'>
                                    <img src={Video} />
                                </div>
                            </div>
                            <div className='col-md-8 mb-3'>
                                <div className='text-center'>
                                    <img src={Calender} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
