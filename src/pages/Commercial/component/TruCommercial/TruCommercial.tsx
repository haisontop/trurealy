import React from 'react';
import style from "./TruCommercial.module.scss";

export default function TruCommercial() {
  return (
    <div className={`${style["tur-commercial"]}`}>
        <div className={`${style["linear-desing"]}`} />
        <div className={`bg-primary text-white ${style["slogun-div"]}`}>
         <h4>TRU COMMERCIAL – A DIVISION OF TRU</h4>
         <p className='mt-5'>Tru Commercial challenges the industry norms to create an alternative way to buy and sell commercial real estate in Arizona that better serves both clients and brokers.</p>
         <p className='mt-5'>
         With a wide array of advanced technology tools coupled with Tru Realty’s own network of wholesale buyers, the Tru Commercial team provides an outstanding real estate experience to business professionals. Our experts guide you through key negotiations to make the best decisions possible to help you exceed your real estate goals.
         </p>
        </div>
    </div>
  )
}
