import React from 'react';
import './App.css';

class Weather extends React.Component {

  render() {
    // console.log(this.props.weatherData[0]);
    return (

      this.props.weatherData.map((day, idx) => (
        <>
        <div key={idx}>
          <li>{day.date}</li>
          <li>{day.description}</li>
        </div>
        </>
      ))
    );
  }
}

export default Weather;
