import React from 'react';
import style from './BuyBanner.module.scss';

export default function BuyBanner() {
  return (
    <div className={`${style["buy-banner"]}`}>
      <h1>A PROACTIVE <br /> APPROACH TO BUYING </h1>
      <div className={`${style["linear-gradian"]}`} />
    </div>
  )
}
