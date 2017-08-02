import React, { Component } from 'react';

const Conversion = ({unit, handleClick}) => {

  return <button style={{padding: "20px 45px"}} onClick={() => handleClick()}>Convert to {unit}</button>;
};

export default Conversion;
