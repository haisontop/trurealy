import React from 'react';
import style from "./BuyMiddle.module.scss";

export default function BuyMiddle() {
  return (
    <div className={`container px-md-5 mx-auto ${style["buy-middle"]}`}>
       <div className={`text-primary mb-5`}>
           <h3 className='fw-bold'>FIND YOUR DREAM HOME WITH TRU</h3>
           <p className='mt-4 mt-md-5 fw-medium'>
           Discover why so many people choose TRU to help them find their way home. A home purchase is more than a transaction, it’s a life changer. TRU works with you throughout the buying process, from browsing properties to making a carefully negotiated offer. If you’re looking to buy a home, our friendly and knowledgeable real estate agents are here to help you exceed your real estate goals.
           </p>
       </div>
       <div className={`row pt-5 gy-4`}>
         <div className={`col-12 col-lg-6`}>
          <img src="/assets/images/Group 312.png" className='img-fluid' width="100%" alt="" />
         </div>
         <div className={`col-12 col-lg-6 d-flex aling-items-center`}>
             <div className='mt-5 my-md-auto'>
             <h3 className='fw-bold text-primary'>OUR BUYING AGENTS</h3>
              <p className='text-primary mt-4 fw-medium'>
              Whether you need representation as a buyer or you’re looking for an agent who can represent you in both buying and selling, TRU is     dedicated to learning your needs and delivering excellence. If you’re looking for a group of forward-thinking real estate     professionals, you’ve found it with TRU.
              </p>
             </div>
         </div>
       </div>
    </div>
  )
}
