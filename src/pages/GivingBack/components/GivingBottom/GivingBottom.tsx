import React from 'react';
import style from './GivingBottom.module.scss';

function GivingBottom() {
  return (
    <div className={`bg-primary p-5 ${style["giving-bottom"]}`}>
        <h1 className='text-white'>TOGETHER WE CAN MAKE A DIFFERENCE</h1>
        <div className='mt-3 text-center'>
          <button className='px-4 py-2 fs-4 mx-auto fw-normal tru-help-btn text-white'>Partner With TRU</button>
        </div>
    </div>
  )
}

export default GivingBottom
