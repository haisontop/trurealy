import React from 'react';
import style from './PrelicenseBottom.module.scss'

export default function PrelicenseBottom() {
    const data = [
        {
            title : "EXPERIENCE",
            discription :"Experience the freedom, flexibility, independence, and income TRU can offer you. You will have full autonomy to pave your own career in Real Estate.",
        },
        {
            title: "FIND",
            discription: "Find a brokerage made up of people just like you who value collaboration over competition, and share your same dreams, goals and values."
        },
        {
            title: "LIVE",
            discription: "Live with purpose and fulfillment as as you positively impact your community and the lives of those around you. Do what you love, love what you do."
        }
    ]
  return (
      <>
    <div className={`container px-0 mx-auto ${style["Pre-btm-banner"]}`}>
        <div className='text-white' style={{
            marginLeft: "129px"
        }}>
           <h2 style={{
               fontSize: "75px",
               fontWeight: "500"
           }}>
               "THE BEST DECISION I HAVE <br /> MADE FOR MY CAREER"</h2>
               <p
               className='fw-medium'
               style={{
                   fontSize: "35px"
               }}
               >-Samantha Sloan, TRU Agent</p>
        </div>
        <div>
           <div className={`text-white ${style['pr-btm-box']}`}>
               <div className={style['pr-btm-box-child']}>
                    {
                        data.map(dt => (
                            <div className='my-5'>
                              <h3 style={{fontSize: "35px"}}>{dt.title}</h3>
                              <p style={{fontSize: "25px"}}>{dt.discription}</p>
                            </div>
                        ))
                    }
               </div>
           </div>
        </div>
    </div>
    <div style={{background: "linear-gradient(270deg, #3b46f2 0%, #fd084f 100%) 0% 0% no-repeat padding-box" , width: "100%", height: "20px"}} />
    <div className='container text-center text-white mt-5 px-4'>
         <h1 style={{fontSize: "75px"}}>Have Questions? Get Answers. <br /> Schedule an Introduction.</h1>
         <button className='bg-pink text-white fs-4 px-5 py-2 me-4 mt-4 border-0 rounded rounded-4'>Contact Us</button>
         <button className='bg-pink text-white fs-4 px-5 py-2 me-4 mt-4 border-0 rounded rounded-4'>See our FAQ</button>
    </div>
    </>
  )
}
