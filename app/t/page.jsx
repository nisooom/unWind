import React from "react";
import Timer from "@/components/Timer";

const page = () => {
  return (
    <div>
      <Timer time={100} type="classic" mood="angry" />
    </div>
  );
};

export default page;
