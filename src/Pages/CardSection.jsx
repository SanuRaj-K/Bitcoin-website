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
        <div className=" flex items-center flex-col md:flex-row justify-center w-full md:gap-5 sm:grid-cols-2  flex-wrap lg:justify-around  ">
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
