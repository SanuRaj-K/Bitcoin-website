import React from "react";
function Card() {
  return (
    <div>
      <div className=" cursor-pointer bg-cardImage pb w-[350px] h-[500px] mb-5 object-fill rounded-2xl">
        <div className=" text-white flex flex-col text-center opacity-0 hover:opacity-100  pb-8  h-full justify-end">
          <span className=" font-semibold text-[20px]">Lorem Ipsum</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            reiciendis?
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
