import React from "react";
import Plus from "../Assets/Icons/plus-large_svgrepo.com.png";
function FAQ() {
  return (
    <div>
      <div className=" bg-[#3025252e] text-white rounded-md">
        <div className=" flex flex-col mx-auto  text-center max-w-[900px]">
          <span className=" text-[40px] font-semibold">
            Most Trusted Cryptocurrency Platform
          </span>
          <p className=" max-w-[500px] mx-auto text-[20px] px-4">
            Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
            arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed
            purus .
          </p>
        </div>
        <div className=" bg-[#5E767F] w-[90%] mx-auto rounded-lg ">
          <div className=" flex  items-center">
            <img src={Plus} alt="plus" />
            <span className=" ml-10 text-[22px] font-semibold">
              What is your favorite template from BRIX Templates?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
