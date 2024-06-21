import React from "react";
import Card from "../Components/Card";

function  CardSection() {
  const arr = [1, 2, 3];
  return (
    <div>
      <div className=" py-28 ">
        <div className=" text-white max-w-[650px] mx-auto text-center">
          <span className=" text-[35px] font-semibold ">
            Most Trusted Cryptocurrency Platform
          </span>
          <p className=" text-[#E9EDF8]  text-[20px] my-7  px-3 ">
            Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
            arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed
            purus .
          </p>
        </div>
        <div className=" md:flex justify-around sm:grid sm:grid-cols-1 md:grid-cols-2 ">
          {arr.map((item) => (
            <div key={item} className=" ">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
