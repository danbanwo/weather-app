import React, { Component } from 'react';
import axios from 'axios';
import Conversion from './Conversion';
import DayForecast from './DayForecast';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            forecast: null,
            unit: "Celsius"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://api.aerisapi.com/forecasts/11101?client_id=ASK282ONrSXxdwV5BwaHz&client_secret=BIfJTc9EBnpFKArIPayPzhggJibEUEy3HaOMJgDW')
            .then(weather => {
                let { periods } = weather.data.response[0];
                this.setState({forecast: periods})
            });
    }

    handleClick() {
      let { unit } = this.state;
      let conversion = unit === "Celsius" ? "Fahrenheit" : "Celsius";
      this.setState({unit: conversion})
    }

    render() {
        let { forecast, unit } = this.state;
        return forecast ? (
          <div style={{maxWidth: "90vw", }}>
            <h1>Daniel's Weather App</h1>
            <Conversion unit={unit} handleClick={this.handleClick} />
            <DayForecast forecast={forecast} unit={unit} />
          </div>
        )
        : <h1>Loading...</h1>
    }
}
