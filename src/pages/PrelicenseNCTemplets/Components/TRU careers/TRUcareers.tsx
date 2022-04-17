import React from 'react'
import style from './TruCareers.module.scss';

export default function TRUcareers() {
  return (
    <div className='container px-0 mx-auto position-relative'>
     <div className={style['tru-carees']}>
         <div className={style['tru-careers-box']}>
          <h1>TRU PATHWAYS. TRU CAREERS.</h1>
         </div>
     </div>
     <div className={style["tru-careers-carousel"]}>
         <div className='mx-auto' style={{width: "70%"}}>
            <img src="/assets/become-a-real-estate-agent2.png" className='img-fluid' alt="" />
         </div>
         <div className='text-center mt-5'>
             <img src="/assets/button.png" width="170px" alt="" />
         </div>
         <div className='text-center mt-5'>
             <button className='text-white px-5 fs-4 py-1 border-0' style={{backgroundColor: "#4441E7", borderRadius: "10px"}}>I'M READY!</button>
         </div>
     </div>
    </div>
  )
}
