import React from 'react';
import style from './CommercialBottom.module.scss';

export default function CommercialBottom() {
  return (
    <div>
        <div className={style['linear-gradient']} />
        <div className={`text-center bg-primary text-white ${style['commercial-bottom']}`}>
            <h1 className='fw-medium'>Still have a few questions? <br /> Schedule a meeting!</h1>
            <button className='border-0 bg-pink text-white fs-4 px-5 py-1 mt-5'>CONTACT US</button>
        </div>
    </div>
  )
}
