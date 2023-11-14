import React from "react";
import bisto from "../../../../assets/home/chef-service.jpg";

const BistoText = () => {
  return (
    <div className="h-[90vh] w-full relative ">
      <img src={bisto} alt="" />
      <div className="max-w-5xl flex flex-col items-center justify-center mx-auto absolute top-20 left-28 bg-white h-[240.667px] ">
        <p className="w-96 text-6xl text-center uppercase">Bistro Boss</p>
        <p className="w-3/5 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ab, sunt amet laboriosam nostrum quae? Doloribus quibusdam error architecto consequatur!</p>
      </div>
    </div>
  );
};

export default BistoText;
