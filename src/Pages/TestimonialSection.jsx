import React from "react";
import Testimonial from "../Components/Testimonial";

function TestimonialSection() {
  const arr = [1, 2, 3, 4, ];
  return (
    
    <div className="marquee-container mb-14">
    <div className=" flex justify-around     gap-6 marquee  ">
      {arr.map((item) => (
        <div key={item} className=" ">
          <Testimonial />
        </div>
      ))}
    </div>
  </div>
  );
}

export default TestimonialSection;
