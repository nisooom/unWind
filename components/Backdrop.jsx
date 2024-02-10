import React from "react";

const Backdrop = () => {
  return (
    <div className="overflow-hidden text-white pl-40 w-full h-full absolute text-9xl">
      <div className="flex items-center justify-center h-full">
        {/* <h1>Backdrop</h1> */}
        <div className="absolute bottom-0 left-40 w-32 h-32 bg-accent rounded-full opacity-100"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full opacity-30"></div>
        <div className="absolute top-50 flex items-center justify-center w-96 h-96 bg-accent rounded-full opacity-20"></div>
        <div className="absolute backdrop-blur-3xl w-full h-full"></div>
      </div>
    </div>
  );
};

export default Backdrop;
