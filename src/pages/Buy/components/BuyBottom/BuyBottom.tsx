import React from 'react';
import style from './BuyBottom.module.scss';

export default function BuyBottom() {
  return (
    <div className={`bg-primary text-white p-5 mt-5 text-center ${style['buy-bottom']}`}>
      <h1 className='fw-normal'>Find Us Anywhere, And We Will <br /> Find Your TRU Calling</h1>
      <div className='mt-3'>
          <button className='tru-help-btn px-4 py-2 fs-4 text-white me-3'>Join the Tru Team</button>
          <button className='tru-help-btn px-4 py-2 fs-4 text-white'>Become an Agent</button>
      </div>
    </div>
  )
}
