import React from 'react'

export default function LeaderShipTop() {
  return (
    <div className='position-relative px-5'>
        <h1 className='fw-normal' style={{fontSize: "60px"}}>LEADING REAL ESTATE INTO <br /> THE FUTURE</h1>
        <p  style={{width: "600px", right: "40px", top: "110px"}} className='position-absolute fw-bold'>Behind every successful business is a group of dedicated leaders. Tru Realty Executives and Division Leaders each bring a diversified skill set to our brokerage. As a result, we have assembled a dynamic and well-rounded support team. From strategists to educators, they uphold Tru Realty’s values to better serve our clients, our agents, and our community.</p>
        <div className='row g-5'>
             <div className='col-4'>
                <div className=''>
                   <img src="/assets/Rectangle 272.png" className="img-fluid" alt="" />
                </div>
             </div>
             <div className='col-8'>
               <div className='row py-5 my-4' />
               <div className='row g-5'>
                   <div className='col-6'>
                        <img src="/assets/Rectangle 170.png" className='img-fluid' alt="" />
                   </div>
                   <div className='col-6'>
                       <img src="/assets/Rectangle 170.png" className='img-fluid' alt="" />
                   </div>
               </div>
             </div>
        </div>
    </div>
  )
}
