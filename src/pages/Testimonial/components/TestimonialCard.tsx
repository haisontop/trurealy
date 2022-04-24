import React from "react";
import style from "./Testimonial.module.scss";

interface ConsumerTestimonialCardProps {
  content: String;
}

const TestimonialCard = (props: ConsumerTestimonialCardProps) => {
  const handleDragStart = (e: any) => e.preventDefault();

  return (
    <div className={`container ${style["test-card"]}`}>
      <div className="row" onDragStart={handleDragStart}>
        <div className="col-sm">
          <img
            src="/assets/images/Group 34866.png"
            alt=""
            style={{ maxHeight: "700px", width: "100%" }}
          />
        </div>
        <div className="col-sm">
        <h1 className="fw-bold text-primary m-0">“</h1>
        <p className="text-primary ms-5 ps-4">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
