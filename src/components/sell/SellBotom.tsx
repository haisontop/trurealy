import React from 'react'

export default function SellBotom() {
  return (
    <div className='bg-primary py-5 mt-5'>
         <h1 className='text-center text-white' style={{fontSize: "50px"}}>TRU Agents Are Here To Help</h1>
         <div className='mt-4 text-center'>
             <button className='tru-help-btn fs-4 text-white py-1 px-4 me-3'>Find An Agent</button>
             <button className='tru-help-btn fs-4 text-white py-1 px-4'>Find a New Home</button>
         </div>
    </div>
  )
}
