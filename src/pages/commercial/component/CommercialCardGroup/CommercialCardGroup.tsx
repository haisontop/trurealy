import React from 'react';
import style from './CommercialCardGroup.module.scss';

export default function CommercialCardGroup() {
  return (
    <div className={`${style["Commercial-Card-Group"]}`}>
        <div className={`${style['linear-gradient']}`} />
        <div className={`mx-auto ${style["carousel-div"]}`}>
           <h4>Meet a few of the Commercial Agents…</h4>
        </div>
    </div>
  )
}
