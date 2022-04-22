import React from 'react';
import style from './BuyBody.module.scss'

export default function BuyBody() {
  return (
    <div className='position-relative'>
      <div className={`mx-auto ${style['buy-body']}`} >
          <h3 className='text-primary text-center'>FIND YOUR DREAM HOME WITH TRU</h3>
           <div className='mt-5 text-center'>
               <img src="/assets/US map.png" className="img-fluid mx-5" alt="" />
           </div>
           <div className='text-center mt-5 pt-5'>
             <form className='mx-auto'>
                 <input type="text" className='px-2 fs-5 me-2' placeholder='Seach by Address, City, Zip Code, etc.'/>
                 <button className='tru-help-btn fs-5 px-3 py-1 text-white'>SEARCH</button>
             </form>
           </div>
      </div>
    </div>
  )
}
