import React from 'react';

const AboutSmarteragent = () => {
    return (
        <div className='py-5'>
            <div>
                <div className='bg-primary'>
                    <div className='row container mx-auto px-5 pt-5 gx-5'>
                       <div className='col-5'>
                          <img src="/assets/tammy.png" className='img-fluid p-3' alt="" />
                        </div>
                        <div className='col-7 text-white d-flex aling-item-center'>
                        <div className='my-auto'>
                            <h2 className='fw-bold'>FIND A SMARTER AGENT</h2>
                           <p className='my-5'>
                               Leading with character and integrity has helped us attract the right agents, build lasting relationships, and establish our reputation for excellence in the industry. All TRU Realty agents receive state-of-the-art training including hands-on experience, meeting with industry professionals, and routine round-table discussions with mentors. When you choose TRU, you choose a better experience and a smarter agent. 
                           </p>
                           <button
                                 className="bg-pink px-5 text-white fs-6 fw-bold le py-2 border-0 mt-3"
                                 style={{ borderRadius: "10px" }}
                             >
                             MATCH ME WITH AN AGENT
                             </button>
                        </div>
                       </div>
                    </div>
                </div>
                 <img src="/assets/about-smarter-agent.png" className='img-fluid' alt="" />
            </div>
        </div>
    );
}

export default AboutSmarteragent;
