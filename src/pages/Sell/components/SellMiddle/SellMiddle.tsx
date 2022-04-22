import React from 'react';
import style from './SellMiddle.module.scss';

export default function SellMiddle() {
  return (
    <div className={`container px-md-5 mx-auto ${style["sell-middle"]}`}>
    <div className={`text-primary mb-5`}>
        <p className='mt-5 fw-medium'>
        With TRU, your property benefits from outstanding exposure through traditional and digital advertising, as well as open lines of communication with real estate professionals representing the buyer. In short, TRU helps sell your home the right way!
        </p>
    </div>
    <div className={`row pt-5`}>
      <div className={`col-md-6`}>
       <img src="/assets/Group 259.png" className='img-fluid' width="100%" alt="" />
      </div>
      <div className={`col-md-6 d-flex aling-items-center`}>
          <div className='my-auto'>
          <h3 className='fw-bold text-primary'>OUR LISTING AGENTS</h3>
           <p className='text-primary mt-4 fw-medium'>
           Comprehensive selling methods coupled with the extensive knowledge of our real estate agents make listing your home with Tru Realty easy and stress-free. We offer a free home valuation, showings around your schedule, assistance with paperwork, expert negotiators, and solutions to help sell your house for more than market value.
           </p>
          </div>
      </div>
    </div>
 </div>
  )
}
