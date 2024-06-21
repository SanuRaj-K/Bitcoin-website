import React, { useState } from "react";
import Plus from "../Assets/Icons/plus-large_svgrepo.com.png";
import Minus from "../Assets/Icons/minus_svgrepo.com.png";
function FAQ() {
  const arr = [1, 2, 3];
  const [show, setShow] = useState(null);
  const toggle = (index) => {
    setShow(show === index ? null : index);
  };
  return (
    <div>
      <div className=" bg-[#304046] mb-20 pb-12  text-white rounded-md">
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
        <div className=" bg-[#5E767F] w-[90%]  mt-8   text-black mx-auto rounded-lg ">
          {arr.map((item, index) => (
            <>
              <div key={index} onClick={() => toggle(index)}>
                <div className=" flex mb-8 cursor-pointer ml-6  items-center">
                  <img src={show === index ? Minus : Plus} alt="plus" />
                  <span className=" ml-10 sm:text-[22px] text-[15px] mt-4 font-medium">
                    What is your favorite template from BRIX Templates?
                  </span>
                </div>
                <div
                  className={`max-w-[850px] py-5  px-3 ${
                    show === index ? "block" : "hidden"
                  }`}
                >
                  Vitae congue eu consequat ac felis placerat vestibulum lectus
                  mauris ultrices. Cursus sit amet dictum sit amet justo donec
                  enim diam porttitor lacus luctus accumsan tortor posuere.
                </div>
              </div>
              <div className="  mx-[20px] bg-[#091C23] h-[1px]"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
