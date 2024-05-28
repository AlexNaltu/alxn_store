import Image from "next/image";
import React from "react";

const BestFoodSection = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-pink-300/80 py-10 sm:flex-row sm:justify-center ">
        <Image src={"/japanese-man.svg"} alt="/" width={300} height={300} />
        <div className="text-4xl text-white lg:text-6xl">
          <h1>Best Japanese Food</h1>
          <p>On the Internet!</p>
        </div>
      </div>
    </>
  );
};

export default BestFoodSection;
