import React from 'react';
import style from "./BuyBottom.module.scss";

export default function BuyBottom() {
  return (
    <div className={`${style["buy-bottom"]}`}>
        <h1>GET MATCHED WITH AN AGENT</h1>
        <div className='text-center'>
            <button className='mt-3 font-lighter text-white px-5 py-1 fs-4 bg-pink border-0'>FIND AN AGENT</button>
        </div>
    </div>
  )
}
