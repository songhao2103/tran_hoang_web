import React from "react";
import Common from "./components/Common";
import Statistics from "./components/Statistics";

const Informations = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <Common />
      <Statistics />
    </div>
  );
};

export default Informations;
