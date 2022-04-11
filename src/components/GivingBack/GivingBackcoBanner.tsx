import React from 'react'

function GivingBackcoBanner() {
  return (
    <>
    <div className='position-relative'>
          <img src="/assets/bg/giving-bg.png" className='img-fluid' alt="" />
          <div className='d-flex text-white position-absolute top-0 left-0 giving-banner-1 px-5 py-3'>
              <h1 className='my-auto fw-bold me-1' style={{fontSize: "60px"}}>#TRUCARES</h1>
              <div>
                <img src="/assets/Love.png" width="80%" alt="" />
              </div>
          </div>
          <div className='text-white position-absolute bottom-0 end-0 giving-banner-2 px-5 py-3'>
              <h2 className='my-auto fw-bold'>TRU AGENTS ARE MAKING A DIFFERENCE</h2>
               <p className='mt-3'>Our culture is defined by our values. At the core of those values is generosity. We believe in developing relationships with organizations and causes that positively impact their communities. Giving back is what we do, it’s who we are as an organization. </p>
          </div>
    </div>
    <div className="gradient-divider" />
    </>
  )
}

export default GivingBackcoBanner