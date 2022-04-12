import React from 'react';
import styles from './AboutDefference.module.scss';

const AboutDefference = () => {
    const service = ["Innovative", "Helpful", "Tech Savvy", "Customer Centric", "Driverse", "Passionate", "Accountable", "Long Term"];
    return (
        <div className={`${styles["ab-co-differrence"]} position-relative`}>
            <div className='container row mx-auto'>
                <div className='col-6'>
                      <img src="/assets/placeholder2.png" className={`img-fluid mx-5 ${styles["ab-co-d-img"]}`} width="70%" alt="" />
                </div>
                <div className='col-6 text-end' >
                  <h1 className='fs-1'>THE TRU DIFFERENCE</h1>
                  <p className='mt-4 fw-bold'>Unlike other real estate companies TRU is a diverse group of like minded, forward thinking, tech-centric, talented and tenacious individuals who believe in collaboration over competition. This belief allows us to provide an unparalleled buying and  selling experience. We invite you to join us for an exceptional real estate experience.</p>
                </div>
            </div>
            <div className={`${styles["about-defference-box"]} mt-5`}>
          <div className={`bg-primary ${styles['about-defference-child-box']} text-white p-4`}>
            <div className='row g-4'>
              {
                  service.map(sr =>(
                      <div className='col-3 text-center'>
                          <img src="/assets/Ellipse 18.png" className='img-fluid' width="35%" alt="" />
                          <p>{sr}</p>
                      </div>
                  ))
              }
            </div>
          </div>
        </div>
        </div>
    );
}

export default AboutDefference;
