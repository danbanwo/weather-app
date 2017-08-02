import React, { Component } from 'react';

const Conversion = ({unit, handleClick}) => {

  return (
    <center>
      <button style={{padding: "20px 45px"}} onClick={() => handleClick()}>
        Convert to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
      </button>
    </center>
  );
};

export default Conversion;
