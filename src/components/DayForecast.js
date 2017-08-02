import React, { Component } from 'react';
import path from 'path'


const DayForecast = ({ forecast, unit }) => {
    let sevenDayForecast = () => (
        unit === "Celsius" ? forecast.map(({ maxTempC, icon, dateTimeISO, minTempC }, idx) => {
            return (
                <div key={idx} style={{border: "1px black solid" }}>
                  <h3 key={idx}>Date: {dateTimeISO}</h3>
                  <img src={require("../icons/" + icon)}/>
                  <h2 key={idx+5}> High: {maxTempC}<sup key={idx +5}>o</sup>C  </h2>
                  <h2 key={idx +2}> Low: {minTempC}<sup key={idx +2}>o</sup>C </h2>
                </div>
            )
        })
        : forecast.map(({ maxTempF, icon, dateTimeISO, minTempF }, idx) => {
            return (
                <div key={idx} style={{border: "1px black solid"}}>
                  <h3 key={idx}>Date: {dateTimeISO}</h3>
                  <img src={require("../icons/" + icon)}/>
                  <h2 key={idx+5}> High: {maxTempF}<sup key={idx +5}>o</sup>F  </h2>
                  <h2 key={idx +2}> Low: {minTempF}<sup key={idx +2}>o</sup>F </h2>
                </div>
            )
        })
    );
    return (<div style={{display: 'flex', flexDirection: 'row'}}> { sevenDayForecast() } </div>
    );
};

export default DayForecast;
