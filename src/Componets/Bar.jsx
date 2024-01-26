import React from "react";
import "./Bar.css";

const Bar = ({ percentage }) => {
  return (

    <div className="wrapper">
      <div
      className="inner"
        style={{
          width: `${percentage}%`,
          height: "40px",
          backgroundColor: "red",
          
        }}
      ></div>
    </div>
  );
};

export default Bar;
