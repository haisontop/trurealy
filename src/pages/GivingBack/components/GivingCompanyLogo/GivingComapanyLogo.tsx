import React from 'react'
import style from "./GivingCompany.module.scss";

function GivingComapanyLogo() {
  return (
    <div className={`container mx-auto my-5 pt-5 ${style["giving-company"]}`}>
         <p className='text-center text-primary fw-bold'>AMAZING ORGANIZATIONS WE’VE HELPED</p>
         <div className='d-flex justify-content-around mt-5'>
           <div>
             <img src="/assets/logo/FMSC-White-RGB.png" className='my-auto' alt="" />
           </div>
           <div>
             <img src="/assets/logo/ahs_logo.png" className='my-auto' alt="" />
           </div>
           <div>
             <img src="/assets/logo/CFlogo.png" className='my-3' alt="" />
           </div>
           <div>
             <img src="/assets/logo/top-logo-e1563213839709.png" className='my-auto' alt="" />
           </div>
         </div>
    </div>
  )
}

export default GivingComapanyLogo
