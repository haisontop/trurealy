import React from 'react'

export default function SellGrid() {
  return (
      <div className='position-relative'>
       <div className='container mx-auto mt-5 pt-5' style={{width: "900px"}}>
        <div className='row'>
            <div className='col-6 text-end'>
                <h3 className='fw-bold'>OUR LISTING AGENTS</h3>
                <p className='mt-4 fs-5'>
                Comprehensive selling methods coupled with the extensive knowledge of our real estate agents make listing your home with Tru Realty easy and stress-free. We offer a free home valuation, showings around
                your schedule, assistance with paperwork, expert negotiators, and solutions to help sell your house for more than market value.
                </p>
            </div>
            <div className='col-6'>
            <div>
               <img src="/assets/message icon.png" className='img-fluid' alt="" />
            </div>
         </div>
      </div>
      </div>
      <img src="/assets/gradient-arc.png" className='img-fluid' style={{position: "absolute", right: "0%", bottom: "-50px", zIndex: "-200"}} width="300px" alt="" />
     </div> 
  )
}
