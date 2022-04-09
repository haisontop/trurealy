import React from 'react'
import {FaFacebookF} from 'react-icons/fa'

function SocialMiddle() {
  return (
      <div className='container mx-auto px-5 mt-5 pt-5'>
        <h3 className='fw-normal'>TWITTER & FACEBOOK</h3>
        <div className='row g-0 bg-primary text-white p-3' style={{borderRadius: "20px"}}>
           <div className='col-4 p-3' style={{borderRight: "2px solid white"}}>
             <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
              <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
              </div>
           </div>
           <div  className='col-4 p-3' style={{borderRight: "2px solid white"}}>
           <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
             <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
              </div>
           </div>
           <div  className='col-4 p-3'>
           <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
              <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
              </div>
           </div>
           <div className='col-4 p-3' style={{borderRight: "2px solid white", borderTop: "2px solid white"}}>
             <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
              <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
              </div>
           </div>
           <div className='col-4 p-3' style={{borderRight: "2px solid white", borderTop: "2px solid white"}}>
             <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
              <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
              </div>
           </div>
           <div className='col-4 p-3' style={{borderTop: "2px solid white"}}>
             <p>God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates...</p>
               <div className='d-flex justify-content-between mt-5 pe-3' >
                 <button className='bg-primary border-0 text-white fs-5 fw-normal'>READ MORE</button>
                  <FaFacebookF size="25" className='p-1 border border-white rounded rounded-circle' />
               </div>
           </div>
        </div>
      </div>
  )
}

export default SocialMiddle;