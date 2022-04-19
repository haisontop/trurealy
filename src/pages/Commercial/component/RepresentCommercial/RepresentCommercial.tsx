import React from 'react';
import style from './RepresentCommercial.module.scss'

export default function RepresentCommercial() {
  return (
    <div className={`row container mx-auto ${style['represent-commercial']}`}>
         <div className='col-6'>
             <img src="/assets/agent directory/Group 321.png" className='img-fluid' alt="" />
         </div>
         <div className='col-6'>
              <p className='mt-2'>We represent commercial buyers, sellers, tenants, landlords, and multi-family property investors.</p>
              <p className='mt-5'>
                 Whether you’re looking for office, retail,   land, or strictly investment property, our   commercial real estate team is here for you.   With decades of combined experience, Tru   Commercial has a solution for all your   commercial real estate needs.
              </p>
         </div>
    </div>
  )
}
