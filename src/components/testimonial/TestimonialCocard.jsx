import React from 'react';

const Testimonialcocard = () => {
    const handleDragStart = (e) => e.preventDefault();
    const item = [
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
        {
            para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
            author: "- Jeff Goldblum"
        },
    ]
    return (
        <div>
            {
              item.map(itm => (
                  <div className='grid gird-cols-2' onDragStart={handleDragStart}>
                      <div>
                        <img src="/assets/Rectangle 3033.png" alt="" />
                      </div>
                      <div>
                        
                      </div>
                  </div>
              ))
          }
        </div>
    );
}

export default Testimonialcocard;
