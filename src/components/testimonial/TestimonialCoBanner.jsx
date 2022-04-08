import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const Testimonialcobanner = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src="/assets/Rectangle 303.png" className='img-fluid' width="100%" onDragStart={handleDragStart} />,
        <img src="/assets/placeholder.png" className='img-fluid' width="100%" onDragStart={handleDragStart} />,
        <img src="/assets/Rectangle 303.png" className='img-fluid' width="100%" onDragStart={handleDragStart} />,
      ];
    return (
        <div className='container mx-auto overflow-hidden mt-5'>
            <div className='mb-5 mx-auto' style={{borderBottom: "2px solid black", width:"900px"}}>
                <h1 className='fs-1 fw-normal text-center text-black'>TRU AGENTS. TRU STORIES.</h1>
            </div>
            <div className='mx-auto' style={{width: "900px"}}>
               <AliceCarousel 
               renderKey={0}
               items={items} 
               disableButtonsControls={true}
               controlsStrategy="responsive"
               autoPlayInterval={20}
               animationType="slide"
               autoPlayDirection="ltr"
               responsive={{
                   0: {
                     items: 1,
                   },
                   1700: {
                     items: 1,
                   },
                 }}
               />
            </div>
        </div>
    );
}

export default Testimonialcobanner;
