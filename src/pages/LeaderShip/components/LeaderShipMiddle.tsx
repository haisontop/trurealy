import React from 'react'

export default function LeaderShipMiddle() {
    const data = ["", "", "", "", "", "", "", "", ""]
  return (
    <div className='row g-5 px-5 mt-3'>
       {
           data.map(dt => (
               <div className='col-4'>
                   <img src="/assets/Rectangle 170.png" className='img-fluid' alt="" />
               </div>
           ))
       }
    </div> 
  )
}
