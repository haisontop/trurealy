import React from 'react';
import style from './GivingBackMiddle.module.scss'

function GivingBackMiddle() {
  return (
    <div className='container px-5 mx-auto my-5 py-5'>
          <div className='row mt-5'>
              <div className='col-5 d-flex justify-content-end gx-0'>
                  <div>
                    <img src="/assets/Group 161.png" className='img-fluid' width="100%" alt="" />
                  </div>
              </div>
              <div className='col-7'>
                   <h1 className='text-primary fw-bold mt-3 ps-4' style={{fontSize: "60px"}}>GIVING BACK</h1>
                   <div className={`bg-primary text-white px-5 py-3 mt-1 ${style["giving-m-p"]}`}>
                       <p>Here at TRU, we love giving back and we have fun doing it! Our agents serve their communities by giving their time, talent and donations in ways only local experts know how. Take these photos for example, TRU agents and employees alike partnered with “Feed My Starving Children”, a non-profit dedicated to providing nutritionally complete meals specifically formulated for malnourished children. Go ahead, zoom in and see for yourself how fun giving back can be. </p>
                   </div>
              </div>
          </div>
    </div>
  )
}

export default GivingBackMiddle
