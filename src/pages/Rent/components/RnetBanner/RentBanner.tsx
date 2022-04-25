import React from 'react';
import styles from './RentBanner.module.scss';

export default function RentBanner() {
  return (
    <div className={`${styles["buy-banner"]}`}>
      <h1>A PROACTIVE <br /> APPROACH TO RENTING </h1>
      <div className={`${styles["linear-gradian"]}`} />
    </div>
  )
}
