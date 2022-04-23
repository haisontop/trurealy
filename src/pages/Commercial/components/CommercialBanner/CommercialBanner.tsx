import React from 'react';
import style from './CommercialBanner.module.scss'

export default function CommercialBanner() {
  return (
  <>
    <div className={`text-center bg-semi-primary ${style["Commercial-Banner"]}`}>
     <h1 className='text-white fw-normal'>COMMERCIAL</h1>
    </div>
    <div className={`${style["linear-gradient"]}`} />
  </>
  )
}
