import React from "react";
import Testimonial from "../Components/Testimonial";

function TestimonialSection() {
  const arr = [1, 2, 3, 4, ];
  return (
    <div className=" flex justify-between flex-wrap mb-14">
      {arr.map((item) => (
        <div key={item}>
          <Testimonial />
        </div>
      ))}
    </div>
  );
}

export default TestimonialSection;
