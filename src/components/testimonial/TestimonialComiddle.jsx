import React from 'react';
import AliceCarousel from "react-alice-carousel"
import Testimonialcocard from './TestimonialCocard';

const Testimonialcomiddle = () => {
    return (
        <div className='container mx-auto'>
            <AliceCarousel 
            renderKey={0}
            items={Testimonialcocard} 
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
    );
}

export default Testimonialcomiddle;
