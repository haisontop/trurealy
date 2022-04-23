import React from 'react';
import style from './SellBanner.module.scss';

export default function SellBanner() {
  return (
    <div className={`${style["sell-banner"]}`}>
      <h1>A PROACTIVE <br /> APPROACH TO SELLING </h1>
      <div className={`${style["linear-gradian"]}`} />
    </div>
  )
}
