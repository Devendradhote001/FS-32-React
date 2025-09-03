import React from "react";

const Top = ({ name }) => {
  console.log("top rendering...")
  return (
    <div>
      <h1>me top hu - {name}</h1>
    </div>
  );
};

export default Top;
