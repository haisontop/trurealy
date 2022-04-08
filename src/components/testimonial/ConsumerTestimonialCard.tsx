import React from "react";

interface ConsumerTestimonialCardProps {
  content: String;
}

const ConsumerTestimonialCard = (props: ConsumerTestimonialCardProps) => {
  const handleDragStart = (e: any) => e.preventDefault();

  return (
    <div className="container">
      <div className="row" onDragStart={handleDragStart}>
        <div className="col-sm">
          <img
            src="/assets/Rectangle 3033.png"
            alt=""
            style={{ maxHeight: "700px", width: "100%" }}
          />
        </div>
        <div className="col-sm">{props.content}</div>
      </div>
    </div>
  );
};

export default ConsumerTestimonialCard;
